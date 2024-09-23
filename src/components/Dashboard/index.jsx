import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Monitoramento from './Monitoramento';
import PraticasAgricolas from './PraticasAgricolas';
import Mercado from './Mercado';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="monitoramento/*" element={<Monitoramento />} />
          <Route path="praticas-agricolas/*" element={<PraticasAgricolas />} />
          <Route path="mercado/*" element={<Mercado />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
