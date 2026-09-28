import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, ShieldCheck, Zap, ArrowRight, MessageSquare, CheckCircle2, Lock, FileCode, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';

const REGIONS = [
    {
        name: "United States (East & West)",
        flag: "🇺🇸",
        tzName: "New York / San Francisco",
        timeZone: "America/New_York",
        altTimeZone: "America/Los_Angeles",
        abbr: "EST / PST",
        overlap: "4 - 5 hrs daily direct overlap",
        status: "Active Sprint Delivery"
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧",
        tzName: "London / Manchester",
        timeZone: "Europe/London",
        abbr: "GMT / BST",
        overlap: "5 - 6 hrs daily direct overlap",
        status: "Active Sprint Delivery"
    },
    {
        name: "European Union",
        flag: "🇪🇺",
        tzName: "Berlin / Amsterdam / Paris",
        timeZone: "Europe/Berlin",
        abbr: "CET / CEST",
        overlap: "5 - 6 hrs daily direct overlap",
        status: "Active Sprint Delivery"
    },
    {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        tzName: "Dubai / Abu Dhabi",
        timeZone: "Asia/Dubai",
        abbr: "GST",
        overlap: "Full 7 - 8 hrs direct overlap",
        status: "High-Volume Hub"
    },
    {
        name: "India & Asia-Pacific",
        flag: "🇮🇳",
        tzName: "Ayodhya HQ / Pan-India",
        timeZone: "Asia/Kolkata",
        abbr: "IST",
        overlap: "HQ Primary Operations",
        status: "Engineering Command"
    }
];

const INTERNATIONAL_PILLARS = [
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Ironclad Mutual NDA by Default",
        desc: "Before a single line of client discovery begins, we execute a legally binding Mutual Non-Disclosure Agreement. Your intellectual property and proprietary trade secrets are protected under international commercial standards."
    },
    {
        icon: <FileCode className="h-6 w-6 text-primary" />,
        title: "100% Unconditional IP Assignment",
        desc: "Zero licensing traps or hostage codebases. Full Git commit histories, cloud root credentials, database schemas, and intellectual property are irrevocably assigned to your organization on day one."
    },
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Asynchronous Radical Transparency",
        desc: "No endless bureaucratic meetings. You get daily Loom video screen shares, real-time GitHub pull requests, and a dedicated private Slack or Discord channel with direct access to senior software architects."
    },
    {
        icon: <Lock className="h-6 w-6 text-primary" />,
        title: "Multi-Currency Global Invoicing",
        desc: "Transparent fixed-scope sprints invoiced natively in USD ($), GBP (£), EUR (€), AED (د.إ), and INR (₹). We support Stripe, Wise, and SWIFT international bank wires with zero surprise currency fees."
    }
];

const GlobalDelivery = () => {
    const [times, setTimes] = useState({});

    useEffect(() => {
        const updateTimes = () => {
            const newTimes = {};
            REGIONS.forEach((reg) => {
                try {
                    const now = new Date();
                    const formatter = new Intl.DateTimeFormat('en-US', {
                        timeZone: reg.timeZone,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    });
                    newTimes[reg.abbr] = formatter.format(now);
                } catch {
                    newTimes[reg.abbr] = "--:-- --";
                }
            });
            setTimes(newTimes);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="global-delivery">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="GLOBAL CLIENT DELIVERY"
                    subtitle="Engineered for Founders in USA, UK, Europe & UAE"
                />

                {/* Subtitle Value Pitch */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        High-growth startups, venture-backed founders, and enterprise operators in North America, Western Europe, and the Middle East partner with Techcure to bypass sluggish local agencies and build elite React 19 &amp; Next.js platforms in rapid 72-hour to 3-week sprints.
                    </p>
                </div>

                {/* Live World Clocks & Timezone Overlap Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {REGIONS.map((reg, index) => (
                        <Card key={index} className="p-4 bg-card/70 border-border relative overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all">
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="text-2xl" role="img" aria-label={reg.name}>{reg.flag}</span>
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                                        {reg.abbr}
                                    </span>
                                </div>
                                <h4 className="text-xs font-bold font-head text-foreground truncate">{reg.name}</h4>
                                <div className="text-[11px] text-muted-foreground mb-3">{reg.tzName}</div>
                            </div>

                            <div className="pt-3 border-t border-border/60">
                                <div className="flex items-center gap-1.5 text-lg font-mono font-bold text-primary mb-1">
                                    <Clock size={14} className="text-primary animate-pulse shrink-0" />
                                    <span>{times[reg.abbr] || "Syncing..."}</span>
                                </div>
                                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <span>{reg.overlap}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* 4 Pillars of International High-Ticket Delivery */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {INTERNATIONAL_PILLARS.map((pillar, i) => (
                        <Card key={i} className="p-6 bg-card/60 border-border flex gap-4 items-start">
                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 mt-0.5">
                                {pillar.icon}
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-base font-bold font-head text-foreground">{pillar.title}</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* High-Ticket International Direct Sprint Banner */}
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/15 via-card to-secondary border border-primary/30 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase font-bold">
                            <Globe size={14} />
                            <span>International Client Sprints</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-head font-bold text-foreground">
                            Ready to hire an elite engineer without agency markups?
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                            Book an introductory 15-minute technical roadmap call directly with our principal architects. We review your PRD, propose an edge architecture, and can begin your sprint within 48 hours.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                        <a
                            href={`https://wa.me/918188838966?text=${encodeURIComponent("Hi Techcure, I am an international founder (US/UK/EU/UAE) looking to hire your team for an upcoming custom software sprint.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button size="lg" className="w-full gap-2 rounded-xl font-bold shadow-lg shadow-primary/20">
                                <MessageSquare size={16} />
                                <span>WhatsApp (+91 81888 38966)</span>
                            </Button>
                        </a>
                        <a href="#contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full gap-2 rounded-xl">
                                <span>Send RFQ Brief</span>
                                <ArrowRight size={14} />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalDelivery;
