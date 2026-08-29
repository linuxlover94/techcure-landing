import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Users, 
    Shield, 
    Zap, 
    Award, 
    CheckCircle2, 
    ArrowRight, 
    MapPin, 
    Linkedin, 
    Twitter, 
    Github,
    Sparkles
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
        tags: ["Systems Architecture", "AES-256 Cryptography", "Distributed Edge", "React / Next.js Core"],
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
        bio: "Growth strategist and digital market penetration architect. Leading commercial expansion, multi-channel customer acquisition pipelines, algorithmic SEO domination, and strategic brand partnerships.",
        avatarInitials: "YP",
        avatarGradient: "from-purple-500 to-pink-600",
        tags: ["Growth Engineering", "Algorithmic SEO", "Brand Positioning", "Market Penetration"],
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        name: "Ayush Srivastava",
        role: "Chief Financial Officer (CFO)",
        tagline: "Capital Strategy, Financial Operations & Venture Scale",
        bio: "Financial strategist and operational growth advisor. Directing capital allocation, corporate governance, investor relations, unit economics optimization, and financial sustainability across all Techcure venture arms.",
        avatarInitials: "AS",
        avatarGradient: "from-emerald-500 to-teal-600",
        tags: ["Financial Architecture", "Capital Allocation", "Corporate Governance", "Unit Economics"],
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
];

const MILESTONES = [
    {
        year: "2024",
        title: "The Zero-Bloat Foundation",
        desc: "Founded with a clear mandate: replace slow, vulnerable WordPress agency templates with high-velocity, custom-engineered React & Next.js architectures."
    },
    {
        year: "2025",
        title: "Enterprise & PropTech Expansion",
        desc: "Engineered WiCom enterprise telecom portal, built GoShuttles transit mobility network (250K+ rides), and initiated RentFlow PropTech OS."
    },
    {
        year: "2026",
        title: "Zero-Knowledge & Vedic Engines",
        desc: "Launched InkLeaf military-grade AES-256 encrypted vault and Sri Nimbarka Peetham's precision Vedic ephemeris engine (&lt; 15ms calculation time)."
    }
];

const About = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Techcure Leadership & Origin",
        "url": "https://techcurehq.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com",
            "employee": [
                {
                    "@type": "Person",
                    "name": "Ved Prakash Pandey",
                    "jobTitle": "Founder & Lead Architect",
                    "description": "Full-stack systems architect and distributed edge computing specialist spearheading core architecture and client-side encryption."
                },
                {
                    "@type": "Person",
                    "name": "Yogesh Pathak",
                    "jobTitle": "Chief Marketing Officer (CMO)",
                    "description": "Growth strategist and digital market penetration architect directing commercial expansion and algorithmic SEO."
                },
                {
                    "@type": "Person",
                    "name": "Ayush Srivastava",
                    "jobTitle": "Chief Financial Officer (CFO)",
                    "description": "Financial strategist and operational growth advisor directing capital strategy and corporate governance."
                }
            ]
        }
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="About Us & Leadership Team"
                description="Meet the leadership team behind Techcure: Ved Prakash Pandey (Founder), Yogesh Pathak (Marketing Chief), and Ayush Srivastava (CFO). Engineering digital monopolies and high-velocity systems."
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
                            Leadership &amp; Origin
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            ABOUT{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="TECHCURE" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We are an elite software engineering and digital architecture studio. We forge high-velocity digital monopolies that outperform competitors on speed, security, and conversion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Mission & Philosophy */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6 border border-primary/20">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">Sub-Second Velocity</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                We refuse slow, generic website templates. Every platform is custom-built with React 19, Vite, Next.js, and edge-rendered architectures guaranteeing sub-second load times worldwide.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-primary flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>100% Core Web Vitals Optimization</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-emerald-500/10 text-emerald-400 w-fit rounded-2xl mb-6 border border-emerald-500/20">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">Zero-Knowledge Defense</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Security is never an afterthought. We implement client-side AES-256-GCM cryptography, strict CSP headers, parameterized SQL, and encrypted tokenization pipelines.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-emerald-400 flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>Zero Leaky Plugins or Open Exploits</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3.5 bg-purple-500/10 text-purple-400 w-fit rounded-2xl mb-6 border border-purple-500/20">
                                <Award size={28} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3">100% IP Ownership</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                You own 100% of your source code, infrastructure, database schemas, and intellectual property. No vendor lock-in, no hostage monthly retainer tricks.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/70 text-xs font-mono text-purple-400 flex items-center gap-2">
                            <CheckCircle2 size={14} />
                            <span>Clean GitHub Repositories &amp; Full Docs</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Leadership & Core Team Section */}
            <section className="py-20 bg-secondary/30 border-y border-border mb-24">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="LEADERSHIP & ARCHITECTS"
                        subtitle="The Core Team"
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

            {/* Journey & Milestones */}
            <section className="container mx-auto px-6 mb-24">
                <SectionHeading
                    title="THE TRAJECTORY"
                    subtitle="Our Growth Milestones"
                />

                <div className="max-w-3xl mx-auto space-y-6">
                    {MILESTONES.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-card/60 border border-border flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="text-3xl font-head font-bold text-primary font-mono shrink-0 w-24">
                                {item.year}
                            </div>
                            <div className="border-l border-border/80 pl-6 flex-1">
                                <h4 className="text-lg font-bold font-head mb-1 text-foreground">{item.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Physical Footprint */}
            <section className="container mx-auto px-6 mb-24">
                <div className="p-8 md:p-12 rounded-3xl bg-secondary/40 border border-border text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 uppercase">
                        <MapPin size={12} />
                        Regional Footprint &amp; Direct Access
                    </div>
                    <h3 className="text-2xl md:text-3xl font-head font-bold mb-4">Engineering Hubs Across India</h3>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                        With operational physical hubs in Lucknow and Ayodhya and engineering networks in Bangalore, we provide direct face-to-face founder accountability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        <div className="p-4 rounded-xl bg-card border border-border">
                            <div className="font-bold font-head text-foreground text-sm">Lucknow Tech Hub</div>
                            <div className="text-xs text-muted-foreground mt-1">Core Architecture &amp; SaaS Systems</div>
                        </div>
                        <div className="p-4 rounded-xl bg-card border border-border">
                            <div className="font-bold font-head text-foreground text-sm">Ayodhya Center</div>
                            <div className="text-xs text-muted-foreground mt-1">Cultural Platforms &amp; Transit Mobility</div>
                        </div>
                        <div className="p-4 rounded-xl bg-card border border-border">
                            <div className="font-bold font-head text-foreground text-sm">Bangalore Network</div>
                            <div className="text-xs text-muted-foreground mt-1">Distributed Edge &amp; Cloud Infra</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-card/80 border border-border">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 uppercase">
                        <Sparkles size={12} />
                        Direct Collaboration
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Ready to engineer your next digital platform?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        Schedule a direct consultation with our founders and senior engineering leads in Lucknow, Ayodhya, or over video call.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <span>Connect With Our Team</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
