import { useEffect, useState } from "react";
import "./VerPlantios.css";
import { useGlobalContext } from "../../../services/Context";

function VerPlantios() {
  const { vendedores, plantioRecomendados } = useGlobalContext();

  const [filtros, setFiltros] = useState({
    nome: "",
    plantio: "",
    preco: "",
  });

  const limparFiltros = () => {
    setFiltros({
      nome: "",
      plantio: "",
      preco: "",
    });
  };

  // Função para manipular alterações nos filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  // Filtra os vendedores com base nos critérios
  const vendedoresFiltrados = vendedores.filter((vendedor) => {
    const filtroNome =
      filtros.nome === "" ||
      vendedor.nome.toLowerCase().includes(filtros.nome.toLowerCase());
    const filtroPlantio =
      filtros.plantio === "" ||
      vendedor.plantio.toLowerCase().includes(filtros.plantio.toLowerCase());
    const filtroPreco =
      filtros.preco === "" || vendedor.preco <= parseFloat(filtros.preco);
    console.log(filtroNome && filtroPreco && filtroPlantio);
    return filtroNome && filtroPlantio && filtroPreco;
  });

  useEffect(() => {
    console.log(vendedoresFiltrados);
  }, [vendedoresFiltrados]);

  return (
    <div className="verPlantios">
      <div className="filtro-btn">
        <div>
          <label htmlFor="tipoPlantio">Tipo de Plantio:</label>
          <select
            id="plantio"
            name="plantio"
            value={filtros.plantio}
            onChange={handleFilterChange}
          >
            <option value={""}>Todos</option>
            {/* Implementar opções para filtrar por tipo de plantio */}
            {plantioRecomendados.map((plantios, index) => {
              return (
                <option key={index} value={plantios.plantio}>
                  {plantios.plantio}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="agricultor">Agricultor</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={filtros.nome}
            onChange={handleFilterChange}
            placeholder="Nome"
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            name="preco"
            type="number"
            min={0}
            value={filtros.preco}
            onChange={handleFilterChange}
            placeholder="Preço máximo"
            required
          />
        </div>
        <div>
          <button onClick={limparFiltros}>Limpar</button>
        </div>
      </div>
      {/* Implementar lógica para listar os plantios */}
      <div className="plantiosVenda">
        {vendedoresFiltrados.length > 0 ? (
          vendedoresFiltrados.map((vendedor, index) => {
            return (
              <div key={index} className="plantio-card">
                <table className="plantio-item">
                  <th colSpan={4} className="main">
                    {vendedor.nome}
                  </th>
                  <tr>
                    <th>Plantio: </th>
                    <td>{vendedor.plantio}</td>
                  </tr>
                  <tr>
                    <th>Quantidade: </th>
                    <td>{vendedor.quantidade}kg</td>
                  </tr>
                  <tr>
                    <th>Preço: </th>
                    <td>
                      {parseFloat(vendedor.preco).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      /kg
                    </td>
                  </tr>
                  <tr>
                    <th>Contato: </th>
                    <td>{vendedor.telefone}</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="main">
                      {vendedor.contato}
                    </td>
                  </tr>
                </table>
              </div>
            );
          })
        ) : (
          <p>Nenhum plantio encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default VerPlantios;
