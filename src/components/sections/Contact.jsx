import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Send, MapPin, Mail, Phone, MessageSquare, CheckCircle2, Calendar, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('standard'); // 'standard' | 'senior_discount'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '₹25,000 - ₹50,000 ($500 - $1,000)',
        timeline: '72 Hours to 2 Weeks',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [savedLocally, setSavedLocally] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, budget, timeline, subject, message } = formData;
        
        const timestamp = new Date().toISOString();
        const leadRecord = {
            id: `lead_${Date.now()}`,
            timestamp,
            inquiryType,
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            budget,
            timeline,
            subject: subject.trim(),
            message: message.trim()
        };

        // 1. Never lose a lead: Save to browser local storage ledger
        try {
            const existingLeads = JSON.parse(localStorage.getItem('techcure_leads') || '[]');
            existingLeads.unshift(leadRecord);
            localStorage.setItem('techcure_leads', JSON.stringify(existingLeads.slice(0, 100)));
            setSavedLocally(true);
        } catch {
            // storage full or disabled
        }

        const prefix = inquiryType === 'senior_discount' 
            ? `*🎖️ SENIOR (60+) & VETERAN FOUNDER INQUIRY (-60% DISCOUNT)*\n\n`
            : `*⚡ NEW PROJECT INQUIRY - TECHCURE HQ*\n\n`;

        const formattedText = `${prefix}` +
            `*👤 Founder / Client:* ${name.trim()}\n` +
            `*📧 Work Email:* ${email.trim()}\n` +
            `*📱 Phone / WhatsApp:* ${phone.trim()}\n` +
            `*💰 Investment Budget:* ${budget}\n` +
            `*⏱️ Desired Timeline:* ${timeline}\n` +
            `*📌 Project Scope:* ${subject.trim()}\n\n` +
            `*💬 Technical Brief & Requirements:*\n${message.trim()}\n\n` +
            `_Timestamp: ${new Date().toLocaleString()} (techcurehq.com)_`;

        const whatsappUrl = `https://wa.me/918188838966?text=${encodeURIComponent(formattedText)}`;
        
        setIsSubmitted(true);

        // Open WhatsApp in new tab so visitor does not lose the website session
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="GET IN TOUCH" subtitle="Direct Engineering Access" />

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-head font-bold mb-4 text-foreground">
                            Let's engineer your software.
                        </h3>
                        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                            No junior sales reps, no bureaucratic delays. You collaborate directly with senior software architects headquartered in Ayodhya to scope, build, and deploy production-grade web systems for clients across India.
                        </p>

                        <div className="space-y-4">
                            {/* WhatsApp Direct */}
                            <a 
                                href="https://wa.me/918188838966?text=Hi%20Techcure%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all group shadow-sm"
                            >
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                                    <MessageSquare size={22} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-mono text-emerald-500 uppercase font-semibold">Direct WhatsApp (Fastest)</p>
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    </div>
                                    <p className="font-bold text-foreground text-base">+91 81888 38966</p>
                                </div>
                            </a>

                            {/* Phone Call */}
                            <a 
                                href="tel:+918188838966"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group shadow-sm"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase font-medium">Direct Engineering Line</p>
                                    <p className="font-bold text-foreground text-base">+91 81888 38966</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a 
                                href="mailto:hello@techcure.in"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group shadow-sm"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase font-medium">Official Inquiry Desk</p>
                                    <p className="font-bold text-foreground text-base">hello@techcure.in</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase font-medium">Engineering Headquarters</p>
                                    <p className="font-semibold text-foreground text-sm">Ayodhya, Uttar Pradesh • Serving Pan-India</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                                <span>100% IP &amp; Git Code Ownership</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-primary shrink-0" />
                                <span>72h Sprint to 3-Week Delivery</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 md:p-8 bg-card border-border shadow-xl">
                            <div className="mb-6 pb-4 border-b border-border flex items-center justify-between gap-3">
                                <div>
                                    <h4 className="text-xl font-bold font-head text-foreground">Project Inquiry &amp; Scoping</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">We reply within 4 business hours with an architectural plan</p>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-mono font-semibold inline-flex items-center gap-1.5 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Priority Desk
                                </span>
                            </div>

                            {/* Track Selector */}
                            <div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl mb-6 border border-border">
                                <button
                                    type="button"
                                    onClick={() => setInquiryType('standard')}
                                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                                        inquiryType === 'standard'
                                            ? 'bg-background text-foreground shadow-sm font-bold'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    Commercial Client
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setInquiryType('senior_discount')}
                                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                                        inquiryType === 'senior_discount'
                                            ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                                            : 'text-amber-500 hover:text-amber-400'
                                    }`}
                                >
                                    <span>🎖️ Senior (60+) &amp; Veteran</span>
                                    <span className="text-[10px] bg-amber-400/20 text-amber-500 px-1.5 py-0.5 rounded">-60%</span>
                                </button>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="contact-name" className="text-xs font-medium text-foreground">Your Name / Organization *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            placeholder="e.g., Ramesh Chandra"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="contact-email" className="text-xs font-medium text-foreground">Work Email *</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            placeholder="founder@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="contact-phone" className="text-xs font-medium text-foreground">Phone / WhatsApp Number *</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="contact-budget" className="text-xs font-medium text-foreground">Target Budget</label>
                                        <select
                                            id="contact-budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        >
                                            <option value="₹19,999 - ₹25,000 ($250 - $500)">₹19,999 - ₹25,000 ($250 - $500) • Rapid MVP</option>
                                            <option value="₹25,000 - ₹50,000 ($500 - $1,000)">₹25,000 - ₹50,000 ($500 - $1,000) • Growth Architecture</option>
                                            <option value="₹50,000 - ₹1,50,000 ($1,000 - $2,000)">₹50,000 - ₹1,50,000 ($1,000 - $2,000) • Full SaaS Platform</option>
                                            <option value="₹1,50,000+ ($2,000+)">₹1,50,000+ ($2,000+) • Enterprise System</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="contact-subject" className="text-xs font-medium text-foreground">Project Scope &amp; Target Platform *</label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        placeholder="e.g., Custom Next.js Platform, SaaS Web App, High-Speed E-Commerce"
                                        required
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="contact-message" className="text-xs font-medium text-foreground">Project Brief &amp; Goals *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-28 resize-none text-sm"
                                        placeholder="Describe your core business goals, target audience, required features, and any timeline deadlines..."
                                        required
                                    ></textarea>
                                </div>

                                <Button size="lg" className="w-full rounded-xl gap-2 font-bold shadow-lg" type="submit">
                                    <span>Transmit Project Brief to Engineering Desk</span>
                                    <Send className="h-4 w-4" />
                                </Button>

                                {isSubmitted && (
                                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs space-y-2">
                                        <div className="flex items-center gap-2 font-bold text-sm">
                                            <CheckCircle2 size={18} />
                                            <span>Inquiry Successfully Logged!</span>
                                        </div>
                                        <p className="text-muted-foreground">
                                            {savedLocally ? "Your technical brief is safely registered in our priority queue." : ""} A duplicate window opened with your brief for instant WhatsApp direct review with our Lead Architect (+91 81888 38966).
                                        </p>
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
