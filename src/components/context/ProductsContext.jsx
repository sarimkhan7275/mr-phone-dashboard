import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const saveProduct = (product) => {
    setActiveProduct(product);
  };

  return (
    <ProductsContext.Provider value={{ activeProduct, saveProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
