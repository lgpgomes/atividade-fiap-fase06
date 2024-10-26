/* eslint-disable react/prop-types */
import { useGlobalContext } from "../../services/Context";

export default function CardPlantio({
  imgSource,
  tipoPlantio,
  area,
  funcaoEscolher,
}) {
  const { plantios } = useGlobalContext();

  // Função para obter as recomendações com base no tipo de plantio
  const getRecomendacoes = () => {
    const plantio = plantios.find((item) => item.plantio === tipoPlantio);
    return plantio ? plantio.recomendacoes : [];
  };

  const recomendacoes = getRecomendacoes();
  return (
    <div className="plantio">
      <div className="plantio-img">
        <img src={imgSource} alt={tipoPlantio} />
      </div>
      <div className="plantio-nome">{tipoPlantio}</div>

      {area > 0 ? (
        <div className="plantio-nome">
          {area} {area > 1 ? "hectares" : "hectar"}
        </div>
      ) : null}

      <div className="plantio-recomendacoes">
        <div className="recomendacoes-titulo">Recomendações</div>
        <ul>
          {recomendacoes.map((recomendacao, index) => (
            <li key={index}>{recomendacao}</li>
          ))}
        </ul>
      </div>

      {funcaoEscolher && (
        <div className="plantio-button">
          <button onClick={() => funcaoEscolher(tipoPlantio)}>Escolher</button>
        </div>
      )}
    </div>
  );
}
