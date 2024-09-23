import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular cadastro
    if (email && password) {
      alert('Cadastro realizado com sucesso!');
      navigate('/login'); // Redireciona para o Login após o cadastro
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/login">Faça login</a>
      </p>
    </div>
  );
}

export default Cadastro;
