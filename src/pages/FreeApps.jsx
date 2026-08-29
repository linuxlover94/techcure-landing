import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, ExternalLink, Calculator, Lock, FileText, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectPreviewCard from '../components/ui/ProjectPreviewCard';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrambleText from '../components/ui/ScrambleText';
import ROICalculator from '../components/sections/ROICalculator';
import { PRODUCTS } from '../data/projectsData';

const FreeApps = () => {
    const mathsheetProduct = PRODUCTS.find(p => p.id === 'mathsheet');
    const inkleafProduct = PRODUCTS.find(p => p.id === 'inkleaf');

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Free Developer Tools & Educational Applications"
                description="100% free web utilities and developer tools built by Techcure engineers, including algorithmic math practice generators and encrypted markdown notebooks."
                canonicalPath="/free-apps"
            />
            {/* Page Header */}
            <section className="py-16 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 uppercase tracking-widest">
                            <Gift size={14} className="text-emerald-400" />
                            100% Free • No Sign-Up Required
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            FREE WEB{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="APPLICATIONS" />
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            High-utility tools built by Techcure engineers and given back to educators, students, developers, and founders for free.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Free Apps Grid with Full Page Auto-Scroll */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {mathsheetProduct && (
                        <ProjectPreviewCard project={mathsheetProduct} layout="grid" />
                    )}
                    {inkleafProduct && (
                        <ProjectPreviewCard project={inkleafProduct} layout="grid" />
                    )}
                </div>
            </section>

            {/* Interactive Embedded ROI Calculator Tool */}
            <section id="roi-calculator" className="container mx-auto px-6 mb-20">
                <div className="rounded-3xl bg-card/40 border border-border p-4 md:p-8 backdrop-blur-md">
                    <ROICalculator embedded={true} />
                </div>
            </section>

            {/* Quick Free Tool Cards */}
            <section className="container mx-auto px-6 mb-20">
                <SectionHeading
                    title="INSTANT UTILITIES"
                    subtitle="Developer & Student Toolbox"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-card/60 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-purple-500/10 text-purple-400 w-fit rounded-xl mb-4">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-2">MathSheet Engine</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                Deterministic algorithmic problem generator with 74+ mathematical curriculum modules and step-by-step LaTeX proofs.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Link to="/case-study/mathsheet" className="flex-1">
                                <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs hover:border-primary/60 hover:text-primary">
                                    <FileText size={12} className="text-primary" />
                                    <span>Case Study</span>
                                </Button>
                            </Link>
                            <a href="https://mathsheet.pages.dev" target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button size="sm" className="w-full gap-1 text-xs shadow-sm">
                                    <span>Launch</span>
                                    <ExternalLink size={12} />
                                </Button>
                            </a>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl mb-4">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-2">InkLeaf Offline Vault</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                Military-grade client-side encrypted markdown workspace. Math formula rendering with KaTeX and Mermaid diagrams.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Link to="/case-study/inkleaf" className="flex-1">
                                <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs hover:border-primary/60 hover:text-primary">
                                    <FileText size={12} className="text-primary" />
                                    <span>Case Study</span>
                                </Button>
                            </Link>
                            <a href="https://inkleaf.online" target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button size="sm" className="w-full gap-1 text-xs shadow-sm">
                                    <span>Launch</span>
                                    <ExternalLink size={12} />
                                </Button>
                            </a>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-cyan-500/10 text-cyan-400 w-fit rounded-xl mb-4">
                                <Calculator size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-head mb-2">Techcure ROI Estimator</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                Live business multiplier and conversion rate projection simulator for e-commerce and SaaS founders.
                            </p>
                        </div>
                        <a href="#roi-calculator">
                            <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
                                <span>Use Tool Above</span>
                                <ArrowRight size={12} />
                            </Button>
                        </a>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default FreeApps;
