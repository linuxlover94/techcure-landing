import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand Info (2 cols on lg) */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="text-2xl font-head font-bold mb-4 tracking-tighter flex items-center gap-1 text-foreground">
                            TECHCURE<span className="text-primary">.</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mt-3 text-sm leading-relaxed">
                            Engineering custom web applications, high-performance SaaS platforms, and digital architectures that drive measurable business revenue.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                            <Link to="/web-development-company-ayodhya" className="px-2.5 py-1 rounded-md bg-secondary border border-border hover:border-primary/50 hover:text-primary transition-colors">Engineering HQ: Ayodhya ↗</Link>
                            <span className="px-2.5 py-1 rounded-md bg-secondary border border-border">Serving Clients Pan-India 🇮🇳</span>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="https://wa.me/918188838966?text=Hi%20Techcure%2C%20I%20would%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                WhatsApp: +91 81888 38966
                            </a>
                            <a
                                href="tel:+918188838966"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-xs font-mono font-medium hover:bg-secondary/80 transition-colors"
                            >
                                <Phone size={12} className="text-primary" />
                                Call Desk
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono">SERVICES</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                            <li><Link to="/services/web-development" className="hover:text-primary transition-colors">Next.js Web Apps</Link></li>
                            <li><Link to="/services/wordpress-to-react-migration" className="hover:text-primary transition-colors text-indigo-400 font-medium">WP to React Migration (Zero-Loss)</Link></li>
                            <li><Link to="/services/saas-development" className="hover:text-primary transition-colors">SaaS &amp; MVP Build</Link></li>
                            <li><Link to="/services/ecommerce-development" className="hover:text-primary transition-colors">Headless E-Commerce</Link></li>
                            <li><Link to="/services/speed-optimization" className="hover:text-primary transition-colors">Speed Optimization</Link></li>
                            <li><Link to="/web-development-company-ayodhya" className="hover:text-primary transition-colors text-primary/90 font-medium">Web &amp; App Dev (Ayodhya HQ) 📍</Link></li>
                            <li><Link to="/web-development-company-lucknow" className="hover:text-primary transition-colors text-muted-foreground">Web Dev Services (Lucknow) ↗</Link></li>
                            <li><Link to="/senior-grant" className="hover:text-amber-400 transition-colors text-amber-500 font-medium">Senior &amp; Veteran (-60%) 🎖️</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Platforms & Work */}
                    <div>
                        <h3 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono">PLATFORMS &amp; WORK</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Client Portfolio</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Proprietary Products</Link></li>
                            <li><Link to="/free-apps" className="hover:text-primary transition-colors">Free Web Utilities</Link></li>
                            <li><Link to="/why-us" className="hover:text-primary transition-colors">Why Techcure</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Engineering Blog</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About &amp; Leadership</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Verified Flagships */}
                    <div>
                        <h3 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono">LIVE FLAGSHIPS</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                            <li><a href="https://wicom.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WiCom Telecom ↗</a></li>
                            <li><a href="https://www.goshuttles.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GoShuttles Transit ↗</a></li>
                            <li><a href="https://snpeethamayodhya.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sri Nimbarka NGO ↗</a></li>
                            <li><a href="https://inkleaf.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">InkLeaf Vault ↗</a></li>
                            <li><a href="https://mathsheet.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MathSheet Engine ↗</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Techcure Technology. 100% Client IP Ownership Standard.</p>
                    <div className="flex items-center gap-2">
                        <span>Engineered with excellence in Ayodhya • Serving ambitious clients across India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
