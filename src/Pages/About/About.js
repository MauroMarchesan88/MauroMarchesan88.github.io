import React from 'react';
import Sidebar from '../../Components/Sidebar';
// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';
import './index.scss';

function About() {
  return (
    <div className='about'>
      <Sidebar />
      <div className='projects'>
        <div className='project1'>
          <button type='button'>
            <a href="https://trybe-wallet-mauro.netlify.app/" target="_blank" rel="noreferrer">Live</a>
          </button>
          <button type='button'>
            <a href='https://github.com/MauroMarchesan88/Projeto-TrybeWallet' target="_blank" rel="noreferrer">Code</a>
          </button>
        </div>
        <div className='project2'>
          <button type='button'>
            <a href="https://fighting-game-mauromarchesan.netlify.app/" target="_blank" rel="noreferrer">Live</a>
          </button>
          <button type='button'>
            <a href='https://github.com/MauroMarchesan88/Fight-Game' target="_blank" rel="noreferrer">Code</a>
          </button>
        </div>
        <div className='project3'>
          <a href="https://fighting-game-mauromarchesan.netlify.app/">Fight Game</a>
        </div>
        <div className='project4'>
          <a href="https://fighting-game-mauromarchesan.netlify.app/">Fight Game</a>
        </div>
      </div>
    </div>
  )
}

export default About;