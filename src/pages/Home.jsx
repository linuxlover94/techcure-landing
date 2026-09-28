import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, ShieldCheck, Globe, Star, Sparkles } from 'lucide-react';
import Hero from '../components/sections/Hero';
import GlobalDelivery from '../components/sections/GlobalDelivery';
import AgencyComparison from '../components/sections/AgencyComparison';
import TechWeUse from '../components/sections/TechWeUse';
import CoreCapabilities from '../components/sections/CoreCapabilities';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import ProjectEstimator from '../components/sections/ProjectEstimator';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import { PRODUCTS, PORTFOLIO } from '../data/projectsData';

const SHOWCASE_ITEMS = [
    PORTFOLIO.find(p => p.id === 'ubindianews'),
    PORTFOLIO.find(p => p.id === 'advenjeans'),
    PORTFOLIO.find(p => p.id === 'wicom'),
    PORTFOLIO.find(p => p.id === 'ramarshpalace'),
    PORTFOLIO.find(p => p.id === 'goshuttles'),
    PRODUCTS.find(p => p.id === 'inkleaf')
].filter(Boolean);

const FILTER_TABS = [
    { id: 'all', label: 'All Flagship Systems' },
    { id: 'migration', label: 'WordPress to React (Zero-Loss)' },
    { id: 'commerce', label: 'High-Throughput Commerce' },
    { id: 'saas', label: 'SaaS & Transit Apps' }
];

