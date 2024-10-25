import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cadastro.css";
import { useGlobalContext } from "../../services/Context";

function Cadastro() {
  const navigate = useNavigate();
  const { setUsuario } = useGlobalContext();

  const [formData, setFormData] = useState({
    nome: "",
    tipoUsuario: "",
    email: "",
    telefone: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!"); // Alerta de sucesso
    setUsuario(formData); // Atualiza o contexto
    navigate("/login"); // Redireciona para o Login após o cadastro
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
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />

                  <select
                    name="tipoUsuario"
                    id="tipoUsuario"
                    value={formData.tipoUsuario}
                    onChange={handleInputChange}
                  >
                    <option>Selecione um tipo de usuário</option>
                    <option>Agricultor</option>
                    <option>Comerciante</option>
                  </select>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    placeholder="E-mail"
                    required
                  />

                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="Telefone"
                    required
                  />

                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    value={formData.senha}
                    onChange={handleInputChange}
                    placeholder="Senha"
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
