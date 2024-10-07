/* eslint-disable react/prop-types */
import { useState } from "react";
import "./VerPlantios.css";

function VerPlantios({ plantiosVenda }) {
  const [plantioTipo, setPlantioTipo] = useState("");
  const [agricultor, setAgricultor] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <div className="verPlantios">
      <div className="filtro-btn">
        <div>
          <label htmlFor="tipoPlantio">Tipo de Plantio:</label>
          <select
            id="tipoPlantio"
            value={plantioTipo}
            onChange={(e) => setPlantioTipo(e.target.value)}
          >
            <option>Todos</option>
            {/* Implementar opções para filtrar por tipo de plantio */}
            {plantiosVenda.map((plantios, index) => {
              return (
                <option key={index} value={plantios}>
                  {plantios.plantio}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="agricultor">Agricultor</label>
          <input
            id="agricultor"
            type="text"
            value={agricultor}
            onChange={(e) => setAgricultor(e.target.target)}
            placeholder="Nome"
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="preço/kg ou l"
            required
          />
        </div>
      </div>
      {/* Implementar lógica para listar os plantios */}
      <div className="plantiosVenda">
        {plantiosVenda.map((vendedor, index) => {
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
                  <td>{vendedor.quantidade}</td>
                </tr>
                <tr>
                  <th>Preço: </th>
                  <td>{vendedor.preco}</td>
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
        })}
      </div>
    </div>
  );
}

export default VerPlantios;
