import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, LayoutGrid, List, ArrowRight, Activity } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import ScrambleText from '../components/ui/ScrambleText';
import { PORTFOLIO } from '../data/projectsData';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const categories = [
        'All',
        'E-Commerce & Telecom',
        'AstroTech & Vedic Computing',
        'NGO & Cultural Heritage',
        'Mobility & Logistics',
        'Travel & Hospitality'
    ];

    const filteredPortfolio = activeFilter === 'All'
        ? PORTFOLIO
        : PORTFOLIO.filter(p => p.category === activeFilter);

    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Techcure Engineering Portfolio",
        "url": "https://techcurehq.com/portfolio",
        "description": "Client platforms engineered for high-throughput telecom commerce, Vedic computing, NGO heritage, and smart transit mobility.",
        "hasPart": PORTFOLIO.map(project => ({
            "@type": "SoftwareApplication",
            "name": project.title,
            "applicationCategory": project.category,
            "operatingSystem": "Web, Mobile, Cloud",
            "url": project.url || `https://techcurehq.com/case-study/${project.id}`,
            "description": project.tagline
        }))
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Client Showcase & Engineering Portfolio"
                description="Proven digital platforms engineered for high-throughput telecom commerce (WiCom), Vedic computing (Jyotish Engine), NGO heritage, and smart transit (GoShuttles)."
                canonicalPath="/portfolio"
                schema={portfolioSchema}
            />
            {/* Page Header */}
            <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
                            <Briefcase size={14} className="text-primary" />
                            Client Work &amp; Live Systems
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            ENGINEERED{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="PORTFOLIO" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Proven digital platforms engineered for high-throughput telecom commerce, complex Vedic computations, charitable NGO impact, smart transit mobility, and luxury regional tourism.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter and View Mode Switcher */}
            <section className="container mx-auto px-6 mb-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-3 bg-secondary/50 backdrop-blur-md rounded-2xl border border-border">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                                    activeFilter === category
                                        ? 'bg-primary text-primary-foreground shadow font-semibold'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-1 bg-background/60 p-1 rounded-xl border border-border shrink-0">
                        <button
                            onClick={() => setViewMode('grid')}
                            aria-label="Grid layout"
                            className={`p-2 rounded-lg transition-colors ${
                                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <LayoutGrid size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            aria-label="Detailed list layout"
                            className={`p-2 rounded-lg transition-colors ${
                                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <List size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Portfolio Projects Grid / List */}
            <section className="container mx-auto px-6 mb-24">
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredPortfolio.map((project) => (
                            <ProjectPreviewCard
                                key={project.id}
                                project={project}
                                layout="grid"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-12">
                        {filteredPortfolio.map((project) => (
                            <ProjectPreviewCard
                                key={project.id}
                                project={project}
                                layout="horizontal"
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* Impact Telemetry Counter */}
            <section className="py-20 bg-secondary/30 border-y border-border mb-20">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="PRODUCTION METRICS"
                        subtitle="Impact At Scale"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 rounded-2xl bg-card/70 border border-border">
                            <div className="text-4xl md:text-5xl font-head font-bold text-primary mb-2">250K+</div>
                            <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Mobility Rides Booked</div>
                            <div className="text-[11px] text-muted-foreground/70 mt-1 font-mono">GoShuttles App</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/70 border border-border">
                            <div className="text-4xl md:text-5xl font-head font-bold text-primary mb-2">100K+</div>
                            <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Devotees &amp; Meals</div>
                            <div className="text-[11px] text-muted-foreground/70 mt-1 font-mono">Sri Nimbarka Peetham NGO</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/70 border border-border">
                            <div className="text-4xl md:text-5xl font-head font-bold text-primary mb-2">&lt; 15ms</div>
                            <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Ephemeris Precision</div>
                            <div className="text-[11px] text-muted-foreground/70 mt-1 font-mono">Vedic Jyotish Engine</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/70 border border-border">
                            <div className="text-4xl md:text-5xl font-head font-bold text-primary mb-2">100%</div>
                            <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Client IP Ownership</div>
                            <div className="text-[11px] text-muted-foreground/70 mt-1 font-mono">Zero Vendor Lock-In</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Start CTA */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-card/80 border border-border">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 uppercase">
                        <Activity size={12} />
                        Next Sprint Opening
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Want your platform engineered to this standard?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        Whether you need an enterprise commerce engine, high-precision computational portal, or mission-critical mobile application, we deliver in weeks.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <span>Start Your Project</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
