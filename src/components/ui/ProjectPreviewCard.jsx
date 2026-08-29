import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    ExternalLink, 
    Lock, 
    CheckCircle2, 
    Play, 
    Pause, 
    RotateCcw, 
    ShieldAlert, 
    Cpu, 
    ChevronDown, 
    ChevronUp,
    ArrowDown,
    ArrowUp,
    Compass,
    FileText
} from 'lucide-react';
import Card from './Card';
import Button from './Button';

const SPEED_CONFIGS = {
    '1x': { speed: 420, label: '1x' },
    '2x': { speed: 950, label: '2x' },
    '4x': { speed: 1900, label: '4x' },
};

const ProjectPreviewCard = ({ project, layout = "grid" }) => {
    const isHorizontal = layout === "horizontal";
    const viewportRef = useRef(null);
    const imgRef = useRef(null);
    const verticalTrackRef = useRef(null);
    const animFrameRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [speedKey, setSpeedKey] = useState('1x');
    const [direction, setDirection] = useState(1); // 1 = down, -1 = up
    const [isDraggingTrack, setIsDraggingTrack] = useState(false);

    // Refs for stable, glitch-free RAF physics loop
    const currentOffsetRef = useRef(0);
    const isPlayingRef = useRef(false);
    const speedKeyRef = useRef('1x');
    const directionRef = useRef(1);
    const maxScrollRef = useRef(0);
    const isHoveredRef = useRef(false);
    const isManuallyPausedRef = useRef(false);

    // Keep state refs in sync
    useEffect(() => {
        speedKeyRef.current = speedKey;
    }, [speedKey]);

    useEffect(() => {
        directionRef.current = direction;
    }, [direction]);

    // Recalculate max scroll distance
    const updateMetrics = () => {
        if (imgRef.current && viewportRef.current) {
            const viewportHeight = viewportRef.current.clientHeight;
            const naturalW = imgRef.current.naturalWidth || 1;
            const naturalH = imgRef.current.naturalHeight || 1;
            const imgHeight = imgRef.current.naturalHeight && imgRef.current.clientWidth
                ? (naturalH / naturalW) * imgRef.current.clientWidth
                : (imgRef.current.clientHeight || 4000);
            maxScrollRef.current = Math.max(0, imgHeight - viewportHeight);
        }
    };

    const prevPctRef = useRef(0);

    // Apply GPU transform directly to avoid layout redraws
    const applyTransform = (offset) => {
        const clampedOffset = Math.max(0, Math.min(maxScrollRef.current || 4000, offset));
        currentOffsetRef.current = clampedOffset;
        
        if (imgRef.current) {
            imgRef.current.style.transform = `translate3d(0, -${clampedOffset}px, 0)`;
        }

        const maxScroll = maxScrollRef.current || 1;
        const pct = Math.min(100, Math.max(0, Math.round((clampedOffset / maxScroll) * 100)));
        if (prevPctRef.current !== pct) {
            prevPctRef.current = pct;
            setScrollPercent(pct);
        }
    };

    // Glitch-free constant velocity RAF loop
    const runAnimationLoop = () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        isPlayingRef.current = true;
        setIsPlaying(true);

        let lastTimestamp = performance.now();

        const step = (now) => {
            if (!isPlayingRef.current) return;

            // Clamp deltaTime to max 33ms to avoid huge teleportation jumps on frame drops
            const deltaTime = Math.min(0.033, (now - lastTimestamp) / 1000);
            lastTimestamp = now;

            const velocity = (SPEED_CONFIGS[speedKeyRef.current]?.speed || 420) * directionRef.current;
            const maxScroll = maxScrollRef.current || (imgRef.current?.clientHeight - viewportRef.current?.clientHeight) || 2000;
            
            const nextOffset = currentOffsetRef.current + (velocity * deltaTime);

            if (directionRef.current === 1) {
                // Scrolling Down
                if (nextOffset < maxScroll) {
                    applyTransform(nextOffset);
                    animFrameRef.current = requestAnimationFrame(step);
                } else {
                    applyTransform(maxScroll);
                    // Reached bottom: stop cleanly at 100%
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                }
            } else {
                // Scrolling Up
                if (nextOffset > 0) {
                    applyTransform(nextOffset);
                    animFrameRef.current = requestAnimationFrame(step);
                } else {
                    applyTransform(0);
                    // Reached top: stop cleanly at 0%
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                }
            }
        };

        animFrameRef.current = requestAnimationFrame(step);
    };

    // Smooth ease-back to top
    const smoothEaseToTop = () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        isManuallyPausedRef.current = false;
        isPlayingRef.current = false;
        setIsPlaying(false);

        const startOffset = currentOffsetRef.current;
        if (startOffset <= 0) return;

        const duration = Math.min(220, Math.max(120, startOffset * 0.04));
        const startTime = performance.now();

        const resetStep = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Quintic ease-out curve for clean snap-back
            const ease = 1 - Math.pow(1 - progress, 5);
            
            const nextOffset = startOffset * (1 - ease);
            applyTransform(nextOffset);

            if (progress < 1) {
                animFrameRef.current = requestAnimationFrame(resetStep);
            } else {
                applyTransform(0);
            }
        };

        animFrameRef.current = requestAnimationFrame(resetStep);
    };

    // Jump to exact percentage (0% to 100%)
    const jumpToPercent = (targetPercent) => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        isPlayingRef.current = false;
        setIsPlaying(false);

        const maxScroll = maxScrollRef.current || (imgRef.current?.clientHeight - viewportRef.current?.clientHeight) || 2000;
        const targetOffset = (targetPercent / 100) * maxScroll;
        applyTransform(targetOffset);
    };

    // Step jump (+15% or -15%)
    const stepNudge = (deltaPercent) => {
        jumpToPercent(Math.min(100, Math.max(0, scrollPercent + deltaPercent)));
    };

    // Play / Pause Toggle
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

    // Vertical Track Pointer Handlers (Works on Mouse, Touch & Stylus)
    const handlePointerDown = (e) => {
        const track = verticalTrackRef.current;
        if (!track) return;
        if (track.setPointerCapture) {
            try {
                track.setPointerCapture(e.pointerId);
            } catch {
                // Pointer capture unsupported on legacy browser
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

    // Hover Handlers
    const handleMouseEnter = () => {
        isHoveredRef.current = true;
        // If user manually paused, DO NOT auto-play on hover!
        if (isManuallyPausedRef.current) {
            return;
        }
        directionRef.current = 1;
        setDirection(1);
        updateMetrics();
        runAnimationLoop();
    };

    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        // If in tour mode, don't reset to top
        if (isPlayingRef.current) {
            return;
        }
        if (!isDraggingTrack && !isManuallyPausedRef.current) {
            smoothEaseToTop();
        }
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
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="h-full group"
        >
            <Card
                className={`h-full flex flex-col ${
                    isHorizontal ? 'lg:grid lg:grid-cols-12 lg:gap-0' : ''
                } p-0 overflow-hidden bg-card/80 backdrop-blur-xl border border-border/80 hover:border-primary/60 transition-all duration-500 shadow-xl`}
                hoverEffect={false}
            >
                {/* Browser Workstation Frame */}
                <div
                    className={`${
                        isHorizontal ? 'lg:col-span-7' : 'w-full'
                    } flex flex-col bg-secondary/40 border-b lg:border-b-0 ${
                        isHorizontal ? 'lg:border-r' : ''
                    } border-border relative select-none`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* macOS Style Browser Header Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-secondary/90 border-b border-border text-xs font-mono select-none z-10">
                        {/* Traffic Lights */}
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block border border-red-600/40 shadow-sm"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block border border-amber-600/40 shadow-sm"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block border border-emerald-600/40 shadow-sm"></span>
                        </div>

                        {/* URL Bar */}
                        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-background/90 border border-border/80 text-foreground font-mono text-[11px] max-w-[260px] truncate shadow-inner">
                            <Lock size={11} className={project.isLive ? "text-emerald-400" : "text-cyan-400"} />
                            <span className="truncate">{project.displayUrl}</span>
                        </div>

                        {/* Status Pulse */}
                        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider">
                            <span className={`w-2 h-2 rounded-full ${project.isLive ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`}></span>
                            <span className={project.isLive ? 'text-emerald-400' : 'text-cyan-400'}>
                                {project.isLive ? 'ONLINE' : 'BETA'}
                            </span>
                        </div>
                    </div>

                    {/* Main Viewport Container (GPU Accelerated, Single Right Track, Zero Layout Thrashing) */}
                    <div
                        ref={viewportRef}
                        className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden bg-background/95 flex"
                    >
                        {/* Hardware Accelerated Image Element */}
                        <div className="flex-1 overflow-hidden relative">
                            <img
                                ref={imgRef}
                                src={project.previewImage}
                                alt={`${project.title} full page capture`}
                                onLoad={updateMetrics}
                                className="w-full h-auto object-top block will-change-transform transition-none"
                                style={{ transform: 'translate3d(0, 0px, 0)' }}
                            />
                        </div>

                        {/* Unified Single Vertical Scroller Track (Click & Drag to Any Point) */}
                        <div
                            ref={verticalTrackRef}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerUp}
                            title="Interactive Scroller: Drag or click anywhere to jump to section"
                            className="w-5.5 h-full bg-secondary/80 border-l border-border/80 flex flex-col items-center justify-between py-1.5 cursor-pointer hover:bg-secondary transition-colors z-20 shrink-0 select-none touch-none"
                        >
                            {/* Jump to Top Button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); jumpToPercent(0); }}
                                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                                title="Jump to Top"
                            >
                                <ChevronUp size={13} />
                            </button>

                            {/* Vertical Scrub Track with Proportional Scrubber Thumb */}
                            <div className="w-1.5 flex-1 bg-border/60 rounded-full relative my-1 overflow-hidden">
                                <div
                                    className="w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full absolute top-0 transition-all duration-75 shadow-sm"
                                    style={{ height: `${Math.max(12, scrollPercent)}%` }}
                                ></div>
                            </div>

                            {/* Jump to Bottom Button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); jumpToPercent(100); }}
                                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                                title="Jump to Bottom"
                            >
                                <ChevronDown size={13} />
                            </button>
                        </div>

                        {/* Comprehensive Professional Floating Control Bar */}
                        <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none px-2 z-30">
                            <div className="pointer-events-auto flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-md border border-border shadow-2xl text-xs text-muted-foreground">
                                
                                {/* 1. Play / Pause Button */}
                                <button
                                    onClick={togglePlay}
                                    className="flex items-center gap-1 text-primary font-bold hover:opacity-80 transition-opacity pr-1"
                                    title={isPlaying ? "Pause Auto-Tour" : "Start Auto-Tour"}
                                >
                                    {isPlaying ? (
                                        <Pause size={12} className="fill-primary" />
                                    ) : (
                                        <Play size={12} className="fill-primary" />
                                    )}
                                    <span className="font-mono text-[11px]">{isPlaying ? 'Pause' : 'Tour'}</span>
                                </button>

                                <span className="text-border">|</span>

                                {/* 2. Direction Toggle (Down / Up) */}
                                <button
                                    onClick={() => {
                                        const newDir = direction === 1 ? -1 : 1;
                                        setDirection(newDir);
                                        directionRef.current = newDir;
                                    }}
                                    className="flex items-center gap-0.5 text-foreground hover:text-primary px-1.5 py-0.5 rounded bg-secondary/80 hover:bg-secondary font-mono text-[11px] transition-colors"
                                    title={`Current Direction: ${direction === 1 ? 'Down' : 'Up'}. Click to reverse.`}
                                >
                                    {direction === 1 ? <ArrowDown size={11} className="text-primary" /> : <ArrowUp size={11} className="text-primary" />}
                                    <span>{direction === 1 ? 'Down' : 'Up'}</span>
                                </button>

                                <span className="text-border">|</span>

                                {/* 3. Speed Config Selector (1x / 2x / 4x) */}
                                <div className="flex items-center bg-secondary/80 rounded p-0.5 border border-border/60">
                                    {Object.keys(SPEED_CONFIGS).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setSpeedKey(key)}
                                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                                                speedKey === key
                                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                                    : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                            title={`Set speed to ${key} (${SPEED_CONFIGS[key].speed} px/s)`}
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>

                                <span className="text-border">|</span>

                                {/* 4. Section Step Jump Buttons (-15% / +15%) */}
                                <div className="flex items-center gap-0.5">
                                    <button
                                        onClick={() => stepNudge(-15)}
                                        className="px-1.5 py-0.5 rounded bg-secondary/80 hover:bg-secondary text-[10px] font-mono font-semibold text-foreground"
                                        title="Step backward 15%"
                                    >
                                        -15%
                                    </button>
                                    <button
                                        onClick={() => stepNudge(15)}
                                        className="px-1.5 py-0.5 rounded bg-secondary/80 hover:bg-secondary text-[10px] font-mono font-semibold text-foreground"
                                        title="Step forward 15%"
                                    >
                                        +15%
                                    </button>
                                </div>

                                <span className="text-border">|</span>

                                {/* 5. Current Position Badge */}
                                <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-foreground px-1.5 py-0.5 rounded bg-secondary/60">
                                    <Compass size={10} className="text-primary" />
                                    <span>{scrollPercent}%</span>
                                </div>

                                <span className="text-border">|</span>

                                {/* 6. Smooth Ease to Top Reset */}
                                <button
                                    onClick={smoothEaseToTop}
                                    className="text-muted-foreground hover:text-foreground flex items-center gap-0.5 font-medium transition-colors pl-0.5"
                                    title="Reset to Top"
                                >
                                    <RotateCcw size={11} />
                                    <span className="font-mono text-[10px]">Top</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information & Architecture Dossier */}
                <div className={`${isHorizontal ? 'lg:col-span-5' : 'flex-1'} p-6 md:p-8 flex flex-col justify-between`}>
                    <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
                                {project.category}
                            </span>
                            <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${project.statusColor || project.badgeColor}`}>
                                {project.badge}
                            </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl md:text-3xl font-head font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-xs font-mono font-semibold text-primary/90 mb-4 tracking-tight">
                            {project.tagline}
                        </p>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Key Architectural Bullets */}
                        {project.features && (
                            <div className="mb-6 space-y-2.5">
                                <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                    <Cpu size={13} className="text-primary" />
                                    <span>Architecture Highlights</span>
                                </p>
                                <ul className="space-y-2">
                                    {project.features.slice(0, 3).map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground/90 leading-normal">
                                            <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Telemetry Metrics Bar */}
                        {project.metrics && (
                            <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-secondary/50 border border-border mb-6">
                                {Object.entries(project.metrics).map(([key, val], i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-xs md:text-sm font-bold text-foreground font-mono truncate">{val}</div>
                                        <div className="text-[10px] uppercase text-muted-foreground tracking-tight capitalize truncate mt-0.5">
                                            {key.replace(/([A-Z])/g, ' $1')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tech Stack & Action Footer */}
                    <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                            {project.techStack?.map((tech, i) => (
                                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border/80">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                            <Link
                                to={`/case-study/${project.id}`}
                                className="inline-flex shrink-0"
                            >
                                <Button variant="outline" size="sm" className="rounded-xl gap-1.5 text-xs hover:border-primary/60 hover:text-primary">
                                    <FileText size={13} className="text-primary" />
                                    <span>View Case Study</span>
                                </Button>
                            </Link>

                            {project.isLive ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex shrink-0"
                                >
                                    <Button size="sm" className="rounded-xl gap-1.5 text-xs shadow-md">
                                        <span>Visit Live Platform</span>
                                        <ExternalLink size={13} />
                                    </Button>
                                </a>
                            ) : (
                                <a
                                    href={`https://wa.me/918188838966?text=${encodeURIComponent(`Hi Techcure Team, I would like to request Private Beta Access for ${project.title} (${project.displayUrl}).`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex shrink-0"
                                >
                                    <Button variant="secondary" size="sm" className="rounded-xl gap-1.5 text-xs border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                                        <ShieldAlert size={13} />
                                        <span>Request Beta (WhatsApp)</span>
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default ProjectPreviewCard;
