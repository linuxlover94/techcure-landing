import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    Calculator, 
    Check, 
    ArrowRight, 
    Sparkles, 
    ShieldCheck, 
    Clock, 
    Zap, 
    MessageSquare,
    ChevronRight,
    Award
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const PROJECT_TYPES = [
    {
        id: 'website',
        name: 'Custom Next.js Website',
        badge: '72h Turnaround',
        basePriceINR: 19999,
        basePriceUSD: 249,
        baseDays: '3 - 5 Days',
        desc: 'Sub-second business platform engineered with React 19 & Tailwind. 100/100 Core Web Vitals.'
    },
    {
        id: 'saas',
        name: 'Full-Stack SaaS MVP',
        badge: '2 - 3 Weeks',
        basePriceINR: 49999,
        basePriceUSD: 649,
        baseDays: '2 - 3 Weeks',
        desc: 'Production-ready cloud app with PostgreSQL, auth, subscription billing, and user dashboards.'
    },
    {
        id: 'ecommerce',
        name: 'Headless E-Commerce Portal',
        badge: '1 - 2 Weeks',
        basePriceINR: 39999,
        basePriceUSD: 499,
        baseDays: '7 - 14 Days',
        desc: 'High-speed digital store with 1-click UPI/Stripe checkout, catalog management, and auto-invoicing.'
    },
    {
        id: 'speed',
        name: 'Speed & Core Web Vitals Overhaul',
        badge: '48h Sprint',
        basePriceINR: 14999,
        basePriceUSD: 189,
        baseDays: '48 - 72 Hours',
        desc: 'Upgrading slow legacy WordPress/custom sites to sub-500ms edge architectures with 95+ score.'
    }
];

const ADDONS = [
    {
        id: 'auth',
        label: 'Auth & Multi-Tenant Roles',
        priceINR: 6000,
        priceUSD: 80,
        desc: 'OAuth, Google Sign-in, JWT, and role-based permissions'
    },
    {
        id: 'payment',
        label: 'Payment & Auto-Invoicing',
        priceINR: 5000,
        priceUSD: 70,
        desc: 'Razorpay, Stripe, UPI AutoPay with automated GST tax invoices'
    },
    {
        id: 'cms',
        label: 'Headless CMS & Admin Desk',
        priceINR: 7000,
        priceUSD: 90,
        desc: 'Visual editor for non-technical team to update content effortlessly'
    },
    {
        id: 'edge',
        label: 'Edge Compute & Cloudflare CDN',
        priceINR: 4000,
        priceUSD: 50,
        desc: 'Sub-15ms worldwide response times with automated DDoS shield'
    },
    {
        id: 'whatsapp',
        label: 'Automated WhatsApp & Email Bot',
        priceINR: 6000,
        priceUSD: 80,
        desc: 'Instant lead alerts, customer order confirmations, and notifications'
    }
];

