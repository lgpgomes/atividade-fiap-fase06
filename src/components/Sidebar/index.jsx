import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Limpar o estado de autenticação aqui se necessário
        // Exemplo: localStorage.removeItem('token');
        
        navigate('/login'); // Redireciona para a página de login
      };
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#fff",
        height: "100vh",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h2>Menu</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/monitoramento">Monitoramento</Link>
        </li>
        <li>
          <Link to="/praticas-agricolas">Práticas Agrícolas</Link>
        </li>
        <li>
          <Link to="/mercado">Mercado</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Sidebar;
