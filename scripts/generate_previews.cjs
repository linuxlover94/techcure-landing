const fs = require("fs");
const path = require("path");

fs.mkdirSync(path.join(__dirname, "../public/previews"), { recursive: true });

function createSVG(title, subtitle, color, bgDark, contentGenerator) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="1200" height="1600">
  <defs>
    <linearGradient id="grad-${color.replace("#","")}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#111827" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="glow-${color.replace("#","")}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </linearGradient>
    <style>
      .font-sans { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
      .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="1600" fill="${bgDark ? "#090d16" : "#f8fafc"}"/>
  <rect width="1200" height="600" fill="url(#glow-${color.replace("#","")})"/>

  <!-- Top Navbar -->
  <rect width="1200" height="70" fill="${bgDark ? "#0d1322" : "#ffffff"}" opacity="0.95"/>
  <line x1="0" y1="70" x2="1200" y2="70" stroke="${bgDark ? "#1e293b" : "#e2e8f0"}" stroke-width="1"/>
  <circle cx="50" cy="35" r="14" fill="${color}"/>
  <text x="75" y="42" fill="${bgDark ? "#ffffff" : "#0f172a"}" font-size="20" font-weight="bold" class="font-sans">${title}</text>
  <rect x="750" y="22" width="70" height="26" rx="4" fill="${bgDark ? "#1e293b" : "#f1f5f9"}"/>
  <rect x="840" y="22" width="70" height="26" rx="4" fill="${bgDark ? "#1e293b" : "#f1f5f9"}"/>
  <rect x="930" y="22" width="70" height="26" rx="4" fill="${bgDark ? "#1e293b" : "#f1f5f9"}"/>
  <rect x="1030" y="18" width="120" height="34" rx="17" fill="${color}"/>
  <text x="1090" y="40" fill="#000000" font-size="13" font-weight="bold" text-anchor="middle" class="font-sans">LAUNCH APP</text>

  <!-- Custom Page Body Content -->
  ${contentGenerator(color, bgDark)}

  <!-- Footer Section -->
  <rect y="1450" width="1200" height="150" fill="${bgDark ? "#060911" : "#0f172a"}"/>
  <line x1="0" y1="1450" x2="1200" y2="1450" stroke="${bgDark ? "#1e293b" : "#334155"}" stroke-width="1"/>
  <circle cx="60" cy="1510" r="12" fill="${color}"/>
  <text x="85" y="1516" fill="#ffffff" font-size="18" font-weight="bold" class="font-sans">${title}</text>
  <text x="85" y="1540" fill="#94a3b8" font-size="13" class="font-sans">Engineered with high performance and zero telemetry • Verified Platform</text>
  <text x="1100" y="1525" fill="#64748b" font-size="13" text-anchor="end" class="font-mono">© 2026 Production Build</text>
</svg>`;
}

// 1. INKLEAF
fs.writeFileSync("public/previews/inkleaf.svg", createSVG("InkLeaf", "Military-Grade Markdown Vault", "#10b981", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="260" height="30" rx="15" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.4"/>
    <text x="130" y="20" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">🔒 AES-256-GCM ZERO-KNOWLEDGE</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Client-Side Encrypted</text>
    <text x="0" y="140" fill="#10b981" font-size="44" font-weight="bold" class="font-sans">Markdown &amp; Math Vault</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">100% Offline-First. KaTeX formulas, Mermaid diagrams, and private note vaults.</text>
  </g>

  <!-- Editor Mock Window -->
  <g transform="translate(60, 340)">
    <rect width="1080" height="520" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    <!-- Sidebar -->
    <rect width="240" height="520" rx="12" fill="#0f172a"/>
    <line x1="240" y1="0" x2="240" y2="520" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="40" fill="#64748b" font-size="12" font-weight="bold" class="font-mono">ENCRYPTED VAULT</text>
    <rect x="15" y="60" width="210" height="36" rx="6" fill="#10b981" fill-opacity="0.2"/>
    <text x="35" y="83" fill="#34d399" font-size="13" class="font-sans">📄 Quantum_Notes.md</text>
    <text x="35" y="125" fill="#94a3b8" font-size="13" class="font-sans">📄 Neural_Network_Math.md</text>
    <text x="35" y="165" fill="#94a3b8" font-size="13" class="font-sans">📄 Architecture_Specs.md</text>

    <!-- Editor Pane -->
    <rect x="240" y="0" width="420" height="520" fill="#0b1120"/>
    <text x="260" y="40" fill="#64748b" font-size="12" class="font-mono">MARKDOWN SOURCE</text>
    <text x="260" y="80" fill="#f87171" font-size="14" class="font-mono"># Quantum Cryptography</text>
    <text x="260" y="115" fill="#e2e8f0" font-size="13" class="font-mono">State vector formulation:</text>
    <text x="260" y="145" fill="#38bdf8" font-size="13" class="font-mono">$$ |\psi\rangle = \alpha |0\rangle + \beta |1\rangle $$</text>
    <text x="260" y="185" fill="#fbbf24" font-size="13" class="font-mono">\`\`\`mermaid</text>
    <text x="260" y="210" fill="#94a3b8" font-size="13" class="font-mono">graph TD; Alice--&gt;Bob;</text>
    <text x="260" y="235" fill="#fbbf24" font-size="13" class="font-mono">\`\`\`</text>

    <!-- Preview Pane -->
    <rect x="660" y="0" width="420" height="520" fill="#070b14"/>
    <line x1="660" y1="0" x2="660" y2="520" stroke="#1e293b" stroke-width="1"/>
    <text x="680" y="40" fill="#64748b" font-size="12" class="font-mono">LIVE COMPILED RENDER</text>
    <text x="680" y="80" fill="#ffffff" font-size="20" font-weight="bold" class="font-sans">Quantum Cryptography</text>
    <text x="680" y="115" fill="#94a3b8" font-size="14" class="font-sans">State vector formulation:</text>
    <rect x="680" y="130" width="380" height="46" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-opacity="0.3"/>
    <text x="870" y="158" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle" class="font-mono">|ψ⟩ = α|0⟩ + β|1⟩</text>
    
    <!-- Mermaid Flowchart Box -->
    <rect x="680" y="200" width="380" height="150" rx="8" fill="#0f172a" stroke="#334155"/>
    <circle cx="750" cy="275" r="30" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
    <text x="750" y="280" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle" class="font-sans">Alice</text>
    <line x1="785" y1="275" x2="945" y2="275" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
    <circle cx="980" cy="275" r="30" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8"/>
    <text x="980" y="280" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle" class="font-sans">Bob</text>
  </g>

  <!-- Feature Grid Lower Section -->
  <g transform="translate(60, 900)">
    <text x="0" y="30" fill="#ffffff" font-size="28" font-weight="bold" class="font-sans">Security Specs &amp; Architecture</text>
    <g transform="translate(0, 60)">
      <rect width="340" height="180" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <circle cx="40" cy="40" r="18" fill="#10b981" fill-opacity="0.2"/>
      <text x="40" y="45" fill="#10b981" font-size="14" text-anchor="middle">🔑</text>
      <text x="70" y="45" fill="#ffffff" font-size="16" font-weight="bold" class="font-sans">PBKDF2 + AES-GCM</text>
      <text x="25" y="85" fill="#94a3b8" font-size="13" class="font-sans">Keys derived client-side with 100,000 SHA-256 iterations. No plain text stored.</text>
    </g>
    <g transform="translate(370, 60)">
      <rect width="340" height="180" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <circle cx="40" cy="40" r="18" fill="#38bdf8" fill-opacity="0.2"/>
      <text x="40" y="45" fill="#38bdf8" font-size="14" text-anchor="middle">⚡</text>
      <text x="70" y="45" fill="#ffffff" font-size="16" font-weight="bold" class="font-sans">IndexedDB Engine</text>
      <text x="25" y="85" fill="#94a3b8" font-size="13" class="font-sans">Instant offline synchronization directly inside browser memory sandbox.</text>
    </g>
    <g transform="translate(740, 60)">
      <rect width="340" height="180" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <circle cx="40" cy="40" r="18" fill="#a855f7" fill-opacity="0.2"/>
      <text x="40" y="45" fill="#a855f7" font-size="14" text-anchor="middle">📊</text>
      <text x="70" y="45" fill="#ffffff" font-size="16" font-weight="bold" class="font-sans">KaTeX &amp; Mermaid</text>
      <text x="25" y="85" fill="#94a3b8" font-size="13" class="font-sans">Full scientific computing diagram and formula renderer with zero server delay.</text>
    </g>
  </g>
`));