const ProjectEstimator = () => {
    const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
    const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
    const [selectedAddons, setSelectedAddons] = useState(['auth', 'payment']);
    const [isSeniorOrVeteran, setIsSeniorOrVeteran] = useState(false);

    const toggleAddon = (addonId) => {
        if (selectedAddons.includes(addonId)) {
            setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
        } else {
            setSelectedAddons([...selectedAddons, addonId]);
        }
    };

    const calculation = useMemo(() => {
        let base = currency === 'INR' ? selectedType.basePriceINR : selectedType.basePriceUSD;
        let addonsTotal = 0;

        selectedAddons.forEach((addonId) => {
            const addon = ADDONS.find((a) => a.id === addonId);
            if (addon) {
                addonsTotal += currency === 'INR' ? addon.priceINR : addon.priceUSD;
            }
        });

        const grossTotal = base + addonsTotal;
        const discount = isSeniorOrVeteran ? Math.round(grossTotal * 0.6) : 0;
        const netTotal = grossTotal - discount;

        return {
            grossTotal,
            discount,
            netTotal,
            timeline: selectedType.baseDays
        };
    }, [selectedType, selectedAddons, currency, isSeniorOrVeteran]);

    const handleLockEstimate = () => {
        const addonNames = selectedAddons
            .map((id) => ADDONS.find((a) => a.id === id)?.label)
            .filter(Boolean)
            .join(', ');

        const text = 
            `*⚡ TECHCURE PROJECT ESTIMATE SCOPE*\n\n` +
            `*🎯 Architecture:* ${selectedType.name}\n` +
            `*🧩 Selected Add-ons:* ${addonNames || 'None'}\n` +
            `*⏱️ Estimated Delivery:* ${calculation.timeline}\n` +
            `*💰 Estimated Investment:* ${currency === 'INR' ? '₹' : '$'}${calculation.netTotal.toLocaleString()}` +
            (isSeniorOrVeteran ? ` *(60% Senior/Veteran Discount Applied!)*\n` : `\n`) +
            `\nI'd like to schedule an architecture scoping session to discuss this project.`;

        const whatsappUrl = `https://wa.me/918188838966?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="estimator" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <SectionHeading
                    title="INSTANT SCOPE ESTIMATOR"
                    subtitle="Transparent Pricing & Delivery Timelines"
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-head font-bold text-foreground">
                            Configure Your Platform Scope in <span className="text-primary">60 Seconds</span>
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            No hidden agency retainers. Know your exact engineering investment and turnaround time up-front.
                        </p>
                    </div>

                    {/* Currency Selector */}
                    <div className="flex items-center gap-2 p-1 bg-secondary rounded-xl border border-border shrink-0 self-start md:self-auto">
                        <button
                            type="button"
                            onClick={() => setCurrency('INR')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                                currency === 'INR'
                                    ? 'bg-background text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            ₹ INR (India)
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrency('USD')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                                currency === 'USD'
                                    ? 'bg-background text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            $ USD (Global)
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Scope Selection (7 cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Step 1: Select Type */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                                    Select Core Platform Architecture
                                </label>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {PROJECT_TYPES.map((type) => {
                                    const isSelected = selectedType.id === type.id;
                                    return (
                                        <div
                                            key={type.id}
                                            onClick={() => setSelectedType(type)}
                                            className={`p-4 rounded-2xl cursor-pointer border transition-all text-left flex flex-col justify-between ${
                                                isSelected
                                                    ? 'bg-primary/5 border-primary shadow-sm shadow-primary/10'
                                                    : 'bg-card border-border hover:border-border/80'
                                            }`}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-primary font-bold">
                                                        {type.badge}
                                                    </span>
                                                    {isSelected && (
                                                        <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                                            <Check size={10} strokeWidth={3} />
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="font-bold text-sm text-foreground mb-1">{type.name}</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                                                    {type.desc}
                                                </p>
                                            </div>
                                            <div className="pt-2 border-t border-border/50 text-xs font-mono font-bold text-foreground">
                                                From {currency === 'INR' ? `₹${type.basePriceINR.toLocaleString()}` : `$${type.basePriceUSD}`}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step 2: Select Add-ons */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                                    Select Production Modules &amp; Integrations
                                </label>
                            </div>

                            <div className="space-y-2.5">
                                {ADDONS.map((addon) => {
                                    const isChecked = selectedAddons.includes(addon.id);
                                    return (
                                        <div
                                            key={addon.id}
                                            onClick={() => toggleAddon(addon.id)}
                                            className={`p-3.5 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${
                                                isChecked
                                                    ? 'bg-primary/5 border-primary/60'
                                                    : 'bg-card border-border hover:border-border/80'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                                                    isChecked 
                                                        ? 'bg-primary border-primary text-primary-foreground' 
                                                        : 'border-border bg-secondary'
                                                }`}>
                                                    {isChecked && <Check size={12} strokeWidth={3} />}
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-foreground">{addon.label}</h5>
                                                    <p className="text-xs text-muted-foreground">{addon.desc}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono font-semibold text-primary shrink-0 ml-4">
                                                +{currency === 'INR' ? `₹${addon.priceINR.toLocaleString()}` : `$${addon.priceUSD}`}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step 3: Senior / Veteran Incentive Toggle */}
                        <div 
                            onClick={() => setIsSeniorOrVeteran(!isSeniorOrVeteran)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                                isSeniorOrVeteran
                                    ? 'bg-amber-500/10 border-amber-500/50 shadow-sm'
                                    : 'bg-card border-border hover:border-amber-500/30'
                            }`}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="p-2.5 bg-amber-500/20 text-amber-500 rounded-xl text-lg">
                                    🎖️
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h5 className="text-sm font-bold text-foreground">Senior Citizen (60+) or Military Veteran Founder</h5>
                                        <span className="px-2 py-0.5 rounded-full bg-amber-400 text-zinc-950 font-bold text-[10px]">
                                            Flat 60% Off
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Check this box if you or your co-founder are 60+ or have served in the armed forces.
                                    </p>
                                </div>
                            </div>

                            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ml-4 ${
                                isSeniorOrVeteran 
                                    ? 'bg-amber-500 border-amber-500 text-zinc-950 font-bold' 
                                    : 'border-border bg-secondary'
                            }`}>
                                {isSeniorOrVeteran && <Check size={14} strokeWidth={3} />}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Estimate Card (5 cols) */}
                    <div className="lg:col-span-5 sticky top-28">
                        <Card className="p-6 md:p-8 bg-card border-border shadow-xl">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <Calculator size={18} className="text-primary" />
                                    <h4 className="text-sm font-bold font-head uppercase tracking-wider text-foreground">
                                        Live Estimate Summary
                                    </h4>
                                </div>
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-mono font-semibold">
                                    Fixed-Price Quote
                                </span>
                            </div>

                            {/* Investment Total Display */}
                            <div className="mb-6">
                                <div className="text-xs font-mono text-muted-foreground uppercase mb-1">
                                    Estimated Turnkey Investment
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl md:text-5xl font-head font-bold text-foreground">
                                        {currency === 'INR' ? '₹' : '$'}{calculation.netTotal.toLocaleString()}
                                    </span>
                                    {isSeniorOrVeteran && (
                                        <span className="text-lg line-through text-muted-foreground">
                                            {currency === 'INR' ? '₹' : '$'}{calculation.grossTotal.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                                {isSeniorOrVeteran && (
                                    <div className="mt-2 text-xs font-mono text-amber-500 font-semibold flex items-center gap-1.5">
                                        <Award size={14} />
                                        <span>Honoring your service: 60% deduction saved ({currency === 'INR' ? `₹${calculation.discount.toLocaleString()}` : `$${calculation.discount}`})</span>
                                    </div>
                                )}
                            </div>

                            {/* Timeline & Speed Guarantee */}
                            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-secondary/50 border border-border mb-6 text-xs">
                                <div>
                                    <span className="text-muted-foreground block text-[10px] font-mono uppercase">Delivery Timeline</span>
                                    <span className="font-bold text-foreground flex items-center gap-1 mt-0.5">
                                        <Clock size={12} className="text-primary" />
                                        {calculation.timeline}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block text-[10px] font-mono uppercase">Speed Guarantee</span>
                                    <span className="font-bold text-foreground flex items-center gap-1 mt-0.5">
                                        <Zap size={12} className="text-emerald-500" />
                                        Sub-0.5s / 95+ Score
                                    </span>
                                </div>
                            </div>

                            {/* Standard Deliverables Included */}
                            <div className="space-y-2 mb-8 text-xs text-muted-foreground">
                                <div className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono mb-2">
                                    Guaranteed With Every Project:
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                                    <span><strong>100% IP &amp; Git Code Ownership</strong> transferred to you</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                                    <span><strong>Zero Hostage Retainers</strong> or proprietary lock-ins</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                                    <span><strong>30 Days Post-Launch Hypercare</strong> and bug fix warranty</span>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-3">
                                <Button 
                                    size="lg" 
                                    className="w-full rounded-xl font-bold shadow-lg shadow-primary/20 gap-2"
                                    onClick={handleLockEstimate}
                                >
                                    <MessageSquare size={16} />
                                    <span>Lock In This Scope &amp; Chat</span>
                                </Button>
                                <a href="#contact" className="block">
                                    <Button 
                                        variant="outline" 
                                        size="default" 
                                        className="w-full rounded-xl border-border text-foreground hover:bg-secondary gap-2 text-xs"
                                    >
                                        <span>Or Book Formal Scoping Session</span>
                                        <ArrowRight size={14} />
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectEstimator;
