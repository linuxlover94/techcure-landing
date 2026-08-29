import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ListChecks, Lightbulb, Palette, Gauge, ShieldCheck, RefreshCw, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const capabilities = [
    {
        icon: <Code2 className="h-10 w-10 text-primary" />,
        title: "Expert Coding",
        description: "Clean, efficient, and maintainable code tailored to project needs."
    },
    {
        icon: <ListChecks className="h-10 w-10 text-primary" />,
        title: "Proven Methods",
        description: "Leveraging agile practices for iterative success and adaptability."
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Strategic Insight",
        description: "Solutions perfectly aligned with your business goals and vision."
    },
    {
        icon: <Palette className="h-10 w-10 text-primary" />,
        title: "Creative Design",
        description: "Intuitive and engaging UI/UX crafted for your brand identity."
    },
    {
        icon: <Gauge className="h-10 w-10 text-primary" />,
        title: "Performance Focus",
        description: "Optimized solutions for superior speed, reliability and scalability."
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Quality Assurance",
        description: "Rigorous testing ensuring bug-free and flawless deployments."
    },
    {
        icon: <RefreshCw className="h-10 w-10 text-primary" />,
        title: "Adaptive Process",
        description: "Flexibility through agile methodology to meet evolving needs."
    },
    {
        icon: <Clock className="h-10 w-10 text-primary" />,
        title: "Timely Delivery",
        description: "A strong commitment to project deadlines and your launch schedule."
    }
];

const CoreCapabilities = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden perspective-1000">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="CORE CAPABILITIES" subtitle="Why Choose Us" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -100, rotateX: 45 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.1
                            }}
                            viewport={{ once: false, margin: "-30px" }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8 hover:border-primary/50 transition-colors duration-300 group bg-card/60 backdrop-blur-md border-border">
                                <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{cap.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
