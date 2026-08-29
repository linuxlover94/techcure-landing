import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Check, ArrowRight, Terminal, Lock, Flame } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrambleText from '../components/ui/ScrambleText';
import { PRODUCTS } from '../data/projectsData';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

    const filteredProducts = activeFilter === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeFilter);

    const productsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Techcure Proprietary Software Systems",
        "itemListElement": PRODUCTS.map((product, index) => ({
            "@type": "SoftwareApplication",
            "position": index + 1,
            "name": product.title,
            "url": product.url || `https://techcurehq.com/case-study/${product.id}`,
            "applicationCategory": product.category,
            "operatingSystem": "Web, Cloud, Cross-Platform",
            "description": product.tagline,
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "author": {
                "@type": "Organization",
                "name": "Techcure",
                "url": "https://techcurehq.com"
            }
        }))
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Proprietary Software Systems & SaaS Products"
                description="Explore battle-tested proprietary software engineered by Techcure, including InkLeaf zero-knowledge vault, RentFlow PropTech OS, and MathSheet edge engine."
                canonicalPath="/products"
                schema={productsSchema}
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
                            <Flame size={14} className="text-primary animate-pulse" />
                            Proprietary Systems &amp; Software
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            ENGINEERED{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="PRODUCTS" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Battle-tested software systems designed and deployed by Techcure. Built with zero-compromise client-side cryptography, infinite edge scale, and automated operational pipelines.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter Navigation */}
            <section className="container mx-auto px-6 mb-12">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2.5 bg-secondary/60 backdrop-blur-md rounded-2xl border border-border max-w-2xl mx-auto shadow-sm">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-primary text-primary-foreground shadow-md font-semibold'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Interactive Terminal List */}
            <section className="container mx-auto px-6 mb-24">
                <div className="space-y-12">
                    {filteredProducts.map((product) => (
                        <ProjectPreviewCard
                            key={product.id}
                            project={product}
                            layout="horizontal"
                        />
                    ))}
                </div>
            </section>

            {/* Code Standards & Security Deep Dive */}
            <section className="py-20 bg-secondary/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="THE TECHCURE STANDARD"
                        subtitle="Why Our Products Stand Apart"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                            <div>
                                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-6 border border-emerald-500/20">
                                    <Lock size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-head mb-3">Zero-Knowledge Sandboxes</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Like our military-grade notebook <span className="text-foreground font-semibold">InkLeaf</span>, encryption keys are derived client-side. The server never sees your plain-text data.
                                </p>
                            </div>
                            <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/80 pt-4">
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-emerald-400" />
                                    <span>PBKDF2 SHA-256 + AES-256-GCM</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-emerald-400" />
                                    <span>IndexedDB local-first persistence</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                            <div>
                                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-6 border border-cyan-500/20">
                                    <Cpu size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-head mb-3">Zero-Touch Automation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Powering operational platforms like <span className="text-foreground font-semibold">RentFlow</span> with WhatsApp Cloud APIs, auto-reconciliation, and zero-touch invoicing.
                                </p>
                            </div>
                            <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/80 pt-4">
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-cyan-400" />
                                    <span>UPI AutoPay &amp; Instant Webhooks</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-cyan-400" />
                                    <span>Sub-second ledger synchronization</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-8 bg-card/70 border-border flex flex-col justify-between">
                            <div>
                                <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-6 border border-purple-500/20">
                                    <Terminal size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-head mb-3">Algorithmic Edge Speed</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Like <span className="text-foreground font-semibold">MathSheet</span>, running mathematical engines directly on Cloudflare Edge for instantaneous client response.
                                </p>
                            </div>
                            <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/80 pt-4">
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-purple-400" />
                                    <span>&lt; 50ms cold execution time</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={14} className="text-purple-400" />
                                    <span>100% offline edge cacheability</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Custom Product Inquiry CTA */}
            <section className="container mx-auto px-6 pt-24 text-center">
                <div className="p-12 rounded-3xl bg-gradient-to-b from-card/90 to-card/50 border border-border relative overflow-hidden shadow-2xl">
                    <div className="max-w-2xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 uppercase">
                            <Sparkles size={12} />
                            Bespoke SaaS Development
                        </div>
                        <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Need a custom product engineered for your enterprise?</h2>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                            We architect, build, and deploy complete custom SaaS platforms, proprietary mobile applications, and high-throughput commerce networks.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg">
                                <span>Discuss Your Custom Product</span>
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
