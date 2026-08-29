import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const plans = [
    {
        name: "Startup Velocity",
        price: { global: "$499", inr: "₹19,999", seniorGlobal: "$199", seniorInr: "₹7,999" },
        features: [
            "Custom Next.js / React 19 Production Core",
            "72-Hour Rapid Deployment & Go-Live",
            "Sub-Second Global Edge Performance",
            "100% Git Repository & IP Transferred",
            "Technical SEO, Schema & OpenGraph",
            "30 Days Direct Engineering Hypercare"
        ],
        popular: false
    },
    {
        name: "Growth Architecture",
        price: { global: "$999", inr: "₹49,999", seniorGlobal: "$399", seniorInr: "₹19,999" },
        features: [
            "Full-Stack Dynamic SSR Web Platform",
            "PostgreSQL / Supabase Database & Auth",
            "Stripe & UPI Automated Payment Workflows",
            "Advanced Technical SEO & Authority Architecture",
            "Sub-500ms Global Core Web Vitals",
            "90 Days Dedicated Architectural Support"
        ],
        popular: true
    },
    {
        name: "Enterprise Systems",
        price: { global: "$2,499", inr: "₹1,49,999", seniorGlobal: "$999", seniorInr: "₹59,999" },
        features: [
            "Custom SaaS & High-Throughput Microservices",
            "Zero-Trust AES-256 Security & Encryption",
            "Scalable Background Workers & Queue Pipelines",
            "Dedicated Principal Systems Architect",
            "Custom API Integrations & WebAssembly Engines",
            "6 Months Priority SLAs & Architecture Hypercare"
        ],
        popular: false
    }
];

const Pricing = () => {
    const [isInr, setIsInr] = useState(true);
    const [isSeniorDiscount, setIsSeniorDiscount] = useState(false);

    return (
        <section className="py-24 bg-transparent" id="pricing">
            <div className="container mx-auto px-6">
                <SectionHeading title="INVESTMENT" subtitle="Transparent Architecture Pricing" />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    {/* Currency Toggle */}
                    <div className="bg-secondary/80 border border-border p-1 rounded-full flex items-center relative">
                        <motion.div
                            className="absolute top-1 bottom-1 w-[50%] bg-primary/20 border border-primary/40 rounded-full shadow-sm"
                            animate={{ x: isInr ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setIsInr(false)}
                            className={`relative z-10 px-6 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors ${!isInr ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            Global (USD)
                        </button>
                        <button
                            onClick={() => setIsInr(true)}
                            className={`relative z-10 px-6 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors ${isInr ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            India (INR)
                        </button>
                    </div>

                    {/* Senior & Veteran Discount Toggle */}
                    <button
                        onClick={() => setIsSeniorDiscount(!isSeniorDiscount)}
                        className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-300 flex items-center gap-2 border ${
                            isSeniorDiscount
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)]'
                                : 'bg-secondary/50 text-muted-foreground border-border hover:border-amber-500/30'
                        }`}
                    >
                        <span>🎖️ Senior (60+) &amp; Veteran Founder Discount</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isSeniorDiscount ? 'bg-amber-400 text-zinc-950' : 'bg-muted text-muted-foreground'}`}>
                            -60%
                        </span>
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        const currentPrice = isSeniorDiscount
                            ? (isInr ? plan.price.seniorInr : plan.price.seniorGlobal)
                            : (isInr ? plan.price.inr : plan.price.global);

                        const originalPrice = isInr ? plan.price.inr : plan.price.global;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: false }}
                            >
                                <Card className={`h-full flex flex-col relative bg-card/60 backdrop-blur-md border-border ${plan.popular ? 'border-primary shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)]' : ''}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="text-center mb-8">
                                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                        <div className="text-4xl font-head font-bold mb-1 text-foreground">
                                            {currentPrice}
                                        </div>
                                        {isSeniorDiscount && (
                                            <div className="text-xs text-amber-400/80 font-mono line-through mb-1">
                                                Standard: {originalPrice}
                                            </div>
                                        )}
                                        <p className="text-xs text-muted-foreground font-mono">100% Full IP &amp; Source Code Ownership</p>
                                    </div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm">
                                                <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0">
                                                    <Check size={14} />
                                                </div>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure, I would like to get started with the ${plan.name} tier (${currentPrice}${isSeniorDiscount ? ' with Senior/Veteran 60% Discount' : ''}) for our project.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full gap-1.5">
                                            <span>Select {plan.name}</span>
                                        </Button>
                                    </a>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
                    <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg border border-primary/20 text-primary">
                        🛡️ Zero Vendor Lock-In: Full Git Repository &amp; Cloud Infrastructure Transferred
                    </div>
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-2 rounded-lg border border-amber-500/20">
                        🎖️ Senior (60+) &amp; Military Veteran Founders Receive a Flat 60% Discount
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
