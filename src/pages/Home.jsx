import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award } from 'lucide-react';
import Hero from '../components/sections/Hero';
import TechWeUse from '../components/sections/TechWeUse';
import CoreCapabilities from '../components/sections/CoreCapabilities';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import { PRODUCTS, PORTFOLIO } from '../data/projectsData';

const Home = () => {
    // Show top 4 live flagship platforms on homepage
    const featuredShowcase = [
        PORTFOLIO.find(p => p.id === 'wicom'),
        PORTFOLIO.find(p => p.id === 'goshuttles'),
        PRODUCTS.find(p => p.id === 'inkleaf'),
        PORTFOLIO.find(p => p.id === 'snpeetham-jyotish')
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
                    "text": "For high-velocity business sites and MVP portals, we deploy in 72 hours. Custom full-stack web applications and SaaS platforms typically take 2-3 weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Do I own 100% of the code and intellectual property?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "100% unconditionally. Upon delivery, the full Git repository, code, domain, database, and cloud infrastructure are transferred directly to you. Zero vendor lock-in."
                }
            },
            {
                "@type": "Question",
                "name": "Does Techcure offer a Senior Citizen and Veteran discount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Techcure provides an unconditional flat 60% discount on all custom software engineering for entrepreneurs aged 60 and above, retired professionals, and military veterans."
                }
            },
            {
                "@type": "Question",
                "name": "What tech stack does Techcure engineer with?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We engineer primarily with React 19, Next.js, TypeScript, PostgreSQL, Redis, Tailwind CSS, and Cloudflare/AWS edge compute. We avoid slow WordPress and bloated CMS templates."
                }
            }
        ]
    };

    return (
        <div className="space-y-0">
            <SEOHead
                title="Custom Web & SaaS Software Engineering Studio"
                description="Techcure engineers custom high-velocity web platforms, full-stack SaaS applications, and digital architectures that turn visitors into paying clients. 72h sprint launch, 100% code ownership."
                canonicalPath="/"
                schema={faqSchema}
            />
            <Hero />

            {/* Featured Platforms & Flagship Showcase on Home */}
            <section className="py-24 bg-transparent relative overflow-hidden" id="showcase">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeading
                        title="PRODUCTION PROOF"
                        subtitle="Live Systems Driving Real Revenue"
                    />

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-head font-bold">
                                Battle-Tested Systems in <span className="text-primary">Active Production</span>
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-xl mt-2 leading-relaxed">
                                From telecom billing platforms handling 50,000+ users to intercity smart transit networks with 250,000+ booked rides.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link to="/portfolio">
                                <Button variant="primary" size="sm" className="rounded-full gap-2 font-bold shadow-md">
                                    <span>Browse Full Portfolio</span>
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {featuredShowcase.map((item) => (
                            <ProjectPreviewCard key={item.id} project={item} />
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary to-primary/5 border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-xl bg-primary/20 text-primary">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-head text-foreground">Explore interactive auto-scrolling previews &amp; architecture teardowns</h4>
                                <p className="text-muted-foreground text-sm mt-0.5">Full desktop captures, latency benchmarks, and verified production metrics.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 shrink-0">
                            <Link to="/portfolio">
                                <Button size="default" className="rounded-full font-bold">
                                    Explore Client Directory
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CoreCapabilities />
            <TechWeUse />
            <Process />
            <Testimonials />

            {/* Senior & Veteran Founder Initiative Respectful Callout (Placed right before Pricing) */}
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
                                An unconditional permanent commitment honoring entrepreneurs aged 60+ and military veterans launching digital ventures.
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

            <Pricing />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;
