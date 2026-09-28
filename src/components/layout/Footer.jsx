import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Zap, Globe, Sparkles, Code2, Lock } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = "https://wa.me/918188838966?text=" + encodeURIComponent("Hi Techcure, I would like to discuss a project with your engineering team.");

    return (
        <footer className="relative bg-card/60 border-t border-border/80 pt-16 pb-24 sm:pb-16 overflow-hidden">
            {/* Subtle Top Glow Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* PRE-FOOTER CONVERSION BANNER */}
                <div className="mb-16 p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card via-secondary/70 to-card border border-border shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                        <div className="max-w-2xl">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Sprint Slots Available • Direct Lead Engineer Access
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border text-[11px] font-mono text-muted-foreground">
                                    <Globe size={11} className="text-primary" />
                                    USA • UK • Europe • UAE • India
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-head font-bold tracking-tight text-foreground">
                                Have an ambitious project? <span className="text-primary">Let&apos;s engineer it right.</span>
                            </h3>

                            <p className="text-muted-foreground text-sm sm:text-base mt-2 leading-relaxed">
                                No junior handoffs. No recurring agency retainer traps. We deliver production-grade Next.js web applications, zero-data-loss WordPress migrations, and high-velocity SaaS MVPs with 100% code ownership.
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Zap size={13} className="text-primary" />
                                    72-Hour Sprint Kickoff
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <ShieldCheck size={13} className="text-emerald-500" />
                                    100% Zero-Loss Migration Warranty
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Code2 size={13} className="text-cyan-400" />
                                    Full Git Repo Handover Day 1
                                </span>
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                                <span>WhatsApp Us (+91 81888 38966)</span>
                            </a>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <Sparkles size={15} className="shrink-0" />
                                <span>Scope Your Project</span>
                                <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* MAIN 5-COLUMN FOOTER NAVIGATION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                    {/* Brand & Studio HQ (4 cols on lg) */}
                    <div className="lg:col-span-4 space-y-4">
                        <Link to="/" className="text-2xl font-head font-bold tracking-tight inline-flex items-center gap-1 text-foreground">
                            TECHCURE<span className="text-primary">.</span>
                            <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold tracking-wider uppercase">
                                Engineering Studio
                            </span>
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            High-velocity software engineering studio building custom Next.js web applications, headless commerce engines, and zero-data-loss WordPress migrations for founders worldwide.
                        </p>

                        {/* Physical Presence Notice */}
                        <div className="p-3.5 rounded-2xl bg-secondary/70 border border-border space-y-2 text-xs">
                            <div className="flex items-start gap-2 text-foreground font-medium">
                                <span className="text-primary mt-0.5">📍</span>
                                <div>
                                    <div className="font-semibold text-foreground">Physical Engineering Studio:</div>
                                    <div className="text-muted-foreground font-mono text-[11px] mt-0.5">
                                        Ayodhya, Uttar Pradesh, India
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground font-mono text-[11px] pt-1.5 border-t border-border/60">
                                <Globe size={12} className="text-primary shrink-0" />
                                <span>Serving ambitious founders Pan-India &amp; Internationally</span>
                            </div>
                        </div>

                        {/* Direct Contacts */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-colors"
                            >
                                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-500" />
                                <span>+91 81888 38966</span>
                            </a>
                            <a
                                href="tel:+918188838966"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-mono font-medium transition-colors"
                            >
                                <Phone size={12} className="text-primary" />
                                <span>Call Desk</span>
                            </a>
                            <a
                                href="mailto:contact@techcurehq.com"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-muted-foreground hover:text-foreground text-xs font-mono transition-colors"
                            >
                                <span>contact@techcurehq.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Core Engineering Capabilities (2 cols on lg) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                            <Code2 size={13} className="text-primary" />
                            <span>CAPABILITIES</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
                            <li><Link to="/services/web-development" className="hover:text-primary transition-colors">Next.js Web Applications</Link></li>
                            <li>
                                <Link to="/services/wordpress-to-react-migration" className="hover:text-primary transition-colors text-foreground flex items-center gap-1">
                                    <span className="text-indigo-400">WP to React (Zero-Loss)</span>
                                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-indigo-500/20 text-indigo-400 font-mono">100%</span>
                                </Link>
                            </li>
                            <li><Link to="/services/saas-development" className="hover:text-primary transition-colors">SaaS MVP Engineering</Link></li>
                            <li><Link to="/services/ecommerce-development" className="hover:text-primary transition-colors">Headless E-Commerce</Link></li>
                            <li><Link to="/services/speed-optimization" className="hover:text-primary transition-colors">Speed &amp; Core Web Vitals</Link></li>
                            <li><Link to="/web-development-company-ayodhya" className="hover:text-primary transition-colors text-primary font-semibold">Web &amp; App Dev (Ayodhya HQ) 📍</Link></li>
                            <li><Link to="/web-development-company-lucknow" className="hover:text-primary transition-colors">Web Dev Services (Lucknow) ↗</Link></li>
                            <li>
                                <Link to="/senior-grant" className="hover:text-amber-400 transition-colors text-amber-500 flex items-center gap-1">
                                    <span>Senior &amp; Veteran (-60%)</span>
                                    <span className="text-[10px]">🎖️</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Verified Deployments (2 cols on lg) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                            <Zap size={13} className="text-emerald-500" />
                            <span>DEPLOYMENTS</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
                            <li>
                                <a href="https://ubindianews.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>UBIndia News</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">React ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://advenjeans.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>Adven Jeans</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">B2B ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wicom.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>WiCom Telecom</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">Portal ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://ramarshpalace.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>Ramarsh Palace</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">Resort ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://presskitaquat.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>Press Kitaquat</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">Media ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.goshuttles.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>GoShuttles Transit</span>
                                    <span className="text-[10px] font-mono text-muted-foreground">Fleet ↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://inkleaf.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-between">
                                    <span>InkLeaf Vault</span>
                                    <span className="text-[10px] font-mono text-emerald-400">Argon2 ↗</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Studio & Platforms (2 cols on lg) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                            <Sparkles size={13} className="text-cyan-400" />
                            <span>PLATFORMS</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Client Portfolio (11 Systems)</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Proprietary SaaS Products</Link></li>
                            <li><Link to="/free-apps" className="hover:text-primary transition-colors">Free Web Utilities</Link></li>
                            <li><Link to="/why-us" className="hover:text-primary transition-colors">Why Founders Choose Us</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Engineering Blog &amp; Teardowns</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About &amp; Studio Principles</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Guarantees & Global Standards (2 cols on lg) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-4 text-foreground text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                            <ShieldCheck size={13} className="text-primary" />
                            <span>GUARANTEES</span>
                        </h4>
                        <div className="space-y-3 text-xs">
                            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/80">
                                <div className="font-semibold text-foreground flex items-center gap-1.5">
                                    <Lock size={12} className="text-emerald-500" />
                                    <span>100% Code Ownership</span>
                                </div>
                                <div className="text-muted-foreground text-[11px] mt-0.5">
                                    Full Git repo transferred directly to your organization.
                                </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/80">
                                <div className="font-semibold text-foreground flex items-center gap-1.5">
                                    <ShieldCheck size={12} className="text-indigo-400" />
                                    <span>Zero Vendor Lock-In</span>
                                </div>
                                <div className="text-muted-foreground text-[11px] mt-0.5">
                                    Standard open-source stack. No proprietary traps.
                                </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/80">
                                <div className="font-semibold text-foreground flex items-center gap-1.5">
                                    <Globe size={12} className="text-cyan-400" />
                                    <span>US / UK / EU Overlap</span>
                                </div>
                                <div className="text-muted-foreground text-[11px] mt-0.5">
                                    Seamless synchronous communication during your working hours.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR: COPYRIGHT, AYODHYA HQ, LEGAL */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                        <p>© {currentYear} Techcure Technology. All rights reserved.</p>
                        <span className="hidden sm:inline text-border">•</span>
                        <p className="font-mono text-[11px]">
                            Physical Engineering Studio: Ayodhya, UP, India
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
                        <Link to="/about" className="hover:text-foreground transition-colors">Leadership</Link>
                        <Link to="/why-us" className="hover:text-foreground transition-colors">Comparison</Link>
                        <Link to="/senior-grant" className="hover:text-amber-400 transition-colors">Senior Initiative</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Start Project</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
