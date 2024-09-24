import { useEffect, useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CadastroLavoura from "./CadastroLavoura";
import DadosSolo from "./DadosSolo";
import PlantiosExistentes from "./PlantiosExistentes";

function Monitoramento() {
  const [initialized, setInitialized] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!initialized) {
      navigate("cadastro-lavoura"); // Redireciona apenas na primeira carga
      setInitialized(true); // Marca como inicializado
    }
  }, [initialized, navigate]);

  return (
    <div>
      <h1>Monitoramento</h1>

      {/* Menu de funcionalidades para navegar dentro de Monitoramento */}
      <nav>
        <button onClick={() => navigate("/dashboard/monitoramento/cadastro-lavoura")}>
          Cadastro de Lavoura
        </button>
        <button onClick={() => navigate("/dashboard/monitoramento/dados-solo")}>Dados do Solo</button>
        <button onClick={() => navigate("/dashboard/monitoramento/plantios-existentes")}>
          Plantios Existentes
        </button>
      </nav>

      {/* Conteúdo dinâmico das funcionalidades */}
      <Routes>
        <Route path="cadastro-lavoura" element={<CadastroLavoura />} />
        <Route path="dados-solo" element={<DadosSolo />} />
        <Route path="plantios-existentes" element={<PlantiosExistentes />} />
      </Routes>
    </div>
  );
}

export default Monitoramento;
