import { NavLink, Outlet } from "react-router-dom";
import "./PraticasAgricolas.css";

function PraticasAgricolas() {
  return (
    <div className="praticas-agricolas">
      <nav className="menu-praticas-agricolas">
        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"plantios-recomendados"}
        >
          Plantios Recomendados
        </NavLink>

        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"cadastrar-plantios"}
        >
          Cadastrar plantios
        </NavLink>
      </nav>

      <div className="praticas-agricolas-conteudo">
        <Outlet />
      </div>
    </div>
  );
}

export default PraticasAgricolas;
