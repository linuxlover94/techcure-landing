import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background/80 backdrop-blur-md border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-head font-bold mb-6 tracking-tighter flex items-center gap-1">
                            TECHCURE<span className="text-primary">.</span>
                        </Link>
                        <p className="text-muted-foreground max-w-md mt-4 text-sm leading-relaxed">
                            Forging high-velocity digital monopolies for the next generation of businesses.
                            We build systems that scale, designs that captivate, and software that dominates.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                            <span className="px-2.5 py-1 rounded-md bg-secondary border border-border">Lucknow Hub</span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary border border-border">Ayodhya Center</span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary border border-border">Bangalore Network</span>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <a
                                href="https://wa.me/918188838966?text=Hi%20Techcure%2C%20I%20would%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                WhatsApp: +91 81888 38966
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-5 text-foreground text-sm uppercase tracking-wider">PLATFORMS &amp; WORK</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link to="/products" className="hover:text-primary transition-colors">Products &amp; Tools</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Client Portfolio</Link></li>
                            <li><Link to="/free-apps" className="hover:text-primary transition-colors">Free Web Apps</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Engineering Blog</Link></li>
                            <li><Link to="/why-us" className="hover:text-primary transition-colors">Why Techcure</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About &amp; Team</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Engineering</Link></li>
                            <li><Link to="/admin" className="hover:text-primary transition-colors opacity-60 hover:opacity-100 font-mono text-xs">Admin Console 🔒</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-5 text-foreground text-sm uppercase tracking-wider">FLAGSHIPS</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="https://inkleaf.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">InkLeaf Vault ↗</a></li>
                            <li><a href="https://mathsheet.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MathSheet Engine ↗</a></li>
                            <li><a href="https://wicom.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WiCom Platform ↗</a></li>
                            <li><a href="https://snpeethamayodhya.org/build" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Jyotish Calculator ↗</a></li>
                            <li><a href="https://www.goshuttles.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GoShuttles App ↗</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Techcure Technology. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>Engineered with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
