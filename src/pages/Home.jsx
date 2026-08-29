import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import Hero from '../components/sections/Hero';
import SocialProof from '../components/sections/SocialProof';
import CoreCapabilities from '../components/sections/CoreCapabilities';
import Features from '../components/sections/Features';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import CTA from '../components/sections/CTA';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import { PRODUCTS, PORTFOLIO } from '../data/projectsData';

const Home = () => {
    // Show top 4 live flagship platforms on homepage
    const featuredShowcase = [
        PRODUCTS.find(p => p.id === 'inkleaf'),
        PORTFOLIO.find(p => p.id === 'wicom'),
        PORTFOLIO.find(p => p.id === 'snpeetham-jyotish'),
        PORTFOLIO.find(p => p.id === 'goshuttles')
    ].filter(Boolean);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How fast can Techcure launch my custom platform?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For standard high-velocity business sites, we deploy in 72 hours. Custom full-stack web applications and SaaS platforms typically take 2-3 weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Do I own 100% of the code and intellectual property?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "100%. Upon completion, the full Git repository, code, domain, and infrastructure are transferred directly to you. Zero vendor lock-in."
                }
            },
            {
                "@type": "Question",
                "name": "Does Techcure offer a Senior Citizen and Veteran discount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Techcure provides a flat 60% subsidized grant for entrepreneurs aged 60 and above, retired professionals, and military veterans launching tech ventures."
                }
            },
            {
                "@type": "Question",
                "name": "What tech stack does Techcure engineer with?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We engineer primarily with React 19, Next.js, TypeScript, Tailwind CSS, and Cloudflare/AWS edge compute. We avoid slow WordPress and bloated CMS templates."
                }
            }
        ]
    };

    return (
        <div className="space-y-0">
            <SEOHead
                title="High-Velocity Web Architecture & Digital Dominance"
                canonicalPath="/"
                schema={faqSchema}
            />
            <Hero />
            <SocialProof />

            {/* Featured Platforms & Flagship Showcase on Home */}
            <section className="py-24 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeading
                        title="FLAGSHIP PLATFORMS"
                        subtitle="Production Proof"
                    />

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-head font-bold">
                                Live Systems Driving <span className="text-primary">Measurable Impact</span>
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-xl mt-2">
                                From military-grade zero-knowledge encrypted vaults to Vedic astrological calculation engines and high-traffic mobility networks.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link to="/products">
                                <Button variant="outline" size="sm" className="rounded-full gap-2">
                                    <span>All Products</span>
                                    <ArrowRight size={14} />
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="primary" size="sm" className="rounded-full gap-2">
                                    <span>Full Portfolio</span>
                                    <ArrowRight size={14} />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {featuredShowcase.map((item) => (
                            <ProjectPreviewCard key={item.id} project={item} />
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary to-primary/5 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-xl bg-primary/20 text-primary">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-head">Explore our dedicated product &amp; client directories</h4>
                                <p className="text-muted-foreground text-sm">Interactive auto-scrolling previews and technical architecture breakdowns.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 shrink-0">
                            <Link to="/portfolio">
                                <Button size="default" className="rounded-full">
                                    Browse Client Works
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CoreCapabilities />
            <Features />
            <TechStack />
            <Process />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
            <CTA />
        </div>
    );
};

export default Home;
