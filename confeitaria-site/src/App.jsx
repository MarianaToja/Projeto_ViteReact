import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

// Dados dos doces
const doces = [
  {
    nome: 'Pão de Mel',
    descricao: 'Um delicioso pão de mel de doce de leite com cobertura de chocolate.',
    preco: '8,00',
    imagem: 'https://www.carolcalazans.com.br/wp-content/uploads/2022/07/pao-de-mel.jpg'
  },
  {
    nome: 'Brigadeiro',
    descricao: 'Caixinha com 4 unidades. Sabores disponiveis: Tradicional, paçoca, ninho, morango e beijinho.',
    preco: '10,00',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9Pclp3xefz8yhdGzY4m4wVko9jdXMmSlGQ&s'
  },
  {
    nome: 'Bolo de Pote',
    descricao: 'Bolos de diversos sabores. Sabores disponiveis: Chocolate, red velvet, ninho com morango e doce de leite.',
    preco: '12,00',
    imagem: 'https://cdn.awsli.com.br/600x450/515/515184/produto/88785465/site-9-rixvrt.jpg'
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Nossos Doces</h2>
        <div className="cards-container">
          {doces.map((doce, index) => (
            <Card key={index} doce={doce} />
          ))}
        </div>
        <h2>Faça seu pedido!</h2>
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
