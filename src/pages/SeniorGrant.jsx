import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Award, 
    ShieldCheck, 
    Zap, 
    Check, 
    Phone, 
    MessageSquare, 
    ArrowRight, 
    HelpCircle, 
    Sparkles, 
    HeartHandshake, 
    BookOpen,
    Terminal,
    KeyRound
} from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import ScrambleText from '../components/ui/ScrambleText';

const DISCOUNT_TIERS = [
    {
        name: "Startup Launchpad",
        originalPrice: { usd: "$499", inr: "₹19,999" },
        discountPrice: { usd: "$199", inr: "₹7,999" },
        savings: "Flat 60% Off",
        description: "Perfect for senior founders and consultants launching an authoritative digital presence, professional advisory portal, or product launchpad.",
        features: [
            "Custom High-Velocity Web Architecture (React 19 & Vite)",
            "72-Hour Rapid Launch Pipeline",
            "1-on-1 Respectful, Jargon-Free Founder Onboarding",
            "100% Full Git Repository & Domain Ownership Transferred",
            "Custom Business Domain & Verified Email Suite Setup",
            "30 Days of Dedicated Post-Launch Engineering Hypercare"
        ]
    },
    {
        name: "Growth & Commerce",
        originalPrice: { usd: "$999", inr: "₹49,999" },
        discountPrice: { usd: "$399", inr: "₹19,999" },
        savings: "Flat 60% Off",
        popular: true,
        description: "For active ventures requiring online bookings, client portals, automated invoicing, or digital product catalogs.",
        features: [
            "Full SSR Dynamic Web Application (Edge-Rendered)",
            "Automated Multi-Gateway Payments (UPI, Stripe, Cards)",
            "Intuitive Content Management (Zero Tech Skills Needed)",
            "Global & Local High-Intent SEO Search Authority",
            "Guaranteed Sub-Second Page Load Times Worldwide (<0.5s)",
            "90 Days of Dedicated Architectural Support & Optimization"
        ]
    },
    {
        name: "Custom Enterprise & SaaS",
        originalPrice: { usd: "$2,499", inr: "₹1,49,999" },
        discountPrice: { usd: "$999", inr: "₹59,999" },
        savings: "Flat 60% Off",
        description: "For proprietary industry software, specialized SaaS platforms, or mission-critical enterprise operational tools.",
        features: [
            "Bespoke Full-Stack SaaS / Platform Architecture",
            "Military-Grade AES-256-GCM Data Security & Zero-Knowledge Vaults",
            "Direct Access to Lead Systems Architect (Lucknow/Ayodhya)",
            "High-Throughput Database Design & Resilient REST/GraphQL APIs",
            "Complete Technical Handover & Architectural Blueprint Docs",
            "6 Months of Priority Direct SLAs & Scaling Assurance"
        ]
    }
];

const FAQS = [
    {
        q: "Why does Techcure offer a flat 60% discount for senior and veteran founders?",
        a: "We believe the most durable, resilient businesses are built by individuals with deep life experience, operational grit, and real domain knowledge. Too often, senior entrepreneurs and military veterans are exploited by agencies charging exorbitant rates for fragile, slow templates. We want to be your honest, world-class technical partner."
    },
    {
        q: "Do I truly own 100% of my code, domain, and data?",
        a: "Yes, unconditionally. From day one, your Git repository, domain registry, server accounts, and database credentials belong exclusively to you. We never lock you into proprietary platforms or hold your business hostage with mandatory recurring fees."
    },
    {
        q: "I am not a technical person. Will I be overwhelmed by technical jargon?",
        a: "Never. We pride ourselves on clear, respectful, human communication. We translate every architectural decision into plain business outcomes—how it impacts your speed, customer trust, and reliability. We handle the entire engineering pipeline end-to-end so you can focus on leading your business."
    },
    {
        q: "How fast can we go from idea to live deployment?",
        a: "Our Startup Launchpad platforms go live in just 72 hours. Comprehensive commerce and custom SaaS systems typically deploy in 7 to 14 business days. We work in rapid, transparent milestone sprints with regular live walkthroughs."
    },
    {
        q: "Who is eligible for this initiative?",
        a: "Any founder or entrepreneur aged 60 and above, retired professionals and domain leaders launching their next venture, and armed forces veterans of any age. We honor your service and domain expertise with our highest level of engineering craftsmanship."
    }
];

