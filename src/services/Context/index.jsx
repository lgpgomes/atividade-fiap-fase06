/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import json from "../../assets/json/index.json";

// Criando o contexto
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({
    nome: "",
    tipoUsuario: "",
    email: "",
    telefone: "",
    senha: "",
  });

  const plantios = json.plantioRecomendados;

  const [plantiosCadastrados, setPlantiosCadastrados] = useState([]);
  const [vendedores, setVendedores] = useState(json.vendedores);

  // Função para cadastrar um plantio
  const cadastrarPlantio = (plantio) => {
    if (!plantiosCadastrados.some((p) => p.plantio === plantio.plantio)) {
      // Comparação baseada no tipo de plantio
      setPlantiosCadastrados([...plantiosCadastrados, plantio]);
      return true;
    } else {
      return false;
    }
  };

  // Função para cadastrar um vendedor
  const cadastrarVendedor = (vendedor) => {
    setVendedores([...vendedores, vendedor]);
    return true;
  };

  // Filtrar plantios que não foram cadastrados
  const plantioRecomendados = plantios.filter(
    (plantio) =>
      !plantiosCadastrados.some(
        (cadastrado) => cadastrado.plantio === plantio.plantio
      ) // Modifique esta linha
  );

  const limparVendedores = () => {
    setVendedores(json.vendedores);
  }

  return (
    <UserContext.Provider
      value={{
        usuario,
        setUsuario,
        isAuthenticated,
        setIsAuthenticated,
        cadastrarPlantio,
        plantioRecomendados,
        plantiosCadastrados,
        plantios,
        vendedores, 
        cadastrarVendedor,
        limparVendedores
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => useContext(UserContext);
