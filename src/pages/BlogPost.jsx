import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { 
    Calendar, 
    Clock, 
    ArrowLeft, 
    Tag, 
    Sparkles, 
    ChevronRight,
    Award
} from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CodeBlock from '../components/blog/CodeBlock';
import TableOfContents from '../components/blog/TableOfContents';
import AuthorCard from '../components/blog/AuthorCard';
import SocialShare from '../components/blog/SocialShare';
import ReadingProgress from '../components/blog/ReadingProgress';
import BlogCard from '../components/blog/BlogCard';
import { BLOG_POSTS } from '../data/blogData';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = useMemo(() => {
        return BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen pt-36 pb-20 flex items-center justify-center text-center">
                <SEOHead
                    title="Article Not Found"
                    description="The requested architectural article could not be located."
                />
                <div className="max-w-md px-6">
                    <h2 className="text-3xl font-head font-bold mb-4">Article Not Found</h2>
                    <p className="text-muted-foreground text-sm mb-6">
                        The requested engineering teardown has moved or been updated.
                    </p>
                    <Button onClick={() => navigate('/blog')} variant="primary">
                        Return to Engineering Blog
                    </Button>
                </div>
            </div>
        );
    }

    const currentUrl = `https://techcurehq.com/blog/${post.slug}`;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": `https://techcurehq.com${post.coverImage}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "url": "https://techcurehq.com/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Techcure",
            "logo": {
                "@type": "ImageObject",
                "url": "https://techcurehq.com/favicon.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
        },
        "keywords": post.tags.join(', ')
    };

    const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

    // Custom Markdown Component Renderers
    const markdownComponents = {
        code: CodeBlock,
        h2: ({ _node, children, ...props }) => {
            const text = String(children).replace(/[*_`]/g, '');
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            return (
                <h2
                    id={id}
                    className="text-2xl sm:text-3xl font-head font-bold mt-12 mb-5 text-foreground scroll-mt-28 border-b border-border/40 pb-2 flex items-center gap-2 group"
                    {...props}
                >
                    <span className="text-primary opacity-60">#</span>
                    <span>{children}</span>
                </h2>
            );
        },
        h3: ({ _node, children, ...props }) => {
            const text = String(children).replace(/[*_`]/g, '');
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            return (
                <h3
                    id={id}
                    className="text-xl sm:text-2xl font-head font-bold mt-8 mb-4 text-foreground/95 scroll-mt-28"
                    {...props}
                >
                    {children}
                </h3>
            );
        },
        p: ({ _node, children, ...props }) => (
            <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed my-5 font-sans" {...props}>
                {children}
            </p>
        ),
        ul: ({ _node, children, ...props }) => (
            <ul className="space-y-2.5 my-6 list-disc list-inside text-muted-foreground font-sans pl-2" {...props}>
                {children}
            </ul>
        ),
        ol: ({ _node, children, ...props }) => (
            <ol className="space-y-2.5 my-6 list-decimal list-inside text-muted-foreground font-sans pl-2" {...props}>
                {children}
            </ol>
        ),
        li: ({ _node, children, ...props }) => (
            <li className="text-muted-foreground leading-relaxed text-sm sm:text-base" {...props}>
                <span className="text-foreground">{children}</span>
            </li>
        ),
        blockquote: ({ _node, children, ...props }) => (
            <blockquote className="my-8 p-5 rounded-2xl bg-secondary/40 border-l-4 border-primary text-foreground/90 italic font-sans shadow-sm" {...props}>
                {children}
            </blockquote>
        ),
        hr: ({ _node, ...props }) => (
            <hr className="my-10 border-border/60" {...props} />
        )
    };

    return (
        <div className="pt-28 pb-24">
            <ReadingProgress />

            <SEOHead
                title={post.title}
                description={post.description}
                canonicalPath={`/blog/${post.slug}`}
                ogType="article"
                ogImage={`https://techcurehq.com${post.coverImage}`}
                keywords={post.tags.join(', ')}
                schema={blogPostingSchema}
            />

            {/* Breadcrumb Navigation */}
            <div className="container mx-auto px-6 max-w-6xl mb-8">
                <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} className="opacity-40" />
                    <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight size={12} className="opacity-40" />
                    <span className="text-primary truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
                </nav>
            </div>

            {/* Article Header */}
            <header className="container mx-auto px-6 max-w-4xl mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-mono">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Calendar size={13} /> {post.date}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="flex items-center gap-1.5 text-emerald-400">
                            <Clock size={13} /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-head font-bold text-foreground mb-6 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                        {post.subtitle || post.description}
                    </p>

                    {/* Author & Share Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border/80">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full object-cover bg-secondary border border-border"
                            />
                            <div>
                                <h4 className="text-sm font-bold font-head text-foreground">{post.author.name}</h4>
                                <p className="text-[11px] font-mono text-muted-foreground">{post.author.role}</p>
                            </div>
                        </div>

                        <SocialShare title={post.title} url={currentUrl} />
                    </div>
                </motion.div>
            </header>

            {/* Main Content Layout: Article (Left 8 cols) + Sticky TOC & Author (Right 4 cols) */}
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Markdown Body */}
                    <main className="lg:col-span-8">
                        <article className="prose prose-invert max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={markdownComponents}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </article>

                        {/* Article Tags */}
                        <div className="mt-12 pt-6 border-t border-border/60">
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted-foreground">
                                <Tag size={13} className="text-primary" />
                                <span>TOPICS &amp; TECHNOLOGIES:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-lg bg-secondary/60 text-muted-foreground border border-border text-xs font-mono"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Social Share */}
                        <div className="mt-8 p-6 rounded-2xl bg-card/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-bold text-foreground">Find this teardown insightful?</p>
                                <p className="text-xs text-muted-foreground">Share it with fellow architects and engineers.</p>
                            </div>
                            <SocialShare title={post.title} url={currentUrl} />
                        </div>

                        {/* Direct Scoping Call-to-Action */}
                        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/60 border border-primary/30 relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-4">
                                    <Award size={13} />
                                    <span>ARCHITECTURAL CONSULTATION</span>
                                </div>
                                <h3 className="text-2xl font-head font-bold mb-3 text-foreground">
                                    Ready to engineer sub-second web architecture?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
                                    We replace slow agency templates with custom React 19/Next.js systems delivered in 72 hours with 100% client code ownership.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <a href="/contact">
                                        <Button variant="primary" size="md">
                                            <span>Scope Your Platform</span>
                                        </Button>
                                    </a>
                                    <Link to="/why-us">
                                        <Button variant="outline" size="md">
                                            <span>Compare Our Standards</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Right Column: Sticky Table of Contents & Author Card */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-28 space-y-6">
                            <TableOfContents content={post.content} />
                            <AuthorCard author={post.author} />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
                <div className="container mx-auto px-6 max-w-6xl mt-24 pt-12 border-t border-border">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">Keep Reading</p>
                            <h3 className="text-2xl font-head font-bold text-foreground">More Architectural Teardowns</h3>
                        </div>
                        <Link to="/blog" className="text-xs font-mono text-primary hover:underline font-semibold">
                            View all dispatches →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {relatedPosts.map((related) => (
                            <BlogCard key={related.id} post={related} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
