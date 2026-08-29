import React from 'react';
import { Twitter, Linkedin, Github, ShieldCheck } from 'lucide-react';

const AuthorCard = ({ author }) => {
    if (!author) return null;

    return (
        <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-lg">
            <div className="flex items-center gap-3.5 mb-3.5">
                <div className="relative">
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-12 h-12 rounded-xl object-cover bg-secondary border border-border p-1"
                    />
                    <div className="absolute -bottom-1 -right-1 p-0.5 bg-primary rounded-full text-primary-foreground">
                        <ShieldCheck size={10} />
                    </div>
                </div>
                <div>
                    <h5 className="text-sm font-bold font-head text-foreground flex items-center gap-1.5">
                        {author.name}
                    </h5>
                    <p className="text-[11px] font-mono text-primary">{author.role}</p>
                </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-sans">
                {author.bio}
            </p>

            <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                {author.twitter && (
                    <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        title="Follow on Twitter / X"
                    >
                        <Twitter size={14} />
                    </a>
                )}
                {author.linkedin && (
                    <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        title="Connect on LinkedIn"
                    >
                        <Linkedin size={14} />
                    </a>
                )}
                {author.github && (
                    <a
                        href={author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        title="View GitHub Profile"
                    >
                        <Github size={14} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default AuthorCard;
