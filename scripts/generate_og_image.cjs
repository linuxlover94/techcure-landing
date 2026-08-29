const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/usr/bin/google-chrome';
const OUTPUT_PATH = path.join(__dirname, '../public/og-image.png');

async function generateOgImage() {
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                width: 1200px;
                height: 630px;
                background-color: #09090b;
                background-image: 
                    radial-gradient(circle at 80% 20%, rgba(0, 240, 255, 0.15), transparent 40%),
                    radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.15), transparent 40%),
                    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 70px 80px;
                color: #ffffff;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .header {
                display: flex;
                align-items: center;
                gap: 16px;
            }
            .logo-icon {
                width: 48px;
                height: 48px;
                background: #00F0FF;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 24px rgba(0, 240, 255, 0.4);
            }
            .logo-text {
                font-size: 32px;
                font-weight: 900;
                letter-spacing: -1px;
            }
            .badge {
                font-family: monospace;
                font-size: 13px;
                color: #00F0FF;
                background: rgba(0, 240, 255, 0.1);
                border: 1px solid rgba(0, 240, 255, 0.3);
                padding: 6px 14px;
                border-radius: 999px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-left: auto;
            }
            .main {
                margin: 40px 0;
            }
            h1 {
                font-size: 58px;
                font-weight: 800;
                line-height: 1.1;
                letter-spacing: -1.5px;
                margin-bottom: 20px;
            }
            h1 span {
                background: linear-gradient(135deg, #00F0FF 0%, #A855F7 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            p {
                font-size: 22px;
                color: #a1a1aa;
                line-height: 1.4;
                max-width: 850px;
            }
            .footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                padding-top: 24px;
                font-family: monospace;
                font-size: 14px;
                color: #71717a;
            }
            .stats {
                display: flex;
                gap: 28px;
            }
            .stat-val {
                color: #ffffff;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            </div>
            <div class="logo-text">TECHCURE</div>
            <div class="badge">Digital Dominance</div>
        </div>

        <div class="main">
            <h1>HIGH-VELOCITY <span>WEB ARCHITECTURE</span></h1>
            <p>We engineer custom high-throughput SaaS platforms, zero-knowledge cryptographic vaults, and mission-critical cloud applications.</p>
        </div>

        <div class="footer">
            <div class="stats">
                <div>SPEED: <span class="stat-val">&lt; 300ms FCP</span></div>
                <div>SECURITY: <span class="stat-val">AES-256 GCM</span></div>
                <div>SCALE: <span class="stat-val">Edge Infinite</span></div>
            </div>
            <div>techcure.in</div>
        </div>
    </body>
    </html>
    `;

    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: OUTPUT_PATH, type: 'png' });
    await browser.close();
    console.log('✓ Generated public/og-image.png (1200x630)');
}

generateOgImage().catch(console.error);
