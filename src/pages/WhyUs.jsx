import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Code, HeartHandshake, CheckCircle2, XCircle, ArrowRight, Award, Compass, KeyRound, Sparkles } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrambleText from '../components/ui/ScrambleText';
import SEOHead from '../components/ui/SEOHead';
import IndiaFirst from '../components/sections/IndiaFirst';
import CoreCapabilities from '../components/sections/CoreCapabilities';

const comparisonData = [
    {
        feature: "Custom React 19 / Edge Architecture",
        techcure: true,
        agencies: "Heavy, bloated WordPress templates (5s+ loads)",
        freelancers: "Varies wildly; rarely tuned for edge speed"
    },
    {
        feature: "100% Unconditional Git & IP Ownership",
        techcure: true,
        agencies: "Monthly retainers & hostage domain/code lock-in",
        freelancers: "Undocumented repositories with no handover"
    },
    {
        feature: "Cryptographic Security & Zero-Trust Defense",
        techcure: true,
        agencies: "Vulnerable third-party WordPress plugin stacks",
        freelancers: "Basic HTTPS; security rarely architected"
    },
    {
        feature: "72-Hour Rapid Launch Pipeline",
        techcure: true,
        agencies: "Months of account manager discovery meetings",
        freelancers: "Unpredictable milestones and project ghosting"
    },
    {
        feature: "Direct Access to Lead Systems Architects",
        techcure: true,
        agencies: "Layers of junior sales reps & account middlemen",
        freelancers: "Solo developer with single point of failure"
    },
    {
        feature: "Senior (60+) & Veteran Founder 60% Discount",
        techcure: true,
        agencies: "Zero founder subsidies; rigid corporate billing",
        freelancers: "No institutional discounts or guarantees"
    },
    {
        feature: "Sub-Second Global Core Web Vitals (<0.5s)",
        techcure: true,
        agencies: "Struggling with 70/100 Lighthouse performance",
        freelancers: "Rarely tested on throttled mobile connections"
    }
];

const WhyUs = () => {
    const whyUsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Why Techcure - The Engineering Standard",
        "url": "https://techcurehq.com/why-us",
        "description": "Discover why startups, enterprises, and veteran founders choose Techcure over slow traditional agencies and unreliable freelancers.",
        "publisher": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com"
        }
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Why Techcure - The Engineering Standard vs Agencies"
                description="Compare Techcure's custom React 19 architecture, 72-hour delivery, 100% IP ownership, and Senior & Veteran discounts against traditional slow agencies."
                canonicalPath="/why-us"
                schema={whyUsSchema}
            />

            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
                            <Compass size={14} className="text-primary" />
                            THE ENGINEERING REALITY
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            WHY BUILD WITH{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="TECHCURE" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Traditional agencies sell bloated templates, hide behind account managers, and lock you into expensive retainers. We engineer high-velocity systems you completely own.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Transparent Comparison Table */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        title="THE TRANSPARENCY MATRIX"
                        subtitle="How Techcure Compares Against The Industry"
                    />

                    <div className="overflow-x-auto mt-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border/80 text-xs font-mono">
                                    <th className="py-4 px-6 text-foreground font-bold">CAPABILITY / STANDARD</th>
                                    <th className="py-4 px-6 text-primary font-bold bg-primary/10 rounded-t-xl text-center">
                                        TECHCURE
                                    </th>
                                    <th className="py-4 px-6 text-muted-foreground text-center">TRADITIONAL AGENCIES</th>
                                    <th className="py-4 px-6 text-muted-foreground text-center">FREELANCERS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50 text-xs sm:text-sm">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-secondary/30 transition-colors">
                                        <td className="py-4 px-6 font-medium text-foreground">
                                            {row.feature}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-primary/5 font-semibold text-primary">
                                            <div className="flex items-center justify-center gap-1.5 text-emerald-400">
                                                <CheckCircle2 size={16} />
                                                <span className="text-xs font-mono">Guaranteed</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center text-muted-foreground font-sans">
                                            <div className="flex items-center justify-center gap-1.5 text-red-400/80">
                                                <XCircle size={14} className="shrink-0" />
                                                <span className="text-xs">{row.agencies}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center text-muted-foreground font-sans">
                                            <div className="flex items-center justify-center gap-1.5 text-amber-400/80">
                                                <XCircle size={14} className="shrink-0" />
                                                <span className="text-xs">{row.freelancers}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Core Pillars Grid */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">Sub-Second Execution</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Every platform is engineered with React 19, zero-runtime Tailwind CSS v4, and Cloudflare/AWS edge compute. Your users experience instant, zero-jank browsing worldwide.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-primary flex items-center gap-2 pt-4 border-t border-border">
                            <CheckCircle2 size={14} />
                            <span>LCP &lt; 0.6s • INP &lt; 50ms</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl mb-6">
                                <KeyRound size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">100% Unconditional Ownership</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                The full Git repository, server accounts, domain records, and database keys are transferred to you on day one. You never pay ransom retainers.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 pt-4 border-t border-border">
                            <CheckCircle2 size={14} />
                            <span>Zero Vendor Lock-In Ever</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-amber-500/10 text-amber-300 w-fit rounded-xl mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">Ethical Senior &amp; Veteran Support</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                We celebrate real domain wisdom with an unconditional flat 60% discount for entrepreneurs aged 60+ and military veterans launching digital ventures.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-amber-300 flex items-center gap-2 pt-4 border-t border-border">
                            <CheckCircle2 size={14} />
                            <span>Flat 60% Subsidized Engineering</span>
                        </div>
                    </Card>
                </div>
            </section>

            <IndiaFirst />
            <CoreCapabilities />

            {/* Bottom Call to Action */}
            <section className="container mx-auto px-6 text-center mt-20">
                <div className="p-12 rounded-3xl bg-card/80 border border-border max-w-4xl mx-auto shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 uppercase">
                        <Sparkles size={12} />
                        DIRECT ARCHITECT ACCESS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Experience the Techcure engineering standard</h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                        Talk directly to our lead architects. We will audit your current tech stack or scope your new platform in 72 hours.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <span>Start Your Project</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
