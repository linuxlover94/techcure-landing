const net = require('net');

const WHOIS_SERVERS = {
    'in': 'whois.inregistry.net',
    'com': 'whois.verisign-grs.com',
    'net': 'whois.verisign-grs.com',
    'io': 'whois.nic.io',
    'dev': 'whois.nic.google',
    'tech': 'whois.nic.tech',
    'co': 'whois.nic.co',
    'online': 'whois.nic.online'
};

const DOMAINS_TO_TEST = [
    // Techcure Variants
    'techcure.in',
    'techcure.io',
    'techcure.dev',
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

function queryWhois(domain) {
    return new Promise((resolve) => {
        const parts = domain.split('.');
        const tld = parts[parts.length - 1];
        const server = WHOIS_SERVERS[tld];

        if (!server) {
            return resolve({ domain, status: 'UNSUPPORTED TLD', available: null });
        }

        const socket = new net.Socket();
        let response = '';

        socket.setTimeout(4000);

        socket.connect(43, server, () => {
            socket.write(domain + '\r\n');
        });

        socket.on('data', (data) => {
            response += data.toString();
        });

        socket.on('close', () => {
            const lower = response.toLowerCase();
            const isAvailable = 
                lower.includes('not found') || 
                lower.includes('no match') || 
                lower.includes('not registered') ||
                lower.includes('is free') ||
                lower.includes('domain not found') ||
                lower.includes('no data found');

            const isTaken = 
                lower.includes('domain name:') ||
                lower.includes('registry domain id:') ||
                lower.includes('creation date:') ||
                lower.includes('registrar:');

            if (isAvailable && !isTaken) {
                resolve({ domain, status: 'AVAILABLE', available: true });
            } else if (isTaken) {
                resolve({ domain, status: 'TAKEN', available: false });
            } else {
                resolve({ domain, status: 'UNKNOWN', available: null });
            }
        });

        socket.on('error', () => {
            resolve({ domain, status: 'SOCKET ERROR', available: null });
        });

        socket.on('timeout', () => {
            socket.destroy();
            resolve({ domain, status: 'TIMEOUT', available: null });
        });
    });
}

async function run() {
    console.log('===============================================================');
    console.log('AUTHORITATIVE REGISTRY WHOIS (PORT 43) AVAILABILITY REPORT');
    console.log('===============================================================\n');

    const availableDomains = [];
    const takenDomains = [];

    for (const domain of DOMAINS_TO_TEST) {
        const res = await queryWhois(domain);
        if (res.available === true) {
            console.log(`✅ AVAILABLE:   ${domain}`);
            availableDomains.push(domain);
        } else if (res.available === false) {
            console.log(`❌ TAKEN:       ${domain}`);
            takenDomains.push(domain);
        } else {
            console.log(`⚠️ CHECK:       ${domain} (${res.status})`);
        }
        await new Promise(r => setTimeout(r, 200)); // Respect registry rate limits
    }

    console.log('\n===============================================================');
    console.log(`🎉 AUTHORITATIVELY AVAILABLE DOMAINS (${availableDomains.length}):`);
    console.log('===============================================================');
    availableDomains.forEach(d => console.log(`👉 ${d}`));
}

run();
