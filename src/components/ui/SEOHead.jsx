import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://techcure.in';
const DEFAULT_TITLE = 'Techcure | High-Velocity Web Architecture & Digital Dominance';
const DEFAULT_DESC = 'Techcure engineers high-velocity web experiences, cross-platform applications, and cyber-secure digital architectures for high-growth businesses.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEOHead = ({
    title,
    description = DEFAULT_DESC,
    canonicalPath,
    ogType = 'website',
    ogImage = DEFAULT_IMAGE,
    keywords = 'Techcure, Web Development, Next.js, React, Cyber Security, Digital Architecture, PropTech, Telecom SaaS'
}) => {
    const location = useLocation();
    const currentPath = canonicalPath || location.pathname;
    const fullCanonicalUrl = `${SITE_URL}${currentPath === '/' ? '' : currentPath}`;
    const pageTitle = title ? `${title} | Techcure` : DEFAULT_TITLE;

    useEffect(() => {
        // Update Title
        document.title = pageTitle;

        // Helper to set or create meta tag
        const setMetaTag = (attrName, attrVal, content) => {
            let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrVal);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper to set canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', fullCanonicalUrl);

        // Standard Meta Tags
        setMetaTag('name', 'description', description);
        setMetaTag('name', 'keywords', keywords);
        setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Open Graph Tags
        setMetaTag('property', 'og:title', pageTitle);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', fullCanonicalUrl);
        setMetaTag('property', 'og:type', ogType);
        setMetaTag('property', 'og:image', ogImage);
        setMetaTag('property', 'og:site_name', 'Techcure');
        setMetaTag('property', 'og:locale', 'en_US');

        // Twitter Card Tags
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', pageTitle);
        setMetaTag('name', 'twitter:description', description);
        setMetaTag('name', 'twitter:image', ogImage);
        setMetaTag('name', 'twitter:site', '@techcure');
        setMetaTag('name', 'twitter:creator', '@techcure');

    }, [pageTitle, description, fullCanonicalUrl, ogType, ogImage, keywords]);

    return null;
};

export default SEOHead;
