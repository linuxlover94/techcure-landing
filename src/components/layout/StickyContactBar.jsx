import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, X, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const StickyContactBar = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const whatsappUrl = "https://wa.me/918188838966?text=" + encodeURIComponent("Hi Techcure, I would like to discuss a project with your engineering team.");
    const phoneUrl = "tel:+918188838966";

    return (
        <>
            {/* MOBILE FLOATING CONVERSION DOCK (Bottom of screen on mobile screens < 640px) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur-xl border-t border-border shadow-[0_-8px_30px_rgba(0,0,0,0.15)] px-3 pt-2 pb-3 transition-transform duration-300">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-1.5 px-1 border-b border-border/50 mb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-foreground font-semibold">Ayodhya HQ Online</span>
                    </div>
                    <span className="text-emerald-500 font-medium">Avg reply: &lt; 15 mins</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all"
                    >
                        <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                        <span>WhatsApp Us</span>
                    </a>

                    <a
                        href={phoneUrl}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-card border border-border text-foreground hover:bg-secondary font-bold text-xs shadow-sm active:scale-[0.98] transition-all"
                    >
                        <Phone size={14} className="text-primary shrink-0" />
                        <span>Call Desk</span>
                    </a>
                </div>
            </div>

            {/* DESKTOP / TABLET FLOATING DOCK (Fixed Bottom-Right on screens >= 640px) */}
            <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-2">
                {isMinimized ? (
                    <button
                        onClick={() => setIsMinimized(false)}
                        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/95 hover:bg-card border border-border shadow-2xl backdrop-blur-xl text-xs font-medium text-foreground transition-all duration-200 hover:scale-105 hover:border-primary/50"
                        title="Open Quick Contact Dock"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-muted-foreground group-hover:text-foreground">Chat or Call Desk</span>
                        <WhatsAppIcon className="w-4 h-4 fill-emerald-500 shrink-0" />
                        <ChevronUp size={14} className="text-muted-foreground group-hover:text-foreground" />
                    </button>
                ) : (
                    <div className="flex items-center gap-2 p-1.5 pl-3.5 rounded-full bg-card/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/20 hover:border-border/80 transition-all duration-200">
                        {/* Live Status indicator */}
                        <div className="flex items-center gap-2 pr-1 border-r border-border/80 text-xs font-mono">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-muted-foreground font-medium whitespace-nowrap hidden lg:inline">
                                Ayodhya HQ Desk
                            </span>
                        </div>

                        {/* WhatsApp Instant CTA */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95"
                            title="Chat on WhatsApp (+91 81888 38966)"
                        >
                            <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
                            <span>WhatsApp</span>
                        </a>

                        {/* Direct Phone Dial */}
                        <a
                            href={phoneUrl}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-semibold transition-all hover:border-primary/40 active:scale-95"
                            title="Call Ayodhya HQ (+91 81888 38966)"
                        >
                            <Phone size={13} className="text-primary shrink-0" />
                            <span>+91 81888 38966</span>
                        </a>

                        {/* Free Scope / Contact link */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-medium transition-colors"
                            title="Scope Project"
                        >
                            <Sparkles size={12} className="shrink-0" />
                            <span className="hidden xl:inline">Scope Project</span>
                            <ArrowRight size={12} className="shrink-0" />
                        </Link>

                        {/* Minimize toggle */}
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors ml-0.5"
                            title="Minimize"
                            aria-label="Minimize contact dock"
                        >
                            <X size={13} />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default StickyContactBar;
