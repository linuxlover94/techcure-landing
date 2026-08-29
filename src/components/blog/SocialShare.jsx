import React, { useState } from 'react';
import { Twitter, Linkedin, MessageSquare, Link2, Check } from 'lucide-react';

const SocialShare = ({ title, url }) => {
    const [copied, setCopied] = useState(false);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(`${title} | Techcure Engineering`);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground mr-1">Share:</span>
            
            {/* Twitter / X */}
            <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary border border-border/60 transition-all hover:scale-105"
                title="Share on X (Twitter)"
            >
                <Twitter size={14} />
            </a>

            {/* LinkedIn */}
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary border border-border/60 transition-all hover:scale-105"
                title="Share on LinkedIn"
            >
                <Linkedin size={14} />
            </a>

            {/* WhatsApp */}
            <a
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-emerald-400 border border-border/60 transition-all hover:scale-105"
                title="Share on WhatsApp"
            >
                <MessageSquare size={14} />
            </a>

            {/* Copy Link */}
            <button
                type="button"
                onClick={handleCopy}
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 transition-all hover:scale-105"
                title="Copy link to clipboard"
            >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Link2 size={14} />}
            </button>
        </div>
    );
};

export default SocialShare;
