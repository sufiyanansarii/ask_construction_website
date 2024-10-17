import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Gallerypage from './Pages/Gallerypage/Gallerypage';
import Pagespage from './Pages/Pagespage/Pagespage';
import Contactpage from './Pages/Contactpage/Contactpage';
import Aboutpage from './Pages/Aboutpage/Aboutpage'

function App() {
  const [loading, setLoading] = useState(true); // Preloader state
  useEffect(() => {
    // Automatically hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const hidePreloader = () => {
    setLoading(false); // Manually hide preloader
  };

  return (
    <div className="App">
      
      <BrowserRouter>   
      <Routes>
      <Route path='/' element={loading ? (
        <Preloader hidePreloader={hidePreloader} />
      ) : (
        <Homepage/>
      )} />
          <Route path="/gallery" element={<Gallerypage />} />
          <Route path="/pages" element={<Pagespage />} />
          <Route path="/contact" element={<Contactpage/>} />
          <Route path="/about" element={<Aboutpage/>} />



           </Routes>
           </BrowserRouter>
    </div>

  );
}

export default App;