const Home = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredShowcase = SHOWCASE_ITEMS.filter((item) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'migration') {
            return (
                item.tags?.some(t => t.toLowerCase().includes('wordpress') || t.toLowerCase().includes('migration')) ||
                item.category?.toLowerCase().includes('wordpress') ||
                item.category?.toLowerCase().includes('migration') ||
                item.title?.toLowerCase().includes('migration')
            );
        }
        if (activeTab === 'commerce') {
            return (
                item.category?.toLowerCase().includes('commerce') ||
                item.category?.toLowerCase().includes('hospitality') ||
                item.tags?.some(t => t.toLowerCase().includes('commerce') || t.toLowerCase().includes('wholesale') || t.toLowerCase().includes('apparel') || t.toLowerCase().includes('booking'))
            );
        }
        if (activeTab === 'saas') {
            return (
                item.category?.toLowerCase().includes('mobility') ||
                item.category?.toLowerCase().includes('security') ||
                item.category?.toLowerCase().includes('telecom') ||
                item.tags?.some(t => t.toLowerCase().includes('saas') || t.toLowerCase().includes('transit') || t.toLowerCase().includes('telecom') || t.toLowerCase().includes('notes'))
            );
        }
        return true;
    });

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://techcurehq.com/#organization",
                "name": "Techcure",
                "url": "https://techcurehq.com",
                "logo": "https://techcurehq.com/logo.svg",
                "email": "contact@techcurehq.com",
                "telephone": "+91-8188838966",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ranopali, Rampath",
                    "addressLocality": "Ayodhya",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "224123",
                    "addressCountry": "IN"
                },
                "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "Germany" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "Australia" },
                    { "@type": "Country", "name": "India" }
                ],
                "knowsAbout": [
                    "React 19 Web Development",
                    "Next.js 15 App Architecture",
                    "WordPress to React Migration",
                    "Zero-Data-Loss Database Migration",
                    "Full-Stack SaaS MVP Engineering",
                    "Headless E-Commerce Development",
                    "Core Web Vitals Optimization"
                ],
                "sameAs": [
                    "https://github.com/linuxlover94/techcure-landing"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://techcurehq.com/#website",
                "url": "https://techcurehq.com",
                "name": "Techcure",
                "publisher": { "@id": "https://techcurehq.com/#organization" }
            },
            {
                "@type": "FAQPage",
                "@id": "https://techcurehq.com/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Techcure work with international founders in USA, UK, Europe, and Dubai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Over 50% of our architectural sprints serve international founders across the US (EST/PST), UK (GMT), Europe (CET), and UAE (GST). We guarantee 4-6 hours of daily working overlap, counter-signed mutual NDAs, 100% IP assignment, and transparent invoicing via Stripe, Wise, and SWIFT bank wire."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Techcure guarantee 100% zero data loss during WordPress migrations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We execute automated cryptographic checksum ETL pipelines that extract and port every legacy article, custom post type, taxonomy, image, and WooCommerce SKU. We enforce strict 1-to-1 canonical URL matching to preserve 100% of your Google search rankings with zero 404 broken links."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How fast can Techcure launch my custom platform?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For high-velocity business platforms and WordPress migrations, our rapid sprint pipeline deploys production-ready code in 72 hours to 7 days. Full-stack SaaS MVPs and custom software portals launch in 2 to 3 weeks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I own 100% of the code and intellectual property?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "100% unconditionally. The complete Git commit history, cloud credentials, domain records, and intellectual property are irrevocably assigned directly to your organization on day one."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Techcure offer a Senior Citizen and Veteran founder discount?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Techcure provides an unconditional flat 60% discount on all custom software engineering for entrepreneurs aged 60 and above, retired professionals, and military veterans worldwide."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="space-y-0">
            <SEOHead
                title="Custom Software Studio | Next.js, React 19 & WP Migration Agency"
                description="Techcure engineers custom high-velocity web platforms, full-stack SaaS apps, and zero-data-loss WordPress migrations for founders in USA, UK, Europe, UAE & India. 72h sprint launch, 100% code ownership."
                canonicalPath="/"
                schema={combinedSchema}
            />

            {/* Hero Section */}
            <Hero />

            {/* Featured Platforms & Flagship Showcase on Home */}
            <section className="py-24 bg-transparent relative overflow-hidden" id="showcase">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeading
                        title="PRODUCTION PROOF"
                        subtitle="Live Systems Driving Real Commercial Revenue"
                    />

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-head font-bold">
                                Battle-Tested Systems in <span className="text-primary">Active Production</span>
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-xl mt-2 leading-relaxed">
                                From telecom billing platforms handling 50,000+ users to national news publications and wholesale apparel manufacturers migrated from WordPress with zero data loss.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link to="/portfolio">
                                <Button variant="primary" size="sm" className="rounded-full gap-2 font-bold shadow-md">
                                    <span>Browse All 11 Projects</span>
                                    <ArrowRight size={14} />
                                </Button>
                            </Link>
                            <Link to="/products">
                                <Button variant="outline" size="sm" className="rounded-full gap-2">
                                    <span>Proprietary Products</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-secondary/70 border border-border max-w-3xl">
                        {FILTER_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Showcase Cards Grid (Spacious 2-column layout so preview cards breathe) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {filteredShowcase.map((item) => (
                            <ProjectPreviewCard key={item.id} project={item} />
                        ))}
                    </div>

                    {/* Scroller Tour CTA Banner */}
                    <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary to-primary/5 border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-2xl bg-primary/20 text-primary">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-head text-foreground">Explore interactive desktop captures &amp; code teardowns</h4>
                                <p className="text-muted-foreground text-sm mt-0.5">Automated viewport scrolling tours, latency telemetry, and architecture blueprints.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 shrink-0">
                            <Link to="/portfolio">
                                <Button size="default" className="rounded-full font-bold shadow-md">
                                    Explore Full Portfolio (11 Systems)
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Client Delivery Section (USA, UK, Europe, UAE Clocks & Overlap) */}
            <GlobalDelivery />

            {/* Why Founders Fire Old Agencies Section */}
            <AgencyComparison />

            {/* Core Capabilities Grid */}
            <CoreCapabilities />

            {/* Tech Stack Visualizer */}
            <TechWeUse />

            {/* Rapid 4-Step Process */}
            <Process />

            {/* Verified Client Testimonials */}
            <Testimonials />

            {/* Senior & Veteran Founder Initiative Respectful Callout */}
            <section className="container mx-auto px-6 py-8">
                <div className="p-6 md:p-8 rounded-2xl bg-secondary/80 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-lg shadow-amber-500/5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 text-2xl">
                            🎖️
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-base sm:text-lg font-bold font-head text-foreground">
                                    Senior (60+) &amp; Veteran Founder Initiative
                                </h4>
                                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-zinc-950 font-bold text-xs">
                                    Flat 60% Off
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                An unconditional permanent commitment honoring entrepreneurs aged 60+ and military veterans launching digital ventures worldwide.
                            </p>
                        </div>
                    </div>

                    <Link to="/senior-grant" className="shrink-0">
                        <Button variant="outline" size="sm" className="rounded-full gap-2 border-amber-500/40 text-amber-400 hover:bg-amber-500/10">
                            <span>Explore Initiative Details</span>
                            <ArrowRight size={14} />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Interactive Scope & Cost Estimator */}
            <ProjectEstimator />

            {/* Multi-Currency Transparent Pricing */}
            <Pricing />

            {/* Frequently Asked Questions */}
            <FAQ />

            {/* Direct Contact & Lead Pipeline */}
            <Contact />
        </div>
    );
};

export default Home;
