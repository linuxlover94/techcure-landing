import React from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, 
    Phone, 
    ShieldCheck, 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    Building2
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import Contact from '../components/sections/Contact';

const LocalLucknow = () => {
    const lucknowSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://techcurehq.com/web-development-company-lucknow#localbusiness",
                "name": "Techcure Web Development Company Lucknow",
                "image": "https://techcurehq.com/og-image.png",
                "url": "https://techcurehq.com/web-development-company-lucknow",
                "telephone": "+91-8188838966",
                "priceRange": "₹₹",
                "currenciesAccepted": "INR, USD",
                "paymentAccepted": "UPI, Bank Transfer, Card, Wire",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Hazratganj / Gomti Nagar Hub",
                    "addressLocality": "Lucknow",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "226010",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 26.8467,
                    "longitude": 80.9462
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "20:00"
                    }
                ],
                "description": "Techcure is Lucknow's premier web development company and software engineering studio. We build custom Next.js web applications, e-commerce platforms, and SaaS systems with sub-second speed.",
                "areaServed": [
                    { "@type": "City", "name": "Lucknow" },
                    { "@type": "City", "name": "Ayodhya" },
                    { "@type": "City", "name": "Kanpur" },
                    { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
                    { "@type": "Country", "name": "India" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://techcurehq.com/web-development-company-lucknow#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which is the best web development company in Lucknow?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Techcure is widely recognized as Lucknow's leading high-velocity web development company, engineering custom Next.js, React 19, and full-stack software architectures with sub-second speeds and 100% client code ownership."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can we meet your web development team in Lucknow in person?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We maintain active hubs across Lucknow and Ayodhya. Founders and business owners can schedule in-person technical scoping sessions in Gomti Nagar or Hazratganj."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a custom website cost in Lucknow?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Techcure offers transparent, fixed-price pricing: Startup Velocity packages begin at ₹19,999 (72h turnaround), Growth Architecture platforms at ₹49,999, and custom SaaS platforms from ₹1,49,999. Entrepreneurs aged 60+ and military veterans receive an unconditional flat 60% discount."
                        }
                    }
                ]
            }
        ]
    };

    const lucknowServices = [
        {
            title: "Custom Corporate Websites",
            desc: "Sub-second Next.js web platforms engineered for Lucknow businesses, manufacturers, clinics, and professional firms.",
            badge: "72h Launch"
        },
        {
            title: "SaaS & Web App Engineering",
            desc: "Full-stack software with PostgreSQL, Supabase, role dashboards, and automated payment gateways (Razorpay, UPI).",
            badge: "2-3 Weeks"
        },
        {
            title: "E-Commerce & High-Speed Stores",
            desc: "Headless digital storefronts with 1-click UPI checkout, automated customer invoices, and zero cart abandonment.",
            badge: "UPI AutoPay"
        },
        {
            title: "Speed Overhaul & WordPress Migration",
            desc: "Upgrading slow 5-second legacy WordPress sites to sub-500ms edge architectures with 99-100 PageSpeed scores.",
            badge: "Lighthouse 100"
        }
    ];

    const localAreas = [
        "Gomti Nagar", "Hazratganj", "Indira Nagar", "Alambagh", 
        "Vibhuti Khand", "Mahanagar", "Jankipuram", "Ashiyana", 
        "Transport Nagar", "Sushant Golf City", "Chowk", "Charbagh"
    ];

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Top Web Development Company in Lucknow | Next.js & Custom Software Studio"
                description="Techcure is Lucknow's premier web development and custom software engineering company. Sub-second Next.js web applications, SaaS platforms, and e-commerce portals. 72h sprint launch, 100% IP ownership."
                canonicalPath="/web-development-company-lucknow"
                schema={lucknowSchema}
            />

            {/* Local Hero Section */}
            <section className="container mx-auto px-6 mb-20 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-wider font-semibold">
                        <MapPin size={14} className="text-primary" />
                        <span>Lucknow Hub • Uttar Pradesh</span>
                        <span className="opacity-40">•</span>
                        <span>Direct In-Person &amp; Virtual Scoping</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-head font-bold tracking-tight text-foreground mb-6 leading-tight">
                        Web Development Company in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-emerald-400">
                            Lucknow.
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                        Stop losing customers to slow, outdated 5-second WordPress templates. We engineer custom Next.js web applications, high-converting corporate portals, and scalable SaaS platforms that load in milliseconds and turn visitors into real clients.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 font-bold gap-2">
                                <span>Schedule Scoping Session</span>
                                <ArrowRight size={16} />
                            </Button>
                        </a>
                        <a href="tel:+918188838966">
                            <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-card gap-2">
                                <Phone size={15} className="text-primary" />
                                <span>Call: +91 81888 38966</span>
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-2xl bg-card border border-border text-xs text-muted-foreground max-w-3xl mx-auto">
                        <div>⚡ <strong>72h Launch</strong></div>
                        <div>🛡️ <strong>100% Code Ownership</strong></div>
                        <div>🚀 <strong>Sub-0.5s Load Time</strong></div>
                        <div>🎖️ <strong>60% Senior/Veteran Off</strong></div>
                    </div>
                </motion.div>
            </section>

            {/* Why Lucknow Businesses Choose Techcure */}
            <section className="container mx-auto px-6 mb-24 max-w-5xl">
                <SectionHeading
                    title="LUCKNOW ENGINEERING HUB"
                    subtitle="Why Local Businesses Trust Techcure"
                />

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 bg-card border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-5">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3 text-foreground">
                                No WordPress Bloat, No 5-Second Freezes
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                Traditional Lucknow agencies install cheap, bloated templates loaded with 40 vulnerable plugins that crash during sales spikes. We engineer from first principles using React 19, Next.js, and Cloudflare Edge.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-emerald-500 flex items-center gap-2 pt-4 border-t border-border">
                            <CheckCircle2 size={14} />
                            <span>100/100 Google Core Web Vitals Guaranteed</span>
                        </div>
                    </Card>

                    <Card className="p-8 bg-card border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl w-fit mb-5">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3 text-foreground">
                                100% Unconditional Code &amp; Domain Ownership
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                You own every line of code, full Git history, database credentials, and cloud keys from day one. You will never pay monthly hostage retainers or struggle to migrate your assets.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-emerald-500 flex items-center gap-2 pt-4 border-t border-border">
                            <CheckCircle2 size={14} />
                            <span>Zero Vendor Lock-In Standard</span>
                        </div>
                    </Card>
                </div>

                {/* Local Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {lucknowServices.map((service, idx) => (
                        <Card key={idx} className="p-6 bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
                            <div>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary border border-border text-primary inline-block mb-3">
                                    {service.badge}
                                </span>
                                <h4 className="text-base font-bold font-head text-foreground mb-2">{service.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Serving All Across Lucknow & UP */}
            <section className="container mx-auto px-6 mb-24 max-w-5xl">
                <div className="p-8 rounded-3xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-primary font-semibold mb-3">
                        <Building2 size={14} />
                        <span>Regional Service Coverage</span>
                    </div>
                    <h3 className="text-2xl font-bold font-head text-foreground mb-3">
                        Partnering With Businesses Across Lucknow &amp; Uttar Pradesh
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                        Whether you are an established business in Hazratganj, a high-growth tech startup in Gomti Nagar, or an enterprise in Transport Nagar, our engineering desk provides seamless local delivery.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {localAreas.map((area, i) => (
                            <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-card border border-border text-foreground">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Scoping Station */}
            <Contact />
        </div>
    );
};

export default LocalLucknow;
