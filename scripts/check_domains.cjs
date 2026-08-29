const dns = require('dns').promises;
const https = require('https');

const DOMAINS_TO_CHECK = [
    // Techcure Variants
    'techcure.in',
    'techcure.io',
    'techcure.dev',
    'techcure.co',
    'techcure.tech',
    'techcure.online',
    'techcurelabs.com',
    'techcurehq.com',
    'techcuresystems.com',
    'gettechcure.com',

    // CureStack
    'curestack.in',
    'curestack.io',
    'curestack.dev',
    'curestack.tech',
    'curestack.co',
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
    'velocix.tech',

    // Kinetiq / Kinetix
    'kinetiq.in',
    'kinetiq.dev',
    'kinetiqlabs.com',

    // CodeCure / ByteCure
    'codecure.in',
    'codecure.io',
    'codecure.dev',
    'bytecure.in',
    'bytecure.io',

    // Indian Fusion (VedaStack, SutraLabs, PravahTech, YantraForge)
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

async function checkDns(domain) {
    try {
        const res = await dns.resolve(domain);
        if (res && res.length > 0) {
            return { status: 'REGISTERED / ACTIVE', ips: res };
        }
    } catch (err) {
        if (err.code === 'ENOTFOUND' || err.code === 'ENODATA' || err.code === 'SERVFAIL') {
            // Check NS / SOA
            try {
                const ns = await dns.resolveNs(domain);
                if (ns && ns.length > 0) return { status: 'REGISTERED (Has NS records)', ns };
            } catch (nsErr) {
                try {
                    const soa = await dns.resolveSoa(domain);
                    // If SOA returned with nxdomain it might be available
                    return { status: 'POTENTIALLY AVAILABLE', detail: 'No DNS/NS records' };
                } catch (soaErr) {
                    return { status: 'LIKELY AVAILABLE', detail: 'NXDOMAIN' };
                }
            }
        }
    }
    return { status: 'UNKNOWN' };
}

// Query RDAP for accurate registration status
async function checkRdap(domain) {
    const tld = domain.split('.').pop();
    let rdapUrl = `https://rdap.org/domain/${domain}`;
    
    return new Promise((resolve) => {
        https.get(rdapUrl, { timeout: 4000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 404) {
                resolve({ available: true, status: 'AVAILABLE (RDAP 404 Not Found)' });
            } else if (res.statusCode === 200 || res.statusCode === 302 || res.statusCode === 301) {
                resolve({ available: false, status: 'TAKEN / REGISTERED' });
            } else {
                resolve({ available: null, status: `HTTP ${res.statusCode}` });
            }
        }).on('error', () => {
            resolve({ available: null, status: 'RDAP Timeout' });
        });
    });
}

async function runAudit() {
    console.log('-------------------------------------------------------------');
    console.log('REAL-TIME DOMAIN AVAILABILITY AUDIT (DNS + RDAP)');
    console.log('-------------------------------------------------------------\n');

    const results = [];

    for (const domain of DOMAINS_TO_CHECK) {
        const dnsResult = await checkDns(domain);
        const rdapResult = await checkRdap(domain);
        
        let isFree = false;
        let summaryStatus = '';

        if (rdapResult.available === true && dnsResult.status.includes('AVAILABLE')) {
            isFree = true;
            summaryStatus = '✅ HIGHLY LIKELY AVAILABLE';
        } else if (rdapResult.available === false || dnsResult.status.includes('REGISTERED')) {
            isFree = false;
            summaryStatus = '❌ TAKEN';
        } else if (dnsResult.status.includes('AVAILABLE')) {
            isFree = true;
            summaryStatus = '⚡ PROBABLY AVAILABLE (No Active DNS)';
        } else {
            summaryStatus = '⚠️ UNKNOWN / CHECK REGISTRAR';
        }

        console.log(`${domain.padEnd(24)} | ${summaryStatus.padEnd(30)} | DNS: ${dnsResult.status}`);
        results.push({ domain, isFree, summaryStatus, dns: dnsResult.status });
    }

    console.log('\n-------------------------------------------------------------');
    console.log('SUMMARY OF TOP AVAILABLE DOMAINS:');
    console.log('-------------------------------------------------------------');
    results.filter(r => r.isFree).forEach(r => {
        console.log(`⭐ ${r.domain.padEnd(24)} -> ${r.summaryStatus}`);
    });
}

runAudit();
