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
        <p>Here are some examples of different things i've developed, there's a lot more that i've made over at github (30+repos and growing), but i've selected these as examples of different final products.
          There's an E-Commerce example, as a Todo-List with a twist, a game and a Fullstack app (this one was "hurt" removing free tier so, might take some time to be deployed again). All of them where coded using Airbnb Eslint.
        </p>
      <div className='projects'>
        <div className='project1'>
          <div className='project-wrapper'>
            <img src={plaHldrBG} alt='screenFromNew' />
            <label htmlFor='project1'>
              {/* <a href="https://trybe-wallet-mauro.netlify.app/" id='project1' target="_blank" rel="noreferrer">Live</a> */}
            </label>
            <label htmlFor='project1b'>
              {/* <a href='https://github.com/MauroMarchesan88/Projeto-TrybeWallet' id='project1b' target="_blank" rel="noreferrer">Code</a> */}
            </label>
            <div className='projectDesc'>
              <p>Fullstack Project Example:
                In maintenance, deploy in Heroku needed to move.
              </p>
            </div>
          </div>
        </div>

        <div className='project2'>
          <div className='project-wrapper'>
            <img src={shoppingCart} alt='screenFromCart' />
            <label htmlFor='project2'>
              <a href="https://shopping-cart-mauro.netlify.app//" id='project2' target="_blank" rel="noreferrer">Live</a>
            </label>
            <label htmlFor='project2b'>
              <a href='https://github.com/MauroMarchesan88/Projeto-Shopping-Cart' id='project2b' target="_blank" rel="noreferrer">Code</a>
            </label>
            <div className='projectDesc'>
              <p>E-Commerce Project Example:
                This project was made with pure HTML, CSS and JS. All the information is fetched from an external API and used to render a shopping cart with prices and calculations for total price.
              </p>
            </div>
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
            <div className='projectDesc'>
              <p>Side-Project:
                This game was a side project that i used to learn more about canvas, it's a simple game with animations nothing fancy but it was fun, easy to develop and helped me better understand how to render animations.
              </p>
            </div>
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
            <div className='projectDesc'>
              <p>Todo with a twist!:
                I was tired of Todo Lists and this one was a nice example with some extra, it fetchs exchange information from an external API to add on top of the basic Todo-List.
                I used React and was learning about Redux, so it has Redux for state management.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;