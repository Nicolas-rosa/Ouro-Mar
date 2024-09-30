import React from "react";
import styled from "styled-components";
import './index.css';






//main011



//ajustar tamanho do glass
const Newcol = () => {
  return (
    <div className="mx-auto mt-32 first-letter:relative flex h-[40vh] w-[90vw] items-center justify-center rounded-[1.5em] border-[1px] border-[#21a85e] bg-[rgba(33,168,69,0.24)] p-[1.5em] text-lime-300">
      <div className="group absolute mt-14 left-1/2 top-[55.5vh]  flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#a7ffb0aa] bg-[#438f455c] backdrop-blur-[6px] duration-[500ms] hover:h-[40vh] hover:w-[90vw] hover:rounded-[1.5em] ">
        <svg
          className="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
          viewBox="0 0 48 48"
          fill="none"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path
              clipRule="evenodd"
              d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
              fillRule="evenodd"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h48v48H0z" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
        <div className="items-left duration-600 absolute left-0 bottom-10 top-0 flex h-[40vh] w-[90vw]  translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0 ">
          <div className="items-left flex flex-col justify-center ">
            <h1 className="text-[1.5em] font-bold leading-[0.8em]">Heading</h1>
            <p className="text-[0.9em] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              magni repudiandae tenetur odio
            </p>
          </div>

          <p className="cursor-pointer text-[0.7em] underline">learn more</p>
        </div>
      </div>
      <img src="" alt="" className="justify-center "/>
      <h1 className="text-center -mt-28 font-nunito text-[2em] font-black text-emerald-950">
        Nova Coleção Ouro Mar
      </h1>
    </div>
  );
};
//estilizar glass e editar as letras
const Meio = ({ texto, titulo }) => {
  return (
    <div className="justify-center mt-10 m-auto h-[85vh] w-[70vw]  rounded-[1.5em] border-[1px] border-[#249758] bg-[rgba(69,149,90,0.44)] text-pretty">
      <img
        className="float-left  w-96 ml-4 mt-3 rounded-full"
        src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <h1 className="justify-center text-center  text-[2em]">{titulo}</h1>
      <p className="">{texto}</p>
    </div>
  );
};




const Meio1 = ({ texto, titulo, imagemSrc }) => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto h-[70vh] w-[90vw] rounded-[1.5em] bg-gradient-to-r from-[#008080] to-[#2e8b57] text-white">
      <div className="flex flex-row">
        <img
          className="float-left w-64 ml-4 mt-3 rounded-full drop-shadow-lg"
          src={imagemSrc}
          alt=""
        />
        <div className="ml-8">
          <h1 className="text-center text-[2.5em] font-bold">{titulo}</h1>
          <p className="">{texto}</p>
        </div>
      </div>
    </div>
  );
};





import { useState } from "react";

const Meio2 = ({ texto, titulo, imagemSrc }) => {
  const [showDetails, setShowDetails] = useState(false);

  const fundo = {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Cor de fundo translúcida para glassmorphism
    borderRadius: "0.5em", // Redução do arredondamento
    backdropFilter: "blur(10px)", // Adição de filtro de desfoque para efeito glassmorphism
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Manutenção da sombra para efeito 3D
  };

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={fundo} className="w-[20vw] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out items-center place-self-center">
      <img className="w-full h-48 object-cover rounded-t-lg" src={imagemSrc} alt="" />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold">{titulo}</h2>
        <p className="text-gray-600">{texto}</p>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-emerald-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400" onClick={handleDetailsClick}>
            Learn More
          </button>
        </div>
        {showDetails && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            {/* Adicione aqui o conteúdo adicional a ser exibido */}
            <p>Aqui estão mais informações adicionais.</p>
          </div>
        )}
      </div>
    </div>
  );
};












//footer
//melhorar o glass
const Map = ()=> {
  return(
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.4653444432256!2d-35.18890668156541!3d-5.865368733626192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff3f056a3c5d%3A0xede03e489822d26!2sPraia%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1727394764472!5m2!1spt-BR!2sbr"
    width="400"
    height="250"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  />
  );
};





