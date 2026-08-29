import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Globe,
    Database,
    Server,
    Cpu,
    Boxes,
    Terminal,
    Layers,
    Shield,
    Zap,
    Cloud,
    CreditCard,
    GitBranch,
    Lock,
    Activity,
    Smartphone,
    HardDrive,
    Workflow,
    Sparkles
} from 'lucide-react';

const TECH_ROW_1 = [
    { name: "React 19", category: "Core Framework", icon: <Code2 size={20} className="text-cyan-400" />, color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400" },
    { name: "Next.js 15", category: "SSR & Edge Routing", icon: <Globe size={20} className="text-white" />, color: "border-zinc-500/30 bg-zinc-500/5 text-foreground" },
    { name: "TypeScript", category: "Type Safety", icon: <Code2 size={20} className="text-blue-400" />, color: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
    { name: "PostgreSQL", category: "Relational DB", icon: <Database size={20} className="text-sky-400" />, color: "border-sky-500/30 bg-sky-500/5 text-sky-400" },
    { name: "Redis", category: "In-Memory Cache", icon: <Zap size={20} className="text-red-400" />, color: "border-red-500/30 bg-red-500/5 text-red-400" },
    { name: "Cloudflare Edge", category: "Global CDN & Workers", icon: <Cloud size={20} className="text-amber-400" />, color: "border-amber-500/30 bg-amber-500/5 text-amber-400" },
    { name: "Tailwind CSS v4", category: "Zero-Runtime Styling", icon: <Layers size={20} className="text-teal-400" />, color: "border-teal-500/30 bg-teal-500/5 text-teal-400" },
    { name: "Node.js", category: "Runtime Engine", icon: <Server size={20} className="text-emerald-400" />, color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
    { name: "Supabase", category: "Realtime Database", icon: <Database size={20} className="text-emerald-400" />, color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
    { name: "WebAssembly (WASM)", category: "Near-Native Speed", icon: <Cpu size={20} className="text-purple-400" />, color: "border-purple-500/30 bg-purple-500/5 text-purple-400" },
    { name: "Docker", category: "Containerization", icon: <Boxes size={20} className="text-blue-400" />, color: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
    { name: "Python / FastAPI", category: "High-Throughput APIs", icon: <Terminal size={20} className="text-yellow-400" />, color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400" }
];

const TECH_ROW_2 = [
    { name: "Rust", category: "Systems Security", icon: <Cpu size={20} className="text-orange-400" />, color: "border-orange-500/30 bg-orange-500/5 text-orange-400" },
    { name: "GraphQL", category: "Predictable Querying", icon: <Activity size={20} className="text-pink-400" />, color: "border-pink-500/30 bg-pink-500/5 text-pink-400" },
    { name: "AWS", category: "Cloud Infrastructure", icon: <Cloud size={20} className="text-amber-400" />, color: "border-amber-500/30 bg-amber-500/5 text-amber-400" },
    { name: "Vite", category: "Next-Gen Bundler", icon: <Zap size={20} className="text-purple-400" />, color: "border-purple-500/30 bg-purple-500/5 text-purple-400" },
    { name: "Stripe Payments", category: "FinTech Integration", icon: <CreditCard size={20} className="text-indigo-400" />, color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400" },
    { name: "WebCrypto & AES-256", category: "Zero-Knowledge Vaults", icon: <Lock size={20} className="text-emerald-400" />, color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
    { name: "Drizzle ORM", category: "Zero-Overhead SQL", icon: <Database size={20} className="text-lime-400" />, color: "border-lime-500/30 bg-lime-500/5 text-lime-400" },
    { name: "Framer Motion", category: "60 FPS GPU Animations", icon: <Sparkles size={20} className="text-pink-400" />, color: "border-pink-500/30 bg-pink-500/5 text-pink-400" },
    { name: "Flutter", category: "Cross-Platform Mobile", icon: <Smartphone size={20} className="text-sky-400" />, color: "border-sky-500/30 bg-sky-500/5 text-sky-400" },
    { name: "Linux OS", category: "Kernel & Edge Host", icon: <HardDrive size={20} className="text-yellow-400" />, color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400" },
    { name: "GitHub Actions", category: "Automated CI/CD Pipeline", icon: <GitBranch size={20} className="text-violet-400" />, color: "border-violet-500/30 bg-violet-500/5 text-violet-400" },
    { name: "KaTeX / MathML", category: "Sub-Millisecond Math", icon: <Workflow size={20} className="text-cyan-400" />, color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400" }
];

const TechWeUse = () => {
    return (
        <section className="py-16 md:py-20 border-y border-border/60 bg-transparent overflow-hidden relative" aria-label="Tech We Use">
            <div className="container mx-auto px-6 mb-10 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3 uppercase tracking-widest">
                    <Cpu size={13} className="text-primary" />
                    <span>ENGINEERING FOUNDATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-head font-bold tracking-tight text-foreground">
                    TECH WE USE
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xl mx-auto font-sans">
                    Zero legacy bloat. We engineer exclusively with modern, sub-second edge runtimes and type-safe systems.
                </p>
            </div>

            {/* Track 1: Moving Left */}
            <div className="flex relative mb-4 overflow-hidden mask-fade">
                <motion.div
                    className="flex gap-4 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    whileHover={{ transition: { duration: 90 } }}
                >
                    {[...TECH_ROW_1, ...TECH_ROW_1].map((tech, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-xl border border-border hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] cursor-default group shrink-0`}
                        >
                            <div className={`p-2 rounded-xl border ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                {tech.icon}
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-bold font-head text-foreground group-hover:text-primary transition-colors">
                                    {tech.name}
                                </h4>
                                <p className="text-[10px] font-mono text-muted-foreground">
                                    {tech.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
                
                {/* Gradient Fades for Left/Right edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Track 2: Moving Right */}
            <div className="flex relative overflow-hidden mask-fade">
                <motion.div
                    className="flex gap-4 whitespace-nowrap"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    whileHover={{ transition: { duration: 90 } }}
                >
                    {[...TECH_ROW_2, ...TECH_ROW_2].map((tech, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-xl border border-border hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] cursor-default group shrink-0`}
                        >
                            <div className={`p-2 rounded-xl border ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                {tech.icon}
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-bold font-head text-foreground group-hover:text-primary transition-colors">
                                    {tech.name}
                                </h4>
                                <p className="text-[10px] font-mono text-muted-foreground">
                                    {tech.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Left/Right edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default TechWeUse;
