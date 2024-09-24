import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Monitoramento from '../../pages/Monitoramento';
import PraticasAgricolas from '../../pages/PraticasAgricolas';
import Mercado from '../../pages/Mercado';
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard" style={{display: "flex", flexDirection: "row"}}>
      <Sidebar />
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard/monitoramento/*" />} />
          <Route path="monitoramento/*" element={<Monitoramento />} />
          <Route path="praticas-agricolas/*" element={<PraticasAgricolas />} />
          <Route path="mercado/*" element={<Mercado />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
