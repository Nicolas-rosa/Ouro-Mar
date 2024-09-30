import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Seu arquivo CSS principal



function App() {
  return (
    <BrowserRouter>
       {/* Exibe Loading enquanto a página carrega */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;