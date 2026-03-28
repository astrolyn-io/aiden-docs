import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';

const pages = [
  '/',
  '/getting-started/installation',
  '/getting-started/quickstart',
  '/getting-started/first-feature',
  '/guides/modes',
  '/guides/agents',
  '/guides/providers',
  '/guides/providers/claude-code',
  '/guides/providers/gemini',
  '/guides/providers/opencode',
  '/guides/providers/copilot',
  '/guides/providers/custom-api',
  '/guides/configuration',
  '/guides/rules-and-templates',
  '/guides/skills',
  '/guides/troubleshooting',
  '/reference/cli',
  '/reference/config',
  '/reference/artefacts',
  '/reference/glossary',
  '/cookbook/brownfield',
  '/cookbook/team',
  '/cookbook/ci-cd',
  '/cookbook/migration-bmad',
];

async function run() {
  mkdirSync('screenshots', { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  let passed = 0;
  let failed = 0;
  const errors = [];

  for (const path of pages) {
    const page = await context.newPage();
    const url = `${BASE}${path}`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      const status = response?.status() ?? 0;

      if (status !== 200) {
        failed++;
        errors.push(`${path} — HTTP ${status}`);
        console.log(`  FAIL  ${path} — HTTP ${status}`);
      } else {
        // Check page has content
        const h1 = await page.locator('h1').first().textContent().catch(() => null);
        const bodyText = await page.locator('body').innerText();

        if (bodyText.length < 50) {
          failed++;
          errors.push(`${path} — page appears empty`);
          console.log(`  FAIL  ${path} — page appears empty`);
        } else {
          passed++;
          console.log(`  OK    ${path}${h1 ? ` — "${h1.trim().slice(0, 50)}"` : ''}`);
        }
      }

      // Take screenshot for specific page
      const slug = path === '/' ? 'home' : path.replace(/\//g, '_').slice(1);
      await page.screenshot({ path: `screenshots/${slug}.png`, fullPage: true });
    } catch (err) {
      failed++;
      errors.push(`${path} — ${err.message}`);
      console.log(`  FAIL  ${path} — ${err.message.slice(0, 80)}`);
    }
    await page.close();
  }

  // Dark mode screenshot of migration-bmad
  const darkPage = await context.newPage();
  await darkPage.goto(`${BASE}/cookbook/migration-bmad`, { waitUntil: 'networkidle', timeout: 15000 });
  await darkPage.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await darkPage.waitForTimeout(500);
  await darkPage.screenshot({ path: 'screenshots/migration-bmad_dark.png', fullPage: true });
  await darkPage.close();

  await browser.close();

  console.log(`\n--- Results ---`);
  console.log(`Passed: ${passed}/${pages.length}`);
  console.log(`Failed: ${failed}/${pages.length}`);
  if (errors.length > 0) {
    console.log(`\nErrors:`);
    for (const e of errors) console.log(`  - ${e}`);
  }

  process.exit(failed > 0 ? 1 : 0);
}

run();
