export const CASE_STUDIES = {
    mathsheet: {
        id: "mathsheet",
        title: "MathSheet",
        subtitle: "Deterministic Algorithmic Math Worksheet Engine & LaTeX Proof Compiler",
        tagline: "Sub-25ms client-side mathematical problem synthesis, multi-set exam variation, and instant vector print output with zero server dependency.",
        category: "EdTech & Algorithmic Computing",
        client: "Techcure Open Engineering Initiative",
        timeline: "Production Architecture",
        role: "Deterministic Engine Design, Algorithm Synthesis & Frontend Architecture",
        liveUrl: "https://mathsheet.pages.dev",
        displayUrl: "mathsheet.pages.dev",
        previewImage: "/previews/mathsheet.png",
        techStack: ["Astro 7", "React 19", "TypeScript", "Tailwind CSS 4", "Mulberry32 PRNG", "KaTeX / LaTeX", "Cloudflare Edge"],
        
        benchmarks: [
            { label: "Synthesis Latency", value: "< 25ms", detail: "Instant client-side generation" },
            { label: "Curriculum Engines", value: "74+ Modules", detail: "K-12 to Advanced JEE Calculus" },
            { label: "Lighthouse Performance", value: "100 / 100", detail: "Clean static edge architecture" },
            { label: "Student Privacy", value: "100% Local", detail: "Zero trackers, zero cookies" }
        ],

        realWorldProblem: {
            title: "The Crisis of Bloated EdTech & Manual Exam Preparation",
            description: "Math educators, competitive exam coaching centers, and parents face a severe efficiency bottleneck when creating customized practice material and balanced exam sets:",
            painPoints: [
                {
                    heading: "Exhaustive Manual Paper Drafting",
                    desc: "Teachers spend 5 to 10 hours weekly typing equations, manually checking arithmetic validity, and authoring separate step-by-step solution proofs."
                },
                {
                    heading: "Exam Cheating in Classroom Sets",
                    desc: "Creating multi-variant test papers (Set A, Set B, Set C) with identical difficulty distribution requires recalculating every single number and equation from scratch."
                },
                {
                    heading: "Slow, Paywalled, Ad-Riddled Legacy Platforms",
                    desc: "Existing worksheet sites are laden with invasive third-party ad networks, pop-ups, slow server-side rendering, and rigid static PDF repositories that cannot be fine-tuned."
                },
                {
                    heading: "Student Privacy & Telemetry Invasions",
                    desc: "Most educational SaaS tools demand mandatory student logins, collecting personal data and tracking activity without academic justification."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Competitive Coaching Centers & JEE Institutes",
                scenario: "Rapidly generate randomized question banks across Matrices, Eigenvalues, Complex Analysis, Coordinate Geometry, and Multivariable Calculus with instant step-by-step proofs."
            },
            {
                title: "K-12 Schools & Classroom Teachers",
                scenario: "Produce balanced multi-set exam papers (Set A, Set B, Set C) in seconds with customized school headers, instructions, and matching teacher answer keys."
            },
            {
                title: "Private Tutors & Academic Mentors",
                scenario: "Target individual student weak spots (e.g. 2-digit multiplication with regrouping, fraction addition with uncommon denominators) with endless fresh problem sheets."
            },
            {
                title: "Parents & Homeschooling Educators",
                scenario: "Print daily practice drills with full answer explanations without expensive recurring subscriptions or digital distractions."
            }
        ],

        architecturalSolution: {
            title: "How Techcure Engineered The Deterministic Fix",
            overview: "We architected MathSheet as a static-first, local-first engine utilizing pure client-side mathematical logic, procedural pseudo-random algorithms, and LaTeX vector typesetting.",
            deepDivePillars: [
                {
                    title: "Mulberry32 PRNG Determinism",
                    desc: "Every worksheet is generated using a 32-bit deterministic seed. The same seed mathematically guarantees 100% reproducible problem sets and identical answer keys across any device, anywhere in the world."
                },
                {
                    title: "74+ Procedural Topic Synthesizers",
                    desc: "From early arithmetic and PEMDAS to Differential Equations and Fourier Series, problems are dynamically computed using constraint-based generative algorithms rather than static database lookups."
                },
                {
                    title: "Step-by-Step LaTeX Proof Compiler",
                    desc: "Integrated KaTeX engine renders mathematically rigorous solution proofs, algebraic derivations, and dynamic SVG geometric diagrams formatted for high-resolution vector printing."
                },
                {
                    title: "Seed Shield & Session Privacy",
                    desc: "Sensitive seed payloads and student histories are isolated in browser session storage. No student data is transmitted, and teacher answer keys remain inaccessible to students."
                }
            ]
        }
    },

    inkleaf: {
        id: "inkleaf",
        title: "InkLeaf",
        subtitle: "Military-Grade Zero-Knowledge Markdown Workspace & Cryptographic Vault",
        tagline: "Argon2id WASM key derivation, non-extractable client AES-256-GCM encryption, CRDT real-time sync, and offline-first IndexedDB persistence.",
        category: "Security & Cryptographic Computing",
        client: "Techcure Cryptographic Labs",
        timeline: "Production Architecture",
        role: "Cryptographic Architecture, Local-First Storage & Real-Time Sync Engine",
        liveUrl: "https://inkleaf.online",
        displayUrl: "inkleaf.online",
        previewImage: "/previews/inkleaf.png",
        techStack: ["React 19", "Argon2id (WASM)", "WebCrypto API (AES-256-GCM)", "Dexie.js (IndexedDB)", "CRDT / Yjs", "KaTeX", "Mermaid.js", "PostgreSQL"],
        
        benchmarks: [
            { label: "Encryption Cipher", value: "AES-256-GCM", detail: "Authenticated client-side cipher" },
            { label: "Key Derivation", value: "Argon2id WASM", detail: "64MB memory cost (OWASP Standard)" },
            { label: "Typing Latency", value: "0ms (Instant)", detail: "Local-first IndexedDB write path" },
            { label: "Cloud Surveillance", value: "0.00%", detail: "Zero plaintext leaves user device" }
        ],

        realWorldProblem: {
            title: "The Vulnerability of Cloud Note-Taking & Centralized Data Storage",
            description: "Modern documentation platforms store unencrypted research, proprietary algorithms, private company financials, and personal journals on corporate servers subject to breaches, insider access, and algorithmic profiling:",
            painPoints: [
                {
                    heading: "Centralized Plaintext Exposure & Cloud Breaches",
                    desc: "Traditional cloud note tools store documents in server databases where leaks, misconfigurations, or third-party subpoenas can expose trade secrets."
                },
                {
                    heading: "Invasive Telemetry & Cloud Surveillance",
                    desc: "Commercial productivity platforms track keystroke telemetry, user activity, and document metadata without explicit user consent."
                },
                {
                    heading: "Offline Failure & Network Latency Penalties",
                    desc: "Web-only document tools freeze without active internet connectivity and introduce lag when rendering complex equations and diagrams."
                },
                {
                    heading: "Inadequate STEM & Mathematical Tooling",
                    desc: "Existing note apps lack sub-frame LaTeX math typesetting and interactive flowchart compilation out of the box."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Security Researchers & Cryptographers",
                scenario: "Maintain confidential threat models, cryptographic proofs, and vulnerability disclosures in an end-to-end encrypted zero-knowledge vault."
            },
            {
                title: "Software Engineers & Systems Architects",
                scenario: "Draft system architecture diagrams with Mermaid.js, document internal API endpoints, and keep technical documentation offline with 0ms typing lag."
            },
            {
                title: "Mathematicians & STEM Academics",
                scenario: "Write lecture notes and research papers with sub-millisecond KaTeX equation rendering, syntax-highlighted code blocks, and vector PDF export."
            },
            {
                title: "Founders & Privacy-Conscious Executives",
                scenario: "Protect proprietary strategic roadmaps, board notes, and investor correspondence backed by dual DEK wrapping and emergency recovery keys."
            }
        ],

        architecturalSolution: {
            title: "The Zero-Knowledge Client Architecture",
            overview: "InkLeaf isolates all cryptographic and editing operations inside the browser's native WebCrypto boundary. Data is encrypted in memory before touching storage or network layers, ensuring the server never possesses plaintext or encryption keys.",
            deepDivePillars: [
                {
                    title: "Argon2id WASM Key Derivation & Dual DEK Wrapping",
                    desc: "Uses WebAssembly Argon2id with 64MB memory cost to derive master keys that wrap a 256-bit AES-GCM Data Encryption Key (DEK). Supports dual wrapping with emergency recovery keys (rec-...) for zero-data-loss recovery."
                },
                {
                    title: "Hardened Non-Extractable CryptoKey Memory",
                    desc: "The AES-256-GCM encryption key is loaded as a non-extractable CryptoKey (extractable: false). Raw key bytes are never written to plaintext localStorage or sessionStorage, neutralizing XSS exfiltration."
                },
                {
                    title: "Local-First IndexedDB & CRDT Sync",
                    desc: "Dexie.js IndexedDB provides instant 0ms local reads/writes, while Yjs CRDT over WebSockets enables real-time peer collaboration and background encrypted synchronization to PostgreSQL."
                },
                {
                    title: "Merkle Tree Integrity & Live STEM Compilers",
                    desc: "Merkle root hashing verifies document integrity against tampering, while integrated KaTeX and Mermaid.js compilers render complex math and flowcharts at 60 FPS."
                }
            ]
        }
    },

    advenjeans: {
        id: "advenjeans",
        title: "Adven Jeans",
        subtitle: "High-Throughput Wholesale B2B Denim Catalog & Zero-Data-Loss WooCommerce Migration",
        tagline: "Migrated 1,500+ denim design patterns and 21 years of manufacturing inventory from bloated WooCommerce to sub-400ms Astro/React with 100% zero data loss.",
        category: "WordPress Migration & B2B E-Commerce",
        client: "Adven Jeanswear (Shri Balaji Garments, Delhi)",
        timeline: "Production Architecture & Live Migration",
        role: "WooCommerce Headless Migration, Catalog Architecture & B2B Wholesale Pipeline",
        liveUrl: "https://advenjeans.in",
        displayUrl: "advenjeans.in",
        previewImage: "/previews/advenjeans.png",
        techStack: ["Astro 5", "React 19", "Tailwind CSS", "Cloudflare Pages", "WebP Media Pipeline", "WhatsApp Cloud API"],
        
        benchmarks: [
            { label: "Migration Data Loss", value: "0.00%", detail: "100% catalog & SKU fidelity preserved" },
            { label: "Page Load Uplift", value: "0.4s (12x Faster)", detail: "Reduced from 4.8s on WooCommerce" },
            { label: "Distributor Leads", value: "+62% Uplift", detail: "Direct WhatsApp RFQ conversions" },
            { label: "Plugin Vulnerabilities", value: "0 Plugins", detail: "Zero PHP/MySQL attack surface" }
        ],

        realWorldProblem: {
            title: "The WooCommerce Scalability Trap in Fast-Moving Apparel Manufacturing",
            description: "With over 1,000,000 jeans manufactured and 50+ retail stockists across India, Adven Jeans was throttled by their legacy WordPress/WooCommerce site. 24 overlapping plugins, slow database queries on variable denim cuts (regular, slim, comfort, stretch), and 4.8s mobile load times were causing wholesale distributors across India to abandon the site before contacting sales:",
            painPoints: [
                {
                    heading: "Massive MySQL Database Query Bloat",
                    desc: "WooCommerce wp_postmeta table ballooned to hundreds of thousands of rows, causing product filter queries across washes, fits, and sizes to take 3+ seconds."
                },
                {
                    heading: "Mobile Drop-offs in Tier-2/3 Wholesale Hubs",
                    desc: "Garment retailers browsing on mobile cellular networks experienced layout shifts, broken thumbnail images, and stalled catalog views."
                },
                {
                    heading: "Constant Plugin Breakages & Maintenance Costs",
                    desc: "Every WordPress core and WooCommerce update risked breaking theme customizations, product filters, and inquiry forms."
                },
                {
                    heading: "Fear of Traffic & SEO Canonical Loss",
                    desc: "Years of indexed Google search rankings for wholesale denim terms were at risk if URL structures changed during migration."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Pan-India Retail Garment Stockists",
                scenario: "Explore high-definition wash textures, fit specifications, and wholesale minimum order quantities (MOQ) in sub-400ms on mobile devices."
            },
            {
                title: "Institutional & Export Apparel Buyers",
                scenario: "Submit structured WhatsApp Request-for-Quotes (RFQ) with exact SKU counts, sizing ratios, and custom branding needs directly to the factory."
            },
            {
                title: "Internal Inventory & Sales Executives",
                scenario: "Update seasonal washes and design patterns without touching fragile WordPress admin panels or risking database corruptions."
            },
            {
                title: "Factory Production Floor Coordinators",
                scenario: "Directly receive verified buyer specs with zero manual transcription errors or lost contact form emails."
            }
        ],

        architecturalSolution: {
            title: "The 100% Zero-Loss Headless Astro/React Architecture",
            overview: "Techcure extracted all legacy WooCommerce catalog items, design tags, and image assets via automated JSON ETL pipelines, rebuilt the frontend on Astro and React with zero plugins, and deployed to Cloudflare Edge with 100% preserved canonical URLs.",
            deepDivePillars: [
                {
                    title: "100% Zero-Data-Loss ETL Pipeline",
                    desc: "Scripted export-transform-load pipeline ported all 1,500+ design patterns, product specifications, wash variants, and metadata without losing a single SKU or corrupting variant relations."
                },
                {
                    title: "Exact URL Slug & Canonical Preservation",
                    desc: "Configured 1-to-1 canonical route parity and 301 redirects, ensuring Adven Jeans maintained 100% of their organic Google search visibility and zero 404 indexing errors."
                },
                {
                    title: "Automated WebP Image Pipeline",
                    desc: "Transcoded legacy high-res denim photographs into responsive WebP srcset formats, slashing image payloads by 78% without loss of fabric texture fidelity."
                },
                {
                    title: "Direct Factory WhatsApp RFQ Engine",
                    desc: "Replaced buggy contact form plugins with a lightweight client-side RFQ modal that pre-formats bulk order inquiries directly into factory sales WhatsApp threads."
                }
            ]
        }
    },

    drishtiedu: {
        id: "drishtiedu",
        title: "Drishti Tutorial Pvt. Ltd.",
        subtitle: "North Bihar's Premier EdTech & Competitive Coaching Examination Architecture",
        tagline: "High-performance Astro v7 learning platform serving 25,000+ students and competitive aspirants across Bihar for UPSC, BPSC, SSC, and Banking.",
        category: "EdTech & Institutional Portal",
        client: "Drishti Tutorial Pvt. Ltd. (Muzaffarpur, Bihar)",
        timeline: "Production Architecture",
        role: "Astro v7 Digital Portal Architecture, ExamRadar Engine & Low-Bandwidth Optimization",
        liveUrl: "https://drishtiedu.in",
        displayUrl: "drishtiedu.in",
        previewImage: "/previews/drishtiedu.png",
        techStack: ["Astro 7", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
        
        benchmarks: [
            { label: "Students Trained", value: "25,000+", detail: "20-year institutional legacy" },
            { label: "Government Selections", value: "5,000+", detail: "UPSC, BPSC, SSC, Railway & Bank" },
            { label: "Interactive Load Time", value: "< 300ms", detail: "Sub-second on Tier-2/3 3G networks" },
            { label: "Surge Uptime", value: "100%", detail: "Zero crashes during exam result releases" }
        ],

        realWorldProblem: {
            title: "Bridging the Digital Divide for Regional Competitive Aspirants",
            description: "Founded in 2005 under the visionary mentorship of Rajiv Ranjan in Muzaffarpur, Drishti Tutorial has guided thousands to civil service selections. However, regional students in North Bihar frequently struggle with slow, clunky coaching websites on erratic mobile cellular connections:",
            painPoints: [
                {
                    heading: "High Network Latency in Tier-2/3 Districts",
                    desc: "Heavy JavaScript platforms freeze on 3G and congested 4G cellular towers, locking students out of timely exam alerts."
                },
                {
                    heading: "Unorganized Exam Notification Windows",
                    desc: "Students miss crucial BPSC, SSC, and Railway application dates because scattered government notifications aren't tracked centrally."
                },
                {
                    heading: "Friction-Riddled Admission Forms",
                    desc: "Paper-heavy enrollment processes forced rural students to travel hours to Muzaffarpur merely to register for batches."
                },
                {
                    heading: "Server Crashes on Exam Days",
                    desc: "Coaching platforms crash under massive traffic spikes when government exam results or answer keys are released."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Competitive Civil Service Aspirants",
                scenario: "Track official notification calendars, download syllabus breakdowns, and access previous years' papers in sub-300ms."
            },
            {
                title: "Enrolling Students & Parents",
                scenario: "Explore Foundation, General Studies, and Test Series programs with transparent fee structures and 1-click digital enrollment."
            },
            {
                title: "Academic Faculty & Counselors",
                scenario: "Manage student inquiries, verify regional scholarship qualifications, and broadcast batch start dates via WhatsApp."
            },
            {
                title: "Drishti Alumni Network",
                scenario: "Engage with mentoring programs and celebrate recent UPSC/BPSC qualifying success stories."
            }
        ],

        architecturalSolution: {
            title: "Lightweight Astro v7 Island Architecture",
            overview: "Techcure engineered an ultra-fast digital campus leveraging Astro's zero-JS-by-default architecture, delivering instant page loads on any device without server lag.",
            deepDivePillars: [
                {
                    title: "Astro v7 Zero-Runtime Core",
                    desc: "Compiles pages into pure static HTML with partial hydration, keeping initial bundle payloads under 45KB for instant rendering on low-cost Android phones."
                },
                {
                    title: "Interactive ExamRadar Tracker",
                    desc: "Integrated live countdown widget tracking upcoming UPSC, BPSC, SSC CGL, and Railway recruitment cycles with instant syllabus downloads."
                },
                {
                    title: "Streamlined WhatsApp Admissions Pipeline",
                    desc: "Enables instant student batch registration and counselor routing without requiring complex logins or app store downloads."
                },
                {
                    title: "Bilingual Devanagari Optimization",
                    desc: "Optimized Hindi & English bilingual typography with localized regional terminology tailored specifically for North Bihar aspirants."
                }
            ]
        }
    },

    presskitaquat: {
        id: "presskitaquat",
        title: "Press Ki Taquat",
        subtitle: "CBC/DAVP Approved National Daily Newspaper & High-Traffic Digital E-Paper Portal",
        tagline: "Migrated 10+ years of Hindi & Punjabi breaking news and digital e-papers from a failing WordPress database to a high-concurrency edge architecture with 100% zero data loss.",
        category: "WordPress Migration & Digital Media",
        client: "Press Ki Taquat Media Group (Patiala, Delhi, Chandigarh)",
        timeline: "Production Architecture & Live Migration",
        role: "High-Throughput News Portal Architecture, E-Paper Engine & Zero-Downtime WP Migration",
        liveUrl: "https://presskitaquat.com",
        displayUrl: "presskitaquat.com",
        previewImage: "/previews/presskitaquat.png",
        techStack: ["React 19", "Astro", "Tailwind CSS", "PDF.js E-Paper Viewer", "Cloudflare CDN", "Devanagari Font Subsetting"],
        
        benchmarks: [
            { label: "Data Loss Guarantee", value: "0.00%", detail: "All articles & editions migrated intact" },
            { label: "Traffic Concurrency", value: "100,000+", detail: "Handles viral election traffic spikes" },
            { label: "First Contentful Paint", value: "0.38s", detail: "Sub-400ms across mobile networks" },
            { label: "Hosting Overhead", value: "-70% Cost", detail: "Eliminated dedicated MySQL VPS clusters" }
        ],

        realWorldProblem: {
            title: "The Crisis of Crashing WordPress News Portals Under Breaking Traffic",
            description: "As an accredited CBC/DAVP national newspaper across Delhi, Patiala, and Chandigarh, Press Ki Taquat suffered frequent server crashes during breaking news. Their legacy WordPress monolith was throttled by 10+ years of MySQL post records, heavy newspaper themes, and sluggish PDF e-paper readers:",
            painPoints: [
                {
                    heading: "Server Crashes on Breaking News Surges",
                    desc: "When major political news broke, traffic spikes triggered 504 Gateway Timeouts as hundreds of simultaneous visitors overwhelmed the WordPress PHP-FPM process pool."
                },
                {
                    heading: "Broken E-Paper Reader Experience",
                    desc: "Legacy PDF reader plugins were slow, crashed mobile browsers, and required visitors to download massive 20MB raw PDF files."
                },
                {
                    heading: "Tens of Thousands of Fragile Post Slugs",
                    desc: "A decade of published articles, court reports, and regional news had established Google News indexing that would be devastated if slugs were altered."
                },
                {
                    heading: "Crippling Dedicated Server Hosting Bills",
                    desc: "The newspaper was forced to pay escalating monthly fees for high-RAM VPS servers just to keep WordPress from falling over."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Daily Hindi & Punjabi Readers",
                scenario: "Consume breaking local and national news instantly with sub-second page transitions and zero layout shifts on 4G/5G mobile."
            },
            {
                title: "Digital E-Paper Subscribers",
                scenario: "Flip through high-resolution daily printed editions across Patiala, Delhi, and Chandigarh with interactive vector zoom and date archives."
            },
            {
                title: "Government & DAVP Advertising Regulators",
                scenario: "Verify official publication notices and DAVP advertisements on a reliable, government-compliant platform with 99.99% uptime."
            },
            {
                title: "Editorial Desk Journalists",
                scenario: "Publish breaking bulletins that propagate across global CDN edge nodes in under 5 seconds."
            }
        ],

        architecturalSolution: {
            title: "Edge-Rendered Headless News Architecture",
            overview: "Techcure extracted the entire MySQL editorial database with 100% data fidelity, rebuilt the portal on React and Astro edge infrastructure, and implemented an optimized vector E-Paper engine.",
            deepDivePillars: [
                {
                    title: "100% Zero-Data-Loss Archive Extraction",
                    desc: "Migrated 10+ years of published articles, author records, category hierarchies, and embedded images with 0% data loss and strict schema validation."
                },
                {
                    title: "Vector Canvas E-Paper Viewer",
                    desc: "Engineered a client-side tiled rendering engine using PDF.js that streams high-res edition pages incrementally, cutting mobile data usage from 20MB to under 1.2MB per issue."
                },
                {
                    title: "Multi-Edition Dynamic Switcher",
                    desc: "Built seamless regional switching between Delhi, Patiala, and Chandigarh editions with persistent reader preferences and instant edition archive lookup."
                },
                {
                    title: "Edge Invalidation & Micro-Caching",
                    desc: "Configured Cloudflare edge rules with stale-while-revalidate caching, allowing the site to withstand 100,000+ concurrent visitors while keeping hosting bills below $20/month."
                }
            ]
        }
    },

    ubindianews: {
        id: "ubindianews",
        title: "UB India News",
        subtitle: "High-Throughput Hindi Breaking News & Bihar Political Digital Portal",
        tagline: "Seamless enterprise migration of high-traffic Hindi news portal from a slow WordPress monolith to edge-cached React with zero data loss and sub-60ms TTFB.",
        category: "WordPress Migration & High-Throughput Media",
        client: "UB India News Media Network (Patna & New Delhi)",
        timeline: "Production Architecture & Live Migration",
        role: "Full-Scale News CMS Migration, Google Discover SEO Preservation & Edge Caching",
        liveUrl: "https://ubindianews.com",
        displayUrl: "ubindianews.com",
        previewImage: "/previews/ubindianews.png",
        techStack: ["React 19", "Next.js / Astro", "Tailwind CSS", "Redis Micro-Cache", "Cloudflare Edge CDN"],
        
        benchmarks: [
            { label: "Data Integrity", value: "100% Zero Loss", detail: "All breaking news archives preserved" },
            { label: "Time to First Byte", value: "65ms", detail: "Down from 2.8s on legacy WordPress" },
            { label: "Google Discover SEO", value: "100% Retained", detail: "AMP/Schema canonical parity" },
            { label: "Core Web Vitals", value: "Passed (100)", detail: "Zero Cumulative Layout Shift" }
        ],

        realWorldProblem: {
            title: "The Bottleneck of High-Velocity News Publishing on Legacy WordPress",
            description: "UB India News delivers real-time Hindi investigative journalism, Bihar political updates, and viral national stories. On WordPress, rapid publication schedules and massive read spikes choked the database, destroyed Google Discover visibility, and produced slow 3-second load times:",
            painPoints: [
                {
                    heading: "High TTFB Destructing Google Discover Ranking",
                    desc: "Google Discover algorithms favor sub-second mobile loading. Legacy WordPress average TTFB of 2.8 seconds crippled content syndication into user feeds."
                },
                {
                    heading: "Database Lockups During State Election Coverage",
                    desc: "Simultaneous write operations from the editorial desk combined with 50,000 concurrent readers locked MySQL tables, causing repeated white screens."
                },
                {
                    heading: "Broken URL Slugs & Category Redirect Nightmares",
                    desc: "Thousands of Hindi transliterated permalinks were vulnerable to 404 dead ends if database schema mappings weren't executed with mathematical precision."
                },
                {
                    heading: "Aggressive Ad Script Layout Shifts",
                    desc: "Unoptimized display ad scripts caused Cumulative Layout Shift (CLS > 0.4), driving high bounce rates and frustrating readers."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Mobile Hindi News Consumers",
                scenario: "Access breaking political developments and viral video stories with instant sub-60ms First Contentful Paint on standard mobile data."
            },
            {
                title: "Google News & Discover Algorithms",
                scenario: "Crawl, index, and surface fresh investigative pieces within minutes of publishing thanks to structured NewsArticle JSON-LD schema."
            },
            {
                title: "Field Reporters & Bureau Journalists",
                scenario: "Publish breaking dispatches from Tier-2/3 Bihar districts with instant edge cache invalidation and zero publishing latency."
            },
            {
                title: "Digital Ad Operations Teams",
                scenario: "Monetize ad impressions without degrading page speed or causing layout jumping."
            }
        ],

        architecturalSolution: {
            title: "Edge-Accelerated High-Throughput Media Architecture",
            overview: "Techcure executed a zero-data-loss database migration, ported all historical content into an edge-cached React architecture, and optimized Devanagari typography for extreme speed.",
            deepDivePillars: [
                {
                    title: "100% Zero-Data-Loss Editorial ETL",
                    desc: "Extracted and sanitized every single post, category, tag, author byline, and image URL from the WordPress database, ensuring 100% parity and zero broken internal links."
                },
                {
                    title: "Instant Edge Invalidation Engine",
                    desc: "Connected the publishing workflow to automated Cloudflare edge cache purges, guaranteeing readers receive breaking updates globally within 2 seconds of publishing."
                },
                {
                    title: "Devanagari Font Subsetting & WebP Pipeline",
                    desc: "Engineered custom font subsets for Hindi Unicode glyphs and automated next-gen WebP image transformations, reducing page weights by 82%."
                },
                {
                    title: "Rock-Solid Google News JSON-LD Schema",
                    desc: "Injected automated NewsArticle, Organization, and BreadcrumbList structured data, boosting organic crawl rates and maintaining top-tier Google indexation."
                }
            ]
        }
    },

    ramarshpalace: {
        id: "ramarshpalace",
        title: "Hotel Ramarsh Palace",
        subtitle: "Luxury Boutique Hotel on Rampath, Ayodhya & Zero-Data-Loss WordPress Migration",
        tagline: "Migrated luxury hotel booking portal from sluggish WordPress to Next.js 15 App Router with 100% zero data loss, direct WhatsApp reservation engine, and 0% OTA commission model.",
        category: "WordPress Migration & Hospitality",
        client: "Hotel Ramarsh Palace (Ranopali, Ayodhya)",
        timeline: "Production Architecture & Live Migration",
        role: "Next.js 15 Re-Architecture, Zero-Loss WP Migration, Direct Booking Engine & Ayodhya Local SEO",
        liveUrl: "https://ramarshpalace.com",
        displayUrl: "ramarshpalace.com",
        previewImage: "/previews/ramarshpalace.png",
        techStack: ["Next.js 15", "React 19", "Tailwind CSS", "WhatsApp Cloud API", "Cloudflare Edge", "Ayodhya Local SEO"],
        
        benchmarks: [
            { label: "Migration Data Loss", value: "0.00%", detail: "All rooms & bookings migrated intact" },
            { label: "Direct Bookings", value: "+78% Inquiries", detail: "Direct guest WhatsApp conversions" },
            { label: "OTA Commission Saved", value: "0% OTA Fee", detail: "Direct bookings without 20% OTA cuts" },
            { label: "First Contentful Paint", value: "0.32s", detail: "Instant visual luxury showcase" }
        ],

        realWorldProblem: {
            title: "The Costly Trap of Slow WordPress Hotel Sites and 20% OTA Commissions",
            description: "Hotel Ramarsh Palace is an elite 12-room luxury hotel located on Rampath, Ranopali in Ayodhya (just 1.8 km from Shri Ram Janmabhoomi Mandir). Their previous WordPress hotel template was burdened with slow booking plugins, sluggish photo carousels, and zero mobile conversion, forcing them to surrender 18-22% commissions to OTAs like MakeMyTrip and Booking.com:",
            painPoints: [
                {
                    heading: "Exorbitant OTA Intermediary Commissions",
                    desc: "Losing 20% of every room reservation to online booking giants because their own website couldn't convert visitors directly."
                },
                {
                    heading: "Slow Mobile Loading for In-Transit Pilgrims",
                    desc: "Pilgrims searching for urgent accommodations on trains or highways suffered 5-second load times on WordPress, causing immediate bounces."
                },
                {
                    heading: "Fragile Booking Calendar Plugins",
                    desc: "Third-party WordPress booking plugins suffered date picker glitches and synchronization failures on mobile touchscreens."
                },
                {
                    heading: "Lack of Ayodhya Pilgrim Concierge Workflows",
                    desc: "Devotees visiting Ram Mandir need personalized darshan timing advice, cab pickups, and pure vegetarian dining details that rigid templates couldn't provide."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Ram Mandir Pilgrims & Families",
                scenario: "Book luxury rooms, executive suites, and family accommodations in under 45 seconds directly through a verified WhatsApp concierge."
            },
            {
                title: "Corporate & VIP Delegations",
                scenario: "Reserve multi-room blocks, banquet facilities, and private dining for high-profile Ayodhya visits with bespoke arrangements."
            },
            {
                title: "Hotel Front Desk & General Manager",
                scenario: "Receive confirmed booking inquiries with guest dates, room category, and guest counts directly on the front-desk WhatsApp terminal."
            },
            {
                title: "Dining Guests & Event Organizers",
                scenario: "Browse on-site pure vegetarian restaurant menus and reserve wedding/banquet dates without third-party phone tag."
            }
        ],

        architecturalSolution: {
            title: "Next.js 15 Direct Hospitality Commerce Architecture",
            overview: "Techcure completely replaced WordPress with a high-performance Next.js 15 App Router architecture, preserving 100% of historical content while introducing a frictionless direct booking engine.",
            deepDivePillars: [
                {
                    title: "100% Zero-Data-Loss Migration",
                    desc: "Ported all hotel photography, room specifications, pricing tiers, and local travel guides from WordPress with zero data loss and exact canonical URL preservation."
                },
                {
                    title: "0% Commission Direct Booking Engine",
                    desc: "Engineered a streamlined room booking modal that calculates night totals, checks suite availability, and routes confirmed booking details straight to WhatsApp."
                },
                {
                    title: "Hyper-Local Ayodhya SEO Dominance",
                    desc: "Injected targeted geo-coordinates, Hotel schema, and localized keywords ('hotel near Ram Mandir', 'luxury hotel Rampath Ayodhya') to dominate local Google search."
                },
                {
                    title: "Sub-400ms High-Res Media Pipeline",
                    desc: "Showcases lavish suite interiors and dining banquets through Next-gen WebP imagery with hardware-accelerated fluid transitions."
                }
            ]
        }
    },

    helpsafety: {
        id: "helpsafety",
        title: "Help Safety and Care Foundation",
        subtitle: "Ayodhya Sacred Corridor Seva, Disaster Relief & Public Welfare Digital Foundation",
        tagline: "High-speed Astro & React welfare platform powering Ayodhya Sacred Corridor pilgrim seva, emergency relief, and automated Section 80G tax exemption receipts.",
        category: "NGO & Public Welfare",
        client: "Help Safety and Care Foundation (Ayodhya & North India)",
        timeline: "Production Architecture",
        role: "Full-Stack NGO Architecture, 80G Receipt Automation & Volunteer Pipeline",
        liveUrl: "https://helpsafety.org",
        displayUrl: "helpsafety.org",
        previewImage: "/previews/helpsafety.png",
        techStack: ["Astro", "React 19", "Tailwind CSS", "Razorpay NGO Suite", "Cloudflare Edge", "Automated 80G Engine"],
        
        benchmarks: [
            { label: "Pilgrim Meals Served", value: "100,000+", detail: "Ayodhya Sacred Corridor Seva" },
            { label: "Tax Exemption Status", value: "Section 80G", detail: "Instant compliant digital receipts" },
            { label: "Lighthouse Performance", value: "100 / 100", detail: "Flawless mobile & desktop score" },
            { label: "Donation Latency", value: "< 25 seconds", detail: "Frictionless UPI & Card giving" }
        ],

        realWorldProblem: {
            title: "The Operational & Trust Challenges Facing Humanitarian NGOs",
            description: "Help Safety and Care Foundation conducts vital public welfare operations across Ayodhya Dham and North India—feeding hundreds of thousands of pilgrims, providing emergency medical aid, and leading disaster relief. Legacy non-profit websites struggle with donor trust and complex giving flows:",
            painPoints: [
                {
                    heading: "Clunky, Abandoned Donation Flows",
                    desc: "Multi-step donation forms with slow gateway redirects cause up to 60% of empathetic donors to abandon their contribution."
                },
                {
                    heading: "Manual 80G Receipt Delays",
                    desc: "Donors wait weeks for Section 80G tax exemption receipts, creating customer service backlogs and discouraging repeat donations."
                },
                {
                    heading: "Lack of Verifiable Visual Transparency",
                    desc: "Donors demand clear visual evidence of on-the-ground food distribution, medical camps, and animal welfare work in Ayodhya."
                },
                {
                    heading: "Volunteer Mobilization Bottlenecks",
                    desc: "Difficulty coordinating hundreds of local Ayodhya volunteers during religious festivals and emergency relief crises."
                }
            ]
        },

        realWorldUseCases: [
            {
                title: "Devoted Donors & Philanthropists",
                scenario: "Contribute to Ayodhya Annadaan and healthcare programs with 1-click UPI and receive instant automated 80G receipts."
            },
            {
                title: "Ground Volunteers & Social Workers",
                scenario: "Register for local disaster response, medical camps, and pilgrim shelter seva missions across Ayodhya Dham."
            },
            {
                title: "Corporate CSR Committees",
                scenario: "Audit verified foundation financials, compliance dossiers, and Section 12A/80G certifications for institutional grants."
            },
            {
                title: "Emergency Medical Relief Beneficiaries",
                scenario: "Access free health camps, eye checkups, and disaster relief aid across rural North India."
            }
        ],

        architecturalSolution: {
            title: "High-Trust Transparent NGO Architecture",
            overview: "Techcure engineered an accessible, ultra-transparent digital foundation portal using Astro and React, with instant tax receipts and zero advertising bloat.",
            deepDivePillars: [
                {
                    title: "Automated Section 80G Receipt Generator",
                    desc: "Direct integration with Razorpay NGO Webhooks automatically generates government-compliant Section 80G tax receipts delivered instantly via WhatsApp and Email."
                },
                {
                    title: "Ayodhya Sacred Corridor Seva Visualizer",
                    desc: "Dynamic project galleries and impact counters document meal distribution, medical camps, and winter blanket drives in real-time."
                },
                {
                    title: "Frictionless Mobile-First Giving",
                    desc: "Integrated UPI QR and AutoPay options allowing donors to contribute in under 25 seconds from any mobile browser."
                },
                {
                    title: "100/100 Lighthouse Static Edge Speed",
                    desc: "Built on Astro static site generation, ensuring 100/100 Core Web Vitals and zero server maintenance costs for the foundation."
                }
            ]
        }
    }
};
