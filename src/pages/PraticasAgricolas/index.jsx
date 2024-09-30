import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import PlantiosRecomendados from "./PlantiosRecomendados";
import CadastrarPlantios from "./CadastrarPlantios";
import "./PraticasAgricolas.css";

function PraticasAgricolas() {
  const [initialized, setInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!initialized) {
      navigate("plantios-recomendados"); // Redireciona apenas na primeira carga
      setInitialized(true); // Marca como inicializado
    }
  }, [initialized, navigate]);

  return (
    <div className="plantio_wrapper">
      <div className="praticas_agricolas">
        {/* Menu de funcionalidades para navegar dentro de Práticas Agrícolas */}
        <nav className="group-btn">
          <NavLink
            className={({ isActive }) =>
              [isActive ? "activeLink" : "disabledLink"].join(" ")
            }
            to={"plantios-recomendados"}
          >
            Plantios Recomendados
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              [isActive ? "activeLink" : "disabledLink"].join(" ")
            }
            to={"cadastrar-plantios"}
          >
            Cadastrar Plantios
          </NavLink>
        </nav>

        {/* Conteúdo dinâmico das funcionalidades */}
          <Routes>
            <Route
              path="plantios-recomendados"
              element={<PlantiosRecomendados />}
            />
            <Route path="cadastrar-plantios" element={<CadastrarPlantios />} />
          </Routes>
      </div>
    </div>
  );
}

export default PraticasAgricolas;
