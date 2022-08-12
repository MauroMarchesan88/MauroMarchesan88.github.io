import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout/Layout';
import Projects from './Pages/Projects/Projects';
// import Provider from './Provider';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;