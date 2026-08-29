import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CodeBlock = ({ _node, inline, className, children, ...props }) => {
    const [copied, setCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    const codeString = String(children).replace(/\n$/, '');

    if (inline) {
        return (
            <code className="px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs" {...props}>
                {children}
            </code>
        );
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text', err);
        }
    };

    return (
        <div className="relative group my-6 rounded-xl overflow-hidden border border-border/80 bg-zinc-950/90 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-border/40 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-primary" />
                    <span className="uppercase font-semibold text-foreground/80">{language || 'code'}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50 transition-all active:scale-95"
                    title="Copy code to clipboard"
                    type="button"
                >
                    {copied ? (
                        <>
                            <Check size={13} className="text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={13} />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-zinc-200 selection:bg-primary/30">
                <code>{children}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
