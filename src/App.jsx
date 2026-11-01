import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MentorsPage from './pages/MentorsPage';

const isFileProtocol = typeof window !== 'undefined' && (window.location.protocol === 'file:' || !window.location.host);
const RouterComponent = isFileProtocol ? HashRouter : BrowserRouter;

export function App() {
  return (
    <RouterComponent>
      <ScrollToTop />
      <div className="min-h-screen text-navy font-sans antialiased selection:bg-plum selection:text-white flex flex-col justify-between">
        {/* Top Sticky Announcement & Nav */}
        <div>
          <AnnouncementBar />
          <Navbar />
        </div>

        {/* Dynamic Route Content */}
        <main id="main-content" className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentors" element={<MentorsPage />} />
          </Routes>
        </main>

        {/* Institutional Footer */}
        <Footer />
      </div>
    </RouterComponent>
  );
}

export default App;
