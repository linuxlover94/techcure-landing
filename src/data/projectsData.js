export const PRODUCTS = [
    {
        id: "inkleaf",
        title: "InkLeaf",
        tagline: "Military-Grade Zero-Knowledge Markdown & Cryptographic Vault",
        url: "https://inkleaf.online/",
        displayUrl: "inkleaf.online",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        category: "Security & Cryptographic Computing",
        badge: "Argon2id + AES-256 Vault",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        description: "An ultra-secure, local-first markdown workspace engineered with Argon2id WebAssembly key derivation, non-extractable client-side AES-256-GCM encryption, KaTeX mathematical typesetting, Mermaid.js diagramming, CRDT real-time sync, and offline Dexie.js IndexedDB persistence.",
        features: [
            "Client-Side Argon2id (WASM 64MB) & AES-256-GCM Zero-Knowledge Dual DEK Encryption",
            "Non-Extractable In-Memory CryptoKeys Preventing XSS Exfiltration",
            "KaTeX Mathematical Notation & Mermaid.js Interactive Flowchart AST Compilers",
            "Local-First Dexie.js IndexedDB Storage with 0ms Typing Latency & Yjs CRDT Sync",
            "Merkle Tree Cryptographic Integrity Verification & Vector PDF Export Suite"
        ],
        techStack: ["React 19", "Argon2id (WASM)", "WebCrypto API", "Dexie.js", "CRDT / Yjs", "KaTeX", "PostgreSQL"],
        previewImage: "/previews/inkleaf.png",
        metrics: {
            encryption: "AES-256-GCM",
            kdf: "Argon2id WASM",
            latency: "0ms Local Write"
        }
    },
    {
        id: "rentflow",
        title: "RentFlow",
        tagline: "Next-Generation Property & Tenant Rental Operating System",
        url: "#contact",
        displayUrl: "rentflow.in (Private Beta)",
        isLive: false,
        status: "IN DEVELOPMENT / PRIVATE BETA",
        statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
        category: "PropTech & Real Estate",
        badge: "Flagship PropTech SaaS",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        description: "An end-to-end multi-tenant property management platform engineered for Indian landlords and commercial operators. Automated UPI rent collection, WhatsApp receipt dispatch, digital lease agreements, tenant KYC, and maintenance ticketing.",
        features: [
            "Automated UPI AutoPay & NetBanking Monthly Rent Reconciliation",
            "Direct WhatsApp Cloud API Invoice & Instant Payment Receipt Dispatch",
            "Aadhaar e-Sign Digital Lease Generator & Police KYC Verification Vault",
            "Real-Time Maintenance Job Ticketing & Vendor Cost Ledgering",
            "Multi-Property Partner Bank Sub-Accounts & Annual Tax/CA Exports"
        ],
        techStack: ["React", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Razorpay", "TailwindCSS"],
        previewImage: "/previews/rentflow.png",
        metrics: {
            automation: "95% Manual Work Cut",
            efficiency: "3x Faster Invoicing",
            access: "Private Pilot"
        }
    },
    {
        id: "mathsheet",
        title: "MathSheet",
        tagline: "Deterministic Algorithmic Math Worksheet Engine & LaTeX Proof Compiler",
        url: "https://mathsheet.pages.dev/",
        displayUrl: "mathsheet.pages.dev",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        category: "EdTech & Algorithmic Computing",
        badge: "Deterministic Engine",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        description: "A lightning-fast algorithmic worksheet generator for educators, coaching institutes, and students. Procedurally synthesizes arithmetic, algebra, calculus, and geometry problem sets with instant randomized seed generation, step-by-step LaTeX solution proofs, and print-ready vector PDF output.",
        features: [
            "Mulberry32 PRNG Deterministic Seed Generation with Multi-Variant Exam Shuffling",
            "74+ Procedural Topic Synthesizers Ranging from K-12 to Advanced JEE Calculus",
            "KaTeX Mathematical Notation & Dynamic SVG Geometric Diagram Proofs",
            "Custom Institutional Branding, Watermarks & Clean Print-Optimized Vector Layouts",
            "100% Client-Side Execution on Cloudflare Edge with Zero Telemetry and Zero Tracking"
        ],
        techStack: ["Astro 7", "React 19", "TypeScript", "Tailwind CSS 4", "Mulberry32 PRNG", "KaTeX"],
        previewImage: "/previews/mathsheet.png",
        metrics: {
            latency: "< 25ms Generation",
            curriculum: "74+ Math Modules",
            privacy: "100% Client-Side"
        }
    }
];

export const PORTFOLIO = [
    {
        id: "wicom",
        title: "WiCom",
        tagline: "Enterprise Wireless Telecom & High-Throughput Commerce",
        url: "https://wicom.in",
        displayUrl: "wicom.in",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        category: "E-Commerce & Telecom",
        badge: "Enterprise Telecom",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        description: "A next-generation enterprise commerce and wireless solutions portal. Engineered for high transaction throughput, interactive product catalogs, real-time inventory synchronization, and sub-second page loads across India.",
        features: [
            "Next.js Server-Side Rendered Commerce Architecture with Edge Caching",
            "Dynamic Real-Time Hardware Inventory & B2B Wholesale Quotation Tool",
            "Multi-Gateway Unified Checkout (UPI Auto-Collect, Corporate Cards, EMI)",
            "Industrial 5G / Wi-Fi 6 Mesh Hardware Configuration & Sizing Calculator",
            "Sub-second First Contentful Paint across Indian Tier-1 & Tier-2 Networks"
        ],
        techStack: ["Next.js", "React", "Node.js", "TailwindCSS", "PostgreSQL", "Redis"],
        previewImage: "/previews/wicom.png",
        metrics: {
            speed: "0.4s FCP",
            conversion: "+38% Growth",
            architecture: "Next.js SSR"
        }
    },
    {
        id: "snpeetham-jyotish",
        title: "Sri Nimbarka Peetham Jyotish",
        tagline: "High-Precision Vedic Jyotish, Panchanga & Kundali Engine",
        url: "https://snpeethamayodhya.org/build",
        displayUrl: "snpeethamayodhya.org/build",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        category: "AstroTech & Vedic Computing",
        badge: "Precision Computation",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        description: "A precision astronomical and Vedic astrological calculation engine built directly in Ayodhya. Computes planetary ephemeris, Dasha cycles, Ashtakavarga, Muhurata timing, and customizable North/South Indian Kundali charts in milliseconds with mathematical exactness.",
        features: [
            "Real-Time Planetary Ephemeris with Swiss Ephemeris Arc-Second Precision",
            "Astronomical Panchanga Engine with Tithi, Nakshatra, Yoga & Muhurata Data",
            "Interactive North & South Indian Kundali Visualizer with House Lords",
            "Vimshottari Dasha, Gochara (Planetary Transit) & Ashtakavarga Tables",
            "One-Click Bilingual 28-Page Janampatri PDF Report Generator"
        ],
        techStack: ["React", "TypeScript", "Swiss Ephemeris Math", "SVG Rendering", "TailwindCSS"],
        previewImage: "/previews/snpeetham-jyotish.png",
        metrics: {
            accuracy: "Arc-second Exact",
            calcSpeed: "< 15ms",
            rendering: "North & South SVG"
        }
    },
    {
        id: "snpeetham-ngo",
        title: "Shri Niwas Peetham Sewa Sansthan",
        tagline: "Ayodhya Spiritual Heritage & Public Welfare NGO Digital Hub",
        url: "https://snpeethamayodhya.org",
        displayUrl: "snpeethamayodhya.org",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
        category: "NGO & Cultural Heritage",
        badge: "Verified Ayodhya NGO",
        badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
        description: "Official digital portal for Shri Niwas Peetham Sewa Sansthan, an Ayodhya-based NGO established in 2005. Powers global devotee engagement, transparent donation tracking, Ann Mahaprasad logistics, medical health camps, and cultural preservation initiatives.",
        features: [
            "Transparent Online Devotee Contribution Gateway with Instant 80G Tax Receipts",
            "Daily Ann Mahaprasad & Free Eye/Polio Operation Camp Operations Portal",
            "High-Definition Spiritual Media Archive & Temple Heritage Historical Gallery",
            "Bilingual Hindi & English Devotee Interface with WhatsApp Sewa Alerts",
            "Lightweight Bundle Optimized for Rural 2G/3G Smartphone Access"
        ],
        techStack: ["React", "Vite", "Razorpay NGO Suite", "Cloudinary", "TailwindCSS"],
        previewImage: "/previews/snpeetham-ngo.png",
        metrics: {
            livesImpacted: "100,000+ Meals",
            trustScore: "Verified NGO (2005)",
            taxStatus: "80G Certified"
        }
    },
    {
        id: "goshuttles",
        title: "GoShuttles",
        tagline: "High-Velocity Airport & Intercity Smart Shuttle Transit App",
        url: "https://www.goshuttles.in/",
        displayUrl: "goshuttles.in",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
        category: "Mobility & Logistics",
        badge: "Smart Transit App",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        description: "A robust on-demand and scheduled airport transfer & city shuttle mobility application. Features live vehicle GPS tracking, dynamic route seat allocation, QR-code boarding passes, and automated driver dispatch across key transit hubs.",
        features: [
            "Fixed-Price Instant Seat Reservation & Multi-Stop Route Timetable",
            "Live WebSockets Vehicle Telematics & Fleet Dispatch Dashboard",
            "Contactless Digital QR Boarding Pass with Real-Time ETA Push Alerts",
            "Corporate Commute Roster Management & Business Employee Pooling",
            "Driver Navigation Optimization & Route Telemetry Efficiency"
        ],
        techStack: ["React", "React Native", "Node.js", "Socket.io", "Mapbox", "TailwindCSS"],
        previewImage: "/previews/goshuttles.png",
        metrics: {
            ridesCompleted: "250,000+",
            trackingLatency: "< 200ms",
            appRating: "4.8 ★"
        }
    },
    {
        id: "goayodhya",
        title: "GoAyodhya",
        tagline: "Premier Ayodhya Ram Mandir Pilgrimage, Tours & Heritage Stays",
        url: "https://goayodhya.org/",
        displayUrl: "goayodhya.org",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-red-400 bg-red-500/10 border-red-500/30",
        category: "Travel & Hospitality",
        badge: "Pilgrimage Tourism",
        badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
        description: "A dedicated pilgrimage travel and tour agency platform for Ayodhya, Varanasi, and Uttar Pradesh spiritual circuits. Provides bespoke Ram Mandir VIP darshan coordination, vetted heritage hotel stays, certified local guides, and luxury transit.",
        features: [
            "Bespoke Ayodhya Ram Mandir VIP Darshan & Saryu Aarti Package Itineraries",
            "Vetted Heritage Hotel Directory with Instant Reservation & Ground Support",
            "Custom Multi-City Spiritual Circuit Builder (Ayodhya + Varanasi + Prayagraj)",
            "Multilingual Support for Domestic & International NRI Pilgrims",
            "Direct 24/7 WhatsApp Concierge & Certified Local Tour Guides"
        ],
        techStack: ["React", "Next.js", "TailwindCSS", "WhatsApp Cloud", "Stripe & Razorpay"],
        previewImage: "/previews/goayodhya.png",
        metrics: {
            pilgrimsServed: "50,000+",
            satisfactionRate: "99.4%",
            hotelPartners: "40+ Vetted"
        }
    }
];

export const FREE_APPS = [
    {
        id: "mathsheet-free",
        title: "MathSheet Generator",
        tagline: "Free Infinite Printable Math Worksheets",
        url: "https://mathsheet.pages.dev/",
        displayUrl: "mathsheet.pages.dev",
        badge: "Free EdTech",
        description: "Generate infinite, customized math worksheets with answer keys and step-by-step solutions in one click. Completely free, no login required.",
        category: "EdTech",
        previewImage: "/previews/mathsheet.png",
        actionText: "Launch MathSheet",
        tech: ["React", "Cloudflare Pages"]
    },
    {
        id: "inkleaf-free",
        title: "InkLeaf Web Vault",
        tagline: "Free Military-Grade Markdown Note Editor",
        url: "https://inkleaf.online/",
        displayUrl: "inkleaf.online",
        badge: "Privacy Tool",
        description: "Client-side encrypted notes, KaTeX equations, and Mermaid diagrams with zero tracking. Runs 100% offline inside your browser.",
        category: "Productivity",
        previewImage: "/previews/inkleaf.png",
        actionText: "Launch InkLeaf",
        tech: ["AES-256", "KaTeX", "IndexedDB"]
    },
    {
        id: "roi-calc-free",
        title: "Techcure ROI Calculator",
        tagline: "Digital Growth & Revenue Projection Engine",
        url: "/free-apps#roi-calculator",
        displayUrl: "techcurehq.com/free-apps",
        badge: "Business Tool",
        description: "Calculate traffic conversion uplift, average order value expansion, and projected monthly returns from custom high-velocity web engineering.",
        category: "Business",
        previewImage: "/previews/rentflow.png",
        actionText: "Use Calculator",
        tech: ["React", "Analytics Engine"]
    }
];
