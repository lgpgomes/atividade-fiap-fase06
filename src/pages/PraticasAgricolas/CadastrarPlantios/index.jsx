/* eslint-disable react/prop-types */
import { useState } from "react";
function CadastrarPlantios({plantioEscolhido}) {

  const [plantioCadastrado, setCadastrarPlantio] = useState(plantioEscolhido)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plantio ${plantioEscolhido} cadastrado com sucesso!`);
  };

  return (
      <div className="cadastrarPlantio">
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar Plantios</h2>
          <div>
            <label htmlFor="tipoPlantio">Tipo de plantio</label>
            <input
              id="tipoPlantio"
              type="text"
              placeholder=""
              value={plantioCadastrado}
              onChange={(e) => setCadastrarPlantio(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoPlantio">Área de plantação</label>
            <input
              id="tipoPlantio"
              type="text"
              placeholder=""
              required
            />
          </div>
          <button className="btn" type="submit">Cadastrar</button>
        </form>
      </div>
  );
}

export default CadastrarPlantios;
