const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/usr/bin/google-chrome';
const OUTPUT_DIR = path.join(__dirname, '../public/previews');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const SITES = [
    { id: 'inkleaf', name: 'inkleaf.png', url: 'https://inkleaf.online/' },
    { id: 'mathsheet', name: 'mathsheet.png', url: 'https://mathsheet.pages.dev/' },
    { id: 'wicom', name: 'wicom.png', url: 'https://wicom.in' },
    { id: 'snpeetham-jyotish', name: 'snpeetham-jyotish.png', url: 'https://snpeethamayodhya.org/build' },
    { id: 'snpeetham-ngo', name: 'snpeetham-ngo.png', url: 'https://snpeethamayodhya.org' },
    { id: 'goshuttles', name: 'goshuttles.png', url: 'https://www.goshuttles.in/' },
    { id: 'goayodhya', name: 'goayodhya.png', url: 'https://goayodhya.org/' }
];

async function captureSiteWithFullAnimationWait(browser, site) {
    console.log(`\n========================================`);
    console.log(`Starting thorough capture for: ${site.url}`);
    const page = await browser.newPage();
    const destPath = path.join(OUTPUT_DIR, site.name);

    try {
        await page.setViewport({
            width: 1440,
            height: 900,
            deviceScaleFactor: 1.5
        });

        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');

        await page.goto(site.url, {
            waitUntil: ['networkidle2', 'domcontentloaded'],
            timeout: 60000
        });

        // Wait initial 3 seconds for client hydration
        await new Promise(r => setTimeout(r, 3000));

        // Step-by-step real viewport scrolling to trigger every single IntersectionObserver and Framer Motion animation
        console.log(`[${site.id}] Scrolling slowly down to trigger all viewport animations...`);
        const totalHeight = await page.evaluate(async () => {
            const getDocHeight = () => Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight
            );

            let currentPos = 0;
            const stepSize = 300; // Small 300px steps
            const maxScroll = Math.min(getDocHeight(), 12000);

            while (currentPos < maxScroll) {
                currentPos += stepSize;
                window.scrollTo(0, currentPos);
                await new Promise(r => setTimeout(r, 120)); // Give time for Framer Motion / AOS to trigger
            }

            // Scroll to extreme bottom
            window.scrollTo(0, getDocHeight());
            await new Promise(r => setTimeout(r, 1500));

            // Force reveal any stuck opacity:0 elements caused by incomplete viewport triggers
            const style = document.createElement('style');
            style.innerHTML = `
                * {
                    animation-duration: 0.001s !important;
                    transition-duration: 0.001s !important;
                }
            `;
            document.head.appendChild(style);

            // Scroll back to top
            window.scrollTo(0, 0);
            await new Promise(r => setTimeout(r, 1500));

            return getDocHeight();
        });

        console.log(`[${site.id}] Total computed page height: ${totalHeight}px`);
        await new Promise(r => setTimeout(r, 2000));

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

async function runAll() {
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--window-size=1440,900',
            '--hide-scrollbars'
        ]
    });

    for (const site of SITES) {
        await captureSiteWithFullAnimationWait(browser, site);
    }

    await browser.close();
    console.log('\nALL SITES CAPTURED WITH FULL ANIMATION & VIEWPORT FLUSHING!');
}

runAll().catch(console.error);
