import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout/Layout';
import Projects from './Pages/Projects/Projects';
import Thanks from './Pages/Thanks/Thanks';


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;