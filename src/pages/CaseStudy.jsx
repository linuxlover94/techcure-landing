import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, 
    ExternalLink, 
    CheckCircle2, 
    MessageSquare, 
    Sparkles, 
    Code2, 
    Lock, 
    Play, 
    Pause, 
    ArrowDown, 
    ArrowUp, 
    RotateCcw,
    AlertTriangle,
    Target,
    ShieldCheck
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { PRODUCTS, PORTFOLIO } from '../data/projectsData';

const SPEED_CONFIGS = {
    '1x': { speed: 420 },
    '2x': { speed: 950 },
    '4x': { speed: 1900 },
};

const CaseStudy = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Fetch from centralized case studies data, fallback to generic project
    const rawProject = PRODUCTS.find(p => p.id === slug) || PORTFOLIO.find(p => p.id === slug) || PRODUCTS[0];
    const study = CASE_STUDIES[slug] || {
        ...rawProject,
        liveUrl: rawProject.url || `https://techcure.in`,
        displayUrl: rawProject.displayUrl || rawProject.url || 'techcure.in',
        isLive: rawProject.isLive !== false,
        techStack: rawProject.techStack || ['React', 'Next.js', 'Tailwind CSS'],
        subtitle: rawProject.tagline || "Architectural Deep Dive & Full-Stack System Case Study",
        benchmarks: [
            { label: "Performance", value: "100 / 100", detail: "Optimized Core Web Vitals" },
            { label: "Architecture", value: "Clean Stack", detail: "Zero legacy template bloat" },
            { label: "Execution", value: "Sub-Second", detail: "Edge distributed latency" },
            { label: "IP Ownership", value: "100% Client", detail: "No vendor lock-in" }
        ],
        realWorldProblem: {
            title: `The Architecture & Scaling Challenge of ${rawProject.title}`,
            description: `Traditional deployments rely on bloated templates and unoptimized servers that fail under peak traffic. We architected ${rawProject.title} for maximum reliability and sub-second velocity:`,
            painPoints: [
                { heading: "High Latency & Slow First Paint", desc: "Heavy JavaScript bundles and server database bottlenecks destroy user conversion rates." },
                { heading: "Security & Vulnerability Risks", desc: "Unmaintained plugins and leaky database queries create enterprise security liabilities." }
            ]
        },
        realWorldUseCases: [
            { title: "Enterprise & High-Growth Startups", scenario: `Deploy high-throughput, custom software platforms for ${rawProject.title} with zero latency bottlenecks.` },
            { title: "Commercial Operators", scenario: "Streamline operations with automated pipelines and zero-friction client workflows." }
        ],
        architecturalSolution: {
            title: `The Techcure Architecture for ${rawProject.title}`,
            overview: "Custom-engineered full-stack architecture with modular components, hardware-accelerated rendering, and zero-compromise security.",
            deepDivePillars: [
                { title: "Sub-Second Rendering", desc: "Edge-cached static and dynamic routing guaranteeing sub-second response times." },
                { title: "Zero Vendor Lock-in", desc: "Clean code repositories and full documentation owned 100% by the client." }
            ]
        }
    };

    // Scroller workstation state
    const viewportRef = useRef(null);
    const imgRef = useRef(null);
    const verticalTrackRef = useRef(null);
    const animFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);
    const currentOffsetRef = useRef(0);
    const maxScrollRef = useRef(0);
    const directionRef = useRef(1);
    const isPlayingRef = useRef(false);
    const isHoveredRef = useRef(false);
    const isManuallyPausedRef = useRef(false);
    const speedKeyRef = useRef('1x');
    const prevPctRef = useRef(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [direction, setDirection] = useState(1);
    const [speedKey, setSpeedKey] = useState('1x');
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isDraggingTrack, setIsDraggingTrack] = useState(false);

    useEffect(() => {
        speedKeyRef.current = speedKey;
    }, [speedKey]);

    const updateMetrics = () => {
        if (!viewportRef.current || !imgRef.current) return;
        const vHeight = viewportRef.current.clientHeight;
        const naturalW = imgRef.current.naturalWidth || 1;
        const naturalH = imgRef.current.naturalHeight || 1;
        const iHeight = imgRef.current.naturalHeight && imgRef.current.clientWidth
            ? (naturalH / naturalW) * imgRef.current.clientWidth
            : (imgRef.current.clientHeight || 5000);
        maxScrollRef.current = Math.max(0, iHeight - vHeight);
    };

    const applyTransform = (offset) => {
        const clamped = Math.max(0, Math.min(maxScrollRef.current, offset));
        currentOffsetRef.current = clamped;
        if (imgRef.current) {
            imgRef.current.style.transform = `translate3d(0, -${clamped}px, 0)`;
        }
        const maxScroll = maxScrollRef.current || 1;
        const pct = maxScrollRef.current > 0 ? Math.round((clamped / maxScroll) * 100) : 0;
        if (prevPctRef.current !== pct) {
            prevPctRef.current = pct;
            setScrollPercent(pct);
        }
    };

    const runAnimationLoop = () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        lastTimestampRef.current = 0;

        const loop = (timestamp) => {
            if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
            const dt = Math.min(0.033, (timestamp - lastTimestampRef.current) / 1000);
            lastTimestampRef.current = timestamp;

            const maxScroll = maxScrollRef.current;
            const currentSpeed = SPEED_CONFIGS[speedKeyRef.current]?.speed || 420;
            const dir = directionRef.current;

            if (maxScroll > 0) {
                let next = currentOffsetRef.current + (dir * currentSpeed * dt);
                if (next >= maxScroll && dir === 1) {
                    applyTransform(maxScroll);
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                    return;
                } else if (next <= 0 && dir === -1) {
                    applyTransform(0);
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                    return;
                } else {
                    applyTransform(next);
                }
            }

            if (isPlayingRef.current || isHoveredRef.current) {
                animFrameRef.current = requestAnimationFrame(loop);
            }
        };

        animFrameRef.current = requestAnimationFrame(loop);
    };

    const togglePlay = () => {
        if (isPlaying) {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
            isManuallyPausedRef.current = true;
            isPlayingRef.current = false;
            setIsPlaying(false);
        } else {
            isManuallyPausedRef.current = false;
            isPlayingRef.current = true;
            setIsPlaying(true);
            updateMetrics();
            runAnimationLoop();
        }
    };

    const jumpToPercent = (pct) => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        isPlayingRef.current = false;
        setIsPlaying(false);
        updateMetrics();
        const targetOffset = (pct / 100) * maxScrollRef.current;
        applyTransform(targetOffset);
    };

    const stepNudge = (deltaPercent) => {
        jumpToPercent(Math.max(0, Math.min(100, scrollPercent + deltaPercent)));
    };

    const resetToTop = () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        isManuallyPausedRef.current = false;
        isPlayingRef.current = false;
        setIsPlaying(false);
        applyTransform(0);
    };

    // Pointer Events for Vertical Track (Unified Mobile Touch & Desktop Mouse)
    const handlePointerDown = (e) => {
        const track = verticalTrackRef.current;
        if (!track) return;
        if (track.setPointerCapture) {
            try {
                track.setPointerCapture(e.pointerId);
            } catch {
                // Pointer capture unsupported
            }
        }
        setIsDraggingTrack(true);
        const rect = track.getBoundingClientRect();
        const clickRatio = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        jumpToPercent(clickRatio * 100);
    };

    const handlePointerMove = (e) => {
        if (!isDraggingTrack) return;
        const track = verticalTrackRef.current;
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        jumpToPercent(ratio * 100);
    };

    const handlePointerUp = (e) => {
        const track = verticalTrackRef.current;
        if (track && track.releasePointerCapture) {
            try {
                if (track.hasPointerCapture(e.pointerId)) {
                    track.releasePointerCapture(e.pointerId);
                }
            } catch {
                // Pointer already released
            }
        }
        setIsDraggingTrack(false);
    };

    useEffect(() => {
        updateMetrics();
        window.addEventListener('resize', updateMetrics);
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', updateMetrics);
        };
    }, []);

    return (
        <div className="pt-28 pb-24">
            <SEOHead
                title={`${study.title} Case Study | Engineering Architecture Deep Dive`}
                description={`Technical case study on how Techcure engineered ${study.title}: ${study.tagline}. Full architectural breakdown, use cases, and benchmarks.`}
                canonicalPath={`/case-study/${study.id}`}
            />

            {/* Breadcrumb Bar */}
            <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg bg-secondary/50 border border-border"
                >
                    <ArrowLeft size={14} />
                    <span>Back to Projects</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary uppercase font-bold">
                        {study.category}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{study.timeline}</span>
                </div>
            </div>

            {/* Title Header */}
            <section className="container mx-auto px-6 mb-10">
                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-head font-bold tracking-tight text-foreground mb-3">
                        {study.title}
                    </h1>
                    <p className="text-lg sm:text-xl font-medium text-primary mb-2">
                        {study.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl">
                        {study.tagline}
                    </p>
                </div>
            </section>

            {/* 50% / 50% Core Split Section (Locked Height, Zero Overflow Stretch) */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left 50% (6 Cols): Interactive Workstation Preview with Strict Locked Height */}
                    <div className="lg:col-span-6 w-full">
                        <div className="h-[540px] flex flex-col p-0 overflow-hidden bg-card/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl">
                            {/* Browser Top Bar */}
                            <div className="h-[44px] shrink-0 flex items-center justify-between px-4 bg-secondary/90 border-b border-border text-xs font-mono select-none">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block border border-red-600/40"></span>
                                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block border border-amber-600/40"></span>
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block border border-emerald-600/40"></span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background border border-border text-foreground font-mono text-[11px] max-w-[240px] truncate shadow-inner">
                                    <Lock size={11} className="text-emerald-400 shrink-0" />
                                    <span className="truncate">{study.displayUrl || study.liveUrl}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold">
                                    <span className={`w-2 h-2 rounded-full ${study.isLive !== false ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`}></span>
                                    <span className={study.isLive !== false ? 'text-emerald-400' : 'text-cyan-400'}>
                                        {study.isLive !== false ? 'ONLINE' : 'BETA'}
                                    </span>
                                </div>
                            </div>

                            {/* Viewport with Vertical Scroller Track (Locked 452px Height) */}
                            <div 
                                ref={viewportRef}
                                onMouseEnter={() => {
                                    isHoveredRef.current = true;
                                    // If user manually paused, DO NOT auto-play on hover!
                                    if (isManuallyPausedRef.current) {
                                        return;
                                    }
                                    directionRef.current = 1;
                                    setDirection(1);
                                    updateMetrics();
                                    runAnimationLoop();
                                }}
                                onMouseLeave={() => {
                                    isHoveredRef.current = false;
                                    // If in tour mode, don't reset to top
                                    if (isPlayingRef.current) {
                                        return;
                                    }
                                    if (!isDraggingTrack && !isManuallyPausedRef.current) {
                                        resetToTop();
                                    }
                                }}
                                className="relative h-[452px] overflow-hidden bg-background flex select-none"
                            >
                                <div className="flex-1 h-full overflow-hidden relative">
                                    <img
                                        ref={imgRef}
                                        src={study.previewImage}
                                        alt={`${study.title} full desktop capture`}
                                        onLoad={updateMetrics}
                                        className="w-full h-auto object-top block will-change-transform select-none pointer-events-none"
                                        style={{ transform: 'translate3d(0, 0px, 0)' }}
                                    />
                                </div>

                                {/* Vertical Right Track */}
                                <div
                                    ref={verticalTrackRef}
                                    onPointerDown={handlePointerDown}
                                    onPointerMove={handlePointerMove}
                                    onPointerUp={handlePointerUp}
                                    onPointerCancel={handlePointerUp}
                                    className="w-4 bg-secondary/80 border-l border-border relative cursor-pointer select-none group/track shrink-0 h-full touch-none"
                                    title="Click or drag to scrub"
                                >
                                    <div
                                        className="absolute left-0.5 right-0.5 rounded-full bg-primary/70 group-hover/track:bg-primary transition-colors cursor-grab active:cursor-grabbing"
                                        style={{
                                            height: '28px',
                                            top: `clamp(0px, calc(${scrollPercent}% - 14px), calc(100% - 28px))`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating Toolbar Suite */}
                            <div className="h-[44px] shrink-0 px-3 bg-secondary/90 border-t border-border flex items-center justify-between gap-2 text-xs select-none">
                                <div className="flex items-center gap-1.5">
                                    <button
                                        onClick={togglePlay}
                                        className="flex items-center gap-1 text-foreground hover:text-primary px-2.5 py-1 rounded bg-background border border-border font-mono text-[11px]"
                                    >
                                        {isPlaying ? <Pause size={11} className="text-primary" /> : <Play size={11} className="text-primary fill-primary" />}
                                        <span>{isPlaying ? 'Pause' : 'Tour'}</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            const newDir = direction === 1 ? -1 : 1;
                                            setDirection(newDir);
                                            directionRef.current = newDir;
                                        }}
                                        className="flex items-center gap-0.5 text-foreground hover:text-primary px-2 py-1 rounded bg-background border border-border font-mono text-[11px]"
                                    >
                                        {direction === 1 ? <ArrowDown size={11} className="text-primary" /> : <ArrowUp size={11} className="text-primary" />}
                                        <span>{direction === 1 ? 'Down' : 'Up'}</span>
                                    </button>

                                    <div className="flex items-center bg-background rounded p-0.5 border border-border">
                                        {Object.keys(SPEED_CONFIGS).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setSpeedKey(key)}
                                                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                                    speedKey === key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                                                }`}
                                            >
                                                {key}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <button onClick={() => stepNudge(-15)} className="px-1.5 py-1 rounded bg-background border border-border text-[10px] font-mono font-bold">-15%</button>
                                    <button onClick={() => stepNudge(15)} className="px-1.5 py-1 rounded bg-background border border-border text-[10px] font-mono font-bold">+15%</button>
                                    <span className="font-mono text-[11px] text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">{scrollPercent}%</span>
                                    <button onClick={resetToTop} className="p-1 rounded bg-background border border-border text-foreground hover:text-primary">
                                        <RotateCcw size={12} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right 50% (6 Cols): Clean, Compact Technical Data & Use Cases (Zero Blank Space) */}
                    <div className="lg:col-span-6 flex flex-col space-y-4">
                        {/* Verified Performance Benchmarks */}
                        <div className="grid grid-cols-2 gap-3">
                            {study.benchmarks.map((res, i) => (
                                <Card key={i} className="p-3.5 bg-card/70 border-border">
                                    <div className="text-[11px] font-mono text-muted-foreground uppercase">{res.label}</div>
                                    <div className="text-xl sm:text-2xl font-head font-bold text-primary my-0.5">{res.value}</div>
                                    <div className="text-[11px] text-foreground/80 leading-tight">{res.detail}</div>
                                </Card>
                            ))}
                        </div>

                        {/* Real-World Use Cases */}
                        <Card className="p-5 bg-card/70 border-border">
                            <div className="flex items-center gap-2 mb-3 text-foreground font-head font-bold text-sm uppercase tracking-wider">
                                <Target size={15} className="text-primary" />
                                <span>Target Audiences &amp; Real-World Use Cases</span>
                            </div>
                            <div className="space-y-2.5">
                                {study.realWorldUseCases.map((uc, i) => (
                                    <div key={i} className="border-l-2 border-primary/40 pl-3">
                                        <h4 className="text-xs font-mono font-bold text-foreground">{uc.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{uc.scenario}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Tech Stack & Direct Actions */}
                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-3">
                            <div>
                                <div className="text-xs font-mono font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                                    <Code2 size={13} className="text-primary" />
                                    <span>Production Stack:</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {study.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-0.5 rounded-md bg-card text-foreground text-xs font-mono border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-1">
                                {study.isLive !== false ? (
                                    <a
                                        href={study.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[130px]"
                                    >
                                        <Button size="sm" className="w-full gap-2 text-xs font-bold rounded-xl shadow-md">
                                            <span>Visit Live Platform</span>
                                            <ExternalLink size={13} />
                                        </Button>
                                    </a>
                                ) : (
                                    <a
                                        href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure Team, I would like to request Private Beta Access for ${study.title}.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[130px]"
                                    >
                                        <Button variant="secondary" size="sm" className="w-full gap-2 text-xs font-bold rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                                            <span>Request Beta Access</span>
                                        </Button>
                                    </a>
                                )}
                                <a
                                    href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure, I am reading the ${study.title} case study and want to build a similar custom platform.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[130px]"
                                >
                                    <Button variant="secondary" size="sm" className="w-full gap-2 text-xs font-bold rounded-xl border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
                                        <MessageSquare size={13} />
                                        <span>WhatsApp Team</span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Problem vs Solution Analysis */}
            <section className="container mx-auto px-6 mb-20">
                <SectionHeading
                    title="THE PROBLEM & THE ARCHITECTURE"
                    subtitle="Engineering Breakdown"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* The Real-World Problem */}
                    <Card className="p-8 bg-card/60 border-border flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-mono uppercase mb-5 border border-red-500/20">
                                <AlertTriangle size={13} />
                                <span>Industry Bottlenecks Solved</span>
                            </div>
                            <h3 className="text-xl font-head font-bold mb-3 text-foreground">{study.realWorldProblem.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                                {study.realWorldProblem.description}
                            </p>

                            <div className="space-y-4">
                                {study.realWorldProblem.painPoints.map((p, i) => (
                                    <div key={i} className="p-3.5 rounded-xl bg-secondary/40 border border-border/70">
                                        <div className="text-xs font-bold text-foreground mb-1">{p.heading}</div>
                                        <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* The Architectural Solution */}
                    <Card className="p-8 bg-card/60 border-border flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase mb-5 border border-emerald-500/20">
                                <ShieldCheck size={13} />
                                <span>The Techcure Architecture</span>
                            </div>
                            <h3 className="text-xl font-head font-bold mb-3 text-foreground">{study.architecturalSolution.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                                {study.architecturalSolution.overview}
                            </p>

                            <div className="space-y-4">
                                {study.architecturalSolution.deepDivePillars.map((p, i) => (
                                    <div key={i} className="p-3.5 rounded-xl bg-secondary/40 border border-border/70">
                                        <div className="text-xs font-bold text-primary mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 size={13} />
                                            <span>{p.title}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Direct CTA */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-card/90 border border-border max-w-4xl mx-auto shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 uppercase">
                        <Sparkles size={12} />
                        Custom Software Engineering
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">Need an engine custom-built for your business?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        Connect with our senior software architects in Lucknow, Ayodhya, or over WhatsApp. We build software that outperforms on speed, conversion, and durability.
                    </p>
                    <a
                        href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure, I would like to schedule a roadmap consultation for our new digital platform.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="rounded-full px-8 gap-2 shadow-xl">
                            <MessageSquare size={16} />
                            <span>Discuss on WhatsApp (+91 81888 38966)</span>
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CaseStudy;
