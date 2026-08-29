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
    BookOpen
} from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import ScrambleText from '../components/ui/ScrambleText';

const GRANT_TIERS = [
    {
        name: "Startup Launchpad",
        originalPrice: { usd: "$499", inr: "₹19,999" },
        grantPrice: { usd: "$199", inr: "₹7,999" },
        savings: "60% Subsidized",
        description: "Ideal for senior entrepreneurs launching an official web presence, consulting agency, or digital product.",
        features: [
            "Custom High-Velocity Web Architecture (React 19)",
            "72-Hour Rapid Turnaround",
            "1-on-1 Jargon-Free Founder Onboarding",
            "100% Source Code & Domain Transferred",
            "Domain & Business Email Setup Included",
            "1 Month Dedicated Architectural Hypercare"
        ]
    },
    {
        name: "Growth & Commerce",
        originalPrice: { usd: "$999", inr: "₹49,999" },
        grantPrice: { usd: "$399", inr: "₹19,999" },
        savings: "60% Subsidized",
        popular: true,
        description: "For active ventures requiring online bookings, dynamic customer portals, or e-commerce catalogues.",
        features: [
            "Full SSR Dynamic Web Application",
            "Automated UPI, Stripe & Card Payments",
            "Content Management System (Easy Editing)",
            "Local & Global SEO Authority Suite",
            "Speed Index < 0.5s Worldwide",
            "3 Months Dedicated Support & Maintenance"
        ]
    },
    {
        name: "Custom Enterprise / SaaS",
        originalPrice: { usd: "$2,499", inr: "₹1,49,999" },
        grantPrice: { usd: "$999", inr: "₹59,999" },
        savings: "60% Subsidized",
        description: "For proprietary industry platforms, specialized SaaS software, or complex operational systems.",
        features: [
            "Custom Full-Stack SaaS / Platform Architecture",
            "Military-Grade AES-256 Data Security",
            "Dedicated Lead Systems Architect Access",
            "Database Design & High-Throughput API",
            "Complete Technical Handover Documentation",
            "6 Months Priority Architectural SLAs"
        ]
    }
];

const GRANT_FAQS = [
    {
        q: "Who is eligible for the 60% Senior & Veteran Founder Grant?",
        a: "Any founder or entrepreneur aged 60 and above, retired professionals launching a second venture, and military veterans of any age. We believe domain expertise is priceless and deserves world-class engineering support."
    },
    {
        q: "Is there any hidden lock-in or recurring fee?",
        a: "None. You own 100% of your source code, the Git repository, the domain, and your hosting account from day one. You are never held hostage."
    },
    {
        q: "I am not deeply technical. Will I be overwhelmed with jargon?",
        a: "Never. Our core commitment is patient, transparent communication. We explain every architectural decision in plain business terms and handle all technical deployment end-to-end."
    },
    {
        q: "How do we get started?",
        a: "Fill out the simple application form below or contact our engineering hotline directly via WhatsApp or phone. We will schedule a friendly 1-on-1 strategy call within 4 hours."
    }
];

