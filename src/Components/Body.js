import React from "react";
import photo from "../img/photo.jpg";
// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';

function Body() {
  return (
    <>
      <h1 id="Top">Portfolio Mauro Marchesan</h1>
      <div className="photo">
        <img id="imagem" src={photo} alt="Foto de perfil Linkedin" ></img>
      </div>
      <div className="Descricao">
        Ola!
        Sou <b>Mauro</b>, nascido em Neuquén, Argentina e atualmente moro em Cabo Frio, Rio de Janeiro.
        Este sera meu Portfolio Web com os trabalhos que realizarei durante o curso de Dev na <a href="https://www.betrybe.com">Trybe!</a>
        <div className="Ferramentas">
          <h3><em>Nesta aventura precisarei de:</em></h3>
          <ul>
            <li>Esforço.</li>
            <li>Dedicação.</li>
            <li>Apoio.</li>
            <li>Pratica, <strong>muita pratica.</strong></li>
          </ul>
        </div>
      </div>
      <h3 id="Habilidades">Minhas habilidades <em>aventureiras</em>: </h3>
      <ol>
        <li>Empatia.</li>
        <li>Resiliencia.</li>
        <li>Vastas experiencias de vida, mudanças e adaptações em novas culturas e ambientes, desde fabricas ate atendimento ao cliente, trabalhando e coordinando equipes de distintas idades e culturas. </li>
        <li>Facilidade para captar teorias e capacidade para trabalhar com abstração em distintos niveis.</li>
        <li>Inglés fluido, Espanhol nativo e Portugués, gosto muito de idiomas e culturas diferentes</li>
        <li>Sou uma pessoa criada em um ambiente com muita sabedoria a dispor, conheço e gosto de Exactas (Engenharia) porém nunca deixei de lado a parte emocional/social das interações com colegas.</li>
      </ol>
    </>
  )
}
export default Body;