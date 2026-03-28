import { chromium } from 'playwright';

const BASE = 'http://localhost:3001';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Test a page with many headings
  for (const path of ['/reference/cli', '/guides/modes', '/getting-started/quickstart']) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 15000 });

    console.log(`\n=== ${path} ===`);

    // All headings in main
    const headings = await page.locator('main h2, main h3').evaluateAll((els) =>
      els.map((el) => ({
        tag: el.tagName,
        id: el.id || '(none)',
        text: el.textContent?.trim().slice(0, 60),
      }))
    );
    console.log('\nHeadings in main:');
    for (const h of headings) {
      const marker = h.id === '(none)' ? 'NO ID' : 'OK';
      console.log(`  [${marker}] <${h.tag.toLowerCase()} id="${h.id}"> ${h.text}`);
    }

    // TOC content
    const tocLinks = await page.locator('nav[aria-label="Table of contents"] a').evaluateAll((els) =>
      els.map((el) => ({
        href: el.getAttribute('href'),
        text: el.textContent?.trim().slice(0, 60),
      }))
    );
    console.log('\nTOC links:');
    for (const l of tocLinks) {
      const marker = l.href && l.href.startsWith('#') && l.href.length > 1 ? 'OK' : 'EMPTY';
      console.log(`  [${marker}] ${l.href} — "${l.text}"`);
    }

    // Check: does the TOC update on navigation?
    console.log(`\nTOC count: ${tocLinks.length}`);
  }

  await browser.close();
  process.exit(0);
}

run();
