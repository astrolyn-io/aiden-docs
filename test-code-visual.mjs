import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';

async function run() {
  mkdirSync('screenshots', { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Screenshot homepage code block
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const homeTerminal = page.locator('.font-mono').first();
  if (await homeTerminal.count() > 0) {
    await homeTerminal.screenshot({ path: 'screenshots/code_home.png' });
    console.log('Home terminal screenshot saved');
  }

  // Screenshot a MDX page code block
  await page.goto(`${BASE}/getting-started/quickstart`, { waitUntil: 'networkidle' });
  const mdxPre = page.locator('pre').first();
  if (await mdxPre.count() > 0) {
    await mdxPre.screenshot({ path: 'screenshots/code_mdx_quickstart.png' });
    console.log('MDX quickstart code screenshot saved');
  }

  // Screenshot config page code block (yaml)
  await page.goto(`${BASE}/guides/configuration`, { waitUntil: 'networkidle' });
  const configPre = page.locator('pre').first();
  if (await configPre.count() > 0) {
    await configPre.screenshot({ path: 'screenshots/code_mdx_config.png' });
    console.log('MDX config code screenshot saved');
  }

  await browser.close();
}

run();
