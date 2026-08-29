import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ScrambleText from '../ui/ScrambleText';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-mono mb-6 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>GLOBAL ASYNCHRONOUS DELIVERY</span>
                        <span className="opacity-40">•</span>
                        <span>100% CLIENT IP OWNERSHIP</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-head font-bold mb-6 leading-tight tracking-tight">
                        DIGITAL <br />
                        <ScrambleText text="DOMINANCE" className="text-primary" />
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                        We engineer custom, <span className="text-primary font-medium">high-velocity</span> web architectures with sub-second global latency. Zero agency bloat. 100% clean code transferred to you.
                    </p>

                    {/* Senior & Veteran Founder Grant Callout */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-mono mb-8 backdrop-blur-sm max-w-xl mx-auto">
                        <span className="text-base">🎖️</span>
                        <span><strong>Senior Founder Grant:</strong> Flat <strong>60% Off</strong> for entrepreneurs aged 60+ &amp; veterans launching tech ventures.</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 text-base sm:text-lg h-13 sm:h-14 magnet-target shadow-lg shadow-primary/20">
                                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="/products">
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-base sm:text-lg h-13 sm:h-14 magnet-target bg-background/50 backdrop-blur-sm">
                                View Live Systems
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
