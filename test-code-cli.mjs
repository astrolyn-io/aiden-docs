import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';

async function run() {
  mkdirSync('screenshots', { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Reference CLI page — has bare commands without $
  await page.goto(`${BASE}/reference/cli`, { waitUntil: 'networkidle' });
  const pre1 = page.locator('pre').nth(0);
  const pre2 = page.locator('pre').nth(4);
  await pre1.screenshot({ path: 'screenshots/code_cli_1.png' });
  await pre2.screenshot({ path: 'screenshots/code_cli_2.png' });
  console.log('CLI screenshots saved');

  // Rules page
  await page.goto(`${BASE}/guides/rules-and-templates`, { waitUntil: 'networkidle' });
  const preRules = page.locator('pre').nth(0);
  await preRules.screenshot({ path: 'screenshots/code_rules.png' });
  console.log('Rules screenshot saved');

  await browser.close();
}

run();
