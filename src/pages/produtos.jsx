import React from 'react';
import Card from './Components/Header';  // Corrigido o caminho de importação
import '../index.css'; // Importe o CSS global se necessár
import { Link } from 'react-router-dom';

const Produtos = () => {
  return (
    <div>
      <header>
        <Card /> 
      </header>
 
      </div>
  );
};

export default Produtos;