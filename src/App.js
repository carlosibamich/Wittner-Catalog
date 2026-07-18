import { useState, useEffect } from 'react';
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

  const showFooter = !isTargetPage || isTabletViewport;

  return (
    <OrientationPrompt>
    <div className={`app-container ${isCatalogPage ? 'vertical-layout' : 'horizontal-layout'}`} id="app-viewport-wrapper">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigation />}>
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
