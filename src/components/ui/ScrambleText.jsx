import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';

const ScrambleText = ({ text, className }) => {
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true, amount: 0.1 });
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        if (!isInView) return;

        let frame = 0;
        const totalFrames = 25;
        let animationFrame;

        const originalText = text;
        const length = originalText.length;

        const update = () => {
            let result = '';
            const progress = frame / totalFrames;

            for (let i = 0; i < length; i++) {
                if (originalText[i] === ' ') {
                    result += ' ';
                    continue;
                }

                // If letter's turn has arrived based on progress
                if (i / length <= progress) {
                    result += originalText[i];
                } else {
                    result += chars[Math.floor(Math.random() * chars.length)];
                }
            }

            setDisplayText(result);

            if (frame < totalFrames) {
                frame++;
                animationFrame = requestAnimationFrame(update);
            } else {
                setDisplayText(originalText);
            }
        };

        animationFrame = requestAnimationFrame(update);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            setDisplayText(originalText);
        };
    }, [text, isInView]);

    return (
        <span
            ref={elementRef}
            className={`inline-block ${className || ''}`}
            aria-label={text}
        >
            {displayText}
        </span>
    );
};

export default ScrambleText;
