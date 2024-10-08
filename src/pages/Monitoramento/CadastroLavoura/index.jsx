import "./CadastroLavoura.css"
import React, { useState } from 'react';


function CadastroLavoura() {
  const [cadastrado, setCadastrado] = useState(false);
  function handleCadastrar (e) {
    e.preventDefault()

    setCadastrado(true);
    
    setTimeout(function () {
      setCadastrado(false)
    }, 4000);
  }

  return (
    <div className="cadastro-lavoura">
      <h3>Cadastro lavoura</h3>
      <div className="formulario-cadastro">
        <form onSubmit={handleCadastrar}>
          <div className="formulario-campos">
            <label>
              <div>
                Área total do terreno
              </div>
              <input placeholder="10 hectares" type="text" required/>
            </label>
            <label>
              <div>
                Tipo de plantio
              </div>
              <input placeholder="Milho" type="text" required/>
            </label>
            <label>
              <div>
                Área ocupada pelo plantio
              </div>
              <input placeholder="8 hectares" type="text" required />
            </label>
          </div>


          <div className="formulario-botao">
            <button type="submit">
              Cadastrar
            </button>
          </div>

          {cadastrado && <div className="formulario-mensagem"> Lavoura cadastrada com sucesso. </div>}

          
        </form>
      </div>
    </div>

  );
}

export default CadastroLavoura;
