import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import MenuLink from "../MenuLink";
import { useContext } from "react";
import { UserContext } from "../../services/Context";

function Sidebar() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(UserContext);
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <div className="sidebar">
      <h2>AgroTech</h2>
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
