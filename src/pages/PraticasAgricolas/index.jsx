import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import PlantiosRecomendados from "./PlantiosRecomendados";
import CadastrarPlantios from "./CadastrarPlantios";

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
    <div>
      <h1>Práticas Agrícolas</h1>

      {/* Menu de funcionalidades para navegar dentro de Práticas Agrícolas */}
      <nav>
        <button onClick={() => navigate("plantios-recomendados")}>
          Plantios Recomendados
        </button>
        <button onClick={() => navigate("cadastrar-plantios")}>
          Cadastrar Plantios
        </button>
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
  );
}

export default PraticasAgricolas;
