import React from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, 
    Phone, 
    ShieldCheck, 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    Building2,
    Smartphone,
    Globe,
    Hotel,
    Layers,
    ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import Contact from '../components/sections/Contact';

const LocalAyodhya = () => {
    const ayodhyaSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://techcurehq.com/web-development-company-ayodhya#localbusiness",
                "name": "Techcure Web & Mobile App Development Company Ayodhya",
                "image": "https://techcurehq.com/og-image.png",
                "url": "https://techcurehq.com/web-development-company-ayodhya",
                "telephone": "+91-8188838966",
                "priceRange": "₹₹",
                "currenciesAccepted": "INR, USD",
                "paymentAccepted": "UPI, Bank Transfer, Card, Wire",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Civil Lines / Ramkot Hub",
                    "addressLocality": "Ayodhya",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "224123",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 26.7922,
                    "longitude": 82.1998
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "20:00"
                    }
                ],
                "description": "Techcure is Ayodhya's top-rated web development, mobile app engineering, and custom software development company. We build custom Next.js websites, iOS/Android mobile apps, hotel booking portals, and temple trust software.",
                "areaServed": [
                    { "@type": "City", "name": "Ayodhya" },
                    { "@type": "City", "name": "Faizabad" },
                    { "@type": "City", "name": "Lucknow" },
                    { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
                    { "@type": "Country", "name": "India" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://techcurehq.com/web-development-company-ayodhya#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which is the best web and mobile app development company in Ayodhya?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Techcure is Ayodhya's leading software and web engineering company. Techcure has engineered flagship live digital platforms in Ayodhya including Sri Nimbarka Peetham Foundation (snpeethamayodhya.org) and the GoAyodhya pilgrimage network (goayodhya.org), with 100% client code ownership and sub-second edge speeds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you develop Android and iOS mobile apps for hotels and businesses in Ayodhya?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We engineer native and cross-platform mobile apps (React Native, Flutter) for Ayodhya hotels, dharamshalas, cab services, retail stores, and charities with 1-click UPI payments, real-time push alerts, and direct WhatsApp booking integrations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can we meet your software development team in Ayodhya for in-person scoping?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We maintain active engineering operations in Ayodhya and Civil Lines. Hotel owners, trust executives, and business leaders can schedule direct in-person technical scoping sessions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a custom website or mobile application cost in Ayodhya?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Techcure provides transparent, fixed-price pricing: Startup business websites start at ₹19,999 (72-hour launch), custom hotel booking portals and growth apps at ₹49,999, and full-scale SaaS/enterprise platforms from ₹1,49,999. Entrepreneurs aged 60+ and military veterans receive an unconditional flat 60% discount."
                        }
                    }
                ]
            }
        ]
    };

    const ayodhyaServices = [
        {
            icon: Smartphone,
            title: "Custom Mobile Apps (iOS & Android)",
            desc: "High-performance React Native & Flutter apps for hotels, travel operators, retail stores, and local service providers.",
            badge: "Native Performance"
        },
        {
            icon: Globe,
            title: "Next.js Web Applications & Sites",
            desc: "Sub-second corporate platforms and web applications with 100/100 Google PageSpeed scores that turn visitors into paying clients.",
            badge: "72h Turnaround"
        },
        {
            icon: Hotel,
            title: "Hotel, Dharamshala & Tourism Systems",
            desc: "Direct commission-free room reservation engines, UPI AutoPay, automated WhatsApp booking vouchers, and guest management.",
            badge: "0% OTA Fee"
        },
        {
            icon: Layers,
            title: "Trust, Temple & NGO Donation Portals",
            desc: "Automated 80G tax-exempt receipt dispatch, multi-currency UPI/Razorpay donation gateways, and VIP event registration.",
            badge: "80G Compliant"
        }
    ];

    const localAreas = [
        "Ayodhya Dham", "Ramkot", "Naya Ghat", "Civil Lines", 
        "Ayodhya Cantt (Faizabad)", "Devkali", "Rekabganj", "Fatehganj", 
        "Sahadatganj", "Hanuman Garhi Area", "Guptar Ghat", "Ranopali",
        "Tedhi Bazar", "Rikabganj Road", "Deokali Bypass"
    ];

    const ayodhyaFlagships = [
        {
            title: "Sri Nimbarka Peetham Foundation",
            tag: "Spiritual NGO & Welfare",
            desc: "Official international portal for public welfare, 80G donor receipts, and temple heritage.",
            url: "https://snpeethamayodhya.org",
            metrics: "100K+ Devotees • 80G Automated"
        },
        {
            title: "Sri Nimbarka Jyotish Ephemeris",
            tag: "Vedic Calculation Engine",
            desc: "Sub-15 millisecond astronomical Kundali and Panchang calculation engine engineered with precision.",
            url: "https://snpeethamayodhya.org/build",
            metrics: "< 15ms Latency • Astronomical Scale"
        },
        {
            title: "GoAyodhya Pilgrimage Concierge",
            tag: "Tourism & Hotel Stays",
            desc: "Digital concierge platform serving pilgrims with verified hotel accommodations, guided tours, and darshan.",
            url: "https://goayodhya.org",
            metrics: "50,000+ Pilgrims • Zero Downtime"
        }
    ];

    return (
        <div className="pt-28 pb-20">
            <SEOHead
                title="Top Web & Mobile App Development Company in Ayodhya | Next.js & Custom Software"
                description="Techcure is Ayodhya's #1 web development, mobile app, and custom software company. Custom Next.js web applications, Android & iOS apps, hotel booking portals, and temple trust platforms. 72h sprint launch, 100% IP ownership."
                canonicalPath="/web-development-company-ayodhya"
                schema={ayodhyaSchema}
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
                        <span>Engineering Headquarters • Ayodhya, Uttar Pradesh</span>
                        <span className="opacity-40">•</span>
                        <span>Serving Clients Across All India 🇮🇳</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-head font-bold tracking-tight text-foreground mb-6 leading-tight">
                        Web &amp; Mobile App Development Company in{' '}
                        <span className="text-gradient-animated">
                            Ayodhya
                        </span>
                        <span className="text-primary">.</span>
                    </h1>

                    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                        Powering Ayodhya’s next-generation digital economy. From custom iOS &amp; Android mobile applications and high-converting hotel booking portals to sub-second Next.js web apps and temple trust software, we build platforms that win real customers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a href="#contact">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 font-bold gap-2">
                                <span>Schedule Scoping Session in Ayodhya</span>
                                <ArrowRight size={16} />
                            </Button>
                        </a>
                        <a href="tel:+918188838966">
                            <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-card gap-2">
                                <Phone size={15} className="text-primary" />
                                <span>Direct Call: +91 81888 38966</span>
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-2xl bg-card border border-border text-xs text-muted-foreground max-w-3xl mx-auto">
                        <div>⚡ <strong>72h Rapid Launch</strong></div>
                        <div>📱 <strong>Mobile Apps &amp; Web</strong></div>
                        <div>🛡️ <strong>100% Code Ownership</strong></div>
                        <div>🎖️ <strong>60% Senior/Veteran Off</strong></div>
                    </div>
                </motion.div>
            </section>

            {/* Ayodhya Verified Flagships & Social Proof */}
            <section className="container mx-auto px-6 mb-24 max-w-5xl">
                <SectionHeading
                    title="PROVEN IN AYODHYA"
                    subtitle="Live Flagship Platforms Engineered by Techcure"
                />

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {ayodhyaFlagships.map((flagship, idx) => (
                        <Card key={idx} className="p-6 bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
                            <div>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary inline-block mb-3">
                                    {flagship.tag}
                                </span>
                                <h4 className="text-lg font-bold font-head text-foreground mb-2 flex items-center justify-between">
                                    <span>{flagship.title}</span>
                                    <a href={flagship.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                        <ExternalLink size={16} />
                                    </a>
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{flagship.desc}</p>
                            </div>
                            <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-emerald-500 font-semibold">
                                <span>{flagship.metrics}</span>
                                <a href={flagship.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Live Platform ↗
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 bg-card border-border flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-5">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-head font-bold mb-3 text-foreground">
                                Zero WordPress Bloat • Sub-Second Speed
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                Most agencies sell slow 5-second templates filled with heavy plugins that crash when thousands of pilgrims visit during festive peaks. We engineer using Next.js, React 19, and Cloudflare Edge for sub-second speeds on every 4G/5G mobile connection.
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
                                You own every line of code, complete Git history, domain registration, database keys, and server infrastructure upon delivery. We never hold your platform hostage with forced recurring maintenance contracts.
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
                    {ayodhyaServices.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                            <Card key={idx} className="p-6 bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
                                <div>
                                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl w-fit mb-4">
                                        <IconComponent size={20} />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary border border-border text-primary inline-block mb-3">
                                        {service.badge}
                                    </span>
                                    <h4 className="text-base font-bold font-head text-foreground mb-2">{service.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Serving All Across Ayodhya & Faizabad */}
            <section className="container mx-auto px-6 mb-24 max-w-5xl">
                <div className="p-8 rounded-3xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-primary font-semibold mb-3">
                        <Building2 size={14} />
                        <span>Ayodhya District Engineering Coverage</span>
                    </div>
                    <h3 className="text-2xl font-bold font-head text-foreground mb-3">
                        Engineering Custom Digital Software Across Ayodhya Dham &amp; Faizabad
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                        Whether you operate a hotel or guest house in Naya Ghat, an NGO/trust near Ramkot, a commercial showroom in Civil Lines / Rekabganj, or a logistics fleet across Devkali, our engineering desk delivers on-site support.
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

            {/* Scoping Contact Form */}
            <Contact />
        </div>
    );
};

export default LocalAyodhya;
