import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import VenderPlantio from "./VenderPlantio";
import VerPlantios from "./VerPlantios";

function Mercado() {
  const [initialized, setInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!initialized) {
      navigate("vender-plantio"); // Redireciona apenas na primeira carga
      setInitialized(true); // Marca como inicializado
    }
  }, [initialized, navigate]);

  return (
    <div>
      <h1>Mercado</h1>

      {/* Menu de funcionalidades para navegar dentro de Mercado */}
      <nav>
        <button onClick={() => navigate("vender-plantio")}>
          Vender Plantio
        </button>
        <button onClick={() => navigate("ver-plantios")}>Ver Plantios</button>
      </nav>

      {/* Conteúdo dinâmico das funcionalidades */}
      <Routes>
        <Route path="vender-plantio" element={<VenderPlantio />} />
        <Route path="ver-plantios" element={<VerPlantios />} />
      </Routes>
    </div>
  );
}

export default Mercado;
