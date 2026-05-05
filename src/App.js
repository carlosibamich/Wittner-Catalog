import { Routes, Route, useLocation } from 'react-router-dom';
import PageWrapper from './pages/page-wrapper/PageWrapper';

import Navigation from './routes/navigation/Navigation';
import EntryRoom from './routes/entry-room/EntryRoom';
import MainRoom from './routes/main-room/MainRoom';
import AlcoveRoom from './routes/alcove-room/AlcoveRoom';
import StairwellRoom from './routes/stairwell-room/StairwellRoom';
import GreenRoom from './routes/green-room/GreenRoom';
import Catalog from './routes/catalog/Catalog';


const App = () => {
  return (
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
  );
};

export default App;
