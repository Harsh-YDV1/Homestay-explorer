import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import RolesPage from './pages/RolesPage';
import SearchPage from './pages/SearchPage';
import AttractionsPage from './pages/AttractionsPage';
import MapPage from './pages/MapPage';
import LoginPage from './pages/LoginPage';
import ListingDetails from './pages/ListingDetails';
import HostProfile from './pages/HostProfile';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/host/:id" element={<HostProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
