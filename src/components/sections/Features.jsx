import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { Globe, Smartphone, TrendingUp, Shield, Zap, Activity } from 'lucide-react';

const features = [
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Web Architecture",
        description: "Next.js applications built for speed and SEO.",
        className: "md:col-span-2"
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "App Ecosystem",
        description: "Native-feel cross-platform apps.",
        className: ""
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "SEO Domination",
        description: "Rank #1 for keywords that matter.",
        className: ""
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Cyber Security",
        description: "Enterprise-grade protection.",
        className: "md:col-span-2"
    },
    {
        icon: <Activity className="h-8 w-8 text-primary" />,
        title: "Social Velocity",
        description: "Viral content strategies.",
        className: ""
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Performance",
        description: "Sub-second load times.",
        className: ""
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="features">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="THE ECOSYSTEM" subtitle="Our Services" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className={feature.className}
                        >
                            <Card className="h-full flex flex-col justify-between group hover:bg-primary/5 bg-card/60 backdrop-blur-md border-border">
                                <div className="mb-6 p-3 bg-primary/10 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
