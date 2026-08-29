import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { IndianRupee, Clock } from 'lucide-react';

const IndiaFirst = () => {
    return (
        <section id="india-first" className="py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl font-head font-bold mb-6">
                                BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-green-500">INDIA</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                We understand the Indian market because we are the Indian market.
                                Global standards, local insights.
                            </p>

                            <div className="grid gap-6">
                                <Card className="flex items-start gap-4 bg-card/60 border-border">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <IndianRupee size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
                                        <p className="text-muted-foreground">Premium quality at rates that make sense for Indian businesses. Save 40% vs global agencies.</p>
                                    </div>
                                </Card>

                                <Card className="flex items-start gap-4 bg-card/60 border-border">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                        <p className="text-muted-foreground">We work when you work. No timezone barriers, just instant communication.</p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-square bg-secondary/50 rounded-full relative flex items-center justify-center border border-border">
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20"></div>
                            <div className="text-muted-foreground/20 font-head font-bold text-9xl select-none">IN</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndiaFirst;
