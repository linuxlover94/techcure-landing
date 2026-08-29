import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
    {
        question: "How fast can you engineer and launch our system?",
        answer: "For high-velocity marketing architectures and business platforms, we build and deploy in 72 hours. Custom full-stack web applications, SaaS platforms, and dynamic portals typically take 2–3 weeks depending on technical specifications and third-party integrations."
    },
    {
        question: "Do we own the full source code and intellectual property?",
        answer: "100% unconditionally. Upon delivery, the complete Git repository, codebase, cloud infrastructure accounts, and domain credentials are fully transferred to you. We maintain zero proprietary lock-in and zero hostage mechanisms."
    },
    {
        question: "How does the Senior (60+) & Veteran Founder Discount work?",
        answer: "We offer a flat 60% discount across all software engineering and platform builds for founders aged 60 and above, retired professionals starting new ventures, and military veterans. No bureaucratic red tape—simply select the Senior & Veteran track when reaching out to apply the discount."
    },
    {
        question: "What modern technology stack and infrastructure do you build on?",
        answer: "We engineer with modern, production-grade stacks: Next.js, React 19, TypeScript, Node.js, PostgreSQL, Supabase, Tailwind CSS, and global edge computing networks (Cloudflare/Vercel/AWS). We deliberately avoid slow, bloated legacy CMS systems like WordPress."
    },
    {
        question: "What ongoing maintenance and engineering support do you provide?",
        answer: "Every project includes dedicated post-launch hypercare (ranging from 30 to 180 days depending on tier). This covers live uptime monitoring, performance optimization, security patches, and direct 1-on-1 technical onboarding for your team."
    },
    {
        question: "Can we meet your engineering team in person?",
        answer: "Yes. We maintain physical hubs across Lucknow, Ayodhya, and Bengaluru for founders who prefer in-person architectural discovery sessions, while running seamless asynchronous delivery globally."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-transparent" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <SectionHeading title="FAQ" subtitle="Common Questions" />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="border border-border rounded-xl overflow-hidden bg-card/60 backdrop-blur-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-muted-foreground flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground border-t border-border/50 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
