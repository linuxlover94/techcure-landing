import React, { useState, useMemo } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML/XML

const CodeBlock = ({ _node, inline, className, children, ...props }) => {
    const [copied, setCopied] = useState(false);
    const codeString = String(children || '').replace(/\n$/, '');
    const match = /language-(\w+)/.exec(className || '');
    
    // Explicit inline check: no language class AND single-line text
    const isInline = inline || (!match && !codeString.includes('\n'));
    const language = match ? match[1].toLowerCase() : 'javascript';

    // Highlight code with PrismJS at top level
    const highlightedHtml = useMemo(() => {
        if (isInline) return '';
        try {
            const grammar = Prism.languages[language] || Prism.languages.javascript;
            return Prism.highlight(codeString, grammar, language);
        } catch {
            return codeString;
        }
    }, [isInline, codeString, language]);

    if (isInline) {
        return (
            <code
                className="px-1.5 py-0.5 mx-0.5 rounded-md bg-secondary/80 text-primary font-mono text-xs font-semibold border border-border inline align-baseline"
                {...props}
            >
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
            console.error('Failed to copy code', err);
        }
    };

    return (
        <div className="relative group my-6 rounded-2xl overflow-hidden border border-border bg-zinc-950/95 dark:bg-zinc-950 text-zinc-100 shadow-2xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 mr-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <Terminal size={13} className="text-primary ml-1" />
                    <span className="uppercase font-semibold tracking-wider text-[11px] text-zinc-300">
                        {language}
                    </span>
                </div>

                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-all text-xs active:scale-95"
                    title="Copy code to clipboard"
                    type="button"
                >
                    {copied ? (
                        <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400 font-semibold text-[11px]">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={12} />
                            <span className="text-[11px]">Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Body */}
            <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed selection:bg-primary/30">
                <code
                    className={`language-${language}`}
                    dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                />
            </pre>
        </div>
    );
};

export default CodeBlock;
