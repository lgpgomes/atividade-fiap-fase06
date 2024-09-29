import "./Monitoramento.css"
import { useState} from "react";
import CadastroLavoura from "./CadastroLavoura";
import DadosSolo from "./DadosSolo";
import PlantiosExistentes from "./PlantiosExistentes";

function Monitoramento() {

  const [contentActive, setContentActive] = useState('cadastrar_lavoura');
  
  const renderContent = () => {
    switch (contentActive) {
      case 'cadastrar_lavoura':
        return <CadastroLavoura/>;
      case 'dados_do_solo':
        return <DadosSolo/>;
      case 'plantios_existentes':
        return <PlantiosExistentes/>;
      default:
        return null;
    }
  };

  return (
    <div className="monitoramento">
      <nav className="menu-monitoramento">
          <button 
          onClick={() => setContentActive('cadastrar_lavoura') }
          className={contentActive == 'cadastrar_lavoura' ? 'on' : ''} 
          >
              Cadastrar de Lavoura
          </button>
          <button 
          onClick={() => setContentActive('dados_do_solo') }
          className={contentActive == 'dados_do_solo' ? 'on' : ''} 
          >
              Dados do Solo
          </button>
          <button 
          onClick={() => setContentActive('plantios_existentes') }
          className={contentActive == 'plantios_existentes' ? 'on' : ''} 
          >
              Plantios Existentes
          </button>
      </nav>

      <div className="monitoramento-conteudo">
        {renderContent()}
      </div>
        

    </div>

  );
}

export default Monitoramento;
