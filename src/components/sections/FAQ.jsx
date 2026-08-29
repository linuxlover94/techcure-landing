import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
    {
        question: "How fast can you launch?",
        answer: "For standard business sites, we deploy in 72 hours. Custom web apps typically take 2-3 weeks depending on complexity."
    },
    {
        question: "Do I own the code?",
        answer: "100%. Once the final payment is cleared, you own the IP, the code, and the domain. No hostage situations."
    },
    {
        question: "Can we meet in Lucknow?",
        answer: "Yes. We have a physical presence in Lucknow and Ayodhya. We can arrange a meeting to discuss your roadmap."
    },
    {
        question: "What tech stack do you use?",
        answer: "We primarily use React, Next.js, and Node.js for web apps. For mobile, we use Flutter or React Native. We avoid WordPress templates."
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
                                        <div className="p-6 pt-0 text-muted-foreground border-t border-border/50">
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
