import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CensorshipTimeline from './pages/CensorshipTimeline';
import EducationalResources from './pages/EducationalResources';
import HistoryOfCensorship from './pages/HistoryOfCensorship';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/ThemeProvider';
import MainLayout from '@/layouts/MainLayout';
import TioJoePage from './pages/TioJoePage';
import PrisoesPoliticasPage from './pages/PrisoesPoliticasPage';
import UsaidHubPage from './pages/UsaidHubPage';
import UsaidPage from './pages/UsaidPage';
import OngsPage from './pages/OngsPage';
import GeneseCensuraPage from './pages/GeneseCensuraPage';
import OfacPage from './pages/OfacPage';
import CensuradosPage from './pages/CensuradosPage';
import GalleryPage from './pages/GalleryPage';
import IeepaPage from './pages/IeepaPage';
import DossiePage from './pages/DossiePage'; // Import the new DossiePage
import HistoryOfCensorship from './pages/HistoryOfCensorship';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<CensorshipTimeline />} />
            <Route path="/educational-resources" element={<EducationalResources />} />
            <Route path="/history-of-censorship" element={<HistoryOfCensorship />} />
            <Route path="/tio-joe" element={<TioJoePage />} />
            <Route path="/prisoes-politicas" element={<PrisoesPoliticasPage />} />
            <Route path="/usaid" element={<UsaidHubPage />} />
            <Route path="/usaid-details" element={<UsaidPage />} />
            <Route path="/ongs" element={<OngsPage />} />
            <Route path="/genese-censura" element={<GeneseCensuraPage />} />
            <Route path="/ofac" element={<OfacPage />} />
            <Route path="/ieepa" element={<IeepaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/censurados" element={<CensuradosPage />} />
            <Route path="/usaid-tse" element={<UsaidTseTimelinePage />} />
            <Route path="/history-of-censorship" element={<HistoryOfCensorship />} />            
            <Route path="/dossie" element={<DossiePage />} /> {/* New route for DossiePage */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;