import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let drops = []; // { x, y, speed, char }
        let animationFrameId;
        let frameCount = 0;
        let isPaused = false;

        // Configuration
        const fontSize = 14;
        const chars = '0123456789ABCDEF<>/\\*&^%$#@!';
        const speedFactor = 2;

        // Theme colors
        let textColor = '#00f0ff';
        let fadeColor = 'rgba(0, 0, 0, 0.05)';
        let highlightColor = '#ffffff';

        const updateThemeColors = () => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                textColor = '#00f0ff';
                fadeColor = 'rgba(0, 0, 0, 0.08)';
                highlightColor = '#ffffff';
            } else {
                textColor = '#000000';
                fadeColor = 'rgba(255, 255, 255, 0.25)';
                highlightColor = '#00f0ff';
            }
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);

            const columnCount = Math.ceil(width / fontSize);
            if (drops.length === 0) {
                drops = [];
                for (let i = 0; i < columnCount; i++) {
                    drops.push({
                        x: i * fontSize,
                        y: Math.random() * -height,
                        speed: Math.random() * 0.5 + 0.5,
                        char: chars[Math.floor(Math.random() * chars.length)]
                    });
                }
            } else if (drops.length < columnCount) {
                for (let i = drops.length; i < columnCount; i++) {
                    drops.push({
                        x: i * fontSize,
                        y: Math.random() * -height,
                        speed: Math.random() * 0.5 + 0.5,
                        char: chars[Math.floor(Math.random() * chars.length)]
                    });
                }
            } else if (drops.length > columnCount) {
                drops = drops.slice(0, columnCount);
            }
        };

        const themeObserver = new MutationObserver(() => {
            updateThemeColors();
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const draw = () => {
            if (isPaused) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            frameCount++;

            // Fade effect (trail)
            ctx.fillStyle = fadeColor;
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px "Space Mono", monospace`;
            ctx.textAlign = 'center';

            // Draw drops
            for (let i = 0; i < drops.length; i++) {
                const drop = drops[i];

                if (frameCount % speedFactor === 0) {
                    drop.y += drop.speed * fontSize;

                    if (Math.random() > 0.95) {
                        drop.char = chars[Math.floor(Math.random() * chars.length)];
                    }

                    if (drop.y > height) {
                        drop.y = -fontSize;
                        drop.speed = Math.random() * 0.5 + 0.5;
                    }
                }

                if (Math.random() > 0.98) {
                    ctx.fillStyle = highlightColor;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = highlightColor;
                } else {
                    ctx.fillStyle = textColor;
                    ctx.shadowBlur = 0;
                }

                ctx.fillText(drop.char, drop.x, drop.y);
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleVisibilityChange = () => {
            isPaused = document.hidden;
        };

        window.addEventListener('resize', resize, { passive: true });
        document.addEventListener('visibilitychange', handleVisibilityChange);
        updateThemeColors();
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            themeObserver.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background transition-colors duration-300">
            {/* Canvas Layer */}
            <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

            {/* Mid Layer: Gradient Overlay for Depth and Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80"></div>

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-80"></div>
        </div>
    );
};

export default MatrixBackground;
