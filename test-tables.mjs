import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Test migration-bmad table rendering
  await page.goto('http://localhost:3000/cookbook/migration-bmad', { waitUntil: 'networkidle', timeout: 15000 });

  // Check if tables are rendered as HTML tables
  const tableCount = await page.locator('table').count();
  console.log(`Tables found: ${tableCount}`);

  // Check if content is in raw pipe format (bad rendering)
  const bodyText = await page.locator('main').innerText();
  const pipeLines = bodyText.split('\n').filter(l => l.includes('|---'));
  console.log(`Raw pipe separator lines: ${pipeLines.length} (should be 0)`);

  if (pipeLines.length > 0) {
    console.log('WARNING: Tables are rendering as raw markdown, not HTML tables');
    for (const l of pipeLines) console.log(`  > ${l}`);
  }

  // Screenshot zoomed on table area
  const firstTable = page.locator('table').first();
  if (await firstTable.count() > 0) {
    await firstTable.screenshot({ path: 'screenshots/table_detail.png' });
    console.log('Table screenshot saved to screenshots/table_detail.png');
  } else {
    console.log('No <table> element found — checking for raw markdown rendering...');
    // Take a crop of the area where table should be
    await page.screenshot({ path: 'screenshots/table_area.png', clip: { x: 250, y: 150, width: 900, height: 400 } });
    console.log('Table area screenshot saved');
  }

  // Also test reference/config which has skill.yaml table
  await page.goto('http://localhost:3000/reference/config', { waitUntil: 'networkidle', timeout: 15000 });
  const configTables = await page.locator('table').count();
  console.log(`\nConfig page tables found: ${configTables}`);

  await page.screenshot({ path: 'screenshots/reference_config.png', fullPage: true });

  // Test guides/skills page
  await page.goto('http://localhost:3000/guides/skills', { waitUntil: 'networkidle', timeout: 15000 });
  const skillsTables = await page.locator('table').count();
  console.log(`Skills page tables found: ${skillsTables}`);

  await page.screenshot({ path: 'screenshots/guides_skills.png', fullPage: true });

  await browser.close();
}

run();
