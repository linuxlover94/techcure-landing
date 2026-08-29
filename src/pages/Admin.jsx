import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Lock, 
    Unlock, 
    LayoutDashboard, 
    FileText, 
    Plus, 
    Edit3, 
    Trash2, 
    Save, 
    RotateCcw, 
    Copy, 
    Check, 
    ExternalLink, 
    Sparkles, 
    Download,
    LogOut,
    CheckCircle2
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEOHead from '../components/ui/SEOHead';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CodeBlock from '../components/blog/CodeBlock';
import { 
    getStoredPosts, 
    createPost, 
    updatePost, 
    deletePost, 
    resetPostsToDefault 
} from '../utils/blogStorage';
import { BLOG_CATEGORIES, BLOG_AUTHORS } from '../data/blogData';

const PASSCODE = 'techcure2026';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('techcure_admin_auth') === 'true';
    });
    const [passcodeInput, setPasscodeInput] = useState('');
    const [passcodeError, setPasscodeError] = useState(false);

    const [posts, setPosts] = useState(() => getStoredPosts());
    const [activeTab, setActiveTab] = useState('posts'); // 'posts' | 'editor' | 'sync'
    
    // Editor State
    const [editingSlug, setEditingSlug] = useState(null); // null = new post, string = editing slug
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        subtitle: '',
        description: '',
        category: 'Architecture',
        authorId: 'ved',
        readTime: '5 min read',
        date: new Date().toISOString().split('T')[0],
        coverImage: '/previews/mathsheet.png',
        tags: 'React 19, Architecture, Web Performance',
        featured: false,
        content: `## Executive Architecture Summary\n\nExplain the core technical breakthrough or bottleneck here.\n\n\`\`\`javascript\n// High-velocity code example\nexport function calculateThroughput(requests, latency) {\n    return (requests / latency) * 1000;\n}\n\`\`\`\n\n### Key Implementation Standards\n* Standard 1: Sub-second edge delivery\n* Standard 2: Zero vendor lock-in\n`
    });

    const [copiedCode, setCopiedCode] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    useEffect(() => {
        const handleUpdate = () => setPosts(getStoredPosts());
        window.addEventListener('techcure_blog_updated', handleUpdate);
        return () => window.removeEventListener('techcure_blog_updated', handleUpdate);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (passcodeInput === PASSCODE) {
            setIsAuthenticated(true);
            sessionStorage.setItem('techcure_admin_auth', 'true');
            setPasscodeError(false);
        } else {
            setPasscodeError(true);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('techcure_admin_auth');
    };

    const handleStartNew = () => {
        setEditingSlug(null);
        setFormData({
            title: '',
            slug: '',
            subtitle: '',
            description: '',
            category: 'Architecture',
            authorId: 'ved',
            readTime: '5 min read',
            date: new Date().toISOString().split('T')[0],
            coverImage: '/previews/mathsheet.png',
            tags: 'React 19, Architecture, Web Performance',
            featured: false,
            content: `## Executive Architecture Summary\n\nExplain the core technical breakthrough or bottleneck here.\n\n\`\`\`javascript\n// High-velocity code example\nexport function calculateThroughput(requests, latency) {\n    return (requests / latency) * 1000;\n}\n\`\`\`\n\n### Key Implementation Standards\n* Standard 1: Sub-second edge delivery\n* Standard 2: Zero vendor lock-in\n`
        });
        setActiveTab('editor');
    };

    const handleEditPost = (post) => {
        setEditingSlug(post.slug);
        setFormData({
            title: post.title,
            slug: post.slug,
            subtitle: post.subtitle || '',
            description: post.description || '',
            category: post.category || 'Architecture',
            authorId: post.author?.id || 'ved',
            readTime: post.readTime || '5 min read',
            date: post.date || new Date().toISOString().split('T')[0],
            coverImage: post.coverImage || '/previews/mathsheet.png',
            tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags || '',
            featured: Boolean(post.featured),
            content: post.content || ''
        });
        setActiveTab('editor');
    };

    const handleDeletePost = (slug) => {
        if (window.confirm(`Are you sure you want to delete "${slug}"?`)) {
            const updated = deletePost(slug);
            setPosts(updated);
            if (editingSlug === slug) {
                setActiveTab('posts');
            }
        }
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => {
            const updated = {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            };

            // Auto generate slug from title if new post
            if (name === 'title' && !editingSlug) {
                updated.slug = value
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');
            }

            // Auto calculate estimated read time from markdown words
            if (name === 'content') {
                const wordCount = value.trim().split(/\s+/).length;
                const minutes = Math.max(1, Math.ceil(wordCount / 200));
                updated.readTime = `${minutes} min read`;
            }

            return updated;
        });
    };

    const handleSavePost = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            alert('Please enter an article title.');
            return;
        }

        if (editingSlug) {
            updatePost(editingSlug, formData);
        } else {
            createPost(formData);
        }

        setPosts(getStoredPosts());
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        setActiveTab('posts');
    };

    const handleExportCode = () => {
        const code = `// Exported from Techcure Admin Panel on ${new Date().toLocaleString()}\nexport const BLOG_POSTS = ${JSON.stringify(posts, null, 4)};\n`;
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 3000);
    };

    const handleResetDefaults = () => {
        if (window.confirm('Reset all posts to default seed articles? This will erase custom browser drafts.')) {
            const defs = resetPostsToDefault();
            setPosts(defs);
            alert('Reset to default seed articles.');
        }
    };

    // Custom Markdown Components for Live Editor Preview
    const previewMarkdownComponents = {
        code: CodeBlock,
        h2: ({ _node, children, ...props }) => (
            <h2 className="text-xl font-head font-bold mt-6 mb-3 text-foreground border-b border-border/40 pb-1" {...props}>
                {children}
            </h2>
        ),
        h3: ({ _node, children, ...props }) => (
            <h3 className="text-lg font-head font-bold mt-4 mb-2 text-foreground" {...props}>
                {children}
            </h3>
        ),
        p: ({ _node, children, ...props }) => (
            <p className="text-sm text-muted-foreground leading-relaxed my-3" {...props}>
                {children}
            </p>
        )
    };

    // Passcode Gate
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-36 pb-20 flex items-center justify-center px-6">
                <SEOHead
                    title="Admin Portal | Authentication Required"
                    description="Secure authentication gateway for Techcure administrative control panel."
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <Card className="p-8 bg-card/80 backdrop-blur-2xl border-border shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                                <Lock size={26} />
                            </div>
                            <h2 className="text-2xl font-head font-bold text-foreground">Techcure Architecture Admin</h2>
                            <p className="text-xs text-muted-foreground mt-1">Enter master passcode to manage dispatches and system content</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="text-xs font-mono text-muted-foreground block mb-1.5">Master Passcode</label>
                                <input
                                    type="password"
                                    value={passcodeInput}
                                    onChange={(e) => setPasscodeInput(e.target.value)}
                                    placeholder="Enter passcode (default: techcure2026)"
                                    className={`w-full px-4 py-3 rounded-xl bg-secondary/60 border text-sm font-mono focus:outline-none transition-all ${
                                        passcodeError ? 'border-red-500 ring-1 ring-red-500' : 'border-border focus:border-primary'
                                    }`}
                                    autoFocus
                                />
                                {passcodeError && (
                                    <p className="text-xs text-red-400 font-mono mt-1.5">Incorrect passcode. Try 'techcure2026'</p>
                                )}
                            </div>

                            <Button type="submit" variant="primary" className="w-full h-11">
                                <Unlock size={16} className="mr-2" />
                                <span>Unlock Control Panel</span>
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-28 pb-24 min-h-screen">
            <SEOHead
                title="System Admin & Content Management"
                description="Administrative portal for managing Techcure engineering articles, case studies, and live platform dispatches."
            />

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Admin Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border mb-8 shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                            <LayoutDashboard size={22} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-head font-bold text-foreground">Content Management Console</h1>
                                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold">
                                    LIVE SESSION
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground font-mono mt-0.5">
                                Manage articles, publish teardowns, and sync production schemas
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button onClick={handleStartNew} variant="primary" size="sm" className="gap-1.5">
                            <Plus size={14} />
                            <span>New Article</span>
                        </Button>
                        <Button onClick={handleLogout} variant="outline" size="sm" className="gap-1.5 text-muted-foreground hover:text-red-400">
                            <LogOut size={14} />
                            <span>Lock</span>
                        </Button>
                    </div>
                </div>

                {/* Save Feedback Banner */}
                {saveSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} />
                            <span>Article saved successfully! Changes are instantly active on /blog.</span>
                        </div>
                        <a href="/blog" target="_blank" rel="noopener noreferrer" className="underline font-semibold flex items-center gap-1">
                            <span>View Blog</span>
                            <ExternalLink size={12} />
                        </a>
                    </motion.div>
                )}

                {/* Navigation Tabs */}
                <div className="flex items-center gap-2 border-b border-border/80 pb-4 mb-8">
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                            activeTab === 'posts'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        <FileText size={14} />
                        <span>All Dispatches ({posts.length})</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('editor')}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                            activeTab === 'editor'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        <Edit3 size={14} />
                        <span>{editingSlug ? `Editing: ${editingSlug}` : 'Visual Markdown Editor'}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('sync')}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                            activeTab === 'sync'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                    >
                        <Download size={14} />
                        <span>Git Export &amp; Backup</span>
                    </button>
                </div>

                {/* TAB 1: POSTS LISTING */}
                {activeTab === 'posts' && (
                    <div className="space-y-4">
                        <div className="grid gap-4">
                            {posts.map((post) => (
                                <Card key={post.id} className="p-5 bg-card/60 backdrop-blur-md border-border/80 hover:border-border transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-1.5 max-w-3xl">
                                            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                                                <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold">
                                                    {post.category}
                                                </span>
                                                {post.featured && (
                                                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                                                        <Sparkles size={11} /> Featured
                                                    </span>
                                                )}
                                                <span className="text-muted-foreground">{post.date}</span>
                                                <span className="text-muted-foreground">•</span>
                                                <span className="text-emerald-400">{post.readTime}</span>
                                            </div>

                                            <h3 className="text-lg font-head font-bold text-foreground">
                                                {post.title}
                                            </h3>

                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                {post.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <a
                                                href={`/blog/${post.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors border border-border"
                                                title="View Live Article"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                            <button
                                                onClick={() => handleEditPost(post)}
                                                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors border border-border"
                                                title="Edit Article"
                                                type="button"
                                            >
                                                <Edit3 size={14} />
                                            </button>
                                            <button
                                                onClick={() => handleDeletePost(post.slug)}
                                                className="p-2 rounded-xl bg-secondary/60 hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors border border-border"
                                                title="Delete Article"
                                                type="button"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 2: VISUAL MARKDOWN EDITOR */}
                {activeTab === 'editor' && (
                    <form onSubmit={handleSavePost} className="space-y-8">
                        {/* Meta Settings Card */}
                        <Card className="p-6 bg-card/60 backdrop-blur-xl border-border">
                            <h3 className="text-sm font-bold font-head text-foreground mb-4 uppercase tracking-wider text-primary">
                                Article Metadata &amp; SEO Configuration
                            </h3>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-xs font-mono text-muted-foreground">Article Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleFormChange}
                                        placeholder="e.g. Mastering React 19 for Enterprise Architecture"
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-sm font-head font-bold focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-muted-foreground">URL Slug (techcurehq.com/blog/slug)</label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleFormChange}
                                        placeholder="mastering-react-19-architecture"
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-xs font-mono focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-muted-foreground">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-xs font-mono focus:outline-none focus:border-primary"
                                    >
                                        {BLOG_CATEGORIES.filter(c => c !== 'All').map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-muted-foreground">Author Profile</label>
                                    <select
                                        name="authorId"
                                        value={formData.authorId}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-xs font-mono focus:outline-none focus:border-primary"
                                    >
                                        <option value="ved">Ved Prakash Pandey (Founder &amp; Lead Architect)</option>
                                        <option value="yogesh">Yogesh Pathak (CMO &amp; Growth Strategist)</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-muted-foreground">Cover Image Path</label>
                                    <select
                                        name="coverImage"
                                        value={formData.coverImage}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-xs font-mono focus:outline-none focus:border-primary"
                                    >
                                        <option value="/previews/mathsheet.png">/previews/mathsheet.png</option>
                                        <option value="/previews/inkleaf.png">/previews/inkleaf.png</option>
                                        <option value="/previews/wicom.png">/previews/wicom.png</option>
                                        <option value="/previews/goshuttles.png">/previews/goshuttles.png</option>
                                        <option value="/previews/rentflow.png">/previews/rentflow.png</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-xs font-mono text-muted-foreground">SEO Description &amp; Summary (Max 160 chars)</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleFormChange}
                                        rows={2}
                                        placeholder="Brief summary for Google Search Console and OpenGraph scrapers..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-xs leading-relaxed focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-xs font-mono text-muted-foreground">Tags (Comma-separated)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleFormChange}
                                        placeholder="React 19, Next.js, WebAssembly, Security"
                                        className="w-full px-4 py-2 rounded-xl bg-secondary/60 border border-border text-xs font-mono focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="flex items-center gap-2 md:col-span-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="featured-check"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleFormChange}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary border-border"
                                    />
                                    <label htmlFor="featured-check" className="text-xs font-mono text-foreground cursor-pointer">
                                        Feature as Primary Hero Article on /blog
                                    </label>
                                </div>
                            </div>
                        </Card>

                        {/* Split-Pane Markdown Editor & Live Preview */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Editor Pane */}
                            <Card className="p-6 bg-card/60 backdrop-blur-xl border-border flex flex-col h-[650px]">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80 text-xs font-mono text-muted-foreground">
                                    <span>MARKDOWN SOURCE EDITOR</span>
                                    <span>{formData.content.trim().split(/\s+/).length} words</span>
                                </div>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleFormChange}
                                    placeholder="Write your markdown article here..."
                                    className="flex-1 w-full p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm leading-relaxed border border-border focus:outline-none focus:border-primary resize-none selection:bg-primary/30"
                                />
                            </Card>

                            {/* Live Preview Pane */}
                            <Card className="p-6 bg-card/60 backdrop-blur-xl border-border flex flex-col h-[650px] overflow-hidden">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80 text-xs font-mono text-primary font-semibold">
                                    <span>LIVE RENDER PREVIEW</span>
                                    <span>{formData.readTime}</span>
                                </div>
                                <div className="flex-1 overflow-y-auto pr-2 prose prose-invert max-w-none">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={previewMarkdownComponents}
                                    >
                                        {formData.content}
                                    </ReactMarkdown>
                                </div>
                            </Card>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                            <Button type="button" onClick={() => setActiveTab('posts')} variant="outline">
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary" className="gap-1.5 px-8">
                                <Save size={16} />
                                <span>{editingSlug ? 'Update Article' : 'Publish Article'}</span>
                            </Button>
                        </div>
                    </form>
                )}

                {/* TAB 3: GIT EXPORT & BACKUP */}
                {activeTab === 'sync' && (
                    <Card className="p-8 bg-card/60 backdrop-blur-xl border-border max-w-3xl mx-auto space-y-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                                <Download size={13} />
                                <span>GIT CODE SYNC</span>
                            </div>
                            <h3 className="text-xl font-head font-bold text-foreground">Export Articles to `src/data/blogData.js`</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                When you create or update articles in this browser admin console, they are saved instantly to your local browser storage. To permanently commit these articles to your Git repository, click the button below to copy the complete data code.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-secondary/80 border border-border text-xs font-mono space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Generated Code ({posts.length} articles)</span>
                                <Button onClick={handleExportCode} variant="primary" size="sm" className="gap-1.5">
                                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                                </Button>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                            <span className="text-muted-foreground">Reset browser storage to default seed articles:</span>
                            <Button onClick={handleResetDefaults} variant="outline" size="sm" className="text-red-400 hover:bg-red-500/10">
                                <RotateCcw size={13} className="mr-1.5" />
                                <span>Reset Defaults</span>
                            </Button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Admin;
