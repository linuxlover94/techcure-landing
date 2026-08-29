import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Code, HeartHandshake, CheckCircle2, XCircle, ArrowRight, Award, Compass } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrambleText from '../components/ui/ScrambleText';
import SEOHead from '../components/ui/SEOHead';
import IndiaFirst from '../components/sections/IndiaFirst';
import CoreCapabilities from '../components/sections/CoreCapabilities';

const comparisonData = [
    {
        feature: "Custom React/Next.js Architecture",
        techcure: true,
        agencies: "Often use heavy, slow WordPress templates",
        freelancers: "Varies; rarely built for high traffic"
    },
    {
        feature: "100% Code & IP Ownership",
        techcure: true,
        agencies: "Hostage situations & monthly recurring lock-in",
        freelancers: "Messy repositories with zero documentation"
    },
    {
        feature: "Military-Grade Security (AES-256)",
        techcure: true,
        agencies: "Generic plugin vulnerabilities",
        freelancers: "Often ignored completely"
    },
    {
        feature: "72-Hour Rapid Deployment Pipeline",
        techcure: true,
        agencies: "Months of bureaucracy and meetings",
        freelancers: "Unpredictable delays and ghosting"
    },
    {
        feature: "Indian Market Cost Efficiency (Save 40%)",
        techcure: true,
        agencies: "Exorbitant overhead costs",
        freelancers: "Cheap upfront, expensive rework"
    },
    {
        feature: "Physical Presence in Lucknow & Ayodhya",
        techcure: true,
        agencies: "Remote ticket queues with no face-to-face",
        freelancers: "No physical accountability"
    }
];

const WhyUs = () => {
    const whyUsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Why Choose Techcure - Engineering Superiority",
        "url": "https://techcurehq.com/why-us",
        "description": "Compare Techcure's zero-lock-in digital engineering against traditional marketing agencies and freelance teams. 100% IP ownership, sub-second speed, and 60% Senior Founder Grant.",
        "publisher": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com"
        }
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Why Choose Techcure - Engineering Superiority vs Traditional Agencies"
                description="Compare Techcure's zero-lock-in digital engineering against traditional marketing agencies and freelance teams. 100% IP ownership, sub-second speed, and 60% Senior Founder Grant."
                canonicalPath="/why-us"
                schema={whyUsSchema}
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
                            <Compass size={14} className="text-primary" />
                            Our Engineering Advantage
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            WHY{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="TECHCURE" />
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We don't build template websites. We engineer high-velocity digital monopolies that outperform competitors on speed, security, and conversion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Built for India Section */}
            <IndiaFirst />

            {/* Comparison Matrix: Techcure vs Others */}
            <section className="py-20 bg-secondary/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="THE DIFFERENCE"
                        subtitle="Side-By-Side Reality Check"
                    />

                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md overflow-hidden min-w-[650px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-12 p-5 bg-secondary/80 border-b border-border text-xs font-mono font-bold uppercase tracking-wider">
                                <div className="col-span-5 text-foreground">Capabilities &amp; Standards</div>
                                <div className="col-span-3 text-primary flex items-center gap-1.5">
                                    <Award size={14} />
                                    <span>Techcure</span>
                                </div>
                                <div className="col-span-2 text-muted-foreground">Typical Agencies</div>
                                <div className="col-span-2 text-muted-foreground">Freelancers</div>
                            </div>

                            {/* Table Rows */}
                            {comparisonData.map((row, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-12 p-5 items-center text-xs md:text-sm border-b border-border/50 ${
                                        idx % 2 === 0 ? 'bg-background/20' : 'bg-secondary/10'
                                    }`}
                                >
                                    <div className="col-span-5 font-medium text-foreground pr-4">
                                        {row.feature}
                                    </div>
                                    <div className="col-span-3 flex items-center gap-2 text-emerald-500 font-bold">
                                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                        <span>Included &amp; Guaranteed</span>
                                    </div>
                                    <div className="col-span-2 text-muted-foreground text-xs pr-2 flex items-center gap-1.5">
                                        <XCircle size={14} className="text-red-500/70 shrink-0" />
                                        <span>{row.agencies}</span>
                                    </div>
                                    <div className="col-span-2 text-muted-foreground text-xs flex items-center gap-1.5">
                                        <XCircle size={14} className="text-red-500/70 shrink-0" />
                                        <span>{row.freelancers}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <CoreCapabilities />

            {/* Engineering Pillars */}
            <section className="py-20 container mx-auto px-6">
                <SectionHeading
                    title="FOUR PILLARS"
                    subtitle="How We Deliver Dominance"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 bg-card/60 border-border">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-4">
                            <Zap size={24} />
                        </div>
                        <h4 className="text-lg font-bold font-head mb-2">Sub-Second Speed</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            Every millisecond counts. We optimize bundling, hydration, and asset delivery to guarantee sub-second First Contentful Paint.
                        </p>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border">
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-lg font-bold font-head mb-2">Military-Grade Defense</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            No leaky plugins. We implement strict Content Security Policies, parameterized database queries, and client-side encryption.
                        </p>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 w-fit mb-4">
                            <Code size={24} />
                        </div>
                        <h4 className="text-lg font-bold font-head mb-2">Clean Architecture</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            Modular, maintainable codebases that your internal developers or future hires will love to work with and extend.
                        </p>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 w-fit mb-4">
                            <HeartHandshake size={24} />
                        </div>
                        <h4 className="text-lg font-bold font-head mb-2">Direct Founder Access</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            No bureaucratic account managers. You work directly with senior software architects in Lucknow, Ayodhya, and Bangalore.
                        </p>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-card/80 border border-border">
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Ready to upgrade from slow templates?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Let's schedule a roadmap discussion and engineer your custom high-velocity digital platform.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <span>Get Started With Techcure</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
