import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Card from '../ui/Card';

const BlogCard = ({ post, featured = false }) => {
    if (featured) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <Card className="p-0 overflow-hidden bg-card/60 backdrop-blur-xl border-primary/30 shadow-[0_0_40px_-15px_rgba(var(--primary-rgb),0.25)] hover:border-primary/60 transition-all duration-300">
                    <div className="grid md:grid-cols-12 gap-0">
                        <div className="md:col-span-6 relative overflow-hidden bg-secondary/50 min-h-[260px] md:min-h-full">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-transparent to-transparent opacity-80" />
                            <div className="absolute top-4 left-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                                    <Sparkles size={12} />
                                    Featured Architecture Deep Dive
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-muted-foreground">
                                    <span className="px-2.5 py-0.5 rounded-md bg-secondary text-primary font-semibold border border-border">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1 text-emerald-400">
                                        <Clock size={12} /> {post.readTime}
                                    </span>
                                </div>

                                <Link to={`/blog/${post.slug}`} className="group">
                                    <h3 className="text-2xl sm:text-3xl font-head font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-sans">
                                    {post.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-border/60">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-9 h-9 rounded-full object-cover bg-secondary border border-border"
                                    />
                                    <div>
                                        <p className="text-xs font-bold text-foreground font-head">{post.author.name}</p>
                                        <p className="text-[10px] font-mono text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:translate-x-1 transition-transform"
                                >
                                    <span>Read Teardown</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <Card className="h-full flex flex-col p-0 overflow-hidden bg-card/60 backdrop-blur-xl border-border/80 hover:border-primary/50 transition-all duration-300 group shadow-md hover:shadow-xl">
                <div className="relative h-48 overflow-hidden bg-secondary/40">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md text-primary text-[11px] font-mono font-semibold border border-white/10">
                            {post.category}
                        </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur-md text-muted-foreground text-[10px] font-mono flex items-center gap-1">
                            <Clock size={10} className="text-emerald-400" /> {post.readTime}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground mb-3">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                            <h4 className="text-lg font-head font-bold text-foreground group-hover:text-primary transition-colors mb-2.5 line-clamp-2 leading-snug">
                                {post.title}
                            </h4>
                        </Link>

                        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                            {post.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2.5">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-7 h-7 rounded-full object-cover bg-secondary border border-border"
                            />
                            <span className="text-xs font-mono font-medium text-foreground">{post.author.name}</span>
                        </div>

                        <Link
                            to={`/blog/${post.slug}`}
                            className="text-primary text-xs font-mono font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                            <span>Read</span>
                            <ArrowRight size={13} />
                        </Link>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default BlogCard;
