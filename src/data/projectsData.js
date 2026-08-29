export const PRODUCTS = [
    {
        id: "inkleaf",
        title: "InkLeaf Vault",
        tagline: "Zero-Knowledge Encrypted Markdown & Cryptographic Knowledge Vault",
        url: "https://inkleaf.online",
        liveUrl: "https://inkleaf.online",
        displayUrl: "inkleaf.online",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        category: "Zero-Knowledge Security & Encrypted Notes",
        badge: "Argon2id + AES-256 Vault",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        previewImage: "/previews/inkleaf.png",
        image: "/previews/inkleaf.png",
        svgPreview: "/previews/inkleaf.svg",
        description: "A private, zero-knowledge markdown notebook and knowledge vault where your data is encrypted directly on your device using AES-256-GCM before it ever touches a server.",
        fullDescription: "Most note-taking apps store your sensitive thoughts and passwords in plaintext on their databases. InkLeaf was engineered to change that. Built with client-side WebCrypto and Argon2id key derivation, your master password never leaves your browser. Even if our servers are breached, your data looks like random digital static to anyone without your private key. Features instant markdown editing, offline storage, and zero-telemetry sync.",
        features: [
            "Client-Side Argon2id (WASM 64MB) & AES-256-GCM Zero-Knowledge Dual DEK Encryption",
            "Non-Extractable In-Memory CryptoKeys Preventing Browser XSS Exfiltration",
            "KaTeX Mathematical Notation & Mermaid.js Interactive Flowchart AST Compilers",
            "Local-First Dexie.js IndexedDB Storage with 0ms Typing Latency & Yjs CRDT Sync",
            "Merkle Tree Cryptographic Integrity Verification & Vector PDF Export Suite"
        ],
        techStack: ["React 19", "Argon2id (WASM)", "WebCrypto API", "Dexie.js", "CRDT / Yjs", "KaTeX", "Tailwind CSS"],
        tags: ["React 19", "WebCrypto API", "Argon2id", "AES-256-GCM", "Tailwind CSS", "Local-First"],
        metrics: {
            speed: "< 35ms Decryption",
            uptime: "99.99%",
            latency: "Zero Cloud Knowledge"
        },
        highlights: [
            "Client-side cryptographic key generation",
            "Zero tracking cookies, zero ads, zero analytics bloat",
            "Full offline capability via IndexedDB and Service Workers",
            "Export raw markdown and encrypted JSON bundles with 1 click"
        ]
    },
    {
        id: "rentflow",
        title: "RentFlow PropTech",
        tagline: "Automated Real Estate & Tenant Rental Operating System",
        url: "/products#rentflow",
        liveUrl: "/products#rentflow",
        displayUrl: "techcurehq.com/products",
        isLive: false,
        status: "IN DEVELOPMENT / PRIVATE BETA",
        statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
        category: "Real Estate & Automated Tenant Management",
        badge: "Flagship PropTech SaaS",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        previewImage: "/previews/rentflow.png",
        image: "/previews/rentflow.png",
        svgPreview: "/previews/rentflow.svg",
        description: "A streamlined property rental platform that automates tenant onboarding, digital lease signing, maintenance ticketing, and automated rent collections.",
        fullDescription: "Built for independent landlords and property managers tired of bloated, expensive real estate software. RentFlow delivers instant tenant screening, automated payment reminders via WhatsApp, and live cash flow dashboards without complicated setup.",
        features: [
            "Automated UPI AutoPay & NetBanking Monthly Rent Reconciliation",
            "Direct WhatsApp Cloud API Invoice & Instant Payment Receipt Dispatch",
            "Aadhaar e-Sign Digital Lease Generator & Police KYC Verification Vault",
            "Real-Time Maintenance Job Ticketing & Vendor Cost Ledgering",
            "Multi-Property Partner Bank Sub-Accounts & Annual Tax/CA Exports"
        ],
        techStack: ["React 19", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Stripe API", "Tailwind CSS"],
        tags: ["React 19", "PostgreSQL", "Node.js", "Stripe API", "WhatsApp Cloud API"],
        metrics: {
            speed: "< 250ms API Response",
            uptime: "99.95%",
            latency: "Real-time Sync"
        },
        highlights: [
            "Direct tenant payment links with automated receipts",
            "Photo-supported maintenance requests and contractor tracking",
            "Automated lease expiration reminders and renewal agreements",
            "Real-time cashflow analytics with tax-ready CSV exports"
        ]
    },
    {
        id: "mathsheet",
        title: "MathSheet Engine",
        tagline: "Deterministic Algorithmic Math Worksheet Engine & LaTeX Proof Compiler",
        url: "https://mathsheet.pages.dev",
        liveUrl: "https://mathsheet.pages.dev",
        displayUrl: "mathsheet.pages.dev",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        category: "Sub-Millisecond Educational Math Generator",
        badge: "Deterministic Engine",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        previewImage: "/previews/mathsheet.png",
        image: "/previews/mathsheet.png",
        svgPreview: "/previews/mathsheet.svg",
        description: "A high-velocity, automated math worksheet and quiz generator for educators and parents, rendering complex arithmetic and algebra problems in sub-milliseconds.",
        fullDescription: "Teachers and parents waste hours manually formatting math exercises. MathSheet generates hundreds of customized, print-ready math worksheets with instant answer keys in under 50 milliseconds. Powered by client-side KaTeX rendering and deterministic mathematical seeds, it runs completely offline with zero loading spinners.",
        features: [
            "Mulberry32 PRNG Deterministic Seed Generation with Multi-Variant Exam Shuffling",
            "74+ Procedural Topic Synthesizers Ranging from K-12 to Advanced JEE Calculus",
            "KaTeX Mathematical Notation & Dynamic SVG Geometric Diagram Proofs",
            "Custom Institutional Branding, Watermarks & Clean Print-Optimized Vector Layouts",
            "100% Client-Side Execution on Cloudflare Edge with Zero Telemetry and Zero Tracking"
        ],
        techStack: ["Astro", "React 19", "TypeScript", "Tailwind CSS", "Mulberry32 PRNG", "KaTeX"],
        tags: ["React 19", "KaTeX Engine", "Vite", "Cloudflare Pages", "Deterministic RNG"],
        metrics: {
            speed: "< 45ms Generation",
            uptime: "100%",
            latency: "Edge Global Cache"
        },
        highlights: [
            "Instant dynamic problem generation across 15+ difficulty tiers",
            "Pixel-perfect print stylesheets for A4 & Letter physical handouts",
            "100% client-side computation with zero server roundtrips",
            "One-click PDF download with automated grading answer keys"
        ]
    }
];

export const PORTFOLIO = [
    {
        id: "wicom",
        title: "WiCom Telecom & Broadband",
        client: "WiCom Networks Pvt. Ltd.",
        tagline: "Enterprise Wireless Telecom & High-Throughput Commerce",
        url: "https://wicom.in",
        liveUrl: "https://wicom.in",
        displayUrl: "wicom.in",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        category: "E-Commerce & Telecom",
        badge: "Enterprise Telecom",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        previewImage: "/previews/wicom.png",
        image: "/previews/wicom.png",
        svgPreview: "/previews/wicom.svg",
        description: "A lightning-fast broadband billing and plan renewal web application serving thousands of active fiber optic subscribers.",
        fullDescription: "WiCom needed to replace a slow legacy portal that caused frequent customer drop-offs during monthly recharge cycles. Techcure re-architected the portal from scratch using React and Edge caching. The result: billing page load times dropped from 4.2 seconds to 0.4 seconds, and payment completion rates increased by 44%.",
        features: [
            "Next.js Server-Side Rendered Commerce Architecture with Edge Caching",
            "Dynamic Real-Time Hardware Inventory & B2B Wholesale Quotation Tool",
            "Multi-Gateway Unified Checkout (UPI Auto-Collect, Corporate Cards, EMI)",
            "Industrial 5G / Wi-Fi 6 Mesh Hardware Configuration & Sizing Calculator",
            "Sub-second First Contentful Paint across Indian Tier-1 & Tier-2 Networks"
        ],
        techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Redis"],
        tags: ["React", "FastAPI", "PostgreSQL", "Payment Gateway", "Tailwind CSS"],
        metrics: {
            impact: "+44% Payment Conversion",
            speed: "0.4s Page Load",
            scale: "50,000+ Monthly Users"
        },
        highlights: [
            "Integrated seamless 1-click UPI and card payment flows",
            "Live bandwidth consumption and data usage trackers",
            "Automated SMS and WhatsApp invoice dispatching",
            "Staff CRM portal for instant subscriber troubleshooting"
        ]
    },
    {
        id: "snpeetham-jyotish",
        title: "Sri Nimbarka Peetham Astrology Engine",
        client: "Sri Nimbarka Peetham Spiritual Foundation",
        tagline: "High-Precision Vedic Jyotish, Panchanga & Kundali Engine",
        url: "https://snpeethamayodhya.org/build",
        liveUrl: "https://snpeethamayodhya.org/build",
        displayUrl: "snpeethamayodhya.org/build",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        category: "AstroTech & Vedic Computing",
        badge: "Precision Computation",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        previewImage: "/previews/snpeetham-jyotish.png",
        image: "/previews/snpeetham-jyotish.png",
        svgPreview: "/previews/snpeetham-jyotish.svg",
        description: "A precision Vedic astrological calculation suite delivering sub-second planetary ephemeris data, Kundli charts, and auspicious Muhurat timelines.",
        fullDescription: "Vedic astrological calculations require complex astronomical formulas that traditionally choke browser main threads. Techcure engineered a lightweight algorithmic engine that calculates planetary coordinates, nakshatra divisions, and visual horoscope charts instantly with zero server lag.",
        features: [
            "Real-Time Planetary Ephemeris with Swiss Ephemeris Arc-Second Precision",
            "Astronomical Panchanga Engine with Tithi, Nakshatra, Yoga & Muhurata Data",
            "Interactive North & South Indian Kundali Visualizer with House Lords",
            "Vimshottari Dasha, Gochara (Planetary Transit) & Ashtakavarga Tables",
            "One-Click Bilingual 28-Page Janampatri PDF Report Generator"
        ],
        techStack: ["React", "TypeScript", "Swiss Ephemeris Math", "SVG Rendering", "Tailwind CSS"],
        tags: ["React", "TypeScript", "Astronomical Math", "SVG Charts", "Tailwind CSS"],
        metrics: {
            accuracy: "Arc-second Exact",
            calcSpeed: "< 15ms",
            rendering: "North & South SVG"
        },
        highlights: [
            "Calculates planetary coordinates in under 15 milliseconds",
            "Dynamic SVG Kundli chart rendering for North & South formats",
            "Comprehensive Dasha periods, transits, and Ashtakavarga",
            "Print-ready PDF horoscope reports with single-click download"
        ]
    },
    {
        id: "snpeetham-ngo",
        title: "Shri Niwas Peetham Sewa Sansthan",
        client: "Shri Niwas Peetham Foundation",
        tagline: "Ayodhya Spiritual Heritage & Public Welfare NGO Digital Hub",
        url: "https://snpeethamayodhya.org",
        liveUrl: "https://snpeethamayodhya.org",
        displayUrl: "snpeethamayodhya.org",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
        category: "NGO & Cultural Heritage",
        badge: "Verified Ayodhya NGO",
        badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
        previewImage: "/previews/snpeetham-ngo.png",
        image: "/previews/snpeetham-ngo.png",
        svgPreview: "/previews/snpeetham-ngo.svg",
        description: "Official digital portal for Shri Niwas Peetham Sewa Sansthan, an Ayodhya-based NGO established in 2005. Powers global devotee engagement, transparent donation tracking, Ann Mahaprasad logistics, medical health camps, and cultural preservation initiatives.",
        fullDescription: "Built for an established public welfare trust in Ayodhya to digitize donor management, issue instant tax exemption receipts, and broadcast daily temple activities to a global community of devotees.",
        features: [
            "Transparent Online Devotee Contribution Gateway with Instant 80G Tax Receipts",
            "Daily Ann Mahaprasad & Free Eye/Polio Operation Camp Operations Portal",
            "High-Definition Spiritual Media Archive & Temple Heritage Historical Gallery",
            "Bilingual Hindi & English Devotee Interface with WhatsApp Sewa Alerts",
            "Lightweight Bundle Optimized for Rural 2G/3G Smartphone Access"
        ],
        techStack: ["React", "Vite", "Razorpay NGO Suite", "Cloudinary", "Tailwind CSS"],
        tags: ["React", "Vite", "Razorpay", "Tailwind CSS", "Bilingual i18n"],
        metrics: {
            livesImpacted: "100,000+ Meals",
            trustScore: "Verified NGO (2005)",
            taxStatus: "80G Certified"
        },
        highlights: [
            "Automated 80G tax receipt generation delivered via email and WhatsApp",
            "Bilingual Hindi and English interface for all age demographics",
            "Live streaming integration for daily temple aarti and festivals",
            "Mobile-first architecture tested on low-bandwidth rural networks"
        ]
    },
    {
        id: "goshuttles",
        title: "GoShuttles Transit App",
        client: "GoShuttles Mobility Technologies",
        tagline: "High-Velocity Airport & Intercity Smart Shuttle Transit App",
        url: "https://www.goshuttles.in/",
        liveUrl: "https://www.goshuttles.in/",
        displayUrl: "goshuttles.in",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
        category: "Mobility & Logistics",
        badge: "Smart Transit App",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        previewImage: "/previews/goshuttles.png",
        image: "/previews/goshuttles.png",
        svgPreview: "/previews/goshuttles.svg",
        description: "A fast, predictable airport and intercity shuttle booking web application with real-time seat selection, automated driver dispatch, and instant digital tickets.",
        fullDescription: "Travelers struggle with chaotic, overpriced cab bookings at airport terminals. GoShuttles provides a modern booking interface where users can lock fixed-price seats on scheduled shuttle routes with instant SMS tickets and live bus location tracking.",
        features: [
            "Fixed-Price Instant Seat Reservation & Multi-Stop Route Timetable",
            "Live WebSockets Vehicle Telematics & Fleet Dispatch Dashboard",
            "Contactless Digital QR Boarding Pass with Real-Time ETA Push Alerts",
            "Corporate Commute Roster Management & Business Employee Pooling",
            "Driver Navigation Optimization & Route Telemetry Efficiency"
        ],
        techStack: ["React", "React Native", "Node.js", "Socket.io", "Mapbox", "Tailwind CSS"],
        tags: ["React", "Node.js", "Socket.io", "Mapbox", "Tailwind CSS"],
        metrics: {
            ridesCompleted: "250,000+",
            trackingLatency: "< 200ms",
            appRating: "4.8 ★"
        },
        highlights: [
            "Instant booking flow completed in under 45 seconds",
            "Live GPS bus tracking and dynamic arrival time updates",
            "QR-code ticketing for seamless driver verification",
            "Fleet management dashboard for route planning and revenue analytics"
        ]
    },
    {
        id: "goayodhya",
        title: "GoAyodhya Pilgrimage",
        client: "GoAyodhya Travel Network",
        tagline: "Premier Ayodhya Ram Mandir Pilgrimage, Tours & Heritage Stays",
        url: "https://goayodhya.org/",
        liveUrl: "https://goayodhya.org/",
        displayUrl: "goayodhya.org",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-red-400 bg-red-500/10 border-red-500/30",
        category: "Travel & Hospitality",
        badge: "Pilgrimage Tourism",
        badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
        previewImage: "/previews/goayodhya.png",
        image: "/previews/goayodhya.png",
        svgPreview: "/previews/goayodhya.svg",
        description: "A dedicated pilgrimage travel and tour agency platform for Ayodhya, Varanasi, and Uttar Pradesh spiritual circuits. Provides bespoke Ram Mandir VIP darshan coordination, vetted heritage hotel stays, certified local guides, and luxury transit.",
        fullDescription: "A curated digital travel concierge for pilgrims and tourists visiting Ayodhya, offering verified hotel accommodations, guided heritage walks, and seamless darshan booking assistance.",
        features: [
            "Bespoke Ayodhya Ram Mandir VIP Darshan & Saryu Aarti Package Itineraries",
            "Vetted Heritage Hotel Directory with Instant Reservation & Ground Support",
            "Custom Multi-City Spiritual Circuit Builder (Ayodhya + Varanasi + Prayagraj)",
            "Multilingual Support for Domestic & International NRI Pilgrims",
            "Direct 24/7 WhatsApp Concierge & Certified Local Tour Guides"
        ],
        techStack: ["React", "Next.js", "Tailwind CSS", "WhatsApp Cloud", "Stripe & Razorpay"],
        tags: ["React", "Next.js", "Tailwind CSS", "WhatsApp API", "Stripe"],
        metrics: {
            pilgrimsServed: "50,000+",
            satisfactionRate: "99.4%",
            hotelPartners: "40+ Vetted"
        },
        highlights: [
            "Comprehensive directory of verified accommodations in Ayodhya",
            "Custom itinerary builder for spiritual and historical city tours",
            "Direct WhatsApp inquiry and booking concierge",
            "Optimized for high traffic spikes during major religious festivals"
        ]
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
        image: "/previews/mathsheet.png",
        svgPreview: "/previews/mathsheet.svg",
        actionText: "Launch MathSheet",
        tech: ["React 19", "Cloudflare Pages", "KaTeX"]
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
        image: "/previews/inkleaf.png",
        svgPreview: "/previews/inkleaf.svg",
        actionText: "Launch InkLeaf",
        tech: ["AES-256", "KaTeX", "IndexedDB", "WASM"]
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
        image: "/previews/rentflow.png",
        svgPreview: "/previews/rentflow.svg",
        actionText: "Use Calculator",
        tech: ["React", "Analytics Engine"]
    }
];
