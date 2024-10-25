/* eslint-disable react/prop-types */
import "./PlantiosRecomendados.css";
import { useGlobalContext } from "../../../services/Context";
import CardPlantio from "../../../components/Card";

function PlantiosRecomendados({ onEscolher }) {
  const { plantioRecomendados } = useGlobalContext();
  return (
    <div className="plantios-existentes">
      <h3>Plantios recomendados</h3>

      <div className="plantios">
        {/* Renderizar os plantios */}
        {plantioRecomendados.map((plantio, index) => (
          <div key={index}>
            <CardPlantio
              imgSource={`/img/${plantio.plantio.toLowerCase()}.png`}
              tipoPlantio={plantio.plantio}
              area={plantio.area}
              funcaoEscolher={onEscolher}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantiosRecomendados;
