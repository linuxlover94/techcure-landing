import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Zap, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';

const COMPARISONS = [
    {
        metric: "Typical Project Investment",
        traditionalAgency: "$25,000 – $75,000+ (Inflated agency overheads)",
        freelancers: "$500 – $2,500 (Hidden rework costs)",
        techcure: "$499 – $2,499 (Fixed, transparent sprint fees)"
    },
    {
        metric: "Delivery Velocity",
        traditionalAgency: "4 to 6 months of endless meetings",
        freelancers: "Unpredictable (High ghosting rate)",
        techcure: "72 Hours to 3 Weeks (Guaranteed go-live)"
    },
    {
        metric: "Who Actually Writes Your Code?",
        traditionalAgency: "Junior subcontractors & offshore interns",
        freelancers: "Unverified solo coders with varying skill",
        techcure: "Senior Full-Stack Principal Architects"
    },
    {
        metric: "Core Web Vitals & Load Speeds",
        traditionalAgency: "Sluggish 3-6s (Bloated WordPress themes)",
        freelancers: "Fails Core Web Vitals (30+ plugins)",
        techcure: "Sub-500ms Edge (100/100 Lighthouse score)"
    },
    {
        metric: "WordPress Migration Capabilities",
        traditionalAgency: "Charges $15k+ with high risk of 404s",
        freelancers: "Loses custom posts, tags & SEO canonicals",
        techcure: "100% Zero-Data-Loss Cryptographic Guarantee"
    },
    {
        metric: "Source Code & Intellectual Property",
        traditionalAgency: "Hostage trap / Monthly lock-in contracts",
        freelancers: "Fragmented repos without documentation",
        techcure: "100% Full Git Repo Transferred Day One"
    },
    {
        metric: "Communication & Technical Sync",
        traditionalAgency: "Filtered through non-technical account managers",
        freelancers: "Timezone friction, broken English, radio silence",
        techcure: "Direct architect access, daily Loom & Slack sync"
    }
];

const AgencyComparison = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="why-techcure">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="THE UNFAIR ADVANTAGE"
                    subtitle="Why Founders Fire Old Agencies and Hire Techcure"
                />

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        You don’t need an agency with 40 account managers taking $50,000 to install a broken WordPress theme. You need a veteran software engineer who executes with surgical precision, ships clean production code, and respects your capital.
                    </p>
                </div>

                {/* Desktop Comparison Table */}
                <div className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-3xl border border-border bg-card/70 shadow-2xl backdrop-blur-md">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-secondary/80">
                                <th className="p-5 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider w-[26%]">
                                    Engineering Dimension
                                </th>
                                <th className="p-5 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider w-[24%]">
                                    Traditional US/UK Agency
                                </th>
                                <th className="p-5 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider w-[24%]">
                                    Freelance Marketplaces
                                </th>
                                <th className="p-5 text-xs font-mono font-bold text-primary uppercase tracking-wider w-[26%] bg-primary/10 border-l border-r border-primary/20">
                                    <div className="flex items-center gap-1.5">
                                        <Award size={15} className="text-primary" />
                                        <span>Techcure Studio</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 text-xs sm:text-sm">
                            {COMPARISONS.map((row, index) => (
                                <tr key={index} className="hover:bg-secondary/30 transition-colors">
                                    <td className="p-5 font-bold font-head text-foreground">
                                        {row.metric}
                                    </td>
                                    <td className="p-5 text-muted-foreground flex-1">
                                        <div className="flex items-start gap-2 text-red-400/80">
                                            <X size={15} className="shrink-0 mt-0.5" />
                                            <span>{row.traditionalAgency}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-muted-foreground">
                                        <div className="flex items-start gap-2 text-amber-400/80">
                                            <ShieldAlert size={15} className="shrink-0 mt-0.5" />
                                            <span>{row.freelancers}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 bg-primary/5 border-l border-r border-primary/20 font-medium text-foreground">
                                        <div className="flex items-start gap-2 text-emerald-400">
                                            <Check size={16} className="shrink-0 mt-0.5 font-bold" />
                                            <span className="text-foreground font-semibold">{row.techcure}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile / Tablet Card View */}
                <div className="lg:hidden space-y-4 max-w-md mx-auto">
                    {COMPARISONS.map((row, index) => (
                        <Card key={index} className="p-5 bg-card/80 border-border space-y-3">
                            <h4 className="text-sm font-bold font-head text-foreground">{row.metric}</h4>
                            <div className="space-y-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                                    <span className="font-bold block text-[10px] uppercase font-mono mb-0.5">Old Agency:</span>
                                    {row.traditionalAgency}
                                </div>
                                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                    <span className="font-bold block text-[10px] uppercase font-mono mb-0.5">Freelancer:</span>
                                    {row.freelancers}
                                </div>
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                                    <span className="font-bold block text-[10px] uppercase font-mono mb-0.5 text-primary">Techcure Direct:</span>
                                    {row.techcure}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyComparison;
