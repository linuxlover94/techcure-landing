import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowRight, 
    CheckCircle2, 
    Clock, 
    ShieldCheck, 
    Zap, 
    Code2, 
    ExternalLink, 
    Plus, 
    Minus, 
    HelpCircle,
    Target,
    Layers
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import Contact from '../components/sections/Contact';
import { SERVICES, getServiceBySlug } from '../data/servicesData';

const ServicePage = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `https://techcurehq.com/services/${service.slug}#service`,
                "name": service.title,
                "serviceType": service.shortTitle,
                "description": service.metaDescription,
                "provider": {
                    "@type": "Organization",
                    "name": "Techcure",
                    "url": "https://techcurehq.com",
                    "telephone": "+91-8188838966"
                },
                "areaServed": ["Lucknow", "Ayodhya", "Bengaluru", "India", "Worldwide"],
                "offers": {
                    "@type": "Offer",
                    "price": service.startingPrice.replace(/[^0-9]/g, '') || "19999",
                    "priceCurrency": "INR"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `https://techcurehq.com/services/${service.slug}#faq`,
                "mainEntity": service.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title={service.metaTitle}
                description={service.metaDescription}
                canonicalPath={`/services/${service.slug}`}
                schema={serviceSchema}
            />

            {/* Service Navigation Pill Strip */}
            <div className="container mx-auto px-6 mb-10">
                <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-secondary/80 border border-border max-w-4xl mx-auto shadow-sm">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                                s.slug === service.slug
                                    ? 'bg-primary text-primary-foreground shadow-sm font-bold'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                            }`}
                        >
                            {s.shortTitle}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Service Hero Section */}
            <section className="container mx-auto px-6 mb-20 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-wider font-semibold">
                        <Zap size={14} className="text-primary" />
                        <span>{service.heroBadge}</span>
                        <span className="opacity-40">•</span>
                        <span>{service.turnaround}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-head font-bold tracking-tight text-foreground mb-6 leading-tight">
                        {service.title}
                    </h1>

                    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                        {service.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 font-bold gap-2">
                                <span>Get a Free Scoping Quote</span>
                                <ArrowRight size={16} />
                            </Button>
                        </a>
                        <Link to={service.caseStudyLink}>
                            <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-card">
                                <span>View Case Study</span>
                            </Button>
                        </Link>
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Starting Investment:</span>
                        <span className="font-mono font-bold text-primary">{service.startingPrice}</span>
                        <span className="text-border">•</span>
                        <span className="text-emerald-500 font-medium">100% Code Ownership</span>
                    </div>
                </motion.div>
            </section>

            {/* Overview & Architecture Pillars */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-5xl mx-auto mb-16 p-8 rounded-3xl bg-secondary/50 border border-border">
                    <h2 className="text-2xl sm:text-3xl font-head font-bold mb-4 text-foreground">
                        Why We Build Differently
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {service.overview}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        title="WHAT YOU RECEIVE"
                        subtitle="Full Production Deliverables"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.deliverables.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 h-full flex flex-col justify-between bg-card border-border shadow-sm hover:border-primary/50 transition-colors">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-primary">
                                            <CheckCircle2 size={18} className="shrink-0" />
                                            <h3 className="font-bold font-head text-base text-foreground">{item.title}</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For & Verified Proof */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Target Audience */}
                    <Card className="p-8 bg-card border-border">
                        <div className="flex items-center gap-2 mb-6 text-foreground font-head font-bold text-lg">
                            <Target size={20} className="text-primary" />
                            <span>Who This Service Is Engineered For</span>
                        </div>
                        <ul className="space-y-3.5">
                            {service.targetAudience.map((audience, i) => (
                                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{audience}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Featured Verified Case Study */}
                    <Card className="p-8 bg-card border-border flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase text-emerald-500 font-semibold">
                                <ShieldCheck size={16} />
                                <span>Verified Production Proof</span>
                            </div>
                            <h3 className="text-xl font-bold font-head text-foreground mb-3">
                                {service.caseStudyName}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                                See the exact architectural blueprint, code metrics, and performance telemetry we delivered for this flagship deployment.
                            </p>
                        </div>

                        <div>
                            <div className="mb-4">
                                <div className="text-xs font-mono font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                                    <Code2 size={13} className="text-primary" />
                                    <span>Stack:</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {service.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-0.5 rounded-md bg-secondary text-foreground text-xs font-mono border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link to={service.caseStudyLink} className="inline-block w-full">
                                <Button variant="outline" size="sm" className="w-full gap-2 text-xs font-bold rounded-xl">
                                    <span>Read Full Case Study Teardown</span>
                                    <ArrowRight size={13} />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Service FAQ Accordion */}
            <section className="container mx-auto px-6 mb-24 max-w-3xl">
                <SectionHeading title="COMMON QUESTIONS" subtitle="Clear, Straightforward Answers" />

                <div className="space-y-3">
                    {service.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-2xl overflow-hidden bg-card transition-colors"
                        >
                            <button
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/40 transition-colors"
                            >
                                <span className="font-bold text-sm sm:text-base text-foreground">{faq.question}</span>
                                {openFaqIndex === index ? (
                                    <Minus size={18} className="text-primary shrink-0" />
                                ) : (
                                    <Plus size={18} className="text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openFaqIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-muted-foreground text-xs sm:text-sm border-t border-border/50 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Embedded Contact Form */}
            <Contact />
        </div>
    );
};

export default ServicePage;
