import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Users, 
    Shield, 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    MapPin, 
    Linkedin, 
    Twitter, 
    Github,
    Sparkles,
    KeyRound,
    Gauge
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrambleText from '../components/ui/ScrambleText';
import SEOHead from '../components/ui/SEOHead';

const TEAM_MEMBERS = [
    {
        name: "Ved Prakash Pandey",
        role: "Founder & Lead Architect",
        tagline: "Systems Engineering, Cryptography & Cloud Core",
        bio: "Full-stack systems architect and distributed edge computing specialist. Spearheading Techcure's core architecture, high-throughput backend infrastructure, and zero-knowledge client-side encryption engines.",
        avatarInitials: "VP",
        avatarGradient: "from-cyan-500 to-blue-600",
        tags: ["Systems Architecture", "AES-256 Cryptography", "Distributed Edge", "React 19 / Next.js Core"],
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            github: "https://github.com"
        }
    },
    {
        name: "Yogesh Pathak",
        role: "Marketing Chief (CMO)",
        tagline: "Growth Architecture, Algorithmic SEO & Market Dominance",
        bio: "Growth strategist and technical search architect. Leading commercial expansion, multi-channel customer acquisition pipelines, programmatic SEO engineering, and high-conversion market positioning.",
        avatarInitials: "YP",
        avatarGradient: "from-purple-500 to-pink-600",
        tags: ["Technical SEO", "Growth Engineering", "Conversion Architecture", "Market Positioning"],
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        name: "Ayush Srivastava",
        role: "Chief Financial Officer (CFO)",
        tagline: "Capital Strategy, Financial Operations & Venture Governance",
        bio: "Financial strategist and operational growth advisor. Directing capital allocation, corporate governance, unit economics optimization, and milestone-driven contract transparency across all Techcure platforms.",
        avatarInitials: "AS",
        avatarGradient: "from-emerald-500 to-teal-600",
        tags: ["Capital Allocation", "Unit Economics", "Contract Governance", "Venture Scaling"],
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
];

const MILESTONES = [
    {
        year: "2024",
        title: "The Zero-Bloat Mandate",
        desc: "Founded out of frustration with sluggish, vulnerable WordPress agency templates. We set a hard engineering standard: custom React and edge-rendered architectures delivering sub-second speed and zero vendor lock-in."
    },
    {
        year: "2025",
        title: "Mission-Critical Systems at Scale",
        desc: "Engineered WiCom enterprise telecom portal, architected the GoShuttles transit mobility network (processing 250,000+ bookings), and initiated RentFlow PropTech OS."
    },
    {
        year: "2026",
        title: "Zero-Knowledge Vaults & Vedic Ephemeris",
        desc: "Shipped InkLeaf's military-grade client-side AES-256 encrypted vault and Sri Nimbarka Peetham's precision Vedic ephemeris engine with sub-15ms planetary calculation speed."
    }
];

const PERFORMANCE_METRICS = [
    { label: "Edge Time to First Byte", value: "< 120ms", desc: "Served via distributed edge CDN nodes worldwide" },
    { label: "Lighthouse Performance", value: "99 - 100", desc: "Zero render-blocking scripts or bloated plugins" },
    { label: "Initial JS Payload", value: "< 80 kB", desc: "Aggressive tree-shaking & code splitting" },
    { label: "Client Code Ownership", value: "100%", desc: "Full Git repo, DB schemas & hosting keys transferred" }
];

