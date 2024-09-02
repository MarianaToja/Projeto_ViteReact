import React from 'react';

const Card = ({ doce }) => {
    return (
        <div className="card">
            <img src={doce.imagem} alt={doce.nome} />
            <h3>{doce.nome}</h3>
            <p>{doce.descricao}</p>
            <p><strong>Preço:</strong> R$ {doce.preco}</p>
        </div>
    );
};

export default Card;
