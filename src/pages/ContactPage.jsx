import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';
import ScrambleText from '../components/ui/ScrambleText';
import SEOHead from '../components/ui/SEOHead';

const ContactPage = () => {
    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Start Your Project | Direct Engineering Contact"
                description="Connect directly with Techcure senior software engineers in Lucknow, Ayodhya, and Bangalore for custom SaaS development, cloud systems, and high-velocity web platforms."
                canonicalPath="/contact"
            />
            {/* Page Header */}
            <section className="py-16 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
                            <MessageSquare size={14} className="text-primary" />
                            Direct Engineering Contact
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            START A{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="CONVERSATION" />
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Have an ambitious project in mind? Connect directly with our engineering team in Lucknow, Ayodhya, and Bangalore.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Contact />
            <FAQ />
        </div>
    );
};

export default ContactPage;
