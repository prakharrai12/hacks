import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import config from '../config/hackathonConfig';
import RegisterButton from './RegisterButton';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isMentors = location.pathname === '/mentors';
  const currentActive = isMentors ? 'mentors' : activeSection;

  const navLinks = [
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Themes', href: '/#themes', id: 'themes' },
    { label: 'Schedule', href: '/#schedule', id: 'schedule' },
    { label: 'Prizes', href: '/#prizes', id: 'prizes' },
    { label: 'Rules', href: '/#rules', id: 'rules' },
    { label: 'Mentors', href: '/mentors', isRoute: true, id: 'mentors' },
    { label: 'Venue', href: '/#venue', id: 'venue' },
    { label: 'Community', href: '/#community', id: 'community' },
    { label: 'FAQ', href: '/#faq', id: 'faq' },
  ];

  // Scroll spy to highlight the currently viewed section on homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionIds = ['about', 'themes', 'schedule', 'prizes', 'rules', 'venue', 'community', 'faq'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Before reaching the first section
      if (scrollY < 200) {
        setActiveSection('');
        return;
      }

      // If near page bottom, highlight FAQ
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 120) {
        setActiveSection('faq');
        return;
      }

      const scrollPosition = scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => setMobileMenuOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    // Allow opening in new tab via Ctrl/Cmd or middle click
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }

    if (link.isRoute) {
      e.preventDefault();
      navigate(link.href);
      return;
    }

    const hash = link.href.includes('#') ? `#${link.href.split('#')[1]}` : '';

    if (location.pathname === '/') {
      e.preventDefault();
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', hash);
          setActiveSection(link.id);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate(link.href);
    }
  };

  return (
    <>
      <header className="fixed top-9 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-line h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-plum rounded transition-transform duration-200 active:scale-95"
          >
            <img
              src={config.brand.logoUrl}
              alt="NARI Logo"
              width="120"
              height="40"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentActive === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`nav-link-animated text-[13px] cursor-pointer ${
                    isActive ? 'active' : 'text-navy hover:text-plum font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <RegisterButton className="px-4.5 py-2 text-xs font-semibold uppercase tracking-wider" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2.5 min-w-[42px] min-h-[42px] rounded-lg text-navy hover:text-plum hover:bg-lavender/60 border border-line transition-all active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-plum"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-150" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-150" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop (Rendered outside <header> so backdrop-blur does not break position: fixed) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay for closing on click-outside */}
          <div
            className="md:hidden fixed inset-0 top-[100px] bg-navy/20 backdrop-blur-xs z-30 transition-opacity duration-200"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Drawer Panel */}
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="md:hidden fixed inset-x-0 top-[100px] bottom-0 z-40 bg-white border-b border-line flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl transition-all duration-200"
          >
            <nav className="flex flex-col divide-y divide-line px-6 py-4" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => {
                const isActive = currentActive === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between py-3.5 text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-plum bg-lavender/40 px-3 rounded-lg'
                        : 'text-navy hover:text-plum active:bg-lavender/30'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`text-sm font-normal ${isActive ? 'text-plum' : 'text-muted/40'}`} aria-hidden="true">
                      →
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="p-6 border-t border-line bg-lavender/30 mt-auto">
              <RegisterButton
                className="w-full py-3.5 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
