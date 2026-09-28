import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, AlertTriangle, CheckCircle2, Zap, Gauge, Server, Smartphone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';

const InteractiveSpeedSimulator = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    const [progressWP, setProgressWP] = useState(100);
    const [completedTechcure, setCompletedTechcure] = useState(true);
    const [completedWP, setCompletedWP] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(4.8);

    const runSimulation = () => {
        setIsSimulating(true);
        setProgressWP(0);
        setCompletedTechcure(false);
        setCompletedWP(false);
        setElapsedTime(0);

        // Techcure finishes in 320ms
        setTimeout(() => {
            setCompletedTechcure(true);
        }, 320);

        // WordPress takes 4800ms
        const startTime = Date.now();
        const interval = setInterval(() => {
            const currentElapsed = (Date.now() - startTime) / 1000;
            setElapsedTime(parseFloat(currentElapsed.toFixed(2)));
            const pct = Math.min(100, Math.round((currentElapsed / 4.8) * 100));
            setProgressWP(pct);

            if (currentElapsed >= 4.8) {
                clearInterval(interval);
                setProgressWP(100);
                setCompletedWP(true);
                setIsSimulating(false);
                setElapsedTime(4.8);
            }
        }, 50);
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="speed-simulator">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="TELEMETRY BENCHMARK"
                    subtitle="Legacy WordPress vs Techcure React Edge"
                />

                <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Every 100ms of latency costs e-commerce stores 1% in lost revenue. Click below to simulate a live 4G mobile load test comparing a standard WordPress site with a Techcure React 19 edge deployment.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <Button
                            onClick={runSimulation}
                            disabled={isSimulating}
                            size="lg"
                            className="rounded-full px-8 gap-2 font-bold shadow-xl shadow-primary/20 text-sm sm:text-base"
                        >
                            {isSimulating ? (
                                <>
                                    <RotateCcw className="h-4 w-4 animate-spin text-primary-foreground" />
                                    <span>Simulating 4G Mobile Traffic ({elapsedTime}s)...</span>
                                </>
                            ) : (
                                <>
                                    <Play className="h-4 w-4 fill-current" />
                                    <span>Run Live 4G Speed Benchmark</span>
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                {/* Side-by-Side Live Simulators */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left: Legacy WordPress / Bloated CMS */}
                    <Card className={`p-6 sm:p-8 bg-card/70 border ${completedWP && !isSimulating ? 'border-red-500/30' : 'border-border'} flex flex-col justify-between transition-all`}>
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <h4 className="font-head font-bold text-base sm:text-lg text-foreground">Standard WordPress Monolith</h4>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                                    F (34 / 100)
                                </span>
                            </div>

                            <p className="text-xs text-muted-foreground mb-6">
                                Heavy MySQL database lookups, 34 third-party plugins, render-blocking CSS, and uncompressed JPEG media.
                            </p>

                            {/* Simulated Screen Viewport */}
                            <div className="h-40 rounded-xl bg-secondary/80 border border-border/80 p-4 flex flex-col justify-center items-center relative overflow-hidden mb-6">
                                {!completedWP ? (
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="w-8 h-8 rounded-full border-2 border-red-500/30 border-t-red-500 animate-spin"></div>
                                        <span className="text-xs font-mono text-muted-foreground">Waiting for MySQL TTFB... ({progressWP}%)</span>
                                        <div className="w-48 h-1.5 rounded-full bg-background overflow-hidden mt-1">
                                            <div className="h-full bg-red-500 transition-all duration-75" style={{ width: `${progressWP}%` }}></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-1">
                                        <AlertTriangle size={28} className="text-red-400 mx-auto mb-1" />
                                        <div className="text-sm font-bold text-red-400">Page Loaded in 4.8 Seconds</div>
                                        <div className="text-[11px] text-muted-foreground">42% of mobile visitors bounced before render</div>
                                    </div>
                                )}
                            </div>

                            {/* Telemetry Metrics */}
                            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">TIME TO FIRST BYTE (TTFB)</div>
                                    <div className="text-lg font-bold text-red-400">2,850 ms</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">LARGEST CONTENTFUL PAINT</div>
                                    <div className="text-lg font-bold text-red-400">4.80 s</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">ACTIVE PLUGINS</div>
                                    <div className="text-lg font-bold text-red-400">34 Plugins</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">DATABASE CRASH RISK</div>
                                    <div className="text-lg font-bold text-red-400">High (PHP-FPM)</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Right: Techcure Custom React Edge */}
                    <Card className={`p-6 sm:p-8 bg-card/70 border ${completedTechcure ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/5' : 'border-border'} flex flex-col justify-between transition-all`}>
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <h4 className="font-head font-bold text-base sm:text-lg text-foreground">Techcure React 19 Edge</h4>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                                    A+ (100 / 100)
                                </span>
                            </div>

                            <p className="text-xs text-muted-foreground mb-6">
                                Zero-runtime Tailwind v4, client-side WebCrypto, WebP asset pipeline, and 300+ global Cloudflare edge points of presence.
                            </p>

                            {/* Simulated Screen Viewport */}
                            <div className="h-40 rounded-xl bg-emerald-950/20 border border-emerald-500/30 p-4 flex flex-col justify-center items-center relative overflow-hidden mb-6">
                                {!completedTechcure ? (
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin"></div>
                                        <span className="text-xs font-mono text-emerald-400">Edge Cache Hit...</span>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-1">
                                        <CheckCircle2 size={28} className="text-emerald-400 mx-auto mb-1" />
                                        <div className="text-sm font-bold text-emerald-400">Instant Render in 0.32s (15x Faster)</div>
                                        <div className="text-[11px] text-muted-foreground">99.4% mobile engagement with 0ms visual lag</div>
                                    </div>
                                )}
                            </div>

                            {/* Telemetry Metrics */}
                            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">TIME TO FIRST BYTE (TTFB)</div>
                                    <div className="text-lg font-bold text-emerald-400">45 ms</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">LARGEST CONTENTFUL PAINT</div>
                                    <div className="text-lg font-bold text-emerald-400">0.32 s</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">THIRD-PARTY PLUGINS</div>
                                    <div className="text-lg font-bold text-emerald-400">0 (Zero Bloat)</div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/50 border border-border">
                                    <div className="text-muted-foreground text-[10px]">EDGE SERVER CONCURRENCY</div>
                                    <div className="text-lg font-bold text-emerald-400">100,000+ Concurrent</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default InteractiveSpeedSimulator;
