/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação simulada
    if (email && password) {
      onLogin(); // Chama a função passada via props
      navigate("/"); // Redireciona para o Dashboard
    }
  };

  return (
    <div className="content">
      <div className="container-wrapper">
        <div className="container">
          <div className="login_wrapper">
            <div className="login">
              <form onSubmit={handleSubmit} className="login-background">
                <h2>Login</h2>
                <div className="login-inputs">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    required
                  />
                </div>
                <div className="links">
                  <a href="cadastro.html">Criar uma conta</a>
                </div>
                <div>
                  <button id="btn_login" className="btn" type="submit">
                    Entrar
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

export default Login;
