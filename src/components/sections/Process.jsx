import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  { number: "01", title: "Discovery", desc: "We analyze your business model and identify growth bottlenecks." },
  { number: "02", title: "Strategy", desc: "We engineer a custom roadmap using the latest tech stack." },
  { number: "03", title: "Execution", desc: "Rapid development and deployment with rigorous testing." },
];

const Process = () => {
  return (
    <section className="py-24 bg-transparent border-y border-border/50" id="process">
      <div className="container mx-auto px-6">
        <SectionHeading title="THE PROCESS" subtitle="How We Work" />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-background border border-border rounded-full flex items-center justify-center text-3xl font-head font-bold text-muted-foreground mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