// 2. RENTFLOW
fs.writeFileSync("public/previews/rentflow.svg", createSVG("RentFlow", "PropTech Management", "#00f0ff", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="240" height="30" rx="15" fill="#00f0ff" fill-opacity="0.15" stroke="#00f0ff" stroke-opacity="0.4"/>
    <text x="120" y="20" fill="#00f0ff" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">🏢 ALL-IN-ONE PROPTECH</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Next-Gen Property &amp;</text>
    <text x="0" y="140" fill="#00f0ff" font-size="44" font-weight="bold" class="font-sans">Tenant Rental OS</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Automated UPI rent collection, WhatsApp receipts, digital lease agreements &amp; analytics.</text>
  </g>

  <!-- Dashboard Preview -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Top Stat Cards -->
    <g transform="translate(30, 30)">
      <rect width="230" height="100" rx="8" fill="#131c2e" stroke="#1e293b"/>
      <text x="20" y="35" fill="#94a3b8" font-size="13" class="font-sans">TOTAL MONTHLY RENT</text>
      <text x="20" y="70" fill="#ffffff" font-size="26" font-weight="bold" class="font-sans">₹14,85,000</text>
      <text x="20" y="90" fill="#10b981" font-size="11" class="font-sans">↑ 98.4% Collected</text>
    </g>
    <g transform="translate(285, 30)">
      <rect width="230" height="100" rx="8" fill="#131c2e" stroke="#1e293b"/>
      <text x="20" y="35" fill="#94a3b8" font-size="13" class="font-sans">ACTIVE PROPERTIES</text>
      <text x="20" y="70" fill="#00f0ff" font-size="26" font-weight="bold" class="font-sans">42 Units</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11" class="font-sans">100% Occupancy</text>
    </g>
    <g transform="translate(540, 30)">
      <rect width="230" height="100" rx="8" fill="#131c2e" stroke="#1e293b"/>
      <text x="20" y="35" fill="#94a3b8" font-size="13" class="font-sans">WHATSAPP REMINDERS</text>
      <text x="20" y="70" fill="#10b981" font-size="26" font-weight="bold" class="font-sans">Automated</text>
      <text x="20" y="90" fill="#10b981" font-size="11" class="font-sans">✓ Sent via Cloud API</text>
    </g>
    <g transform="translate(795, 30)">
      <rect width="250" height="100" rx="8" fill="#131c2e" stroke="#1e293b"/>
      <text x="20" y="35" fill="#94a3b8" font-size="13" class="font-sans">MAINTENANCE TICKETS</text>
      <text x="20" y="70" fill="#fbbf24" font-size="26" font-weight="bold" class="font-sans">2 Pending</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11" class="font-sans">Avg resolution: 4.2h</text>
    </g>

    <!-- Table of Tenants -->
    <g transform="translate(30, 160)">
      <rect width="1020" height="340" rx="8" fill="#0f172a" stroke="#1e293b"/>
      <text x="25" y="35" fill="#ffffff" font-size="16" font-weight="bold" class="font-sans">Recent Tenant Rent Ledgers</text>
      
      <!-- Table Headers -->
      <rect x="20" y="55" width="980" height="35" fill="#1e293b"/>
      <text x="40" y="77" fill="#94a3b8" font-size="12" font-weight="bold" class="font-mono">TENANT NAME</text>
      <text x="280" y="77" fill="#94a3b8" font-size="12" font-weight="bold" class="font-mono">UNIT / PROPERTY</text>
      <text x="520" y="77" fill="#94a3b8" font-size="12" font-weight="bold" class="font-mono">AMOUNT</text>
      <text x="700" y="77" fill="#94a3b8" font-size="12" font-weight="bold" class="font-mono">PAYMENT MODE</text>
      <text x="890" y="77" fill="#94a3b8" font-size="12" font-weight="bold" class="font-mono">STATUS</text>

      <!-- Row 1 -->
      <text x="40" y="125" fill="#ffffff" font-size="13" class="font-sans">Aditya Sharma</text>
      <text x="280" y="125" fill="#94a3b8" font-size="13" class="font-sans">Flat 402, Tech Towers</text>
      <text x="520" y="125" fill="#ffffff" font-size="13" font-weight="bold" class="font-sans">₹35,000</text>
      <text x="700" y="125" fill="#94a3b8" font-size="13" class="font-sans">UPI AutoPay</text>
      <rect x="880" y="110" width="80" height="22" rx="11" fill="#10b981" fill-opacity="0.2"/>
      <text x="920" y="125" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">PAID</text>

      <!-- Row 2 -->
      <text x="40" y="175" fill="#ffffff" font-size="13" class="font-sans">Sneha Kapoor</text>
      <text x="280" y="175" fill="#94a3b8" font-size="13" class="font-sans">Villa 12, Green Enclave</text>
      <text x="520" y="175" fill="#ffffff" font-size="13" font-weight="bold" class="font-sans">₹65,000</text>
      <text x="700" y="175" fill="#94a3b8" font-size="13" class="font-sans">NetBanking</text>
      <rect x="880" y="160" width="80" height="22" rx="11" fill="#10b981" fill-opacity="0.2"/>
      <text x="920" y="175" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">PAID</text>

      <!-- Row 3 -->
      <text x="40" y="225" fill="#ffffff" font-size="13" class="font-sans">Vikas Verma</text>
      <text x="280" y="225" fill="#94a3b8" font-size="13" class="font-sans">Office 301, Cyber Heights</text>
      <text x="520" y="225" fill="#ffffff" font-size="13" font-weight="bold" class="font-sans">₹1,20,000</text>
      <text x="700" y="225" fill="#94a3b8" font-size="13" class="font-sans">NEFT Transfer</text>
      <rect x="880" y="210" width="80" height="22" rx="11" fill="#00f0ff" fill-opacity="0.2"/>
      <text x="920" y="225" fill="#00f0ff" font-size="11" font-weight="bold" text-anchor="middle">VERIFIED</text>
    </g>
  </g>

  <!-- Lower Architecture section -->
  <g transform="translate(60, 920)">
    <text x="0" y="30" fill="#ffffff" font-size="28" font-weight="bold" class="font-sans">Key Rental Automation Modules</text>
    <g transform="translate(0, 60)">
      <rect width="520" height="150" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <text x="25" y="40" fill="#00f0ff" font-size="18" font-weight="bold" class="font-sans">💬 WhatsApp Rent Concierge</text>
      <text x="25" y="75" fill="#94a3b8" font-size="14" class="font-sans">Instant automated invoice generation, payment confirmation receipts, and customized landlord alerts without third-party app installations.</text>
    </g>
    <g transform="translate(560, 60)">
      <rect width="520" height="150" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <text x="25" y="40" fill="#10b981" font-size="18" font-weight="bold" class="font-sans">📑 Digital Lease &amp; KYC Verification</text>
      <text x="25" y="75" fill="#94a3b8" font-size="14" class="font-sans">Aadhaar/PAN verification, instant stamp paper lease agreements, police verification trackers, and encrypted cloud contract archives.</text>
    </g>
  </g>
`));

// 3. MATHSHEET
fs.writeFileSync("public/previews/mathsheet.svg", createSVG("MathSheet", "K-12 Worksheet Generator", "#a855f7", false, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="240" height="30" rx="15" fill="#a855f7" fill-opacity="0.1" stroke="#a855f7" stroke-opacity="0.3"/>
    <text x="120" y="20" fill="#9333ea" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">📐 FREE EDTECH UTILITY</text>
    <text x="0" y="85" fill="#0f172a" font-size="44" font-weight="bold" class="font-sans">Algorithmic Math Worksheet</text>
    <text x="0" y="135" fill="#9333ea" font-size="44" font-weight="bold" class="font-sans">&amp; Test Paper Generator</text>
    <text x="0" y="180" fill="#64748b" font-size="16" class="font-sans">Infinite customizable math problem sets with step-by-step solutions and clean print output.</text>
  </g>

  <!-- Interactive Generator Workspace -->
  <g transform="translate(60, 320)">
    <rect width="1080" height="540" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Controls Sidebar -->
    <rect width="320" height="540" rx="12" fill="#f8fafc"/>
    <line x1="320" y1="0" x2="320" y2="540" stroke="#e2e8f0"/>
    <text x="25" y="40" fill="#0f172a" font-size="15" font-weight="bold" class="font-sans">CONFIGURATOR</text>
    
    <text x="25" y="80" fill="#64748b" font-size="12" font-weight="bold" class="font-sans">TOPIC SELECTION</text>
    <rect x="25" y="95" width="270" height="36" rx="6" fill="#9333ea" fill-opacity="0.1" stroke="#9333ea"/>
    <text x="40" y="118" fill="#9333ea" font-size="13" font-weight="bold">Fraction Operations &amp; LCM</text>

    <text x="25" y="160" fill="#64748b" font-size="12" font-weight="bold" class="font-sans">DIFFICULTY LEVEL</text>
    <rect x="25" y="175" width="85" height="30" rx="4" fill="#e2e8f0"/>
    <text x="67" y="195" fill="#475569" font-size="12" text-anchor="middle">Grade 4</text>
    <rect x="115" y="175" width="85" height="30" rx="4" fill="#9333ea"/>
    <text x="157" y="195" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Grade 7</text>
    <rect x="205" y="175" width="90" height="30" rx="4" fill="#e2e8f0"/>
    <text x="250" y="195" fill="#475569" font-size="12" text-anchor="middle">Grade 10</text>

    <text x="25" y="240" fill="#64748b" font-size="12" font-weight="bold" class="font-sans">QUESTION COUNT: 20</text>
    <line x1="25" y1="260" x2="295" y2="260" stroke="#9333ea" stroke-width="4"/>
    <circle cx="180" cy="260" r="8" fill="#9333ea"/>

    <rect x="25" y="300" width="270" height="42" rx="8" fill="#9333ea"/>
    <text x="160" y="326" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle" class="font-sans">⚡ REGENERATE SHEET</text>
    <rect x="25" y="355" width="270" height="42" rx="8" fill="#ffffff" stroke="#9333ea"/>
    <text x="160" y="381" fill="#9333ea" font-size="14" font-weight="bold" text-anchor="middle" class="font-sans">🖨️ PRINT PDF EXPORT</text>

    <!-- Worksheet Paper Mockup -->
    <rect x="360" y="25" width="680" height="490" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <!-- Header of sheet -->
    <text x="700" y="65" fill="#0f172a" font-size="18" font-weight="bold" text-anchor="middle" class="font-sans">ST. XAVIER ACADEMY • MATHEMATICS PRACTICE SET</text>
    <text x="390" y="95" fill="#64748b" font-size="12" class="font-sans">Student Name: _______________________</text>
    <text x="800" y="95" fill="#64748b" font-size="12" class="font-sans">Date: _____________</text>
    <line x1="390" y1="110" x2="1010" y2="110" stroke="#cbd5e1"/>

    <!-- Grid of math problems -->
    <g transform="translate(390, 140)">
      <text x="0" y="20" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">1)  3/4 + 5/8 = ?</text>
      <text x="320" y="20" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">2)  7/12 - 1/3 = ?</text>
      <text x="0" y="80" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">3)  2(3x + 5) = 46</text>
      <text x="320" y="80" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">4)  x² - 9x + 20 = 0</text>
      <text x="0" y="140" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">5)  Solve for y: 4y - 7 = 25</text>
      <text x="320" y="140" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">6)  Find hypotenuse: a=6, b=8</text>
      <text x="0" y="200" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">7)  Evaluate: √144 + 3³</text>
      <text x="320" y="200" fill="#0f172a" font-size="14" font-weight="bold" class="font-mono">8)  Find LCM of 24 &amp; 36</text>
    </g>

    <rect x="390" y="430" width="620" height="60" rx="6" fill="#f1f5f9"/>
    <text x="410" y="465" fill="#059669" font-size="13" font-weight="bold" class="font-sans">✓ Answer Key &amp; Step-by-Step Solutions attached to Page 2 automatically.</text>
  </g>
`));

