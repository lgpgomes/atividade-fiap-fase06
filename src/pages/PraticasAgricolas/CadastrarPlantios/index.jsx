import { useState } from 'react';

function CadastrarPlantios() {
  const [plantio, setPlantio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plantio ${plantio} cadastrado com sucesso!`);
    setPlantio('');
  };

  return (
    <div>
      <h2>Cadastrar Plantios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Plantio"
          value={plantio}
          onChange={(e) => setPlantio(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarPlantios;
