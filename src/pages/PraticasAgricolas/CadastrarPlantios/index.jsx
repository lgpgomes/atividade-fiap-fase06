import { useState } from "react";

function CadastrarPlantios() {
  const [plantio, setPlantio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plantio ${plantio} cadastrado com sucesso!`);
    setPlantio("");
  };

  return (
    <div>
      <div className="cadastrarPlantio">
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar Plantios</h2>
          <div>
            <label htmlFor="tipoPlantio">Tipo de plantio</label>
            <input
              id="tipoPlantio"
              type="text"
              placeholder="Nome do Plantio"
              value={plantio}
              onChange={(e) => setPlantio(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoPlantio">Área de plantação</label>
            <input
              id="tipoPlantio"
              type="text"
              placeholder="Nome do Plantio"
              required
            />
          </div>
          <button className="btn " type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarPlantios;