const About = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Techcure - Engineering Studio & Leadership Team",
        "url": "https://techcurehq.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com",
            "founder": {
                "@type": "Person",
                "name": "Ved Prakash Pandey",
                "jobTitle": "Founder & Lead Architect"
            },
            "employee": [
                {
                    "@type": "Person",
                    "name": "Ved Prakash Pandey",
                    "jobTitle": "Founder & Lead Architect"
                },
                {
                    "@type": "Person",
                    "name": "Yogesh Pathak",
                    "jobTitle": "Chief Marketing Officer (CMO)"
                },
                {
                    "@type": "Person",
                    "name": "Ayush Srivastava",
                    "jobTitle": "Chief Financial Officer (CFO)"
                }
            ]
        }
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="About Us & Engineering Leadership"
                description="Meet the engineering team behind Techcure: Ved Prakash Pandey (Founder), Yogesh Pathak (CMO), and Ayush Srivastava (CFO). We build custom high-velocity web platforms, SaaS architectures, and zero-knowledge systems."
                canonicalPath="/about"
                schema={aboutSchema}
            />

            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
                            <Users size={14} className="text-primary" />
                            Engineering Studio &amp; Origin
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            ABOUT{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="TECHCURE" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We are an elite software engineering studio. We don't sell agency fluff or fragile templates. We write bespoke, high-velocity code that gives your business an undeniable unfair advantage.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Manifesto & Engineering Values */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6 border border-primary/20">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">Sub-Second Velocity</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                We refuse slow 5-second website templates. Every single platform is custom-engineered using React 19, Vite, and distributed edge architectures guaranteeing sub-second load times worldwide.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-primary flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>Lighthouse 99-100 Core Web Vitals</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-emerald-500/10 text-emerald-400 w-fit rounded-2xl mb-6 border border-emerald-500/20">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">Zero-Knowledge Defense</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Security is woven into the architecture from day one. We engineer client-side AES-256-GCM cryptography, strict Content Security Policies, parameterized queries, and zero third-party plugin vulnerabilities.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-emerald-400 flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>Zero Leaky Plugins or Open Backdoors</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-purple-500/10 text-purple-400 w-fit rounded-2xl mb-6 border border-purple-500/20">
                                <KeyRound size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">100% IP &amp; Code Ownership</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                You own 100% of your source code, Git commit history, database schemas, and intellectual property. No vendor lock-in, no hostage subscriptions, and no hidden monthly fees.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-purple-400 flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>Complete Git Repos &amp; Full Documentation</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Performance Proof Metrics */}
            <section className="container mx-auto px-6 mb-24">
                <div className="p-8 md:p-12 rounded-3xl bg-secondary/40 border border-border">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-3 uppercase">
                            <Gauge size={13} />
                            Hard Engineering Standards
                        </div>
                        <h3 className="text-2xl md:text-3xl font-head font-bold">Performance You Can Measure</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PERFORMANCE_METRICS.map((metric, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center">
                                <div className="text-3xl lg:text-4xl font-head font-bold text-primary font-mono mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-bold text-foreground mb-1">{metric.label}</div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership & Core Team Section */}
            <section className="py-20 bg-secondary/30 border-y border-border mb-24">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="LEADERSHIP & ARCHITECTS"
                        subtitle="The People Building Your Code"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <Card className="p-8 bg-card/80 border-border h-full flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg">
                                    <div>
                                        {/* Avatar & Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white font-head font-bold text-2xl shadow-md shrink-0`}>
                                                {member.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold font-head text-foreground">{member.name}</h3>
                                                <div className="text-xs font-mono font-semibold text-primary mt-0.5">{member.role}</div>
                                            </div>
                                        </div>

                                        <p className="text-xs font-mono font-medium text-foreground/80 mb-4 pb-3 border-b border-border/70">
                                            {member.tagline}
                                        </p>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Skill / Focus Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {member.tags.map((tag, i) => (
                                                <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-border text-muted-foreground">
                                            {member.socials.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary">
                                                    <Linkedin size={15} />
                                                </a>
                                            )}
                                            {member.socials.twitter && (
                                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary">
                                                    <Twitter size={15} />
                                                </a>
                                            )}
                                            {member.socials.github && (
                                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary">
                                                    <Github size={15} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones & Timeline */}
            <section className="container mx-auto px-6 mb-24">
                <SectionHeading
                    title="THE TRAJECTORY"
                    subtitle="How We Got Here"
                />

                <div className="max-w-3xl mx-auto space-y-6">
                    {MILESTONES.map((m, idx) => (
                        <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-card/60 border border-border">
                            <span className="text-xl font-bold font-mono text-primary px-3 py-1 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                                {m.year}
                            </span>
                            <div>
                                <h4 className="text-lg font-bold font-head text-foreground mb-1">{m.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location & Physical Hubs */}
            <section className="container mx-auto px-6 mb-24">
                <div className="p-8 rounded-3xl bg-card/60 border border-border flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 bg-primary/10 text-primary rounded-2xl">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold font-head text-foreground">Physical Engineering Hubs &amp; Global Delivery</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">Lucknow Hub • Ayodhya Center • Bengaluru Network</p>
                        </div>
                    </div>
                    <Link to="/contact">
                        <Button variant="outline" size="sm" className="rounded-full">
                            <span>Meet Our Team</span>
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/60 border border-border max-w-4xl mx-auto shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                        <Sparkles size={12} />
                        START A DIRECT CONVERSATION
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Ready to build software that actually performs?</h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                        No junior account managers. You talk directly with our lead architects to scope your platform and launch in record time.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <span>Connect With An Architect</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
