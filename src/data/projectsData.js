export const PRODUCTS = [
    {
        id: "inkleaf",
        title: "InkLeaf Vault",
        category: "Zero-Knowledge Security & Encrypted Notes",
        description: "A private, zero-knowledge markdown notebook and knowledge vault where your data is encrypted directly on your device using AES-256-GCM before it ever touches a server.",
        fullDescription: "Most note-taking apps store your sensitive thoughts and passwords in plaintext on their databases. InkLeaf was engineered to change that. Built with client-side WebCrypto and Argon2id key derivation, your master password never leaves your browser. Even if our servers are breached, your data looks like random digital static to anyone without your private key. Features instant markdown editing, offline storage, and zero-telemetry sync.",
        liveUrl: "https://inkleaf.online",
        displayUrl: "inkleaf.online",
        image: "/previews/inkleaf.png",
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
        id: "mathsheet",
        title: "MathSheet Engine",
        category: "Sub-Millisecond Educational Math Generator",
        description: "A high-velocity, automated math worksheet and quiz generator for educators and parents, rendering complex arithmetic and algebra problems in sub-milliseconds.",
        fullDescription: "Teachers and parents waste hours manually formatting math exercises. MathSheet generates hundreds of customized, print-ready math worksheets with instant answer keys in under 50 milliseconds. Powered by client-side KaTeX rendering and deterministic mathematical seeds, it runs completely offline with zero loading spinners.",
        liveUrl: "https://mathsheet.pages.dev",
        displayUrl: "mathsheet.pages.dev",
        image: "/previews/mathsheet.png",
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
    },
    {
        id: "rentflow",
        title: "RentFlow PropTech",
        category: "Real Estate & Automated Tenant Management",
        description: "A streamlined property rental platform that automates tenant onboarding, digital lease signing, maintenance ticketing, and automated rent collections.",
        fullDescription: "Built for independent landlords and property managers tired of bloated, expensive real estate software. RentFlow delivers instant tenant screening, automated payment reminders via WhatsApp, and live cash flow dashboards without complicated setup.",
        liveUrl: "https://techcurehq.com/products",
        displayUrl: "techcurehq.com/products",
        image: "/previews/rentflow.png",
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
    }
];

