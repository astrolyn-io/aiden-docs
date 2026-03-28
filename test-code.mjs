import { chromium } from 'playwright';

const BASE = 'http://localhost:3000';

const pages = [
  '/',
  '/getting-started/quickstart',
  '/getting-started/installation',
  '/guides/configuration',
  '/guides/providers',
  '/reference/cli',
  '/cookbook/ci-cd',
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  for (const path of pages) {
    const page = await context.newPage();
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 15000 });

    // Find all code blocks
    const codeBlocks = await page.locator('pre').evaluateAll((els) =>
      els.map((el, i) => {
        const code = el.querySelector('code');
        const styles = window.getComputedStyle(el);
        return {
          index: i,
          tag: el.tagName,
          hasCodeChild: !!code,
          codeClass: code?.className || '(none)',
          bgColor: styles.backgroundColor,
          color: styles.color,
          textSnippet: el.textContent?.trim().slice(0, 80),
          parentClass: el.className,
        };
      })
    );

    // Find inline code
    const inlineCode = await page.locator('code:not(pre code)').count();

    console.log(`\n=== ${path} ===`);
    console.log(`  Code blocks (pre): ${codeBlocks.length}, Inline code: ${inlineCode}`);

    for (const block of codeBlocks) {
      const styled = block.bgColor !== 'rgba(0, 0, 0, 0)' && block.bgColor !== 'transparent';
      console.log(`  [${styled ? 'STYLED' : 'RAW'}] <pre> bg=${block.bgColor} class="${block.parentClass}"`);
      console.log(`    code class: ${block.codeClass}`);
      console.log(`    text: "${block.textSnippet}"`);
    }

    await page.close();
  }

  await browser.close();
  process.exit(0);
}

run();
