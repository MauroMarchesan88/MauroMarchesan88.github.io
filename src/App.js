import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout';
// import Provider from './Provider';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;