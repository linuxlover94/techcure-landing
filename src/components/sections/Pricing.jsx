import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const CURRENCIES = [
    { code: 'USD', symbol: '$', label: 'USD ($)', flag: '🇺🇸' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)', flag: '🇬🇧' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)', flag: '🇪🇺' },
    { code: 'AED', symbol: 'AED ', label: 'AED (د.إ)', flag: '🇦🇪' },
    { code: 'INR', symbol: '₹', label: 'INR (₹)', flag: '🇮🇳' },
];

const plans = [
    {
        name: "Startup Velocity",
        subtitle: "Next.js Web Platforms",
        badge: "72h Go-Live",
        prices: {
            USD: { standard: "$499", senior: "$199" },
            GBP: { standard: "£399", senior: "£159" },
            EUR: { standard: "€460", senior: "€185" },
            AED: { standard: "AED 1,850", senior: "AED 740" },
            INR: { standard: "₹19,999", senior: "₹7,999" }
        },
        features: [
            "Custom Next.js / React 19 Core",
            "72-Hour Rapid Go-Live Sprint",
            "Sub-Second Global Edge Delivery",
            "100% Full Git Repo Transferred",
            "Technical SEO, Schema & OpenGraph",
            "30 Days Direct Architect Hypercare"
        ],
        popular: false
    },
    {
        name: "WP to React Migration",
        subtitle: "Zero-Data-Loss Migration",
        badge: "100% Zero Loss",
        prices: {
            USD: { standard: "$599", senior: "$239" },
            GBP: { standard: "£475", senior: "£190" },
            EUR: { standard: "€550", senior: "€220" },
            AED: { standard: "AED 2,200", senior: "AED 880" },
            INR: { standard: "₹24,999", senior: "₹9,999" }
        },
        features: [
            "100% Zero-Data-Loss ETL Extraction",
            "Exact URL Slug & SEO Preservation",
            "Sub-500ms Edge React/Next.js Speed",
            "Eliminate 30+ Fragile WP Plugins",
            "Automated WebP Image Pipeline",
            "60 Days Post-Cutover Monitoring"
        ],
        popular: true,
        specialBorder: "border-indigo-500/50 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]"
    },
    {
        name: "Growth Architecture",
        subtitle: "Full-Stack SaaS & MVP",
        badge: "2 - 3 Weeks",
        prices: {
            USD: { standard: "$999", senior: "$399" },
            GBP: { standard: "£790", senior: "£315" },
            EUR: { standard: "€920", senior: "€368" },
            AED: { standard: "AED 3,670", senior: "AED 1,460" },
            INR: { standard: "₹49,999", senior: "₹19,999" }
        },
        features: [
            "Dynamic SSR Full-Stack Architecture",
            "PostgreSQL & Supabase Auth DB",
            "Stripe, Razorpay & UPI Payment Flows",
            "Multi-Tenant Role Permissions",
            "Sub-500ms Core Web Vitals",
            "90 Days Dedicated Tech Support"
        ],
        popular: false
    },
    {
        name: "Enterprise Systems",
        subtitle: "Dedicated Engineering",
        badge: "Dedicated Architect",
        prices: {
            USD: { standard: "$2,499", senior: "$999" },
            GBP: { standard: "£1,980", senior: "£790" },
            EUR: { standard: "€2,300", senior: "€920" },
            AED: { standard: "AED 9,180", senior: "AED 3,670" },
            INR: { standard: "₹1,49,999", senior: "₹59,999" }
        },
        features: [
            "High-Throughput SaaS Microservices",
            "Zero-Knowledge AES-256 Security",
            "Background Task Workers & Queues",
            "Dedicated Principal Architect",
            "WASM Engines & Custom Integrations",
            "6 Months Priority SLAs & Hypercare"
        ],
        popular: false
    }
];

const Pricing = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [isSeniorDiscount, setIsSeniorDiscount] = useState(false);

    return (
        <section className="py-24 bg-transparent" id="pricing">
            <div className="container mx-auto px-6">
                <SectionHeading title="INVESTMENT & SPRINTS" subtitle="Transparent Multi-Currency Architecture Pricing" />

                <div className="flex flex-col items-center justify-center gap-4 mb-12">
                    {/* Multi-Currency Toggle Bar */}
                    <div className="p-1 rounded-2xl bg-secondary/80 border border-border flex flex-wrap items-center justify-center gap-1 shadow-sm">
                        {CURRENCIES.map((curr) => (
                            <button
                                key={curr.code}
                                onClick={() => setSelectedCurrency(curr.code)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                                    selectedCurrency === curr.code
                                        ? 'bg-primary text-primary-foreground shadow-sm font-bold'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                                }`}
                            >
                                <span>{curr.flag}</span>
                                <span>{curr.label}</span>
                            </button>
                        ))}
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
                        <span>🎖️ Senior (60+) &amp; Veteran Founder Initiative</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isSeniorDiscount ? 'bg-amber-400 text-zinc-950' : 'bg-muted text-muted-foreground'}`}>
                            -60% Flat
                        </span>
                    </button>
                </div>

                {/* 4 Plans Responsive Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
                    {plans.map((plan, index) => {
                        const priceObj = plan.prices[selectedCurrency] || plan.prices.USD;
                        const currentPrice = isSeniorDiscount ? priceObj.senior : priceObj.standard;
                        const standardPrice = priceObj.standard;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: false }}
                            >
                                <Card className={`h-full flex flex-col relative bg-card/70 backdrop-blur-md border ${plan.specialBorder || (plan.popular ? 'border-primary shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)]' : 'border-border')} p-6`}>
                                    {plan.popular && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                                            {plan.subtitle}
                                        </span>
                                        <h3 className="text-lg font-bold font-head mb-2 text-foreground">{plan.name}</h3>
                                        <div className="text-3xl font-head font-bold mb-1 text-foreground">
                                            {currentPrice}
                                        </div>
                                        {isSeniorDiscount && (
                                            <div className="text-[11px] text-amber-400/80 font-mono line-through mb-1">
                                                Standard: {standardPrice}
                                            </div>
                                        )}
                                        <p className="text-[11px] text-muted-foreground font-mono">100% Source Code Ownership</p>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-1 text-xs">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <div className="p-0.5 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                                                    <Check size={12} />
                                                </div>
                                                <span className="text-muted-foreground leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure, I would like to book the ${plan.name} package (${currentPrice} in ${selectedCurrency}).`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full mt-auto"
                                    >
                                        <Button
                                            variant={plan.popular ? 'primary' : 'outline'}
                                            className={`w-full text-xs font-bold rounded-xl ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md' : ''}`}
                                        >
                                            <span>Select Plan</span>
                                            <ArrowRight size={13} className="ml-1.5" />
                                        </Button>
                                    </a>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* International Payment Security & Invoicing Guarantee Footer */}
                <div className="p-4 rounded-2xl bg-secondary/40 border border-border/80 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                        <span>Accepted Worldwide: Stripe • Wise • SWIFT Bank Wire • UPI AutoPay</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                        <span>Zero Hidden Fees</span>
                        <span>•</span>
                        <span>Official Invoices</span>
                        <span>•</span>
                        <span>NDA by Default</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
