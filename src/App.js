import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout/Layout';
// import Provider from './Provider';
import Sidebar from './Components/Sidebar/index';


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;