// 4. WICOM
fs.writeFileSync("public/previews/wicom.svg", createSVG("WiCom", "Enterprise Wireless Commerce", "#2563eb", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="240" height="30" rx="15" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-opacity="0.5"/>
    <text x="120" y="20" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">📶 ENTERPRISE TELECOM &amp; B2B</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">High-Velocity Wireless &amp;</text>
    <text x="0" y="140" fill="#3b82f6" font-size="44" font-weight="bold" class="font-sans">E-Commerce Infrastructure</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Next.js SSR architecture, real-time inventory synchronization, sub-second latency.</text>
  </g>

  <!-- Product Catalog Mock -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    <g transform="translate(40, 30)">
      <text x="0" y="30" fill="#ffffff" font-size="22" font-weight="bold" class="font-sans">High-Throughput Enterprise Mesh Gateways</text>
      <text x="0" y="55" fill="#94a3b8" font-size="13" class="font-sans">Industrial grade 5G / Wi-Fi 6 wireless networking solutions.</text>
      
      <!-- Grid 3 items -->
      <g transform="translate(0, 80)">
        <rect width="310" height="370" rx="8" fill="#131d33" stroke="#1e293b"/>
        <rect x="25" y="25" width="260" height="150" rx="6" fill="#1e293b"/>
        <circle cx="155" cy="100" r="40" fill="#2563eb" fill-opacity="0.3"/>
        <text x="155" y="105" fill="#60a5fa" font-size="24" text-anchor="middle">📡</text>
        <text x="25" y="210" fill="#ffffff" font-size="16" font-weight="bold">WiCom Apex X9 5G Router</text>
        <text x="25" y="235" fill="#94a3b8" font-size="12">10 Gbps Backhaul • 500+ Clients</text>
        <text x="25" y="280" fill="#60a5fa" font-size="22" font-weight="bold">₹24,999</text>
        <rect x="25" y="305" width="260" height="36" rx="6" fill="#2563eb"/>
        <text x="155" y="328" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ADD TO B2B CART</text>
      </g>

      <g transform="translate(340, 80)">
        <rect width="310" height="370" rx="8" fill="#131d33" stroke="#1e293b"/>
        <rect x="25" y="25" width="260" height="150" rx="6" fill="#1e293b"/>
        <circle cx="155" cy="100" r="40" fill="#38bdf8" fill-opacity="0.3"/>
        <text x="155" y="105" fill="#38bdf8" font-size="24" text-anchor="middle">⚡</text>
        <text x="25" y="210" fill="#ffffff" font-size="16" font-weight="bold">WiCom Optical Node 4K</text>
        <text x="25" y="235" fill="#94a3b8" font-size="12">Dual GPON Uplink • Low Power</text>
        <text x="25" y="280" fill="#38bdf8" font-size="22" font-weight="bold">₹18,450</text>
        <rect x="25" y="305" width="260" height="36" rx="6" fill="#2563eb"/>
        <text x="155" y="328" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ADD TO B2B CART</text>
      </g>

      <g transform="translate(680, 80)">
        <rect width="310" height="370" rx="8" fill="#131d33" stroke="#1e293b"/>
        <rect x="25" y="25" width="260" height="150" rx="6" fill="#1e293b"/>
        <circle cx="155" cy="100" r="40" fill="#10b981" fill-opacity="0.3"/>
        <text x="155" y="105" fill="#10b981" font-size="24" text-anchor="middle">🛡️</text>
        <text x="25" y="210" fill="#ffffff" font-size="16" font-weight="bold">Enterprise Core Switch 48P</text>
        <text x="25" y="235" fill="#94a3b8" font-size="12">L3 Layer Managed • 100G SFP+</text>
        <text x="25" y="280" fill="#10b981" font-size="22" font-weight="bold">₹62,000</text>
        <rect x="25" y="305" width="260" height="36" rx="6" fill="#2563eb"/>
        <text x="155" y="328" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ADD TO B2B CART</text>
      </g>
    </g>
  </g>
`));

// 5. SNPEETHAM JYOTISH
fs.writeFileSync("public/previews/snpeetham-jyotish.svg", createSVG("Sri Nimbarka Peetham", "Jyotish & Vedic Computing", "#f59e0b", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="260" height="30" rx="15" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-opacity="0.4"/>
    <text x="130" y="20" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">☀️ AYODHYA VEDIC COMPUTATION</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Precision Vedic Jyotish,</text>
    <text x="0" y="140" fill="#fbbf24" font-size="44" font-weight="bold" class="font-sans">Panchanga &amp; Kundali Engine</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Planetary ephemeris, Muhurata timing, Ashtakavarga, and instant chart visualizers.</text>
  </g>

  <!-- Astrological Chart Engine Mockup -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Kundali Chart Box -->
    <g transform="translate(40, 40)">
      <rect width="450" height="450" fill="#131b2e" stroke="#fbbf24" stroke-width="2"/>
      <line x1="0" y1="0" x2="450" y2="450" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="450" y1="0" x2="0" y2="450" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="225" y1="0" x2="0" y2="225" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="0" y1="225" x2="225" y2="450" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="225" y1="450" x2="450" y2="225" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="450" y1="225" x2="225" y2="0" stroke="#f59e0b" stroke-width="1.5"/>

      <text x="225" y="120" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">Lagna (Surya, Budha)</text>
      <text x="110" y="80" fill="#fbbf24" font-size="13" text-anchor="middle">2: Guru (Exalted)</text>
      <text x="80" y="225" fill="#94a3b8" font-size="13" text-anchor="middle">3: Mangal</text>
      <text x="110" y="370" fill="#38bdf8" font-size="13" text-anchor="middle">4: Chandra</text>
      <text x="225" y="340" fill="#a855f7" font-size="14" text-anchor="middle">7: Shukra</text>
      <text x="340" y="370" fill="#f87171" font-size="13" text-anchor="middle">8: Rahu</text>
      <text x="370" y="225" fill="#34d399" font-size="13" text-anchor="middle">9: Shani</text>
      <text x="340" y="80" fill="#f87171" font-size="13" text-anchor="middle">12: Ketu</text>
    </g>

    <!-- Planetary Table -->
    <g transform="translate(530, 40)">
      <text x="0" y="25" fill="#ffffff" font-size="20" font-weight="bold" class="font-sans">Real-Time Ephemeris Data (Ayodhya)</text>
      <rect y="45" width="510" height="400" rx="8" fill="#0f172a" stroke="#1e293b"/>
      
      <text x="20" y="80" fill="#fbbf24" font-size="13" font-weight="bold" class="font-mono">PLANET</text>
      <text x="120" y="80" fill="#fbbf24" font-size="13" font-weight="bold" class="font-mono">RASHI</text>
      <text x="220" y="80" fill="#fbbf24" font-size="13" font-weight="bold" class="font-mono">DEGREE</text>
      <text x="350" y="80" fill="#fbbf24" font-size="13" font-weight="bold" class="font-mono">NAKSHATRA</text>

      <text x="20" y="125" fill="#ffffff" font-size="13">Sun (Surya)</text>
      <text x="120" y="125" fill="#94a3b8" font-size="13">Simha (Leo)</text>
      <text x="220" y="125" fill="#ffffff" font-size="13">14° 22 04</text>
      <text x="350" y="125" fill="#38bdf8" font-size="13">Purva Phalguni</text>

      <text x="20" y="165" fill="#ffffff" font-size="13">Moon (Chandra)</text>
      <text x="120" y="165" fill="#94a3b8" font-size="13">Karka (Cancer)</text>
      <text x="220" y="165" fill="#ffffff" font-size="13">28° 41 19</text>
      <text x="350" y="165" fill="#38bdf8" font-size="13">Ashlesha</text>

      <text x="20" y="205" fill="#ffffff" font-size="13">Jupiter (Guru)</text>
      <text x="120" y="205" fill="#94a3b8" font-size="13">Vrishabha</text>
      <text x="220" y="205" fill="#ffffff" font-size="13">21° 09 52</text>
      <text x="350" y="205" fill="#38bdf8" font-size="13">Rohini</text>

      <rect x="20" y="320" width="470" height="50" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b"/>
      <text x="255" y="352" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle" class="font-sans">📥 Download Comprehensive 28-Page Vedic Janampatri (PDF)</text>
    </g>
  </g>
`));

