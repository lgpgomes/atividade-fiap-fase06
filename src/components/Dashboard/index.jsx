// import { useState} from "react";
import { Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Sidebar from "../Sidebar";
import Monitoramento from "../../pages/Monitoramento";
import PraticasAgricolas from "../../pages/PraticasAgricolas";
import Mercado from "../../pages/Mercado";
import PlantiosRecomendados from "../../pages/PraticasAgricolas/PlantiosRecomendados";
import CadastrarPlantios from "../../pages/PraticasAgricolas/CadastrarPlantios";
import "./Dashboard.css";

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
          <Route
            path="/"
            element={<Navigate to="/dashboard/monitoramento" />}
          />
          <Route path="monitoramento" element={<Monitoramento />} />
          <Route path="praticas-agricolas" element={<PraticasAgricolas />}>
            <Route
              index
              element={
                <Navigate to="/dashboard/praticas-agricolas/plantios-recomendados" />
              }
            />
            <Route
              path="plantios-recomendados"
              element={
                <PlantiosRecomendados onEscolher={handleEscolherPlantio} />
              }
            />
            <Route
              path="cadastrar-plantios/:plantio"
              element={<CadastrarPlantios />}
            />
          </Route>
          <Route path="mercado/*" element={<Mercado />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
