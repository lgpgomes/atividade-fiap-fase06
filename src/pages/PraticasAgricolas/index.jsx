import "./PraticasAgricolas.css"
import { useState} from "react";
import CadastrarPlantios from "./CadastrarPlantios";
import PlantiosRecomendados from "./PlantiosRecomendados";

function PraticasAgricolas() {


  const [contentActive, setContentActive] = useState('plantios_recomendados');
  const [plantioSelecionado, setPlantioSelecionado] = useState(null);

  const handleEscolherPlantio = (plantio) => {
    setPlantioSelecionado(plantio);  
    setContentActive('cadastrar_plantios'); 
  };


  const renderContent = () => {
    switch (contentActive) {
      case 'cadastrar_plantios':
        return <CadastrarPlantios plantio={plantioSelecionado} />;
      case 'plantios_recomendados':
        return <PlantiosRecomendados onEscolher={handleEscolherPlantio} />;
      default:
        return null;
    }
  };

  return (
    <div className="praticas-agricolas">
      <nav className="menu-praticas-agricolas">

          <button 
          onClick={() => setContentActive('plantios_recomendados') }
          className={contentActive == 'plantios_recomendados' ? 'on' : ''} 
          >
              Plantios recomendados
          </button>

          <button 
          onClick={() => setContentActive('cadastrar_plantios') }
          className={contentActive == 'cadastrar_plantios' ? 'on' : ''} 
          >
              Cadastrar plantios
          </button>

      </nav>

      <div className="praticas-agricolas-conteudo">
        {renderContent()}
      </div>
        

    </div>

  );
}

export default PraticasAgricolas;
