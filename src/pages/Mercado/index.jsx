import { NavLink, Outlet } from "react-router-dom";
import "./Mercado.css"

function Mercado() {
  return (
    <div className="mercado">
      {/* Menu de funcionalidades para navegar dentro de Mercado */}
      <nav className="menu-mercado">
        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"vender-plantio"}
        >
          Vender Plantio
        </NavLink>

        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"ver-plantios"}
        >
          Ver Plantio
        </NavLink>
      </nav>

      {/* Conteúdo dinâmico das funcionalidades */}

      <div className="mercado-conteudo">
        <Outlet />
      </div>
    </div>
  );
}

export default Mercado;
