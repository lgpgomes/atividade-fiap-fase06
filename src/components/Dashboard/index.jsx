// import { useState} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Monitoramento from "../../pages/Monitoramento";
import PraticasAgricolas from "../../pages/PraticasAgricolas";
import Mercado from "../../pages/Mercado";
import PlantiosRecomendados from "../../pages/PraticasAgricolas/PlantiosRecomendados";
import CadastrarPlantios from "../../pages/PraticasAgricolas/CadastrarPlantios";
import "./Dashboard.css";
import CadastroLavoura from "../../pages/Monitoramento/CadastroLavoura";
import DadosSolo from "../../pages/Monitoramento/DadosSolo";
import PlantiosExistentes from "../../pages/Monitoramento/PlantiosExistentes";
import VenderPlantio from "../../pages/Mercado/VenderPlantio";
import VerPlantios from "../../pages/Mercado/VerPlantios";

function Dashboard() {
  const navigator = useNavigate();
  // const [plantioSelecionado, setPlantioSelecionado] = useState("");

  const handleEscolherPlantio = (plantio) => {
    // Redireciona para a página de cadastro do plantio escolhido
    navigator(`/dashboard/praticas-agricolas/cadastrar-plantios/${plantio}`);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Routes>
          {/* Redirecionamento inicial para Monitoramento */}
          <Route
            path="/"
            element={<Navigate to="/dashboard/monitoramento" />}
          />

          {/* Monitoramento */}
          <Route path="monitoramento" element={<Monitoramento />}>
            {/* Rota de redirecionamento */}
            <Route
              index
              element={
                <Navigate to="/dashboard/monitoramento/cadastrar-lavoura" />
              }
            />
            {/* Rotas de Monitoramento */}
            <Route path="cadastrar-lavoura" element={<CadastroLavoura />} />
            <Route path="dados-do-solo" element={<DadosSolo />} />
            <Route
              path="plantios-existentes"
              element={<PlantiosExistentes />}
            />
          </Route>

          {/* Práticas Agricolas */}
          <Route path="praticas-agricolas" element={<PraticasAgricolas />}>
            {/* Rota de redirecionamento */}
            <Route
              index
              element={
                <Navigate to="/dashboard/praticas-agricolas/plantios-recomendados" />
              }
            />
            {/* Rotas de Práticas Agricolas */}
            <Route
              path="plantios-recomendados"
              element={
                <PlantiosRecomendados onEscolher={handleEscolherPlantio} />
              }
            />
            <Route path="cadastrar-plantios" element={<CadastrarPlantios />} />
            <Route
              path="cadastrar-plantios/:plantio"
              element={<CadastrarPlantios />}
            />
          </Route>

          {/* Mercado */}
          <Route path="mercado" element={<Mercado />}>
            {/* Rota de redirecionamento */}
            <Route
              index
              element={
                <Navigate to="/dashboard/mercado/vender-plantio" />
              }
            />
            {/* Rotas de Mercado */}
            <Route path="vender-plantio" element={<VenderPlantio />} />
            <Route path="ver-plantios" element={<VerPlantios />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
