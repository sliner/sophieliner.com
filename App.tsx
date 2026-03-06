import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Radio from './pages/Radio';
import Film from './pages/Film';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Mix from './pages/Mix';
import Paintings from './pages/Paintings';
import PaintingDetail from './pages/PaintingDetail';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/paintings/:id" element={<PaintingDetail />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/film" element={<Film />} />
        <Route path="/mix" element={<Mix />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;