import { BLOG_POSTS as INITIAL_POSTS, BLOG_AUTHORS } from '../data/blogData';

const STORAGE_KEY = 'techcure_blog_posts';

export function getStoredPosts() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (err) {
        console.error('Error reading stored posts', err);
    }
    return INITIAL_POSTS;
}

export function saveStoredPosts(posts) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        window.dispatchEvent(new Event('techcure_blog_updated'));
    } catch (err) {
        console.error('Error saving posts to storage', err);
    }
}

export function createPost(newPostData) {
    const posts = getStoredPosts();
    const slug = newPostData.slug || newPostData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    const newPost = {
        id: slug,
        slug,
        title: newPostData.title || 'Untitled Post',
        subtitle: newPostData.subtitle || '',
        description: newPostData.description || '',
        category: newPostData.category || 'Architecture',
        readTime: newPostData.readTime || '5 min read',
        date: newPostData.date || new Date().toISOString().split('T')[0],
        author: newPostData.authorId && BLOG_AUTHORS[newPostData.authorId] 
            ? BLOG_AUTHORS[newPostData.authorId] 
            : BLOG_AUTHORS.ved,
        coverImage: newPostData.coverImage || '/previews/mathsheet.png',
        tags: Array.isArray(newPostData.tags) 
            ? newPostData.tags 
            : (newPostData.tags || '').split(',').map(t => t.trim()).filter(Boolean),
        featured: Boolean(newPostData.featured),
        content: newPostData.content || '## Heading\n\nStart writing markdown here...'
    };

    const updated = [newPost, ...posts];
    saveStoredPosts(updated);
    return newPost;
}

export function updatePost(slug, updatedFields) {
    const posts = getStoredPosts();
    const index = posts.findIndex(p => p.slug === slug || p.id === slug);
    if (index === -1) return null;

    const existing = posts[index];
    const updated = {
        ...existing,
        ...updatedFields,
        tags: Array.isArray(updatedFields.tags) 
            ? updatedFields.tags 
            : (updatedFields.tags || '').split(',').map(t => t.trim()).filter(Boolean)
    };

    posts[index] = updated;
    saveStoredPosts(posts);
    return updated;
}

export function deletePost(slug) {
    const posts = getStoredPosts();
    const filtered = posts.filter(p => p.slug !== slug && p.id !== slug);
    saveStoredPosts(filtered);
    return filtered;
}

export function resetPostsToDefault() {
    saveStoredPosts(INITIAL_POSTS);
    return INITIAL_POSTS;
}
