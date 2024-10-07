/* eslint-disable react/prop-types */
import "./VenderPlantio.css"
function VenderPlantio({tiposPlantios}) {
  const plantios = tiposPlantios.map(plantio => plantio.terreno.plantio)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plantio colocado para venda com sucesso!`);
  };

  return (
      <div className="cadastrarPlantio">
        <form onSubmit={handleSubmit}>
          <h2>Vender Plantio Excedente</h2>
          <div>
            <label htmlFor="tipoPlantio">Tipo de plantio</label>
            <select name="tipoPlantio" id="tipoPlantio">
              {plantios.map((plantio, index) => (
                <option key={index} value={plantio}>{plantio}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              id="quantidade"
              type="text"
              placeholder="kg ou l"
              required
            />
          </div>
          <div>
            <label htmlFor="tipoPlantio">Preço</label>
            <input
              id="tipoPlantio"
              type="number"
              placeholder="preço/kg ou l"
              required
            />
          </div>
          <button className="btn" type="submit">Vender</button>
        </form>
      </div>
  );
}

export default VenderPlantio;
