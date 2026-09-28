import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/web-development' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Products', path: '/products' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const menuVariants = {
        closed: { opacity: 0, pointerEvents: "none" },
        open: { opacity: 1, pointerEvents: "auto" }
    };

    const itemVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.08, duration: 0.3 } })
    };

    const isItemActive = (item, isActive) => {
        if (item.label === 'Services' && location.pathname.startsWith('/services')) {
            return true;
        }
        return isActive;
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3' : 'py-4 bg-transparent'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Left: Brand Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-head font-bold tracking-tighter flex items-center gap-1 text-foreground">
                            TECHCURE<span className="w-2 h-2 rounded-full bg-primary"></span>
                        </Link>
                    </div>

                    {/* Center: Centered Navigation Links Pill */}
                    <div className="hidden lg:flex items-center justify-center gap-1 p-1 rounded-full bg-secondary/80 border border-border/80 backdrop-blur-md shadow-sm">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => {
                                    const active = isItemActive(item, isActive);
                                    return `px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                                        active 
                                            ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                                            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                                    }`;
                                }}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ThemeToggle />
                        <Link to="/contact">
                            <Button variant="primary" size="sm" className="rounded-full px-5 font-bold shadow-sm">
                                Start Project
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(true)}
                            aria-label="Open navigation menu"
                            aria-expanded={isOpen}
                            className="text-foreground p-2 rounded-xl border border-border bg-secondary/60"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl flex flex-col justify-center items-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full border border-border"
                        >
                            <X size={28} />
                        </button>

                        <div className="flex flex-col gap-6 text-center">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    custom={i}
                                    variants={itemVariants}
                                >
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => {
                                            const active = isItemActive(item, isActive);
                                            return `text-2xl sm:text-3xl font-head font-bold transition-colors ${
                                                active ? 'text-primary font-bold' : 'text-foreground hover:text-primary'
                                            }`;
                                        }}
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}

                            <motion.div
                                custom={NAV_ITEMS.length}
                                variants={itemVariants}
                                className="pt-4"
                            >
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button size="lg" className="rounded-full px-8 shadow-xl font-bold">
                                        Start Your Project
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