// 6. SNPEETHAM NGO
fs.writeFileSync("public/previews/snpeetham-ngo.svg", createSVG("Shri Niwas Peetham", "Ayodhya Heritage & NGO", "#ea580c", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="250" height="30" rx="15" fill="#ea580c" fill-opacity="0.2" stroke="#ea580c" stroke-opacity="0.5"/>
    <text x="125" y="20" fill="#fb923c" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">🚩 SEWA SANSTHAN AYODHYA</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Public Welfare, Ann Mahaprasad</text>
    <text x="0" y="140" fill="#fb923c" font-size="44" font-weight="bold" class="font-sans">&amp; Vedic Heritage Sansthan</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Serving 100,000+ devotees, organizing free medical surgeries, and preserving Ayodhya culture.</text>
  </g>

  <!-- NGO Milestones & Donation Portal -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    
    <g transform="translate(40, 35)">
      <rect width="220" height="110" rx="8" fill="#131b2e" stroke="#ea580c" stroke-opacity="0.3"/>
      <text x="20" y="40" fill="#fb923c" font-size="28" font-weight="bold">100,000+</text>
      <text x="20" y="70" fill="#ffffff" font-size="14" font-weight="bold">Meals Served</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11">Daily Ann Mahaprasad</text>
    </g>
    <g transform="translate(290, 35)">
      <rect width="220" height="110" rx="8" fill="#131b2e" stroke="#ea580c" stroke-opacity="0.3"/>
      <text x="20" y="40" fill="#fb923c" font-size="28" font-weight="bold">5,000+</text>
      <text x="20" y="70" fill="#ffffff" font-size="14" font-weight="bold">Free Operations</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11">Polio &amp; Eye Surgeries</text>
    </g>
    <g transform="translate(540, 35)">
      <rect width="220" height="110" rx="8" fill="#131b2e" stroke="#ea580c" stroke-opacity="0.3"/>
      <text x="20" y="40" fill="#fb923c" font-size="28" font-weight="bold">2005</text>
      <text x="20" y="70" fill="#ffffff" font-size="14" font-weight="bold">Established</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11">20+ Yrs of Public Trust</text>
    </g>
    <g transform="translate(790, 35)">
      <rect width="250" height="110" rx="8" fill="#131b2e" stroke="#ea580c" stroke-opacity="0.3"/>
      <text x="20" y="40" fill="#10b981" font-size="28" font-weight="bold">80G Tax-Free</text>
      <text x="20" y="70" fill="#ffffff" font-size="14" font-weight="bold">Instant Receipts</text>
      <text x="20" y="90" fill="#10b981" font-size="11">Automated PDF Dispatch</text>
    </g>

    <g transform="translate(40, 180)">
      <rect width="1000" height="310" rx="10" fill="#131826" stroke="#1e293b"/>
      <text x="30" y="45" fill="#ffffff" font-size="20" font-weight="bold">Online Devotee Contribution Gateway</text>
      
      <rect x="30" y="75" width="160" height="50" rx="6" fill="#ea580c"/>
      <text x="110" y="105" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">₹1,100</text>
      
      <rect x="210" y="75" width="160" height="50" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="290" y="105" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">₹5,100</text>

      <rect x="390" y="75" width="160" height="50" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="470" y="105" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">₹11,000</text>

      <rect x="30" y="160" width="450" height="50" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="50" y="190" fill="#94a3b8" font-size="14">Enter custom Sewa amount (₹)</text>

      <rect x="30" y="230" width="450" height="50" rx="8" fill="#ea580c"/>
      <text x="255" y="262" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">CONTRIBUTE FOR ANN MAHAPRASAD</text>
    </g>
  </g>
`));

// 7. GOSHUTTLES
fs.writeFileSync("public/previews/goshuttles.svg", createSVG("GoShuttles", "Smart Transit App", "#06b6d4", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="250" height="30" rx="15" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-opacity="0.5"/>
    <text x="125" y="20" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">🚐 REAL-TIME MOBILITY &amp; TRANSIT</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Airport &amp; City Shuttle</text>
    <text x="0" y="140" fill="#06b6d4" font-size="44" font-weight="bold" class="font-sans">Live Fleet Booking App</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Real-time GPS tracking, guaranteed seats, QR boarding passes, and fixed affordable fares.</text>
  </g>

  <!-- Live Map & Booking Interface -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    
    <g transform="translate(30, 30)">
      <rect width="360" height="480" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <text x="25" y="40" fill="#ffffff" font-size="16" font-weight="bold">Book Airport Shuttle</text>
      
      <rect x="25" y="65" width="310" height="45" rx="6" fill="#131b2e" stroke="#334155"/>
      <text x="45" y="93" fill="#22d3ee" font-size="13">🟢 Pickup: Terminal 1, IGI Airport</text>

      <rect x="25" y="125" width="310" height="45" rx="6" fill="#131b2e" stroke="#334155"/>
      <text x="45" y="153" fill="#f87171" font-size="13">🔴 Drop: Cyber City Hub, Sec 29</text>

      <text x="25" y="205" fill="#94a3b8" font-size="12" font-weight="bold">SELECT DEPARTURE SLOT</text>
      <rect x="25" y="220" width="95" height="35" rx="4" fill="#06b6d4"/>
      <text x="72" y="242" fill="#000000" font-size="12" font-weight="bold" text-anchor="middle">10:30 AM</text>
      <rect x="130" y="220" width="95" height="35" rx="4" fill="#1e293b"/>
      <text x="177" y="242" fill="#ffffff" font-size="12" text-anchor="middle">11:15 AM</text>
      <rect x="235" y="220" width="100" height="35" rx="4" fill="#1e293b"/>
      <text x="285" y="242" fill="#ffffff" font-size="12" text-anchor="middle">12:00 PM</text>

      <rect x="25" y="280" width="310" height="90" rx="6" fill="#131b2e"/>
      <text x="40" y="310" fill="#ffffff" font-size="14" font-weight="bold">AC Electric Executive Shuttle</text>
      <text x="40" y="335" fill="#10b981" font-size="12">✓ Free Wi-Fi • USB Charging • GPS</text>
      <text x="40" y="355" fill="#22d3ee" font-size="16" font-weight="bold">₹249 / seat</text>

      <rect x="25" y="390" width="310" height="50" rx="8" fill="#06b6d4"/>
      <text x="180" y="422" fill="#000000" font-size="15" font-weight="bold" text-anchor="middle">RESERVE SEAT NOW</text>
    </g>

    <g transform="translate(420, 30)">
      <rect width="630" height="480" rx="10" fill="#0c1626" stroke="#1e293b"/>
      <path d="M 50 100 Q 250 80 400 220 T 580 400" fill="none" stroke="#1e293b" stroke-width="24"/>
      <path d="M 50 100 Q 250 80 400 220 T 580 400" fill="none" stroke="#06b6d4" stroke-width="4"/>

      <circle cx="50" cy="100" r="12" fill="#10b981"/>
      <text x="50" y="80" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Airport T1</text>

      <circle cx="340" cy="180" r="18" fill="#06b6d4" stroke="#ffffff" stroke-width="2"/>
      <text x="340" y="185" fill="#000000" font-size="12" text-anchor="middle">🚐</text>
      <rect x="280" y="125" width="120" height="30" rx="4" fill="#0f172a" stroke="#06b6d4"/>
      <text x="340" y="145" fill="#22d3ee" font-size="11" font-weight="bold" text-anchor="middle">ETA: 6 mins away</text>

      <circle cx="580" cy="400" r="12" fill="#f87171"/>
      <text x="580" y="430" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Cyber City</text>
    </g>
  </g>
`));

