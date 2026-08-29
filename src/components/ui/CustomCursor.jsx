import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Skip initialization on touch-only devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot = dotRef.current;
        const outline = outlineRef.current;
        if (!dot || !outline) return;

        let mouseX = -100;
        let mouseY = -100;
        let outlineX = -100;
        let outlineY = -100;
        let animFrameId = null;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            setIsVisible(true);

            // Instant dot positioning
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        };

        // Smooth lerp loop for the outline
        const render = () => {
            outlineX += (mouseX - outlineX) * 0.2;
            outlineY += (mouseY - outlineY) * 0.2;

            outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;

            animFrameId = requestAnimationFrame(render);
        };

        const handleMouseOver = (e) => {
            if (e.target && e.target.closest) {
                const target = e.target.closest('a, button, input, textarea, .magnet-target, [role="button"], label, select');
                setIsHovering(Boolean(target));
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        animFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            if (animFrameId) cancelAnimationFrame(animFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform transition-opacity duration-200 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ left: 0, top: 0 }}
            />
            <div
                ref={outlineRef}
                className={`fixed top-0 left-0 border border-primary rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform transition-all duration-200 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } ${
                    isHovering
                        ? 'w-16 h-16 bg-primary/20 border-transparent'
                        : 'w-10 h-10 bg-transparent'
                }`}
                style={{ left: 0, top: 0 }}
            />
        </>
    );
};

export default CustomCursor;
