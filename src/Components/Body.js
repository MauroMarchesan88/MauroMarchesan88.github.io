import React from "react";
import photo from "../img/photo.jpg";
// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';

function Body() {
  return (
    <>
      <h1 id="Top">Portfolio Mauro Marchesan</h1>
      <div className="midBody">
        <div className="photo">
          <img id="imagem" src={photo} alt="Foto de perfil Linkedin" ></img>
        </div>
        <div className="Ferramentas">
          <h3><em>Ferramentas e tecnologias que uso:</em></h3>
          <ul>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/528e232c728b497080cbf31d2a7e797caa81e402ff81643f79b2c2c395a29f17/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667">
              <img align="center" alt="JavaScript" height="30" width="40" src="https://camo.githubusercontent.com/528e232c728b497080cbf31d2a7e797caa81e402ff81643f79b2c2c395a29f17/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"></img>
              <img align="center" alt="Jest" height="40" width="50" src="https://camo.githubusercontent.com/fd37a0ed465d6e14411705324a0d21739377f54ab6d0ae146c68fca8777e16c7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6573742f6a6573742d706c61696e2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/626fb60c4c17c2cf2ad0e599efaa8ed691ede878ce1e94b85c0c401701716f8e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2d776f72646d61726b2e737667">
              <img align="center" alt="node" height="60" width="80" src="https://camo.githubusercontent.com/626fb60c4c17c2cf2ad0e599efaa8ed691ede878ce1e94b85c0c401701716f8e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2d776f72646d61726b2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/e84431cfbd9f7c44b1c20da1dde8ad407cbc31174844a428074d1e3b43faab8b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2d776f72646d61726b2e737667">
              <img align="center" alt="React" height="40" width="50" src="https://camo.githubusercontent.com/e84431cfbd9f7c44b1c20da1dde8ad407cbc31174844a428074d1e3b43faab8b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2d776f72646d61726b2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667">
              <img align="center" alt="Redux" height="40" width="50" src="https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/fc836983ed18b80caef906c8f1593bcfd4f5c8c587f51a911b1cb4d657a9588b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2d776f72646d61726b2e737667">
              <img align="center" alt="Docker" height="40" width="50" src="https://camo.githubusercontent.com/fc836983ed18b80caef906c8f1593bcfd4f5c8c587f51a911b1cb4d657a9588b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2d776f72646d61726b2e737667" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"></img>
            </a>
          </ul>
        </div>
      </div>
      <div className="Descricao">
        Ola!
        Sou <b>Mauro</b>, nascido em Neuquén, Argentina e atualmente moro em Cabo Frio, Rio de Janeiro.
        Este sera meu Portfolio Web com os trabalhos que realizarei durante o curso de Dev na <a href="https://www.betrybe.com">Trybe!</a>

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