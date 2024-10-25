import "./PlantiosExistentes.css";
import { useGlobalContext } from "../../../services/Context";
import CardPlantio from "../../../components/Card";

function PlantiosExistentes() {
  const { plantiosCadastrados } = useGlobalContext();
  return (
    <div className="plantios-existentes">
      <h3>Plantios atuais</h3>

      <div className="plantios">
        {plantiosCadastrados.length > 0 ? (
          plantiosCadastrados.map((plantio, index) => (
            <div key={index}>
              <CardPlantio
                imgSource={`/img/${plantio.plantio.toLowerCase()}.png`}
                tipoPlantio={plantio.plantio}
                area={plantio.area}
              />
            </div>
          ))
        ) : (
          <div>Nenhum plantio cadastrado.</div>
        )}
      </div>
    </div>
  );
}

export default PlantiosExistentes;
