import { chromium } from 'playwright';

const BASE = 'http://localhost:3001';

const testPages = [
  '/guides/modes',
  '/guides/agents',
  '/guides/configuration',
  '/reference/cli',
  '/getting-started/quickstart',
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  let passed = 0;
  let failed = 0;

  for (const path of testPages) {
    const page = await context.newPage();
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 15000 });

    // Count headings in main content
    const mainHeadings = await page.locator('main h2, main h3').evaluateAll((els) =>
      els.map((el) => ({ tag: el.tagName, id: el.id, text: el.textContent?.trim().slice(0, 50) }))
    );

    // Count headings with actual IDs
    const withIds = mainHeadings.filter((h) => h.id && h.id.length > 0);

    // Check TOC nav
    const tocNav = page.locator('nav[aria-label="Table of contents"]');
    const tocExists = (await tocNav.count()) > 0;
    const tocLinks = tocExists
      ? await tocNav.locator('a').evaluateAll((els) =>
          els.map((el) => ({ href: el.getAttribute('href'), text: el.textContent?.trim().slice(0, 50) }))
        )
      : [];

    const tocLinksWithHash = tocLinks.filter((l) => l.href && l.href.startsWith('#') && l.href.length > 1);

    // Verify TOC links point to existing IDs
    let brokenLinks = 0;
    for (const link of tocLinksWithHash) {
      const targetId = link.href.slice(1);
      const exists = await page.locator(`[id="${targetId}"]`).count();
      if (exists === 0) brokenLinks++;
    }

    const status = withIds.length > 0 && tocLinksWithHash.length > 0 && brokenLinks === 0;

    console.log(`\n${status ? 'OK' : 'FAIL'}  ${path}`);
    console.log(`  Headings: ${mainHeadings.length} total, ${withIds.length} with id`);
    console.log(`  TOC: ${tocExists ? 'present' : 'MISSING'}, ${tocLinks.length} links, ${tocLinksWithHash.length} with #hash`);
    if (brokenLinks > 0) console.log(`  Broken TOC links: ${brokenLinks}`);

    if (!status) {
      failed++;
      if (withIds.length === 0 && mainHeadings.length > 0) {
        console.log('  >> Headings found but NONE have IDs — MDX not generating anchors');
        console.log('  Sample headings:', mainHeadings.slice(0, 3));
      }
      if (tocLinksWithHash.length === 0 && tocExists) {
        console.log('  >> TOC exists but has no valid links — headings have no IDs to link to');
      }
    } else {
      passed++;
    }

    await page.close();
  }

  console.log(`\n--- Results ---`);
  console.log(`Passed: ${passed}/${testPages.length}`);
  console.log(`Failed: ${failed}/${testPages.length}`);
  process.exit(failed > 0 ? 1 : 0);
}

run();