const Instagram = () => {
  return (
    <section className="flex justify-center items-center">
      <button
        href="instagram.com/atelie_ouro_mar"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="2 3 20 20"          
          strokeWidth={0}
          fill="currentColor"
          stroke="currentColor"
          
        >
          <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
        </svg>
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
          Instagram
        </span>
      </button>
    </section>
  );
};










const Whatsap = () => {
  return (
    <section className="flex justify-center items-center">
      <button
        href="https://uiverse.io/akshat-patel28/nervous-wombat-58"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#1ED760] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 64 64"
          strokeWidth={0}
          fill="currentColor"
          stroke="currentColor"
        >
       <path d="M 31.988281 2 C 15.453125 2 2 15.457031 2 32 C 2 38.199219 3.867188 44.121094 7.414063 49.160156 L 3.960938 59.453125 C 3.839844 59.808594 3.929688 60.207031 4.195313 60.472656 C 4.460938 60.742188 4.855469 60.839844 5.210938 60.722656 L 15.90625 57.308594 C 20.714844 60.378906 26.273438 62 32.011719 62 C 48.546875 62 62 48.542969 62 32 C 62 15.457031 48.546875 2 32.0625 2.003906 L 32.046875 2 C 32.027344 2 32.007813 2 31.988281 2 Z M 31.988281 4 L 32.011719 4 C 47.445313 4 60 16.5625 60 32 C 60 47.4375 47.445313 60 32.011719 60 C 26.503906 60 21.175781 58.402344 16.609375 55.375 C 16.441406 55.269531 16.25 55.210938 16.058594 55.210938 C 15.953125 55.210938 15.851563 55.226563 15.75 55.257813 L 6.484375 58.21875 L 9.46875 49.316406 C 9.574219 49.007813 9.519531 48.667969 9.328125 48.40625 C 5.84375 43.621094 4 37.945313 4 32 C 4 16.5625 16.554688 4 31.988281 4 Z M 33.207031 7.949219 C 30.933594 7.875 28.652344 8.128906 26.425781 8.71875 C 25.890625 8.855469 25.574219 9.402344 25.714844 9.9375 C 25.851563 10.472656 26.394531 10.792969 26.933594 10.652344 C 31.011719 9.582031 35.292969 9.71875 39.3125 11.054688 C 40.351563 11.398438 41.363281 11.824219 42.328125 12.3125 C 42.476563 12.386719 42.632813 12.421875 42.78125 12.421875 C 43.148438 12.421875 43.5 12.21875 43.675781 11.871094 C 43.925781 11.378906 43.730469 10.777344 43.234375 10.527344 C 42.183594 9.992188 41.078125 9.53125 39.945313 9.15625 C 37.75 8.425781 35.484375 8.023438 33.207031 7.949219 Z M 46.640625 12.988281 C 46.382813 13.015625 46.140625 13.140625 45.96875 13.355469 C 45.621094 13.785156 45.6875 14.414063 46.121094 14.761719 C 46.734375 15.257813 47.328125 15.792969 47.886719 16.351563 C 48.078125 16.546875 48.335938 16.644531 48.59375 16.644531 C 48.847656 16.644531 49.105469 16.550781 49.296875 16.355469 C 49.691406 15.964844 49.691406 15.332031 49.300781 14.941406 C 48.695313 14.332031 48.046875 13.746094 47.375 13.203125 C 47.160156 13.03125 46.894531 12.960938 46.640625 12.988281 Z M 22.300781 17 C 20.929688 17 19.707031 17.449219 18.878906 18.296875 C 18.023438 19.167969 16.015625 21.207031 16.015625 25.21875 C 16.015625 28.632813 18.035156 31.90625 19.285156 33.621094 L 19.421875 33.8125 C 23.191406 39.273438 27.859375 43.359375 32.570313 45.308594 C 36.742188 47.039063 38.976563 47.5 40.515625 47.5 C 41.179688 47.5 41.710938 47.414063 42.21875 47.308594 C 44.46875 46.820313 47.269531 45.152344 48.027344 43.015625 C 48.65625 41.234375 48.8125 39.332031 48.390625 38.597656 C 48.09375 38.074219 47.589844 37.832031 46.949219 37.523438 L 46.53125 37.316406 C 46.484375 37.296875 42.117188 35.121094 41.28125 34.828125 C 40.09375 34.378906 38.992188 34.71875 38.265625 35.746094 L 37.9375 36.203125 C 37.339844 37.046875 36.769531 37.839844 36.328125 38.320313 C 36.191406 38.464844 35.894531 38.484375 35.621094 38.371094 L 35.375 38.269531 C 34.394531 37.875 32.359375 37.050781 29.839844 34.808594 C 27.816406 33.007813 26.371094 30.730469 25.84375 29.839844 C 25.800781 29.765625 25.789063 29.722656 25.78125 29.71875 C 25.808594 29.652344 25.941406 29.5 26.0625 29.359375 C 26.257813 29.109375 26.457031 28.902344 26.652344 28.699219 C 26.820313 28.515625 26.988281 28.335938 27.160156 28.136719 L 27.242188 28.046875 C 27.589844 27.644531 27.863281 27.328125 28.128906 26.753906 C 28.652344 25.746094 28.1875 24.785156 28.035156 24.46875 C 27.917969 24.214844 27.007813 22.007813 26.40625 20.546875 L 25.734375 18.921875 C 25.089844 17.382813 24.378906 17.078125 23.230469 17.03125 C 22.953125 17.015625 22.644531 17 22.300781 17 Z M 22.300781 19 C 22.601563 19 22.867188 19.015625 23.128906 19.03125 C 23.242188 19.035156 23.484375 19.042969 23.535156 19.066406 C 23.542969 19.070313 23.664063 19.160156 23.886719 19.6875 L 24.554688 21.308594 C 25.453125 23.488281 26.097656 25.050781 26.234375 25.332031 C 26.355469 25.585938 26.394531 25.757813 26.335938 25.875 C 26.167969 26.226563 26.039063 26.378906 25.730469 26.734375 L 25.644531 26.828125 C 25.496094 27.007813 25.34375 27.167969 25.195313 27.324219 C 24.964844 27.566406 24.738281 27.8125 24.5 28.101563 C 24.148438 28.515625 23.324219 29.484375 24.113281 30.847656 C 24.832031 32.0625 26.355469 34.382813 28.503906 36.300781 C 31.285156 38.777344 33.625 39.71875 34.625 40.125 L 34.847656 40.214844 C 35.917969 40.65625 37.070313 40.449219 37.789063 39.683594 C 38.324219 39.105469 38.929688 38.257813 39.566406 37.363281 L 39.890625 36.90625 C 40.097656 36.613281 40.242188 36.574219 40.601563 36.710938 C 41.164063 36.90625 44.386719 38.480469 45.632813 39.105469 L 46.078125 39.328125 C 46.285156 39.425781 46.53125 39.542969 46.621094 39.578125 C 46.660156 39.957031 46.609375 41.023438 46.140625 42.347656 C 45.667969 43.6875 43.515625 44.984375 41.800781 45.351563 C 40.777344 45.570313 39.226563 45.902344 33.339844 43.460938 C 28.976563 41.65625 24.621094 37.824219 21.066406 32.675781 C 20.976563 32.542969 20.914063 32.453125 20.855469 32.371094 C 19.792969 30.921875 18.015625 28.0625 18.015625 25.21875 C 18.015625 22.027344 19.5625 20.453125 20.375 19.625 C 20.75 19.238281 21.492188 19 22.300781 19 Z M 9.5625 30.90625 C 9.011719 30.875 8.539063 31.296875 8.507813 31.84375 C 8.472656 32.398438 8.890625 32.871094 9.445313 32.902344 L 11.511719 33.023438 C 11.53125 33.023438 11.550781 33.027344 11.574219 33.027344 C 12.097656 33.027344 12.539063 32.617188 12.566406 32.085938 C 12.601563 31.535156 12.183594 31.058594 11.628906 31.027344 Z M 12.144531 36.304688 C 12.019531 36.28125 11.882813 36.277344 11.75 36.308594 L 9.71875 36.722656 C 9.179688 36.832031 8.828125 37.363281 8.941406 37.90625 C 9.039063 38.378906 9.457031 38.703125 9.921875 38.703125 C 9.988281 38.703125 10.054688 38.695313 10.125 38.683594 L 12.152344 38.265625 C 12.691406 38.152344 13.039063 37.625 12.929688 37.082031 C 12.847656 36.675781 12.527344 36.378906 12.144531 36.304688 Z M 13.613281 41.265625 C 13.484375 41.277344 13.355469 41.308594 13.230469 41.371094 L 11.378906 42.300781 C 10.886719 42.546875 10.683594 43.148438 10.933594 43.640625 C 11.105469 43.992188 11.460938 44.195313 11.828125 44.195313 C 11.976563 44.195313 12.128906 44.160156 12.273438 44.089844 L 14.125 43.160156 C 14.621094 42.914063 14.820313 42.3125 14.574219 41.816406 C 14.386719 41.449219 14.003906 41.242188 13.613281 41.265625 Z M 16.695313 45.632813 C 16.441406 45.617188 16.179688 45.699219 15.972656 45.886719 L 14.421875 47.261719 C 14.011719 47.625 13.976563 48.257813 14.34375 48.671875 C 14.539063 48.894531 14.8125 49.007813 15.089844 49.007813 C 15.324219 49.007813 15.5625 48.925781 15.753906 48.753906 L 17.300781 47.378906 C 17.714844 47.011719 17.75 46.378906 17.386719 45.96875 C 17.203125 45.761719 16.949219 45.648438 16.695313 45.632813 Z M 20.804688 49.097656 C 20.421875 49.027344 20.015625 49.183594 19.785156 49.53125 L 18.648438 51.261719 C 18.34375 51.722656 18.472656 52.339844 18.933594 52.644531 C 19.101563 52.753906 19.292969 52.8125 19.484375 52.8125 C 19.808594 52.8125 20.125 52.652344 20.316406 52.359375 L 21.457031 50.628906 C 21.761719 50.167969 21.636719 49.550781 21.171875 49.246094 C 21.058594 49.171875 20.933594 49.121094 20.804688 49.097656 Z"></path> </svg>
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
          Whatsapp
        </span>
      </button>
    </section>
  );
};











