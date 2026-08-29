import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
    const isCenter = align === 'center';

    return (
        <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase`}
                >
                    {subtitle}
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-head font-bold mb-6"
            >
                <ScrambleText text={title} />
            </motion.h2>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-1 w-24 bg-gradient-to-r from-primary to-transparent ${isCenter ? 'mx-auto' : ''}`}
            />
        </div>
    );
};

export default SectionHeading;
