import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cadastro.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular cadastro
    if (email && password) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login"); // Redireciona para o Login após o cadastro
    }
  };

  return (
    <div className="content">
      <div className="container-wrapper">
        <div className="container">
          <div className="cadastro_wrapper">
            <div className="cadastro">
              <form onSubmit={handleSubmit} className="cadastro-background">
                <h2>cadastro</h2>
                <div className="cadastro-inputs">
                  <input
                    type="text"
                    id="nome"                    
                    name="nome"
                    placeholder="Nome"
                    required
                  />

                  <select name="username" id="username">
                    <option>Selecione um tipo de usuário</option>
                    <option>Agricultor</option>
                    <option>Comerciante</option>
                  </select>

                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />

                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    required
                  />
                  
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="repeatPassword"
                    name="password"
                    placeholder="Confirme a senha"
                    required
                  />
                </div>
                <div className="links">
                  <Link to="/login">Já tem uma conta ?</Link>
                </div>
                <div>
                  <button id="btn_login" className="btn" type="submit">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
