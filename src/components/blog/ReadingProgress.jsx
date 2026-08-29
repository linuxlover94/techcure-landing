import React, { useEffect, useState } from 'react';

const ReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-primary via-emerald-400 to-primary transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ReadingProgress;