const SeniorGrant = () => {
    const [isInr, setIsInr] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        ageOrStatus: '60+',
        phone: '',
        email: '',
        ideaSummary: '',
        preferredContact: 'WhatsApp'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedText = `*🎖️ SENIOR FOUNDER / VETERAN GRANT APPLICATION*\n\n` +
            `*👤 Applicant Name:* ${formData.name.trim()}\n` +
            `*🎂 Status / Age:* ${formData.ageOrStatus}\n` +
            `*📱 Phone / WhatsApp:* ${formData.phone.trim()}\n` +
            `*📧 Email:* ${formData.email.trim()}\n` +
            `*📞 Preferred Contact Method:* ${formData.preferredContact}\n` +
            `*💡 Venture / Project Brief:*\n${formData.ideaSummary.trim()}\n\n` +
            `_Submitted via Techcure Senior Founder Grant Portal (techcurehq.com/senior-grant)_`;

        const whatsappUrl = `https://wa.me/918188838966?text=${encodeURIComponent(formattedText)}`;
        window.location.href = whatsappUrl;
    };

    const grantSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Techcure Senior Citizen & Veteran Founder Grant (Flat 60% Off)",
        "url": "https://techcurehq.com/senior-grant",
        "description": "Techcure provides a flat 60% subsidized grant for entrepreneurs aged 60+ and military veterans launching digital ventures with 100% IP ownership.",
        "publisher": {
            "@type": "Organization",
            "name": "Techcure",
            "url": "https://techcurehq.com"
        }
    };

    return (
        <div className="pt-28 pb-24">
            <SEOHead
                title="Senior (60+) & Veteran Founder Grant - Flat 60% Subsidized Engineering"
                description="Empowering founders aged 60+ and military veterans with a flat 60% discount on custom web development, SaaS architecture, and digital systems."
                canonicalPath="/senior-grant"
                schema={grantSchema}
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
                            Corporate Impact Initiative • Flat 60% Grant
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight leading-tight">
                            WISDOM MEETS{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="HIGH-VELOCITY" />
                            </span>{' '}
                            ARCHITECTURE
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                            Decades of industry experience are the ultimate unfair advantage. We proudly subsidize <strong className="text-amber-300 font-semibold">60% of all software engineering costs</strong> for entrepreneurs aged 60+ and military veterans.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <ShieldCheck size={14} className="text-emerald-400" /> 100% Client Code Ownership
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <HeartHandshake size={14} className="text-amber-400" /> Zero Technical Jargon
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary border border-border text-foreground">
                                <Zap size={14} className="text-primary" /> Sub-Second Edge Performance
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Senior Founders Dominate */}
            <section className="py-16 bg-card/40 border-y border-border/60">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeading 
                        title="THE STATISTICAL ADVANTAGE" 
                        subtitle="Why Senior Founders Win in Business" 
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">Deep Domain Expertise</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                You understand real-world supply chains, customer psychology, and regulations that young tech founders spend years attempting to decipher.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">High-Trust Reputation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Established personal networks and institutional credibility allow veteran entrepreneurs to close contracts and acquire enterprise clients rapidly.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-3">Zero Tech Headaches</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Techcure serves as your elite engineering co-pilot. We build, host, secure, and hand over the keys to your digital platform with zero friction.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Subsidized Grant Pricing Table */}
            <section className="py-24" id="grant-pricing">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeading 
                        title="TRANSPARENT SUBSIDY" 
                        subtitle="Flat 60% Grant Pricing Structure" 
                    />

                    {/* Currency Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-secondary/80 border border-border p-1 rounded-full flex items-center">
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
                        {GRANT_TIERS.map((tier, idx) => (
                            <Card 
                                key={idx} 
                                className={`p-8 flex flex-col justify-between bg-card/70 backdrop-blur-xl border-border relative ${
                                    tier.popular ? 'border-amber-500/60 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]' : ''
                                }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-zinc-950 font-mono text-[11px] font-bold uppercase tracking-wider">
                                        Most Popular Grant Tier
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-head font-bold text-foreground">{tier.name}</h3>
                                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[11px] font-mono font-bold border border-amber-500/20">
                                            -60% Grant
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-4xl font-head font-bold text-foreground">
                                            {isInr ? tier.grantPrice.inr : tier.grantPrice.usd}
                                        </div>
                                        <p className="text-xs font-mono text-muted-foreground line-through mt-1">
                                            Regular: {isInr ? tier.originalPrice.inr : tier.originalPrice.usd}
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
                                                <span className="text-muted-foreground">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a href="#grant-application" className="w-full">
                                    <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full text-xs font-mono h-11">
                                        <span>Apply For {tier.name}</span>
                                    </Button>
                                </a>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-16 bg-card/40 border-t border-border" id="grant-application">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                            <Sparkles size={13} />
                            <span>FAST-TRACK APPLICATION</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-head font-bold text-foreground mb-4">
                            Apply for the Senior &amp; Veteran Founder Grant
                        </h2>
                        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                            Submit a brief summary below. Our lead architects will review your roadmap and contact you within 4 hours. No tech jargon required.
                        </p>
                    </div>

                    <Card className="p-8 bg-card/80 backdrop-blur-2xl border-border shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">Founder / Applicant Name *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Ramesh Chandra / David Miller"
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono font-medium text-foreground">Eligibility Category *</label>
                                    <select
                                        value={formData.ageOrStatus}
                                        onChange={(e) => setFormData({ ...formData, ageOrStatus: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono focus:outline-none focus:border-primary"
                                    >
                                        <option value="Senior Founder (60+ Years Old)">Senior Founder (60+ Years Old)</option>
                                        <option value="Military Veteran / Armed Forces">Military Veteran / Armed Forces</option>
                                        <option value="Retired Professional Starting Venture">Retired Professional Starting Venture</option>
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
                                <label className="text-xs font-mono font-medium text-foreground">Preferred Contact Method</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, preferredContact: 'WhatsApp' })}
                                        className={`py-2.5 px-4 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-2 ${
                                            formData.preferredContact === 'WhatsApp'
                                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
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
                                                ? 'bg-primary/20 text-primary border-primary/50'
                                                : 'bg-secondary/40 text-muted-foreground border-border'
                                        }`}
                                    >
                                        <Phone size={14} />
                                        <span>Direct Phone Call</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-mono font-medium text-foreground">Venture Idea / Business Background *</label>
                                <textarea
                                    value={formData.ideaSummary}
                                    onChange={(e) => setFormData({ ...formData, ideaSummary: e.target.value })}
                                    rows={4}
                                    placeholder="Tell us briefly about your business background and what you are looking to build (e.g. consulting platform, e-commerce, custom software)..."
                                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm leading-relaxed focus:outline-none focus:border-primary resize-none"
                                    required
                                />
                            </div>

                            <Button type="submit" variant="primary" className="w-full h-12 text-sm font-bold gap-2">
                                <span>Submit Application (Instant Review)</span>
                                <ArrowRight size={16} />
                            </Button>
                        </form>
                    </Card>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <SectionHeading title="GRANT QUESTIONS" subtitle="Frequently Asked Questions" />

                    <div className="space-y-4 mt-8">
                        {GRANT_FAQS.map((faq, idx) => (
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
