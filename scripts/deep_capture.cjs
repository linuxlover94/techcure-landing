const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/usr/bin/google-chrome';
const OUTPUT_DIR = path.join(__dirname, '../public/previews');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const SITES = [
    {
        id: 'inkleaf',
        name: 'inkleaf.png',
        url: 'https://inkleaf.online/',
        setup: async (page) => {
            // Inkleaf is a markdown editor - give it time to load sample document and fonts
            await new Promise(r => setTimeout(r, 3000));
        }
    },
    {
        id: 'mathsheet',
        name: 'mathsheet.png',
        url: 'https://mathsheet.pages.dev/',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 2000));
        }
    },
    {
        id: 'wicom',
        name: 'wicom.png',
        url: 'https://wicom.in',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 3000));
        }
    },
    {
        id: 'snpeetham-jyotish',
        name: 'snpeetham-jyotish.png',
        url: 'https://snpeethamayodhya.org/build',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 3000));
        }
    },
    {
        id: 'snpeetham-ngo',
        name: 'snpeetham-ngo.png',
        url: 'https://snpeethamayodhya.org',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 3000));
        }
    },
    {
        id: 'goshuttles',
        name: 'goshuttles.png',
        url: 'https://www.goshuttles.in/',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 3000));
        }
    },
    {
        id: 'goayodhya',
        name: 'goayodhya.png',
        url: 'https://goayodhya.org/',
        setup: async (page) => {
            await new Promise(r => setTimeout(r, 3000));
        }
    }
];

// Helper to smooth scroll and trigger lazy loaders
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 400;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight || totalHeight > 10000) {
                    clearInterval(timer);
                    window.scrollTo(0, 0); // Scroll back to top
                    setTimeout(resolve, 1000);
                }
            }, 100);
        });
    });
}

async function runDeepCapture() {
    console.log('--- STARTING DEEP SCREENSHOT CAPTURE WITH RETINA 2X AND LAZY LOAD TRIGGER ---');
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--window-size=1440,1080',
            '--hide-scrollbars'
        ]
    });

    for (const site of SITES) {
        const destPath = path.join(OUTPUT_DIR, site.name);
        console.log(`\n[${site.id}] Fetching: ${site.url}...`);
        const page = await browser.newPage();
        try {
            await page.setViewport({
                width: 1440,
                height: 900,
                deviceScaleFactor: 1.5
            });

            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');

            await page.goto(site.url, {
                waitUntil: ['networkidle2', 'domcontentloaded'],
                timeout: 45000
            });

            if (site.setup) {
                await site.setup(page);
            }

            // Trigger lazy loading
            console.log(`[${site.id}] Auto-scrolling to trigger lazy components...`);
            await autoScroll(page);

            // Wait for fonts & rendering
            await page.evaluate(async () => {
                if (document.fonts) {
                    await document.fonts.ready;
                }
            });

            await new Promise(r => setTimeout(r, 1500));

            // Capture full-page screenshot
            await page.screenshot({
                path: destPath,
                fullPage: true,
                type: 'png'
            });

            const stat = fs.statSync(destPath);
            console.log(`✓ SUCCESS [${site.id}]: Saved ${site.name} (${Math.round(stat.size / 1024)} KB)`);
        } catch (err) {
            console.error(`✗ Error on [${site.id}]:`, err.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    console.log('\n--- ALL DEEP CAPTURES COMPLETED ---');
}

runDeepCapture().catch(console.error);
