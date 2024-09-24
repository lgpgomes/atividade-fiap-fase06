import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import MenuLink from "../MenuLink";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Limpar o estado de autenticação aqui se necessário
    // Exemplo: localStorage.removeItem('token');

    navigate("/login"); // Redireciona para a página de login
  };
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul className="menu-links">
        <MenuLink to="/dashboard/monitoramento">Monitoramento</MenuLink>
        <MenuLink to="/dashboard/praticas-agricolas">
          Práticas Agrícolas
        </MenuLink>
        <MenuLink to="/dashboard/mercado">Mercado</MenuLink>
      </ul>
      <button className="btn" onClick={handleLogout}>
        Sair        
      </button>
    </div>
  );
}

export default Sidebar;
