import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, ShoppingBag, Smartphone, Database, Shield, Zap, KeyRound } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const capabilities = [
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "High-Velocity Next.js Websites",
        description: "Sub-second marketing platforms and corporate websites engineered for maximum search engine authority, technical SEO, and lead conversion.",
        badge: "72h Rapid Launch"
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Custom SaaS & MVP Development",
        description: "Full-stack software products built with React 19, Node.js, and PostgreSQL. Multi-tenant architecture, user dashboards, and role-based permissions.",
        badge: "2-3 Weeks"
    },
    {
        icon: <ShoppingBag className="h-8 w-8 text-primary" />,
        title: "High-Throughput Commerce & Portals",
        description: "Headless e-commerce and billing portals with 1-click UPI and card checkout workflows, dynamic pricing engines, and zero cart drop-offs.",
        badge: "Stripe & UPI"
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Cross-Platform Mobile Apps",
        description: "Fast, responsive web and mobile solutions with offline-first caching, real-time WebSockets, and native iOS & Android compatibility.",
        badge: "iOS & Android"
    },
    {
        icon: <Database className="h-8 w-8 text-primary" />,
        title: "Database & Cloud Architecture",
        description: "Scalable PostgreSQL schemas, Redis caching, Supabase real-time pipelines, and serverless edge functions built to handle millions of queries.",
        badge: "Sub-50ms DB"
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Core Web Vitals & Speed Overhaul",
        description: "Upgrading bloated 5-second legacy sites to sub-500ms edge architectures. Guaranteed 95-100 Lighthouse performance metrics.",
        badge: "Lighthouse 100"
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Zero-Knowledge Security & Defense",
        description: "Client-side AES-256-GCM encryption, Argon2id key derivation, and strict Content Security Policies that protect proprietary enterprise assets.",
        badge: "AES-256 Vault"
    },
    {
        icon: <KeyRound className="h-8 w-8 text-primary" />,
        title: "100% Unconditional IP Ownership",
        description: "Complete Git commit history, domain records, database credentials, and cloud accounts transferred directly to you. Zero vendor hostage traps.",
        badge: "Zero Lock-In"
    }
];

const CoreCapabilities = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="services">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="WHAT WE DELIVER" subtitle="Core Engineering Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05
                            }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col justify-between p-6 hover:border-primary/50 transition-all duration-300 group bg-card border-border shadow-sm">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            {cap.icon}
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                                            {cap.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold font-head mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {cap.title}
                                    </h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
