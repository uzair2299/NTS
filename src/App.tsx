import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Maintenance from './pages/Maintenance';
import Renovation from './pages/Renovation';
import Careers from './pages/Careers';
import SupportCenter from './pages/SupportCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top helper on route change (except for hash targets)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-brand-light text-brand-slate antialiased">
        {/* Sticky navigation header */}
        <Navbar />

        {/* Main page content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/renovation" element={<Renovation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/support" element={<SupportCenter />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer info index and subscription */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

