import "./DadosSolo.css"
import Plant from "/img/plant.png"
import Line from "/img/line_1.png"

function DadosSolo() {
  return (
    <div className="dados-solo">
      <h3>Dados do solo</h3>

      <div className="dados-solo-conteudo">
        <div className="dados-solo-grafico">
          <img id="plantImg" src={Plant} alt="ícone ilustrativo de uma planta"/>

          <div className="dados-solo-informacoes">
            <div className="dados-solo-informacao" id="nutrientes">
              <div className="dados-solo-caixa">
                <div className="dados-solo-titulo">
                  Nutrientes
                </div>
                <div className="dados-solo-descricao">
                  Nitrogênio baixo
                </div>
              </div>

              <img className="line" src={Line} alt="line" />

            </div>

            <div className="dados-solo-informacao" id="umidade">
              <div className="dados-solo-caixa">
                <div className="dados-solo-titulo">
                  Umidade
                </div>
                <div className="dados-solo-descricao">
                  76%, adequada
                </div>
              </div>

              <img className="line" src={Line} alt="line" />
            </div>

            <div className="dados-solo-informacao" id="temperatura">
              <div className="dados-solo-caixa">
                <div className="dados-solo-titulo">
                  Temperatura
                </div>
                <div className="dados-solo-descricao">
                  26 ºC, adequada
                </div>
              </div>

              <img className="line" src={Line} alt="line" />

            </div>

            <div className="dados-solo-informacao" id="ph">
              <div className="dados-solo-caixa">
                <div className="dados-solo-titulo">
                  PH
                </div>
                <div className="dados-solo-descricao">
                  5.7, ácido
                </div>
              </div>

              <img className="line" src={Line} alt="line" />

            </div>

          </div>
        </div>

      </div>

      <div className="dados-solo-recomendacoes">
        <div className="recomendacoes"> 
          <div className="recomendacoes-titulo">
            Recomendações
          </div>

          <div className="recomendacoes-conteudo">
            <ul>
              <li>
                Aumentar a fertilização com adubo orgânico para corrigir o nível de nitrogênio.
              </li>
              <li>
                Realizar rotação de culturas após a colheita para melhorar o PH do solo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DadosSolo;
