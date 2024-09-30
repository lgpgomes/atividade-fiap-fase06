import "./PlantiosExistentes.css"
import MilhoImg from "/img/milho.png"
import CafeImg from "/img/cafe.png"
import TomateImg from "/img/tomate.png"

function PlantiosExistentes() {
  return (
    <div className="plantios-existentes">
      <h3>
        Plantios atuais
      </h3>

      <div className="plantios">
        <div className="plantio">
          <div className="plantio-img">
            <img src={MilhoImg} alt="" />
          </div>
          <div className="plantio-nome">
            Milho
          </div>
          <div className="plantio-area">
            2 hectares
          </div>
          <div className="plantio-recomendacoes">
            <div className="recomendacoes-titulo">
              Recomendações
            </div>
            <ul>
              <li>
                Usar plantas de cobertura
              </li>
              <li>
                Rotativade de Culturas
              </li>
              <li>
                Plantar sem arar o solo
              </li>
            </ul>
          </div>
        </div>

        <div className="plantio">
          <div className="plantio-img">
            <img src={CafeImg} alt="" />
          </div>
          <div className="plantio-nome">
            Café
          </div>
          <div className="plantio-area">
            1 hectare
          </div>
          <div className="plantio-recomendacoes">
            <div className="recomendacoes-titulo">
              Recomendações
            </div>
            <ul>
              <li>
                Plantar árvores perto do café
              </li>
              <li>
                Aproveitar o restante da colheita como adubo
              </li>
              <li>
                Usar pesticidas naturais
              </li>
            </ul>
          </div>
        </div>


        <div className="plantio">
          <div className="plantio-img">
            <img src={TomateImg} alt="" />
          </div>
          <div className="plantio-nome">
            Tomate
          </div>
          <div className="plantio-area">
            1 hectare
          </div>
          <div className="plantio-recomendacoes">
            <div className="recomendacoes-titulo">
              Recomendações
            </div>
            <ul>
              <li>
                Cobrir a plantação
              </li>
              <li>
                Adubar com líquidos naturais
              </li>
              <li>
                Regar as raízes diretamente
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantiosExistentes;
