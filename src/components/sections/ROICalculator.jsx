import React, { useState } from 'react';
import Card from '../ui/Card';

const ROICalculator = ({ embedded = false }) => {
    const [traffic, setTraffic] = useState(10000);
    const [conversion, setConversion] = useState(2.5);
    const [value, setValue] = useState(5000);

    const total = Math.round(traffic * (conversion / 100) * value);
    const maxRevenue = 100000 * 0.10 * 20000;
    const percentage = Math.min(100, Math.max(1, (total / maxRevenue) * 100));

    const content = (
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-head font-bold mb-4 sm:mb-6">
                    ROI <span className="text-primary">CALCULATOR</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-8">
                    See the potential impact of a high-performance digital ecosystem on your revenue.
                </p>

                <div className="space-y-6 sm:space-y-8">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="roi-traffic" className="text-xs sm:text-sm font-bold">MONTHLY TRAFFIC</label>
                            <span className="text-primary font-mono font-bold">{traffic.toLocaleString()}</span>
                        </div>
                        <input
                            id="roi-traffic"
                            type="range"
                            min="1000"
                            max="100000"
                            step="1000"
                            value={traffic}
                            onChange={(e) => setTraffic(Number(e.target.value))}
                            aria-label="Monthly Traffic"
                            aria-valuemin="1000"
                            aria-valuemax="100000"
                            aria-valuenow={traffic}
                            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="roi-conversion" className="text-xs sm:text-sm font-bold">CONVERSION RATE</label>
                            <span className="text-primary font-mono font-bold">{conversion}%</span>
                        </div>
                        <input
                            id="roi-conversion"
                            type="range"
                            min="0.1"
                            max="10"
                            step="0.1"
                            value={conversion}
                            onChange={(e) => setConversion(Number(e.target.value))}
                            aria-label="Conversion Rate"
                            aria-valuemin="0.1"
                            aria-valuemax="10"
                            aria-valuenow={conversion}
                            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="roi-aov" className="text-xs sm:text-sm font-bold">AVG. ORDER VALUE (₹)</label>
                            <span className="text-primary font-mono font-bold">₹{value.toLocaleString()}</span>
                        </div>
                        <input
                            id="roi-aov"
                            type="range"
                            min="500"
                            max="20000"
                            step="500"
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            aria-label="Average Order Value in Rupees"
                            aria-valuemin="500"
                            aria-valuemax="20000"
                            aria-valuenow={value}
                            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <Card className="text-center py-10 md:py-12 bg-card/60 border-border shadow-xl">
                    <h3 className="text-muted-foreground text-xs sm:text-sm font-bold mb-4 uppercase tracking-widest">
                        Estimated Monthly Revenue
                    </h3>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-head font-bold text-primary mb-8">
                        ₹{total.toLocaleString('en-IN')}
                    </div>

                    <div className="w-full h-3.5 bg-secondary rounded-full overflow-hidden relative">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-right">Based on max projection capacity</p>
                </Card>
            </div>
        </div>
    );

    if (embedded) {
        return <div id="roi-calculator">{content}</div>;
    }

    return (
        <section id="roi-calculator" className="py-24 bg-transparent border-y border-border/50">
            <div className="container mx-auto px-6">
                {content}
            </div>
        </section>
    );
};

export default ROICalculator;