const Contactfoo = () => {
  return(
    
    <div className="relative drop-shadow-xl mt-20 w-full h-80 overflow-hidden rounded-xl bg-[black]">
    <div className="absolute flex items-center justify-center flex-row gap-5  text-white z-[1]  rounded-xl inset-0.5 bg-[#204d2136] ">
    <h1 className="justify-start mr-4 text-[2.5rem] text-emerald-500">Entre em contato! <br /> Ou Nos Visite! </h1>  <Instagram/> <Whatsap/> <div className="ml-36"><Map/></div>
    </div>
    <div className="absolute  w-full h-80 bg-[#1d3b1d6a] blur-[50px] " />
  </div>
);
};


const Produtos = () =>{
  return(<Card/>);
};

export const Princip = () =>{
 
    return(  
    <>
    <section >
       
        <header>
         <Card/>
        </header>
       
            <Newcol/>
            <div className="mt-10 flex flex-row gap-4 justify-center center w-full ">
            <Meio2 imagemSrc={"//images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Título 1"} texto="Texto 1" style={{ width: "250px" }} />
            <Meio2 imagemSrc={"//images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Título 1"} texto="Texto 1" style={{ width: "250px" }} /> 
            <Meio2 imagemSrc={"//images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Título 3"} texto="Texto 3" />
            <Meio2 imagemSrc={"//images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Título 3"} texto="Texto 3" />


</div>

            <Meio  texto = "esse é o texto" titulo = "esse é o titulo"/>
            <Meio1 imagemSrc={"//images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      } titulo={"titulo"} texto="texto"/>
           
            <footer>
        <Contactfoo/>
        </footer>

        </section> </>);
};



