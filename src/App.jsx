import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './components/ui/ThemeProvider';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import FreeApps from './pages/FreeApps';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import ContactPage from './pages/ContactPage';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import SeniorGrant from './pages/SeniorGrant';
import Admin from './pages/Admin';
import ServicePage from './pages/ServicePage';
import LocalLucknow from './pages/LocalLucknow';
import LocalAyodhya from './pages/LocalAyodhya';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen text-foreground font-body selection:bg-primary selection:text-primary-foreground relative bg-background">

          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/web-development-company-lucknow" element={<LocalLucknow />} />
              <Route path="/web-development-company-ayodhya" element={<LocalAyodhya />} />
              <Route path="/app-development-company-ayodhya" element={<LocalAyodhya />} />
              <Route path="/software-development-company-ayodhya" element={<LocalAyodhya />} />
              <Route path="/products" element={<Products />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/free-apps" element={<FreeApps />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-study/:slug" element={<CaseStudy />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/senior-grant" element={<SeniorGrant />} />
              <Route path="/senior-discount" element={<SeniorGrant />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
