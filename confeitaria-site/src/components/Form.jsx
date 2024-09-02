import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        pedido: ''
    });
    
    const [errors, setErrors] = useState({}); // Para armazenar erros de validação

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.nome.trim()) {
            newErrors.nome = 'O nome é obrigatório.';
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = 'O telefone é obrigatório.';
        } else if (!/^\d{10,11}$/.test(formData.telefone)) {
            newErrors.telefone = 'O telefone deve conter 10 ou 11 dígitos.';
        }

        if (!formData.pedido.trim()) {
            newErrors.pedido = 'O pedido é obrigatório.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Define os erros encontrados
        } else {
            console.log(formData); // Exibe os dados no console

            // Limpa os campos do formulário
            setFormData({
                nome: '',
                telefone: '',
                pedido: ''
            });

            setErrors({}); // Limpa os erros
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                {errors.nome && <p className="error">{errors.nome}</p>} {/* Exibe a mensagem de erro */}
            </div>
            <div>
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />
                {errors.telefone && <p className="error">{errors.telefone}</p>} {/* Exibe a mensagem de erro */}
            </div>
            <div>
                <label htmlFor="pedido">Pedido:</label>
                <input
                    type='text'
                    id="pedido"
                    name="pedido"
                    value={formData.pedido}
                    onChange={handleChange}
                />
                {errors.pedido && <p className="error">{errors.pedido}</p>} {/* Exibe a mensagem de erro */}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
