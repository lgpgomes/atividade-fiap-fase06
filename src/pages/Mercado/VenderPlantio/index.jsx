import { useState } from "react";
import { useGlobalContext } from "../../../services/Context";
import "./VenderPlantio.css";
import { useEffect } from "react";
function VenderPlantio() {
  const { plantioRecomendados, plantiosCadastrados, usuario, cadastrarVendedor, vendedores } =
    useGlobalContext();

  const [plantioVenda, setPlantioVenda] = useState({
    nome: usuario.nome,
    plantio: "",
    quantidade: 0,
    preco: 0,
    contato: usuario.email,
    telefone: usuario.telefone,
  });

  const handleInputChange = (e) => {
    setPlantioVenda({ ...plantioVenda, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantioVenda)
    if(plantioVenda.nome !== "" && plantioVenda.preco > 0 && plantioVenda.quantidade > 0) {
      cadastrarVendedor(plantioVenda)
    }
    alert(`Plantio colocado para venda com sucesso!`);
  };

  useEffect(() => {
    console.log("Vendedores: ", vendedores)
  }, [vendedores])
  

  return (
    <div className="cadastrarPlantio">
      <form onSubmit={handleSubmit}>
        <h2>Vender Plantio Excedente</h2>
        <div>
          <label htmlFor="tipoPlantio">Tipo de plantio</label>
          {usuario.tipoUsuario == "Comerciante" ? (
            <select
              name="plantio"
              id="plantio"
              value={plantioVenda.plantio}
              onChange={handleInputChange}
            >
              <option value="">Selecione:</option>
              {plantioRecomendados.map((plantio, index) => (
                <option key={index} value={plantio.plantio}>
                  {plantio.plantio}
                </option>
              ))}
            </select>            
          ) : (
            <select
              name="plantio"
              id="plantio"
              value={plantioVenda.plantio}
              onChange={handleInputChange}
            >
              <option value="">{plantiosCadastrados.length == 0 ? "Cadastre uns plantios para poder vender" : "Selecione: "}</option>
              {plantiosCadastrados.map((plantio, index) => (
                <option key={index} value={plantio.plantio}>
                  {plantio.plantio}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            id="quantidade"
            name="quantidade"
            type="number"
            placeholder="kg ou l"
            value={plantioVenda.quantidade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            name="preco"
            type="number"
            value={plantioVenda.preco}
            onChange={handleInputChange}
            placeholder="preço/kg ou l"
            required
          />
        </div>
        <button className="btn" type="submit">
          Vender
        </button>
      </form>
    </div>
  );
}

export default VenderPlantio;
