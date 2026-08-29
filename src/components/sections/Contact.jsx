import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Send, MapPin, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('standard'); // 'standard' | 'senior_discount'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        
        const prefix = inquiryType === 'senior_discount' 
            ? `*🎖️ SENIOR (60+) & VETERAN FOUNDER INQUIRY (FLAT 60% DISCOUNT)*\n\n`
            : `*⚡ NEW PROJECT INQUIRY - TECHCURE*\n\n`;

        const formattedText = `${prefix}` +
            `*👤 Founder / Contact:* ${name.trim()}\n` +
            `*📧 Email:* ${email.trim()}\n` +
            `*📌 Project Scope & Track:* ${subject.trim()} ${inquiryType === 'senior_discount' ? '(Senior & Veteran 60% Discount)' : ''}\n` +
            `*💬 Technical Brief & Goals:*\n${message.trim()}\n\n` +
            `_Sent via Techcure Engineering Portal (techcurehq.com)_`;

        const whatsappUrl = `https://wa.me/918188838966?text=${encodeURIComponent(formattedText)}`;
        
        setIsSubmitted(true);
        window.location.href = whatsappUrl;
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="GET IN TOUCH" subtitle="Direct Engineering Access" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-head font-bold mb-6">Let's engineer your software.</h3>
                        <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                            No sales intermediaries, no bureaucratic friction. You collaborate directly with senior software architects to design, engineer, and deploy high-performance web systems and full-stack products.
                        </p>

                        <div className="space-y-6">
                            {/* WhatsApp Direct */}
                            <a 
                                href="https://wa.me/918188838966?text=Hi%20Techcure%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:border-emerald-500/50 transition-all group"
                            >
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                                    <MessageSquare size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-emerald-400 uppercase font-semibold">Direct WhatsApp (Fastest Response)</p>
                                    <p className="font-bold text-foreground">+91 81888 38966</p>
                                </div>
                            </a>

                            {/* Phone Call */}
                            <a 
                                href="tel:+918188838966"
                                className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all group"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase">Direct Call</p>
                                    <p className="font-bold text-foreground">+91 81888 38966</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a 
                                href="mailto:hello@techcure.in"
                                className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all group"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase">Engineering Desk</p>
                                    <p className="font-bold text-foreground">hello@techcure.in</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase">Engineering Hubs</p>
                                    <p className="font-bold text-foreground">Lucknow • Ayodhya • Bengaluru</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 bg-card/70 backdrop-blur-xl border-border shadow-2xl">
                            <div className="mb-6 pb-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <h4 className="text-xl font-bold font-head text-foreground">Submit Your Technical Brief</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">Dispatched directly to our engineering team on WhatsApp</p>
                                </div>
                                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold inline-flex items-center gap-1 self-start sm:self-auto">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    WhatsApp Live
                                </span>
                            </div>

                            {/* Track Selector */}
                            <div className="grid grid-cols-2 gap-2 p-1 bg-secondary/80 rounded-xl mb-6 border border-border">
                                <button
                                    type="button"
                                    onClick={() => setInquiryType('standard')}
                                    className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                                        inquiryType === 'standard'
                                            ? 'bg-primary text-primary-foreground shadow-sm'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    Standard Project (72h)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setInquiryType('senior_discount')}
                                    className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                                        inquiryType === 'senior_discount'
                                            ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                                            : 'text-amber-400/80 hover:text-amber-300'
                                    }`}
                                >
                                    <span>🎖️ Senior (60+) &amp; Veteran</span>
                                    <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">-60%</span>
                                </button>
                            </div>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-xs font-mono font-medium text-foreground">Founder / Name *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            placeholder="e.g., Ramesh Chandra"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-email" className="text-xs font-mono font-medium text-foreground">Work Email *</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            placeholder="founder@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="contact-subject" className="text-xs font-mono font-medium text-foreground">Project Scope &amp; Target Platform *</label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        placeholder="e.g., Custom SaaS Platform, High-Traffic Portal, E-Commerce Engine"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="contact-message" className="text-xs font-mono font-medium text-foreground">Project Brief &amp; Technical Requirements *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none text-sm"
                                        placeholder="Describe your core product goals, required features, timeline expectations, and any existing systems..."
                                        required
                                    ></textarea>
                                </div>

                                <Button size="lg" className="w-full rounded-xl gap-2 font-bold shadow-lg" type="submit">
                                    <span>Send to WhatsApp (+91 81888 38966)</span>
                                    <Send className="h-4 w-4" />
                                </Button>

                                {isSubmitted && (
                                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                                        <CheckCircle2 size={15} />
                                        <span>Opening WhatsApp to transmit your brief directly to +91 81888 38966...</span>
                                    </div>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
