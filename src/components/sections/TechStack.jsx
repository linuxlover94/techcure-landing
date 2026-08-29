import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Globe, Server, Smartphone,
    Cpu, Layers, Box, Terminal, Command, Hash, Braces
} from 'lucide-react';

const technologies = [
    { name: "React", icon: <Code2 /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "TypeScript", icon: <Braces /> },
    { name: "Node.js", icon: <Server /> },
    { name: "Python", icon: <Terminal /> },
    { name: "AWS", icon: <Database /> },
    { name: "Docker", icon: <Box /> },
    { name: "Figma", icon: <Layers /> },
    { name: "GraphQL", icon: <Cpu /> },
    { name: "Tailwind", icon: <Hash /> },
    { name: "Framer", icon: <Command /> },
    { name: "Flutter", icon: <Smartphone /> }
];

const TechStack = () => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <section className="py-12 border-y border-border/50 bg-transparent overflow-hidden" aria-label="Technology Stack">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Powered by modern technologies</p>
            </div>

            <div className="flex relative">
                <motion.div
                    className="flex gap-16 whitespace-nowrap px-8"
                    animate={prefersReducedMotion ? {} : { x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16" aria-hidden={i > 0}>
                            {technologies.map((tech, j) => (
                                <div key={j} className="flex items-center gap-3 text-muted-foreground/70 hover:text-primary transition-colors cursor-default group">
                                    <span className="p-2 bg-secondary/50 rounded-lg group-hover:bg-primary/10 transition-colors">
                                        {React.cloneElement(tech.icon, { size: 24 })}
                                    </span>
                                    <span className="text-xl font-head font-bold">
                                        {tech.name}
                                    </span>
                                </div>
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

export default TechStack;
