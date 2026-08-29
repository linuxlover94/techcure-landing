const https = require('https');

const DOMAINS_TO_TEST = [
    // Techcure Variants
    'techcure.in',
    'techcure.io',
    'techcure.dev',
    'techcure.tech',
    'techcure.online',
    'techcure.co',
    'techcurelabs.com',
    'techcurehq.com',
    'techcuresystems.com',
    'gettechcure.com',

    // CureStack
    'curestack.in',
    'curestack.io',
    'curestack.dev',
    'curestack.tech',
    'curestacklabs.com',

    // VoltStack / VoltForge
    'voltstack.in',
    'voltstack.io',
    'voltstack.dev',
    'voltforge.in',
    'voltforge.io',
    'voltforge.dev',

    // Velocix
    'velocix.in',
    'velocix.io',
    'velocix.dev',

    // Kinetiq / Kinetix
    'kinetiq.in',
    'kinetiq.dev',
    'kinetiqlabs.com',

    // CodeCure / ByteCure
    'codecure.in',
    'codecure.io',
    'bytecure.in',
    'bytecure.io',

    // Indian Fusion
    'vedastack.in',
    'vedastack.io',
    'vedastack.dev',
    'sutralabs.in',
    'sutralabs.io',
    'pravahtech.in',
    'pravahstack.in',
    'yantraforge.in',
    'yantralabs.in',

    // StackForge / ZeroBloat
    'stackforge.in',
    'stackforge.dev',
    'zerobloat.in',
    'zerobloat.dev'
];

function checkDoH(domain) {
    return new Promise((resolve) => {
        const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=NS`;
        const req = https.get(url, {
            headers: { 'Accept': 'application/dns-json' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    // Status 3 = NXDOMAIN (Domain does not exist / Available)
                    // Status 0 = NOERROR (Domain exists / Taken)
                    if (json.Status === 3) {
                        resolve({ domain, status: 'AVAILABLE', isFree: true, detail: 'NXDOMAIN' });
                    } else if (json.Status === 0 && json.Answer && json.Answer.length > 0) {
                        resolve({ domain, status: 'TAKEN (Active NS)', isFree: false, detail: json.Answer.map(a => a.data).join(', ') });
                    } else if (json.Status === 0) {
                        // Check SOA to confirm
                        resolve({ domain, status: 'TAKEN (Registered)', isFree: false, detail: 'Registered with Registry' });
                    } else {
                        resolve({ domain, status: `Status ${json.Status}`, isFree: null });
                    }
                } catch (e) {
                    resolve({ domain, status: 'PARSE ERROR', isFree: null });
                }
            });
        });

        req.on('error', () => {
            resolve({ domain, status: 'NET ERROR', isFree: null });
        });
        req.setTimeout(4000, () => {
            req.destroy();
            resolve({ domain, status: 'TIMEOUT', isFree: null });
        });
    });
}

async function run() {
    console.log('========================================================================');
    console.log('CLOUDFLARE DNS-OVER-HTTPS (DoH) OFFICIAL ROOT REGISTRATION AUDIT');
    console.log('========================================================================\n');

    const available = [];
    const taken = [];

    for (const domain of DOMAINS_TO_TEST) {
        const res = await checkDoH(domain);
        if (res.isFree === true) {
            console.log(`✅ [AVAILABLE]    ${domain.padEnd(24)} (NXDOMAIN - No owner registered)`);
            available.push(domain);
        } else if (res.isFree === false) {
            console.log(`❌ [TAKEN]        ${domain.padEnd(24)} (${res.detail})`);
            taken.push(domain);
        } else {
            console.log(`⚠️ [CHECK REG]    ${domain.padEnd(24)} (${res.status})`);
        }
        await new Promise(r => setTimeout(r, 60));
    }

    console.log('\n========================================================================');
    console.log(`🎉 READY-TO-REGISTER / AVAILABLE DOMAINS (${available.length}):`);
    console.log('========================================================================');
    available.forEach(d => console.log(`👉 https://domains.google / Namecheap / GoDaddy -> ${d}`));
}

run();
