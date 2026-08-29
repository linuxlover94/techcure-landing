const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/usr/bin/google-chrome';
const OUTPUT_DIR = path.join(__dirname, '../public/previews');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const SITES = [
    {
        name: 'inkleaf.png',
        url: 'https://inkleaf.online/',
        timeout: 30000
    },
    {
        name: 'mathsheet.png',
        url: 'https://mathsheet.pages.dev/',
        timeout: 30000
    },
    {
        name: 'wicom.png',
        url: 'https://wicom.in',
        timeout: 35000
    },
    {
        name: 'snpeetham-jyotish.png',
        url: 'https://snpeethamayodhya.org/build',
        timeout: 35000
    },
    {
        name: 'snpeetham-ngo.png',
        url: 'https://snpeethamayodhya.org',
        timeout: 35000
    },
    {
        name: 'goshuttles.png',
        url: 'https://www.goshuttles.in/',
        timeout: 35000
    },
    {
        name: 'goayodhya.png',
        url: 'https://goayodhya.org/',
        timeout: 35000
    }
];

async function captureScreenshots() {
    console.log('Launching Headless Chrome at:', CHROME_PATH);
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--window-size=1440,900'
        ]
    });

    for (const site of SITES) {
        const destPath = path.join(OUTPUT_DIR, site.name);
        console.log(`\nCapturing full-page desktop screenshot for: ${site.url} -> ${site.name}`);
        const page = await browser.newPage();
        try {
            await page.setViewport({
                width: 1440,
                height: 900,
                deviceScaleFactor: 1.2
            });

            // Set desktop User-Agent
            await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

            await page.goto(site.url, {
                waitUntil: ['domcontentloaded', 'networkidle2'],
                timeout: site.timeout
            });

            // Wait a brief moment for fonts and render animations
            await new Promise(r => setTimeout(r, 2500));

            await page.screenshot({
                path: destPath,
                fullPage: true,
                type: 'png'
            });

            const stat = fs.statSync(destPath);
            console.log(`✓ Saved ${site.name} (${Math.round(stat.size / 1024)} KB)`);
        } catch (err) {
            console.error(`✗ Error capturing ${site.url}:`, err.message);
            // Fallback: take viewport screenshot if fullpage times out
            try {
                await page.screenshot({ path: destPath, fullPage: false, type: 'png' });
                console.log(`✓ Saved fallback viewport screenshot for ${site.name}`);
            } catch (e) {
                console.error(`✗ Complete failure for ${site.name}:`, e.message);
            }
        } finally {
            await page.close();
        }
    }

    await browser.close();
    console.log('\nAll live captures completed!');
}

captureScreenshots().catch(console.error);
