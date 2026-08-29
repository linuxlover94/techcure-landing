import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
    {
        quote: "We switched from a WordPress template to a custom React app by Techcure. Our lead volume tripled in 2 weeks.",
        author: "Amit V.",
        role: "CEO, Urban Logistics",
        rating: 5
    },
    {
        quote: "The team in Lucknow is world-class. They don't just code; they understand business logic. Best decision we made.",
        author: "Sarah K.",
        role: "Founder, FreshFoods",
        rating: 5
    },
    {
        quote: "Insane speed. Our E-commerce store loads instantly even on 4G. Sales are up 40% month over month.",
        author: "Rahul J.",
        role: "MD, StyleHub",
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
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-24 bg-transparent" id="testimonials">
            <div className="container mx-auto px-6">
                <SectionHeading title="CLIENT INTEL" subtitle="Success Stories" />

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

                    <div className="relative min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <Card className="text-center p-8 md:p-12 border-border bg-card/60 backdrop-blur-md hover:border-primary/40">
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <blockquote className="text-xl md:text-3xl font-head font-bold mb-8 leading-relaxed">
                                        "{testimonials[activeIndex].quote}"
                                    </blockquote>
                                    <div>
                                        <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                                        <div className="text-primary text-sm">{testimonials[activeIndex].role}</div>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                                className={`h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-primary/50 w-3'
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
