"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextPropsReactNode {
  children: ReactNode;
}

interface PriceContextValue {
  productData: {
    productName: string;
    productBrand: string;
    productPrice: string | null;
    productQuantity: string;
  };
  setProductData: (newData: Partial<PriceContextValue["productData"]>) => void;
}

const defaultProductData: PriceContextValue["productData"] = {
  productName: "",
  productBrand: "",
  productPrice: null,
  productQuantity: "",
};

const priceContext = createContext<PriceContextValue>({
  productData: defaultProductData,
  setProductData: () => {},
});

export const PriceContextProvider: React.FC<ContextPropsReactNode> = ({ children }) => {
  const [productData, setProductData] = useState<PriceContextValue["productData"]>(defaultProductData);

  const updateProductData = (newData: Partial<PriceContextValue["productData"]>) => {
    setProductData((prevData) => ({ ...prevData, ...newData }));
  };

  const contextValue: PriceContextValue = {
    productData,
    setProductData: updateProductData,
  };

  return <priceContext.Provider value={contextValue}>{children}</priceContext.Provider>;
};

export const usePriceContext = (): PriceContextValue => {
  const context = useContext(priceContext);
  if (!context) {
    throw new Error("Debe ser utilizado con el Price Provider");
  }
  return context;
};

