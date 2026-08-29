import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Sparkles, Rss, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ScrambleText from '../components/ui/ScrambleText';
import BlogCard from '../components/blog/BlogCard';
import { BLOG_CATEGORIES } from '../data/blogData';
import { getStoredPosts } from '../utils/blogStorage';

const BlogListing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [posts, setPosts] = useState(() => getStoredPosts());

    useEffect(() => {
        const handleUpdate = () => setPosts(getStoredPosts());
        window.addEventListener('techcure_blog_updated', handleUpdate);
        return () => window.removeEventListener('techcure_blog_updated', handleUpdate);
    }, []);

    const filteredPosts = posts.filter((post) => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredPost = posts.find((p) => p.featured) || posts[0];
    const regularPosts = filteredPosts.filter((p) => p.id !== (selectedCategory === 'All' && !searchQuery ? featuredPost?.id : null));

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Techcure Engineering Blog & Architectural Teardowns",
        "url": "https://techcurehq.com/blog",
        "description": "In-depth engineering articles on React 19, zero-knowledge WebCrypto, sub-second edge performance, and modern SaaS architecture.",
        "hasPart": posts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "url": `https://techcurehq.com/blog/${post.slug}`,
            "datePublished": post.date,
            "author": {
                "@type": "Person",
                "name": post.author.name
            }
        }))
    };

    return (
        <div className="pt-28 pb-24">
            <SEOHead
                title="Engineering Blog & Architectural Deep Dives"
                description="Technical teardowns on React 19, WebAssembly cryptography, sub-second edge architecture, and zero-bloat web engineering by Techcure architects."
                canonicalPath="/blog"
                schema={blogSchema}
            />

            {/* Page Header */}
            <section className="py-16 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
                            <BookOpen size={14} className="text-primary" />
                            Technical Insights &amp; Teardowns
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-head font-bold mb-6 tracking-tight">
                            ENGINEERING{' '}
                            <span className="text-primary block sm:inline">
                                <ScrambleText text="DISPATCHES" />
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Deep architectural teardowns, cryptographic algorithms, sub-second edge performance benchmarks, and ethical software development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <div className="container mx-auto px-6 max-w-6xl mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur-xl border border-border">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                        {BLOG_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search architecture articles..."
                            className="w-full pl-9 pr-4 py-2 rounded-xl bg-secondary/60 border border-border text-xs font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Content Display */}
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Featured Post (Only show if on 'All' and no search query active) */}
                {selectedCategory === 'All' && !searchQuery && featuredPost && (
                    <BlogCard post={featuredPost} featured={true} />
                )}

                {/* Regular Posts Grid */}
                {regularPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card/40 rounded-2xl border border-border p-8">
                        <p className="text-muted-foreground font-mono text-sm mb-4">No architectural articles found matching your query.</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            className="text-primary text-xs font-mono font-semibold underline underline-offset-4"
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </div>

            {/* RSS & Senior Grant Footnote Banner */}
            <div className="container mx-auto px-6 max-w-6xl mt-20">
                <div className="p-8 rounded-2xl bg-gradient-to-r from-secondary/80 via-card to-secondary/80 border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-primary font-semibold">
                            <Rss size={14} />
                            <span>SYNDICATE WITH RSS</span>
                        </div>
                        <h4 className="text-lg font-bold font-head text-foreground">Subscribe via standard RSS or Atom feeds</h4>
                        <p className="text-xs text-muted-foreground">Keep your team updated on cutting-edge web architecture benchmarks.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="/rss.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1.5"
                        >
                            <Rss size={13} />
                            <span>Feed (RSS 2.0)</span>
                        </a>
                        <a
                            href="/contact"
                            className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-mono text-xs font-semibold border border-border transition-colors flex items-center gap-1.5"
                        >
                            <span>Propose Topic</span>
                            <ArrowRight size={13} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListing;