// 8. GOAYODHYA
fs.writeFileSync("public/previews/goayodhya.svg", createSVG("GoAyodhya", "Pilgrimage & Travel Agency", "#ef4444", true, (c, bg) => `
  <!-- Hero Section -->
  <g transform="translate(60, 110)">
    <rect width="260" height="30" rx="15" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-opacity="0.5"/>
    <text x="130" y="20" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle" class="font-mono">🛕 AYODHYA PILGRIMAGE PORTAL</text>
    <text x="0" y="90" fill="#ffffff" font-size="44" font-weight="bold" class="font-sans">Ram Mandir VIP Darshan,</text>
    <text x="0" y="140" fill="#ef4444" font-size="44" font-weight="bold" class="font-sans">Heritage Stays &amp; Tour Agency</text>
    <text x="0" y="185" fill="#94a3b8" font-size="16" class="font-sans">Curated pilgrimage packages, verified heritage hotels, local guides &amp; luxury transportation.</text>
  </g>

  <!-- Package Tour Showcase -->
  <g transform="translate(60, 330)">
    <rect width="1080" height="540" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    <g transform="translate(40, 30)">
      <text x="0" y="30" fill="#ffffff" font-size="22" font-weight="bold">Exclusive Ayodhya &amp; Varanasi Spiritual Packages</text>
      
      <g transform="translate(0, 70)">
        <rect width="310" height="390" rx="8" fill="#131a2a" stroke="#1e293b"/>
        <rect x="20" y="20" width="270" height="150" rx="6" fill="#1e293b"/>
        <text x="155" y="105" fill="#f87171" font-size="32" text-anchor="middle">🛕</text>
        <text x="20" y="200" fill="#ffffff" font-size="17" font-weight="bold">Ayodhya Complete Yatra</text>
        <text x="20" y="225" fill="#94a3b8" font-size="12">3 Days / 2 Nights • VIP Pass</text>
        <text x="20" y="255" fill="#f87171" font-size="12">✓ Ram Mandir + Saryu Aarti + Stay</text>
        <text x="20" y="305" fill="#f87171" font-size="24" font-weight="bold">₹6,999 / person</text>
        <rect x="20" y="330" width="270" height="38" rx="6" fill="#ef4444"/>
        <text x="155" y="354" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BOOK DARSHAN</text>
      </g>

      <g transform="translate(340, 70)">
        <rect width="310" height="390" rx="8" fill="#131a2a" stroke="#1e293b"/>
        <rect x="20" y="20" width="270" height="150" rx="6" fill="#1e293b"/>
        <text x="155" y="105" fill="#fb923c" font-size="32" text-anchor="middle">🌊</text>
        <text x="20" y="200" fill="#ffffff" font-size="17" font-weight="bold">Ayodhya + Kashi Yatra</text>
        <text x="20" y="225" fill="#94a3b8" font-size="12">5 Days / 4 Nights • AC Cab</text>
        <text x="20" y="255" fill="#fb923c" font-size="12">✓ Kashi Vishwanath + Ganga Aarti</text>
        <text x="20" y="305" fill="#fb923c" font-size="24" font-weight="bold">₹14,499 / person</text>
        <rect x="20" y="330" width="270" height="38" rx="6" fill="#ef4444"/>
        <text x="155" y="354" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BOOK DARSHAN</text>
      </g>

      <g transform="translate(680, 70)">
        <rect width="310" height="390" rx="8" fill="#131a2a" stroke="#1e293b"/>
        <rect x="20" y="20" width="270" height="150" rx="6" fill="#1e293b"/>
        <text x="155" y="105" fill="#38bdf8" font-size="32" text-anchor="middle">✨</text>
        <text x="20" y="200" fill="#ffffff" font-size="17" font-weight="bold">Triveni Sangam Special</text>
        <text x="20" y="225" fill="#94a3b8" font-size="12">Prayagraj + Ayodhya + Varanasi</text>
        <text x="20" y="255" fill="#38bdf8" font-size="12">✓ Luxury Tempo Traveller + 4★</text>
        <text x="20" y="305" fill="#38bdf8" font-size="24" font-weight="bold">₹21,999 / person</text>
        <rect x="20" y="330" width="270" height="38" rx="6" fill="#ef4444"/>
        <text x="155" y="354" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BOOK DARSHAN</text>
      </g>
    </g>
  </g>
`));

console.log("SUCCESS: 8 preview SVGs created in public/previews/");
