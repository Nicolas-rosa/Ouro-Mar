// src/pages/Components/Header.jsx
import React from "react";
import '../../index.css';
import { Link } from 'react-router-dom'; 

// ... (código do componente Card) ...

export const Card = () => { // Exportação nomeada
  // ... (código do componente) ...

  return (
    <div className="flex flex-col border-b-emerald-900 bg-gradient-to-br  bg-[#1d3b1dcb] shadow-lg " >
      <div className="text-center mb-1 bg-gradient-to-r  bg-[#cccc15] bg-clip-text text-transparent text-3xl font-black">
        <h1 className="text-[#cccc15] drop-shadow-[0_0_5px_#cccc15],  drop-shadow-[0_0_15px_#cccc15], drop-shadow-[0_0_20px_#cccc15] mb-[5vh] mt-[5vh]">Ateliê Ouro Mar</h1> {/* Corrigido 'class' para 'className' */}
      </div> 
      <img src="src/imagens/Logo_principal-removebg-preview.png" alt="" className="h-auto w-[13vw] flex object-center z-0 justify-center ml-[20vw] mb-[10vh] drop-shadow-[0_0_5px_#ffff766f],  drop-shadow-[0_0_15px_#ffff766f], drop-shadow-[0_0_20px_#ffff766f] absolute"/>
      <div className=" border-b-green-900 justify-center py-3 flex gap-7 shadow-x4 rounded-full mt-1">
        <Link to="/" className="group relative px-4 cursor-pointer  "> {/* Usando Link para navegação */}
          {/* ... (Resto do SVG do Início) ... */}
          </Link>
        <Link to="/contato" className="group relative px-4 cursor-pointer"> {/* Usando Link para navegação */}
          {/* ... (Resto do SVG do Contato) ... */}
          </Link>
        <Link to="/produtos" className="group relative px-4 cursor-pointer"> {/* Usando Link para navegação */}
          {/* ... (Resto do SVG dos Produtos) ... */}
          </Link>
        <Link to="/servicos" className="group relative px-4 cursor-pointer"> {/* Usando Link para navegação */}
          {/* ... (Resto do SVG dos Serviços) ... */}
          </Link>
      </div>
    </div>
  );
};

export default Card; 