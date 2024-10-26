/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGlobalContext } from "../../../services/Context";
import { useNavigate } from "react-router-dom";
function CadastrarPlantios({ plantioEscolhido }) {
  const { cadastrarPlantio } = useGlobalContext();
  const navigator = useNavigate();

  const [sucesso, setSucesso] = useState(false);

  const [plantioCadastrado, setCadastrarPlantio] = useState({
    plantio: plantioEscolhido,
    area: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCadastrarPlantio((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const limpar = () => {
    setCadastrarPlantio({
      plantio: "",
      area: 0,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plantioCadastrado.area > 0 && plantioCadastrado.plantio !== "") {
      let sucesso = cadastrarPlantio(plantioCadastrado);
      setSucesso(sucesso)      
      limpar(); // Limpa os campos após o cadastro com sucesso
      navigator(`/dashboard/monitoramento/plantios-existentes`)
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="cadastrarPlantio">
      <form onSubmit={handleSubmit}>
        <h2>Cadastrar Plantios</h2>
        <div>
          <label htmlFor="tipoPlantio">Tipo de plantio</label>
          <input
            id="plantio"
            name="plantio"
            type="text"
            placeholder=""
            value={plantioCadastrado.plantio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="area">Área de plantação</label>
          <input
            id="area"
            name="area"
            type="number"
            min={0}
            placeholder="2 hectares"
            value={plantioCadastrado.area}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Cadastrar
        </button>

        {sucesso && (
            <div className="formulario-mensagem">
              Lavoura cadastrada com sucesso.
            </div>
          )}
      </form>
    </div>
  );
}

export default CadastrarPlantios;
