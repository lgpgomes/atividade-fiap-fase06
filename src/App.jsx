import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./components/Dashboard";
import { useGlobalContext } from "./services/Context";

function App() {

  const {isAuthenticated} = useGlobalContext();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? <Dashboard /> : <Login />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