const SeniorGrant = () => {
    const [isInr, setIsInr] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Senior Founder (60+ Years Old)',
        phone: '',
        email: '',
        ideaSummary: '',
        preferredContact: 'WhatsApp'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedText = `*🎖️ SENIOR & VETERAN FOUNDER DISCOUNT INQUIRY*\n\n` +
            `*👤 Founder Name:* ${formData.name.trim()}\n` +
            `*🏷️ Background / Category:* ${formData.category}\n` +
            `*📱 Phone / WhatsApp:* ${formData.phone.trim()}\n` +
            `*📧 Email Address:* ${formData.email.trim()}\n` +
            `*📞 Preferred Way to Connect:* ${formData.preferredContact}\n` +
            `*💡 Venture Vision / Domain:*\n${formData.ideaSummary.trim()}\n\n` +
            `_Submitted via Techcure Senior & Veteran Founder Initiative (techcurehq.com/senior-discount)_`;

        const whatsappUrl = `https://wa.me/918188838966?text=${encodeURIComponent(formattedText)}`;
        window.location.href = whatsappUrl;
    };

    const discountSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Techcure Senior & Veteran Founder Discount (Flat 60% Off)",
        "url": "https://techcurehq.com/senior-grant",
        "description": "Techcure provides a flat 60% discount on custom web development, SaaS architecture, and digital engineering for founders aged 60+ and military veterans with 100% IP ownership.",
        "publisher": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com"
        }
    };

    return (
        <div className="pt-28 pb-24">
            <SEOHead
                title="Senior (60+) & Veteran Founder Discount - Flat 60% Off Custom Engineering"
                description="Empowering founders aged 60+ and military veterans with a flat 60% discount on custom React 19 web platforms, SaaS architecture, and digital systems. 100% IP ownership, zero agency jargon."
                canonicalPath="/senior-grant"
                schema={discountSchema}
            />

            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-transparent relative overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-6 uppercase tracking-widest">
                            <Award size={14} className="text-amber-400" />
                            <span>Empowering Experience • Flat 60% Founder Initiative</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight leading-tight">
                            YOUR DOMAIN WISDOM.{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="OUR HIGH-VELOCITY" />
                            </span>{' '}
                            ENGINEERING.
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                            Decades of industry acumen, leadership, and customer insight are the ultimate competitive moat. We proudly provide a <strong className="text-amber-300 font-semibold">flat 60% discount on all custom software engineering</strong> for entrepreneurs aged 60+ and military veterans.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <KeyRound size={14} className="text-emerald-400" /> 100% Code &amp; IP Ownership
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <HeartHandshake size={14} className="text-amber-400" /> Human, Jargon-Free Communication
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <Zap size={14} className="text-primary" /> Sub-Second Edge Performance
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Domain Experience Wins */}
            <section className="py-16 bg-card/40 border-y border-border/60">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeading 
                        title="THE DOMAIN ADVANTAGE" 
                        subtitle="Why Senior &amp; Veteran Founders Build Better Companies" 
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">Unmatched Domain Acumen</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                You understand real-world supply chains, client psychology, and regulations that young founders spend years guessing at. Your practical intuition is irreplaceable.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">High-Trust Reputation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Decades of professional integrity and personal networks close enterprise contracts far faster than fleeting marketing gimmicks. We back your reputation with robust tech.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">A Dedicated Technical Co-Pilot</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                No junior agency middlemen or confusing tech buzzwords. You collaborate directly with senior architects who build, secure, and hand over your digital system smoothly.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Discounted Pricing Table */}
            <section className="py-24" id="discount-pricing">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeading 
                        title="TRANSPARENT INITIATIVE" 
                        subtitle="Flat 60% Discounted Founder Tiers" 
                    />

                    {/* Currency Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-secondary/80 border border-border p-1 rounded-full flex items-center shadow-inner">
                            <button
                                onClick={() => setIsInr(false)}
                                className={`px-6 py-2 rounded-full text-xs font-mono font-medium transition-colors ${!isInr ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'}`}
                            >
                                Global (USD)
                            </button>
                            <button
                                onClick={() => setIsInr(true)}
                                className={`px-6 py-2 rounded-full text-xs font-mono font-medium transition-colors ${isInr ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'}`}
                            >
                                India (INR)
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {DISCOUNT_TIERS.map((tier, idx) => (
                            <Card 
                                key={idx} 
                                className={`p-8 flex flex-col justify-between bg-card/70 backdrop-blur-xl border-border relative ${
                                    tier.popular ? 'border-amber-500/60 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]' : ''
                                }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-zinc-950 font-mono text-[11px] font-bold uppercase tracking-wider">
                                        Most Popular Tier
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-head font-bold text-foreground">{tier.name}</h3>
                                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[11px] font-mono font-bold border border-amber-500/20">
                                            {tier.savings}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-4xl font-head font-bold text-foreground">
                                            {isInr ? tier.discountPrice.inr : tier.discountPrice.usd}
                                        </div>
                                        <p className="text-xs font-mono text-muted-foreground line-through mt-1">
                                            Standard: {isInr ? tier.originalPrice.inr : tier.originalPrice.usd}
                                        </p>
                                    </div>

                                    <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-3 mb-8 text-xs font-sans">
                                        {tier.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2.5">
                                                <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                                                    <Check size={12} />
                                                </div>
                                                <span className="text-muted-foreground leading-relaxed">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a href="#start-inquiry" className="w-full">
                                    <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full text-xs font-mono h-11">
                                        <span>Select {tier.name}</span>
                                    </Button>
                                </a>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Respectful Inquiry Form */}
            <section className="py-16 bg-card/40 border-t border-border" id="start-inquiry">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                            <Sparkles size={13} />
                            <span>DIRECT FOUNDER-TO-FOUNDER DIALOGUE</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-head font-bold text-foreground mb-4">
                            Tell Us About Your Vision
                        </h2>
                        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                            Share a brief note about what you are building. Our lead architects will review your requirements and reach out within 4 hours for a respectful, conversational strategy session.
                        </p>
                    </div>

                    <Card className="p-8 bg-card/80 backdrop-blur-2xl border-border shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">Your Name *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Ramesh Chandra / Col. R. K. Sharma"
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">Founder Category *</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono focus:outline-none focus:border-primary"
                                    >
                                        <option value="Senior Founder (60+ Years Old)">Senior Founder (60+ Years Old)</option>
                                        <option value="Military Veteran / Armed Forces">Military Veteran / Armed Forces</option>
                                        <option value="Retired Leader / Domain Expert">Retired Leader / Domain Expert Launching Venture</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">WhatsApp / Phone Number *</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+91 98765 43210 / +1 (555) 000-0000"
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">Email Address *</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="founder@venture.com"
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-mono font-medium text-foreground">Preferred Way to Talk</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, preferredContact: 'WhatsApp' })}
                                        className={`py-2.5 px-4 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-2 ${
                                            formData.preferredContact === 'WhatsApp'
                                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                                                : 'bg-secondary/40 text-muted-foreground border-border'
                                        }`}
                                    >
                                        <MessageSquare size={14} />
                                        <span>WhatsApp Chat</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, preferredContact: 'Direct Phone Call' })}
                                        className={`py-2.5 px-4 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-2 ${
                                            formData.preferredContact === 'Direct Phone Call'
                                                ? 'bg-primary/20 text-primary border-primary/50 shadow-sm'
                                                : 'bg-secondary/40 text-muted-foreground border-border'
                                        }`}
                                    >
                                        <Phone size={14} />
                                        <span>Direct Phone Call</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-mono font-medium text-foreground">What Are You Looking to Build? *</label>
                                <textarea
                                    value={formData.ideaSummary}
                                    onChange={(e) => setFormData({ ...formData, ideaSummary: e.target.value })}
                                    rows={4}
                                    placeholder="Tell us briefly about your business domain and what you need (e.g. consulting platform, e-commerce storefront, specialized management software)..."
                                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm leading-relaxed focus:outline-none focus:border-primary resize-none"
                                    required
                                />
                            </div>

                            <Button type="submit" variant="primary" className="w-full h-12 text-sm font-bold gap-2 shadow-lg shadow-primary/20">
                                <span>Connect Directly With Our Engineering Leads</span>
                                <ArrowRight size={16} />
                            </Button>
                        </form>
                    </Card>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <SectionHeading title="CLEAR ANSWERS" subtitle="Frequently Asked Questions" />

                    <div className="space-y-4 mt-8">
                        {FAQS.map((faq, idx) => (
                            <Card key={idx} className="p-6 bg-card/60 border-border">
                                <h4 className="text-base font-head font-bold text-foreground mb-2 flex items-center gap-2">
                                    <HelpCircle size={16} className="text-amber-400 shrink-0" />
                                    <span>{faq.q}</span>
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                                    {faq.a}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeniorGrant;
