import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Pricing } from '../../pages/Pricing';
import { Layout } from '../Layout';
import { Create} from "../../pages/Create";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"        element={<Home />} />
            <Route path="/create" element={<Create />} />
          <Route path="/about-us"    element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Router>
  );
}
