import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
    {
        quote: "Techcure re-architected our entire billing and customer portal. Our load times dropped from 4.2 seconds to 0.4 seconds, and payment checkout completion surged by 44% across 50,000+ active broadband subscribers.",
        clientName: "WiCom Networks Pvt. Ltd.",
        platform: "Enterprise Telecom & Fiber Billing",
        url: "https://wicom.in",
        displayUrl: "wicom.in",
        metrics: "+44% Conversion • 0.4s FCP",
        rating: 5
    },
    {
        quote: "They engineered our smart transit booking engine and live fleet dispatch dashboard. Over 250,000 airport shuttle rides have run smoothly on Techcure's architecture with sub-200ms seat reservation latency.",
        clientName: "GoShuttles Mobility Technologies",
        platform: "Airport & Intercity Transit App",
        url: "https://www.goshuttles.in/",
        displayUrl: "goshuttles.in",
        metrics: "250,000+ Rides Booked • 4.8 ★ App",
        rating: 5
    },
    {
        quote: "Our trust needed transparent donor receipts, instant 80G tax certification, and rock-solid stability during massive religious traffic spikes. Techcure delivered with zero bloat and unconditional code ownership.",
        clientName: "Shri Niwas Peetham Sewa Sansthan",
        platform: "Ayodhya Heritage & Public Welfare Trust",
        url: "https://snpeethamayodhya.org",
        displayUrl: "snpeethamayodhya.org",
        metrics: "100,000+ Meals • Verified NGO (2005)",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const current = testimonials[activeIndex];

    return (
        <section className="py-24 bg-transparent" id="testimonials">
            <div className="container mx-auto px-6">
                <SectionHeading title="VERIFIED CLIENT IMPACT" subtitle="Real Systems in Production" />

                <div
                    className="max-w-4xl mx-auto relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >
                    <div className="absolute -top-10 -left-10 text-primary/10 pointer-events-none">
                        <Quote size={120} />
                    </div>

                    <div className="relative min-h-[320px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="w-full"
                            >
                                <Card className="p-8 md:p-12 border-border bg-card shadow-xl text-center">
                                    {/* Star Rating & Verified Badge */}
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="flex gap-1">
                                            {[...Array(current.rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-border">•</span>
                                        <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-500 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                            <ShieldCheck size={12} />
                                            Verified Production System
                                        </span>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-xl md:text-2xl font-head font-medium mb-8 leading-relaxed text-foreground max-w-3xl mx-auto">
                                        "{current.quote}"
                                    </blockquote>

                                    {/* Client Attribution & Live Link */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                                        <div>
                                            <div className="font-bold text-lg text-foreground">{current.clientName}</div>
                                            <div className="text-xs text-muted-foreground">{current.platform}</div>
                                        </div>

                                        <span className="hidden sm:inline text-border">|</span>

                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                                                {current.metrics}
                                            </span>
                                            <a
                                                href={current.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                                            >
                                                <span>{current.displayUrl}</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Indicator Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    i === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-primary/50 w-2.5'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
