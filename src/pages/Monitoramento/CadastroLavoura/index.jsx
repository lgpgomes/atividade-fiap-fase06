import { useGlobalContext } from "../../../services/Context";
import "./CadastroLavoura.css";
import { useState } from "react";

function CadastroLavoura() {
  const { cadastrarPlantio, plantioRecomendados} =
    useGlobalContext();

  const [dadosLavoura, setDadosLavoura] = useState({
    plantio: "", // milho, mandioca, ...
    area: "", // hectares
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosLavoura((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const [cadastrado, setCadastrado] = useState(false);

  function handleCadastrar(e) {
    e.preventDefault();

    if (dadosLavoura.area > 0 && dadosLavoura.plantio !== "") {      
      setCadastrado(cadastrarPlantio(dadosLavoura));
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="cadastro-lavoura">
      <h3>Cadastro lavoura</h3>
      <div className="formulario-cadastro">
        <form onSubmit={handleCadastrar}>
          <div className="formulario-campos">
            <label>
              <div>Tipo de plantio</div>
              <select
                name="plantio"
                value={dadosLavoura.plantio}
                onChange={handleInputChange}
              >
                <option value="">Selecione</option>              
                {plantioRecomendados.map((plantio, index) => (
                  <option key={index} value={plantio.plantio}>
                    {plantio.plantio}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <div>Área ocupada pelo plantio</div>
              <input
                name="area"
                placeholder="8 hectares"
                min={0}
                value={dadosLavoura.area}
                onChange={handleInputChange}
                type="number"
                required
              />
            </label>
          </div>

          <div className="formulario-botao">
            <button type="submit">Cadastrar</button>
          </div>

          {cadastrado && (
            <div className="formulario-mensagem">
              Lavoura cadastrada com sucesso.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CadastroLavoura;
