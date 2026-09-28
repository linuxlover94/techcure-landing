import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, ShieldCheck, Zap, Users, Code } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
            <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* International Client Delivery & Availability Pill Strip */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Sprint Slots Open • US, UK, EU &amp; UAE Sprints</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border text-xs font-mono text-muted-foreground shadow-sm">
                            <span>🇺🇸 USA</span>
                            <span>•</span>
                            <span>🇬🇧 UK</span>
                            <span>•</span>
                            <span>🇪🇺 Europe</span>
                            <span>•</span>
                            <span>🇦🇪 Dubai</span>
                            <span>•</span>
                            <span>🇮🇳 India</span>
                        </div>
                    </div>

                    {/* H1 Main Value Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-head font-bold mb-6 leading-[1.08] tracking-tight text-foreground">
                        Custom Websites &amp; Software Built to{' '}
                        <span className="text-gradient-animated">
                            Win Real Clients
                        </span>
                        <span className="text-primary">.</span>
                    </h1>

                    {/* Customer-Centric Subheadline */}
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
                        We engineer bespoke Next.js web applications, high-converting platforms, and scalable SaaS systems that load in sub-seconds. Zero agency bloat, zero lock-in, and 100% full source code ownership transferred directly to you.
                    </p>

                    {/* Action CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 text-base sm:text-lg h-13 sm:h-14 shadow-xl shadow-primary/20 gap-2 font-bold">
                                <span>Start Your Project</span>
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </a>
                        <a href="#showcase">
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-base sm:text-lg h-13 sm:h-14 border-border bg-card/60 hover:bg-card">
                                View Live Production Proof
                            </Button>
                        </a>
                    </div>

                    {/* Real Measurable Trust Telemetry Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-card/60 border border-border backdrop-blur-md shadow-sm max-w-4xl mx-auto text-left">
                        <div className="p-3 border-r-0 md:border-r border-border/80">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                                <Users size={14} className="text-primary" />
                                <span>GoShuttles Transit</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold font-head text-foreground">250,000+</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">Rides Booked &amp; Dispatched</div>
                        </div>

                        <div className="p-3 border-r-0 md:border-r border-border/80">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                                <Zap size={14} className="text-emerald-500" />
                                <span>WiCom Telecom</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold font-head text-foreground">0.4s FCP</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">+44% Payment Conversion</div>
                        </div>

                        <div className="p-3 border-r-0 md:border-r border-border/80">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                                <ShieldCheck size={14} className="text-indigo-400" />
                                <span>WP to React</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold font-head text-foreground">100% Zero Loss</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">Cryptographic Migration</div>
                        </div>

                        <div className="p-3">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                                <Code size={14} className="text-cyan-400" />
                                <span>Unconditional IP</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold font-head text-foreground">100% Git Repo</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">Full Code Transferred Day 1</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
