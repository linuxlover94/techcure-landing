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
    }
};
