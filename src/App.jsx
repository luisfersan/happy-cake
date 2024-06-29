
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
