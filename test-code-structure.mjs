import { chromium } from 'playwright';

const BASE = 'http://localhost:3000';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`${BASE}/getting-started/quickstart`, { waitUntil: 'networkidle' });

  // Check if CodeBlock component is rendering (it has a copy button)
  const copyButtons = await page.locator('button').evaluateAll((els) =>
    els.filter(el => el.textContent?.includes('Copier') || el.textContent?.includes('📋'))
      .map(el => ({ text: el.textContent, parent: el.parentElement?.className }))
  );
  console.log('Copy buttons found:', copyButtons.length, copyButtons);

  // Check the actual structure of pre elements
  const preStructure = await page.locator('pre').evaluateAll((els) =>
    els.slice(0, 3).map((el) => ({
      outerHTML: el.outerHTML.slice(0, 300),
      parentTag: el.parentElement?.tagName,
      parentClass: el.parentElement?.className?.slice(0, 100),
    }))
  );
  console.log('\nPre structure (first 3):');
  for (const p of preStructure) {
    console.log(`  parent: <${p.parentTag}> class="${p.parentClass}"`);
    console.log(`  html: ${p.outerHTML}`);
    console.log();
  }

  await browser.close();
}

run();
