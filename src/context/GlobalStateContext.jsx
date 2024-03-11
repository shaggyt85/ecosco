/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import { products } from "../dummy/peopleData";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const handleFilterClick = (category) => { // Cambia el parámetro a category
    const filtered = products.filter((product) =>
      product.category.toLowerCase() === category.toLowerCase() // Filtra solo por la categoría del producto
    );
    setFilteredProducts(filtered);
  };
  return (
    <GlobalStateContext.Provider value={{ filteredProducts, setFilteredProducts,handleFilterClick }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;