import React from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';
import gamePhoto from '../../assets/images/game.png';
import plaHldrBG from '../../assets/images/placeholderBG.jpg';
import shoppingCart from '../../assets/images/shopping-cart.png';
import WalletPhoto from '../../assets/images/Wallet.png';
import './index.scss';

function Projects() {
  return (
    <div className='Projects'>
      <div className='projects'>

        <div className='project1'>
          <div className='project-wrapper'>
            <img src={plaHldrBG} alt='screenFromGame' />
            <label htmlFor='project1'>
              <a href="https://trybe-wallet-mauro.netlify.app/" id='project1' target="_blank" rel="noreferrer">Live</a>
            </label>
            <label htmlFor='project1b'>
              <a href='https://github.com/MauroMarchesan88/Projeto-TrybeWallet' id='project1b' target="_blank" rel="noreferrer">Code</a>
            </label>
          </div>
        </div>

        <div className='project2'>
          <div className='project-wrapper'>
            <img src={shoppingCart} alt='screenFromGame' />
            <label htmlFor='project2'>
              <a href="https://shopping-cart-mauro.netlify.app//" id='project2' target="_blank" rel="noreferrer">Live</a>
            </label>
            <label htmlFor='project2b'>
              <a href='https://github.com/MauroMarchesan88/Projeto-Shopping-Cart' id='project2b' target="_blank" rel="noreferrer">Code</a>
            </label>
          </div>
        </div>

        <div className='project3'>
          <div className='project-wrapper'>
            <img src={gamePhoto} alt='screenFromGame' />
            <label htmlFor='project3'>
              <a href="https://fighting-game-mauromarchesan.netlify.app/" id='project3' target="_blank" rel="noreferrer">Live</a>
            </label>
            <label htmlFor='project3b'>
              <a href='https://github.com/MauroMarchesan88/Fight-Game' id='project3b' target="_blank" rel="noreferrer">Code</a>
            </label>
          </div>
        </div>

        <div className='project4'>
          <div className='project-wrapper'>
            <img src={WalletPhoto} alt='screenFromWallet' />
            <label htmlFor='project4'>
              <a href="https://trybe-wallet-mauro.netlify.app/" id='project4' target="_blank" rel="noreferrer">Live</a>
            </label>
            <label htmlFor='project4b'>
              <a href='https://github.com/MauroMarchesan88/Projeto-TrybeWallet' id='project4b' target="_blank" rel="noreferrer">Code</a>
            </label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;