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
    },
    {
        id: "advenjeans",
        title: "Adven Jeans B2B Wholesale",
        client: "Adven Jeanswear (Shri Balaji Garments)",
        tagline: "High-Volume B2B Denim Manufacturer & Catalog Architecture",
        url: "https://advenjeans.in",
        liveUrl: "https://advenjeans.in",
        displayUrl: "advenjeans.in",
        isLive: true,
        status: "MIGRATED FROM WORDPRESS / LIVE",
        statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
        category: "WordPress Migration",
        badge: "100% Zero-Loss WP Migration",
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
        previewImage: "/previews/advenjeans.png",
        image: "/previews/advenjeans.png",
        svgPreview: "/previews/advenjeans.png",
        description: "Migrated 1,500+ denim design patterns and 21 years of manufacturing inventory from a bloated WooCommerce store to a custom, sub-400ms Astro & React architecture with 100% zero data loss and direct WhatsApp RFQ checkout.",
        fullDescription: "Adven Jeans is an established Delhi denim manufacturing giant with 1M+ jeans produced and 50+ retail partners. Their legacy WordPress/WooCommerce site suffered from heavy database bottlenecks and 4.8s mobile load times. Techcure executed a 100% zero-data-loss migration to a custom Astro/React architecture with automated WebP image pipelines, WhatsApp bulk order routing, and edge caching.",
        features: [
            "100% Zero-Data-Loss Migration from Legacy WooCommerce with URL Slug & SEO Preservation",
            "High-Speed B2B Catalog Visualizer Rendering 1,500+ Denim SKUs in Sub-300ms",
            "Direct Factory Wholesale Inquiry Engine Routing Buyer Specs to WhatsApp API",
            "Optimized Responsive Mobile Experience for Indian Wholesale Garment Distributors",
            "Zero Plugin Dependency with 10x Reduction in Server Compute & Hosting Overheads"
        ],
        techStack: ["Astro", "React", "Tailwind CSS", "Cloudflare Edge", "WhatsApp API"],
        tags: ["WordPress Migration", "WordPress to React", "Zero Data Loss", "B2B E-Commerce", "Astro"],
        metrics: {
            loadTime: "0.4s (From 4.8s)",
            conversion: "+62% Wholesale Leads",
            migrationLoss: "0% (Zero Data Loss)"
        },
        highlights: [
            "Migrated 1,500+ design patterns and product SKUs with 100% fidelity",
            "Preserved all legacy product URLs and canonical tags, protecting Google organic rankings",
            "Eliminated 24 vulnerable WordPress plugins and heavy SQL database overhead",
            "Implemented direct factory-to-retailer WhatsApp RFQ (Request for Quote) system"
        ]
    },
    {
        id: "drishtiedu",
        title: "Drishti Tutorial Pvt. Ltd.",
        client: "Drishti Tutorial Pvt. Ltd.",
        tagline: "North Bihar's Premier EdTech & Competitive Examination Architecture",
        url: "https://drishtiedu.in",
        liveUrl: "https://drishtiedu.in",
        displayUrl: "drishtiedu.in",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        category: "EdTech & Media",
        badge: "20+ Yrs Academic Excellence",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        previewImage: "/previews/drishtiedu.png",
        image: "/previews/drishtiedu.png",
        svgPreview: "/previews/drishtiedu.png",
        description: "A high-performance modern Astro v7 digital learning portal and ExamRadar platform serving 25,000+ students and competitive aspirants across Bihar for UPSC, BPSC, SSC, and Banking.",
        fullDescription: "Founded in 2005 under the visionary mentorship of Rajiv Ranjan in Muzaffarpur, Drishti Tutorial has guided over 5,000 students to government selections. Techcure engineered an ultra-fast, lightweight digital campus featuring the interactive ExamRadar syllabus tracker, online admissions, faculty dossiers, and digital study resources engineered to run flawlessly on low-bandwidth Tier-2 and Tier-3 mobile networks.",
        features: [
            "Astro v7 Static Site Architecture with Edge Rendering for Sub-300ms Interactive Load",
            "Interactive ExamRadar Tracking Upcoming UPSC, BPSC, Railway & SSC Notifications",
            "Digital Admission Portal with Instant Student Document Upload & Verification",
            "Bilingual Hindi & English Interface Tailored for Regional North Bihar Aspirants",
            "Zero-Lag Resource Library Delivering Curated PDF Notes & Previous Year Questions"
        ],
        techStack: ["Astro 7", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
        tags: ["Astro 7", "React", "EdTech", "Bilingual i18n", "Tier-2/3 Network Optimized"],
        metrics: {
            studentsServed: "25,000+ Students",
            selections: "5,000+ Selections",
            speed: "< 300ms First Paint"
        },
        highlights: [
            "Lightweight client bundles optimized for 2G/3G mobile connectivity in regional districts",
            "Interactive ExamRadar alerting students to critical exam deadlines and application windows",
            "Comprehensive course curriculum viewer spanning Foundation, General Studies, and Test Series",
            "Direct counselor WhatsApp dispatch with automated scholarship inquiry capture"
        ]
    },
    {
        id: "presskitaquat",
        title: "Press Ki Taquat National Daily",
        client: "Press Ki Taquat Media Group",
        tagline: "CBC / DAVP Approved Multi-Edition Hindi & Punjabi Digital Newspaper",
        url: "https://presskitaquat.com",
        liveUrl: "https://presskitaquat.com",
        displayUrl: "presskitaquat.com",
        isLive: true,
        status: "MIGRATED FROM WORDPRESS / LIVE",
        statusColor: "text-red-400 bg-red-500/10 border-red-500/30",
        category: "WordPress Migration",
        badge: "100% Zero-Loss WP Migration",
        badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
        previewImage: "/previews/presskitaquat.png",
        image: "/previews/presskitaquat.png",
        svgPreview: "/previews/presskitaquat.png",
        description: "Migrated from a crash-prone WordPress newspaper installation to a blazing fast React & Astro digital news architecture with zero data loss, interactive E-Paper viewer, and multi-edition switching across Delhi, Patiala, and Chandigarh.",
        fullDescription: "Press Ki Taquat is an influential daily newspaper accredited by CBC/DAVP Government of India. Their legacy WordPress backend suffered catastrophic server outages under breaking news traffic surges and fragile PDF e-paper plugins. Techcure performed a meticulous 100% zero-data-loss migration, porting every article and e-paper archive into a headless, edge-cached React architecture.",
        features: [
            "100% Zero-Data-Loss Migration from Legacy WordPress CMS with Slug Preservation",
            "High-Velocity Digital E-Paper Viewer with Vector Zoom & Edition Date Picker",
            "Multi-Edition Editorial Switcher (Delhi, Patiala, Chandigarh, Punjab/Haryana State)",
            "Instant Breaking News Carousel with Sub-50ms Edge Cache Invalidation",
            "Optimized WebP Image Delivery Reducing Mobile Data Consumption by 75%"
        ],
        techStack: ["React", "Astro", "Tailwind CSS", "Cloudflare Edge", "PDF.js"],
        tags: ["WordPress Migration", "WordPress to React", "Zero Data Loss", "Digital Journalism", "E-Paper Engine"],
        metrics: {
            dataLoss: "0% (Zero Data Loss)",
            trafficCapacity: "100,000+ Concurrent",
            hostingCost: "-70% Server Costs"
        },
        highlights: [
            "Preserved 10+ years of digital news archives and Google News ranking signals",
            "Interactive high-definition digital E-Paper reader with pinch-to-zoom on mobile",
            "Sub-500ms First Contentful Paint even on busy mobile cellular networks",
            "Eliminated WordPress security vulnerabilities (SQL injection, plugin exploit vectors)"
        ]
    },
    {
        id: "ubindianews",
        title: "UB India News Portal",
        client: "UB India News Media Network",
        tagline: "High-Traffic Hindi Breaking News, Politics & Investigative Journalism",
        url: "https://ubindianews.com",
        liveUrl: "https://ubindianews.com",
        displayUrl: "ubindianews.com",
        isLive: true,
        status: "MIGRATED FROM WORDPRESS / LIVE",
        statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        category: "WordPress Migration",
        badge: "100% Zero-Loss WP Migration",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        previewImage: "/previews/ubindianews.png",
        image: "/previews/ubindianews.png",
        svgPreview: "/previews/ubindianews.png",
        description: "Full enterprise migration of high-traffic Hindi news portal from a slow WordPress monolith to a resilient React edge architecture. Achieved 100% zero data loss, sub-60ms TTFB, and flawless Google Discover SEO compliance.",
        fullDescription: "UB India News publishes fast-moving state and national political updates and investigative reports across Bihar and India. In WordPress, high traffic surges during elections repeatedly triggered database timeouts and slow 504 gateway errors. Techcure migrated the entire editorial repository into an edge-rendered React system with structured Google News schema and zero data loss.",
        features: [
            "Complete WordPress Database Migration with 100% Zero Data Loss & Intact Metadata",
            "Google Discover & Google News AMP/Schema Optimization for Instant Crawling",
            "Devanagari Font Subsetting & WebP Compression for Sub-60ms Edge Response",
            "Real-Time Breaking News Ticker with Automated Webhook Cache Purging",
            "Serverless High-Concurrency Architecture Handling Millions of Monthly Pageviews"
        ],
        techStack: ["React", "Next.js / Astro", "Tailwind CSS", "Redis Cache", "Cloudflare CDN"],
        tags: ["WordPress Migration", "WordPress to React", "Zero Data Loss", "News Portal", "Edge Caching"],
        metrics: {
            ttfb: "65ms (From 2.8s)",
            uptime: "99.99% During Surges",
            dataFidelity: "100% Zero Loss"
        },
        highlights: [
            "Migrated tens of thousands of Hindi articles with zero broken links or 404s",
            "Instantaneous Google Discover indexation through automated structured schema",
            "Zero server crashes during intense regional election breaking news peaks",
            "Monetization-ready ad slot placements without Cumulative Layout Shift (CLS: 0.0)"
        ]
    },
    {
        id: "ramarshpalace",
        title: "Hotel Ramarsh Palace Luxury Stays",
        client: "Hotel Ramarsh Palace (Ayodhya)",
        tagline: "Luxury Boutique Hotel on Rampath, Ranopali, Ayodhya near Ram Janmabhoomi",
        url: "https://ramarshpalace.com",
        liveUrl: "https://ramarshpalace.com",
        displayUrl: "ramarshpalace.com",
        isLive: true,
        status: "MIGRATED FROM WORDPRESS / LIVE",
        statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        category: "WordPress Migration",
        badge: "100% Zero-Loss WP Migration",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        previewImage: "/previews/ramarshpalace.png",
        image: "/previews/ramarshpalace.png",
        svgPreview: "/previews/ramarshpalace.png",
        description: "Migrated from a sluggish, generic WordPress hotel theme to a Next.js 15 App Router architecture with custom direct room booking, WhatsApp VIP concierge, and 0% OTA commission model.",
        fullDescription: "Hotel Ramarsh Palace is a 12-room luxury hotel located on Rampath, Ranopali in Ayodhya (just 1.8 km from Shri Ram Janmabhoomi Mandir). Their previous WordPress site had slow booking engines and poor mobile booking conversion, forcing them to surrender 20% commissions to OTAs. Techcure rebuilt the platform on Next.js 15, integrating direct WhatsApp reservation workflows, real-time suite showcase, and pure vegetarian dining menus.",
        features: [
            "Zero-Data-Loss Migration from Legacy WordPress Hotel Site with URL Canonical Preservation",
            "Direct 0% OTA Commission Booking Engine Slashing Intermediary Commission Fees",
            "Interactive Room & Suite Showcase with High-Res Image Galleries & Amenity Grids",
            "Rampath / Ram Janmabhoomi Distance & Pilgrim Transit Visualizer",
            "Instant WhatsApp VIP Concierge for Seamless Pilgrim Check-in and Darshan Assistance"
        ],
        techStack: ["Next.js 15", "React 19", "Tailwind CSS", "WhatsApp Cloud API", "Cloudflare"],
        tags: ["WordPress Migration", "WordPress to Next.js", "Zero Data Loss", "Hospitality", "Ayodhya HQ"],
        metrics: {
            directBookings: "+78% Direct Inquiries",
            commissionSaved: "0% OTA Fee on Direct",
            speed: "0.3s First Contentful Paint"
        },
        highlights: [
            "Engineered 1-click WhatsApp VIP booking flow converting pilgrims in under 45 seconds",
            "Showcases 12 luxury rooms, executive suites, and on-site pure vegetarian dining",
            "Optimized local Ayodhya SEO driving high-intent pilgrim searches directly to the hotel",
            "100% zero data loss during content migration with polished luxury visual branding"
        ]
    },
    {
        id: "helpsafety",
        title: "Help Safety and Care Foundation",
        client: "Help Safety and Care Foundation",
        tagline: "Ayodhya Sacred Corridor Seva, Disaster Relief & Public Welfare NGO",
        url: "https://helpsafety.org",
        liveUrl: "https://helpsafety.org",
        displayUrl: "helpsafety.org",
        isLive: true,
        status: "LIVE PRODUCTION",
        statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        category: "NGO & Cultural Heritage",
        badge: "80G Certified Non-Profit",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        previewImage: "/previews/helpsafety.png",
        image: "/previews/helpsafety.png",
        svgPreview: "/previews/helpsafety.png",
        description: "An ultra-fast Astro & React digital welfare platform powering Ayodhya Sacred Corridor pilgrim seva, free medical camps, disaster relief, and instant Section 80G tax-deductible donation receipts.",
        fullDescription: "Help Safety and Care Foundation operates active community assistance missions across Ayodhya Dham and North India, providing food prasad, emergency healthcare, and rural welfare. Techcure engineered an accessible, transparent digital foundation portal featuring instant Section 80G tax receipt generation, volunteer mobilization workflows, and rich impact documentation.",
        features: [
            "Astro Modern Island Architecture with Instant 80G Tax-Deductible Donation Checkout",
            "Interactive Ayodhya Sacred Corridor Seva Initiative & Medical Camp Operations Tracker",
            "Volunteer Registration & Community Emergency Assistance Dispatch Pipeline",
            "Automated WhatsApp & Email Donation Confirmation with Instant PDF Receipts",
            "100/100 Lighthouse Performance with Zero Third-Party Advertising or Tracking Bloat"
        ],
        techStack: ["Astro", "React", "Tailwind CSS", "Razorpay NGO Suite", "Cloudflare Pages"],
        tags: ["Astro", "React", "NGO & Welfare", "Ayodhya Seva", "80G Tax Exemption"],
        metrics: {
            mealsServed: "100,000+ Distributed",
            performance: "100 / 100 Lighthouse",
            taxStatus: "80G Certified"
        },
        highlights: [
            "Instant Section 80G tax exemption receipt delivery via automated pipeline",
            "Transparent fund allocation visualizer showcasing rural and pilgrim welfare projects",
            "Mobile-first responsive design ensuring effortless donations from any smartphone",
            "Zero server latency with global edge delivery on Cloudflare Pages"
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
