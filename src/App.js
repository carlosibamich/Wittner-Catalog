import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageWrapper from './pages/page-wrapper/PageWrapper';
import Navigation from './routes/navigation/Navigation';
import EntryRoom from './routes/entry-room/EntryRoom';
import MainRoom from './routes/main-room/MainRoom';
import AlcoveRoom from './routes/alcove-room/AlcoveRoom';
import StairwellRoom from './routes/stairwell-room/StairwellRoom';
import GreenRoom from './routes/green-room/GreenRoom';
import Catalog from './routes/catalog/Catalog';
import OrientationPrompt from './components/orientation-prompt/OrientationPrompt';
import ClickInfo from './components/click-info/ClickInfo';
import Footer from './components/footer/Footer';

import './App.scss';


const App = () => {
  const location = useLocation();
  const isCatalogPage = location.pathname === '/catalog-list';

  const [ isTabletViewport, setIsTabletViewport ] = useState(false);

  const conditionalPages = [ '/', '/entry', '/alcove', '/stairwell', '/green-room'];
  const isTargetPage = conditionalPages.includes(location.pathname);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 620px) and (max-width: 2000px)');
    setIsTabletViewport(mediaQuery.matches);

    const handleResize = (e) => setIsTabletViewport(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // ---------- Fullscreen Toggle button logic ---------- //
  const [isFullscreen, setIsFullscreen] = useState(false);
  const appContainerRef = useRef(null);

  const toggleFullscreen = async () => {
    const element = appContainerRef.current;
    if (!element) return;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        try { await element.requestFullscreen(); } catch (err) { }
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        try { await document.exitFullscreen(); } catch (err) { }
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // -------- Show footer conditionally at bottom of Gallery pages -------- // 
  const showFooter = !isTargetPage || isTabletViewport;

  return (
    <OrientationPrompt>
    {/* <div className={`app-container ${isCatalogPage ? 'vertical-layout' : 'horizontal-layout'}`}> */}
    <div 
      ref={appContainerRef}
      className={`app-container ${isCatalogPage ? 'vertical-layout' : 'horizontal-layout'} ${isFullscreen ? 'faux-fullscreen-active' : ''}`}
    >
      {/* <main className="main-content" id="app-viewport-wrapper"> */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigation isFullscreen={isFullscreen} onToggleFullscreen={toggleFullscreen} />}>
            <Route index element={<PageWrapper><MainRoom /></PageWrapper>} />
            <Route path="entry" element={<PageWrapper><EntryRoom /></PageWrapper>} />
            <Route path="alcove" element={<PageWrapper><AlcoveRoom /></PageWrapper>} />
            <Route path="stairwell" element={<PageWrapper><StairwellRoom /></PageWrapper>} />
            <Route path="green-room" element={<PageWrapper><GreenRoom /></PageWrapper>} />
            <Route path="catalog-list" element={<PageWrapper><Catalog /></PageWrapper>} />
          </Route>
        </Routes>
        {!isCatalogPage && <ClickInfo />}
        {showFooter && <Footer />}
      </main>
    </div>
    </OrientationPrompt>
  );
};

export default App;
