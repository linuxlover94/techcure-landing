import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className, hoverEffect = true }) => {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all duration-300",
                hoverEffect && "hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