export const PORTFOLIO = [
    {
        id: "wicom",
        title: "WiCom Telecom & Broadband",
        client: "WiCom Networks Pvt. Ltd.",
        category: "Telecommunications & Customer Self-Service Portal",
        description: "A lightning-fast broadband billing and plan renewal web application serving thousands of active fiber optic subscribers.",
        fullDescription: "WiCom needed to replace a slow legacy portal that caused frequent customer drop-offs during monthly recharge cycles. Techcure re-architected the portal from scratch using React and Edge caching. The result: billing page load times dropped from 4.2 seconds to 0.4 seconds, and payment completion rates increased by 44%.",
        liveUrl: "https://wicom.in",
        displayUrl: "wicom.in",
        image: "/previews/wicom.png",
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
        category: "Vedic Calculation & Planetary Position Engine",
        description: "A precision Vedic astrological calculation suite delivering sub-second planetary ephemeris data, Kundli charts, and auspicious Muhurat timelines.",
        fullDescription: "Vedic astrological calculations require complex astronomical formulas that traditionally choke browser main threads. Techcure engineered a lightweight algorithmic engine that calculates planetary coordinates, nakshatra divisions, and visual horoscope charts instantly with zero server lag.",
        liveUrl: "https://snpeethamayodhya.org/build",
        displayUrl: "snpeethamayodhya.org/build",
        image: "/previews/jyotish.png",
        tags: ["React", "Vedic Algorithms", "SVG Canvas", "Edge Compute", "Bilingual UI"],
        metrics: {
            impact: "Sub-Second Chart Rendering",
            speed: "< 80ms Calculation",
            scale: "10,000+ Daily Astrological Calculations"
        },
        highlights: [
            "Real-time North and South Indian Kundli chart generation",
            "Accurate solar and lunar eclipse countdowns and planetary transits",
            "Bilingual interface supporting Hindi and English seamlessly",
            "Export beautiful high-resolution horoscope charts as PDFs"
        ]
    },
    {
        id: "snpeetham-ngo",
        title: "Sri Nimbarka Peetham Foundation Portal",
        client: "Sri Nimbarka Peetham Foundation",
        category: "Spiritual Heritage & Digital Pilgrimage Management",
        description: "An official spiritual foundation portal managing community annakshetra food drives, Vedic educational programs, and worldwide devotee donations.",
        fullDescription: "Serving thousands of devotees across the globe, this platform powers continuous live darshan streaming, event schedules, transparent digital donation tracking, and voluntary community service programs.",
        liveUrl: "https://snpeethamayodhya.org",
        displayUrl: "snpeethamayodhya.org",
        image: "/previews/snpeetham.png",
        tags: ["React 19", "Tailwind CSS", "Donation Gateway", "Multilingual", "Fast Delivery"],
        metrics: {
            impact: "Zero-Downtime Festival Traffic",
            speed: "0.5s Page Load",
            scale: "250,000+ Devotees Served"
        },
        highlights: [
            "Direct 80G tax-exempt donation receipts generated instantly",
            "Daily spiritual discourses, event calendar, and live streams",
            "Multilingual devotee support with mobile-first navigation",
            "Secure volunteer coordination and food drive scheduling"
        ]
    },
    {
        id: "goshuttles",
        title: "GoShuttles Transit Network",
        client: "GoShuttles Mobility",
        category: "Airport Transit & Inter-City Shuttle Booking",
        description: "A high-conversion inter-city cab and airport shuttle reservation system with automated route planning and live driver dispatch.",
        fullDescription: "GoShuttles required a rock-solid booking web app capable of handling surge traffic during holiday transit peaks. Techcure built a clean 3-step booking flow with automated GPS distance calculations, instant fare breakdown, and WhatsApp booking confirmations.",
        liveUrl: "https://www.goshuttles.in/",
        displayUrl: "goshuttles.in",
        image: "/previews/goshuttles.png",
        tags: ["React", "Geolocation API", "Tailwind CSS", "Node.js", "WhatsApp Gateway"],
        metrics: {
            impact: "3x Faster Booking Flow",
            speed: "0.6s Time-to-Interactive",
            scale: "15,000+ Completed Rides"
        },
        highlights: [
            "3-step frictionless booking without forced account creation",
            "Automated driver route assignment and fare calculation",
            "Instant WhatsApp driver tracking and receipt delivery",
            "Operator dashboard with live fleet availability mapping"
        ]
    },
    {
        id: "goayodhya",
        title: "GoAyodhya Pilgrimage Tours",
        client: "Ayodhya Heritage Tourism",
        category: "Cultural Tourism & Heritage Guide Platform",
        description: "A comprehensive digital guide and curated booking portal for cultural tours, historic temple circuits, and certified local guides in Ayodhya.",
        fullDescription: "Serving visitors from across India and abroad, GoAyodhya offers curated tour itineraries, verified hotel bookings, and authentic temple Darshan schedules. Engineered with mobile-first responsiveness to ensure effortless browsing even on low-bandwidth mobile networks.",
        liveUrl: "https://techcurehq.com/portfolio",
        displayUrl: "goayodhya.in",
        image: "/previews/goayodhya.png",
        tags: ["React", "Tailwind CSS", "SEO Suite", "Multi-Language", "Fast Booking"],
        metrics: {
            impact: "Top 3 Google SERP Ranking",
            speed: "0.5s Load Time",
            scale: "100k+ Visitors Guided"
        },
        highlights: [
            "Curated audio-supported temple walkthroughs and heritage routes",
            "Direct guide reservation with verified government accreditation",
            "Optimized for 3G/4G connectivity with tiny payload sizes",
            "Comprehensive local dining and transport recommendations"
        ]
    }
];

export const FREE_APPS = [
    {
        id: "mathsheet",
        name: "MathSheet Worksheet Generator",
        description: "Generate customized, print-ready math worksheets for school children in seconds. Completely free with automated answer keys.",
        category: "Education & Productivity",
        url: "https://mathsheet.pages.dev",
        tags: ["Instant Math", "Print Ready", "Zero Ads"],
        featured: true
    },
    {
        id: "inkleaf",
        name: "InkLeaf Encrypted Notes",
        description: "Write and store private thoughts with local AES-256 encryption. No signup required, your master key stays on your computer.",
        category: "Privacy & Writing",
        url: "https://inkleaf.online",
        tags: ["Encrypted Notes", "Markdown", "Local-First"],
        featured: true
    },
    {
        id: "jyotish-calc",
        name: "Vedic Kundli & Muhurat Calculator",
        description: "Calculate Vedic horoscopes, planetary degrees, and auspicious timings with accurate mathematical ephemeris data.",
        category: "Astrology & Tools",
        url: "https://snpeethamayodhya.org/build",
        tags: ["Vedic Engine", "Horoscope", "Accurate Charts"],
        featured: false
    }
];
