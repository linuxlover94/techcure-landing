import React, { useEffect, useState, useMemo } from 'react';
import { ListTree, ChevronRight } from 'lucide-react';

const TableOfContents = ({ content }) => {
    const [activeId, setActiveId] = useState('');

    const headings = useMemo(() => {
        if (!content) return [];
        const lines = content.split('\n');
        const extracted = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2].trim().replace(/[*_`]/g, '');
                const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');

                extracted.push({ level, text, id });
            }
        });

        return extracted;
    }, [content]);

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0px -60% 0px' }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    const scrollToHeading = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-lg">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border/50 text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                <ListTree size={15} className="text-primary" />
                <span>Table of Contents</span>
            </div>

            <ul className="space-y-1.5 text-xs font-mono">
                {headings.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <li
                            key={item.id}
                            style={{ paddingLeft: item.level === 3 ? '16px' : '0px' }}
                        >
                            <button
                                type="button"
                                onClick={() => scrollToHeading(item.id)}
                                className={`text-left w-full flex items-start gap-1.5 py-1 transition-all rounded px-2 ${
                                    isActive
                                        ? 'text-primary font-bold bg-primary/10 border-l-2 border-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
                                }`}
                            >
                                <ChevronRight
                                    size={12}
                                    className={`mt-0.5 shrink-0 transition-transform ${
                                        isActive ? 'text-primary rotate-90' : 'text-muted-foreground/40'
                                    }`}
                                />
                                <span className="line-clamp-2">{item.text}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TableOfContents;
