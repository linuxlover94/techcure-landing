import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const plans = [
    {
        name: "Startup",
        price: { global: "$499", inr: "₹19,999" },
        features: ["5 Page Website", "Basic SEO", "Contact Form", "Mobile Responsive", "1 Month Support"],
        popular: false
    },
    {
        name: "Growth",
        price: { global: "$999", inr: "₹49,999" },
        features: ["10 Page Website", "Advanced SEO", "CMS Integration", "Analytics Setup", "3 Months Support", "Speed Optimization"],
        popular: true
    },
    {
        name: "Enterprise",
        price: { global: "$2499", inr: "₹1,49,999" },
        features: ["Custom Web App", "Full SEO Suite", "Database Integration", "Payment Gateway", "Priority Support", "Custom Animations"],
        popular: false
    }
];

const Pricing = () => {
    const [isInr, setIsInr] = useState(true);

    return (
        <section className="py-24 bg-transparent" id="pricing">
            <div className="container mx-auto px-6">
                <SectionHeading title="INVESTMENT" subtitle="Transparent Pricing" />

                <div className="flex justify-center mb-12">
                    <div className="bg-secondary p-1 rounded-full flex items-center relative">
                        <motion.div
                            className="absolute top-1 bottom-1 w-[50%] bg-background rounded-full shadow-sm"
                            animate={{ x: isInr ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setIsInr(false)}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isInr ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                            Global (USD)
                        </button>
                        <button
                            onClick={() => setIsInr(true)}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${isInr ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                            India (INR)
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <Card className={`h-full flex flex-col relative bg-card/60 backdrop-blur-md border-border ${plan.popular ? 'border-primary shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)]' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <div className="text-4xl font-head font-bold mb-2">
                                        {isInr ? plan.price.inr : plan.price.global}
                                    </div>
                                    <p className="text-sm text-muted-foreground">One-time payment</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <div className="p-1 rounded-full bg-primary/10 text-primary">
                                                <Check size={14} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure, I would like to get started with the ${plan.name} plan (${isInr ? plan.price.inr : plan.price.global}) for our project.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full gap-1.5">
                                        <span>Choose {plan.name}</span>
                                    </Button>
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block bg-green-500/10 text-green-500 px-4 py-2 rounded-lg text-sm font-medium border border-green-500/20">
                        🎉 Limited Time: Save 40% on all plans this month
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
