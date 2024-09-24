import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const onLogin = () => {
    // Atualizar o estado de autenticação
    setIsAuthenticated(true);
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? <Dashboard /> : <Login onLogin={onLogin} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
