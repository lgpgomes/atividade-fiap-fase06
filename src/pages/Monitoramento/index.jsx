import "./Monitoramento.css";
import { Outlet, NavLink } from "react-router-dom";

function Monitoramento() {
  return (
    <div className="monitoramento">
      <nav className="menu-monitoramento">
        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"cadastrar-lavoura"}
        >
          Cadastrar Lavoura
        </NavLink>

        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"dados-do-solo"}
        >
          Dados do Solo
        </NavLink>

        <NavLink
          className={({ isActive }) => [isActive ? "on" : ""].join(" ")}
          to={"plantios-existentes"}
        >
          Plantios Existentes
        </NavLink>
      </nav>

      <div className="monitoramento-conteudo">
        <Outlet />
      </div>
    </div>
  );
}

export default Monitoramento;
