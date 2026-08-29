import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "WiCom Telecom", "GoShuttles Transit", "Sri Nimbarka Peetham", "GoAyodhya Tours", "InkLeaf Vault", "MathSheet Engine", "RentFlow PropTech"
];

const SocialProof = () => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <section className="py-12 border-y border-border/50 bg-transparent overflow-hidden" aria-label="Trusted Clients and Platforms">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Trusted by innovative companies &amp; digital platforms</p>
            </div>

            <div className="flex relative">
                <motion.div
                    className="flex gap-16 whitespace-nowrap px-8"
                    animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16" aria-hidden={i > 0}>
                            {logos.map((logo, j) => (
                                <span key={j} className="text-2xl font-head font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-default">
                                    {logo}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default SocialProof;
