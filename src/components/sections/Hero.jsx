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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SYSTEM ONLINE • TAKING CLIENTS
                    </div>

                    <h1 className="text-6xl md:text-8xl font-head font-bold mb-6 leading-tight tracking-tight">
                        DIGITAL <br />
                        <ScrambleText text="DOMINANCE" className="text-primary" />
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
                        Stop competing. Start monopolizing. We engineer <span className="text-primary font-medium">high-velocity</span> web experiences that turn traffic into revenue.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 text-lg h-14 magnet-target">
                                Start Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="#features">
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 magnet-target bg-background/50 backdrop-blur-sm">
                                View Ecosystem
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
