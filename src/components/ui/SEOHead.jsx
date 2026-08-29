import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://techcurehq.com';
const DEFAULT_TITLE = 'Techcure | High-Velocity Web Architecture & Digital Dominance';
const DEFAULT_DESC = 'Techcure engineers high-velocity web experiences, cross-platform applications, and cyber-secure digital architectures for high-growth businesses.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEOHead = ({
    title,
    description = DEFAULT_DESC,
    canonicalPath,
    ogType = 'website',
    ogImage = DEFAULT_IMAGE,
    keywords = 'Techcure, Web Development, Next.js, React, Cyber Security, Digital Architecture, PropTech, Telecom SaaS, Vedic Computing',
    schema = null
}) => {
    const location = useLocation();
    const currentPath = canonicalPath || location.pathname;
    const cleanPath = currentPath === '/' ? '' : currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
    const fullCanonicalUrl = `${SITE_URL}${cleanPath}`;
    
    // Prevent double branding (e.g. "Title | Techcure | Techcure")
    const formattedTitle = title
        ? title.includes('Techcure')
            ? title
            : `${title} | Techcure`
        : DEFAULT_TITLE;

    useEffect(() => {
        // Update Title
        document.title = formattedTitle;

        // Helper to set or create meta tag
        const setMetaTag = (attrName, attrVal, content) => {
            if (!content) return;
            let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrVal);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Canonical Link
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
        setMetaTag('name', 'author', 'Techcure Engineering Team');

        // Open Graph Tags
        setMetaTag('property', 'og:title', formattedTitle);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', fullCanonicalUrl);
        setMetaTag('property', 'og:type', ogType);
        setMetaTag('property', 'og:image', ogImage);
        setMetaTag('property', 'og:image:secure_url', ogImage);
        setMetaTag('property', 'og:image:type', 'image/png');
        setMetaTag('property', 'og:image:width', '1200');
        setMetaTag('property', 'og:image:height', '630');
        setMetaTag('property', 'og:image:alt', formattedTitle);
        setMetaTag('property', 'og:site_name', 'Techcure');
        setMetaTag('property', 'og:locale', 'en_US');

        // Twitter Card Tags
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:site', '@techcure');
        setMetaTag('name', 'twitter:creator', '@techcure');
        setMetaTag('name', 'twitter:title', formattedTitle);
        setMetaTag('name', 'twitter:description', description);
        setMetaTag('name', 'twitter:image', ogImage);
        setMetaTag('name', 'twitter:image:alt', formattedTitle);
        setMetaTag('name', 'twitter:url', fullCanonicalUrl);

        // Dynamic JSON-LD Schema Injection
        const SCRIPT_ID = 'techcure-dynamic-ldjson';
        let scriptElement = document.getElementById(SCRIPT_ID);

        if (schema) {
            if (!scriptElement) {
                scriptElement = document.createElement('script');
                scriptElement.id = SCRIPT_ID;
                scriptElement.type = 'application/ld+json';
                document.head.appendChild(scriptElement);
            }
            scriptElement.textContent = JSON.stringify(schema, null, 2);
        } else if (scriptElement) {
            scriptElement.remove();
        }

        return () => {
            const dynamicScript = document.getElementById(SCRIPT_ID);
            if (dynamicScript) dynamicScript.remove();
        };

    }, [formattedTitle, description, fullCanonicalUrl, ogType, ogImage, keywords, schema]);

    return null;
};

export default SEOHead;
