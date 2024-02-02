"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextPropsReactNode {
  children: ReactNode;
}

interface ReserveProduct {
  productName: string;
  productBrand: string;
  productPrice: string | null;
  productQuantity: string;
}

interface IContextValue {
  shoppingCartReserveProducts: ReserveProduct[];
  currentProduct: ReserveProduct,
  setCurrentProduct:(currentProduct: Partial<ReserveProduct>)=>void,
  addReserveProduct: (newData: Partial<ReserveProduct>) => void;
}

const defaultProductData: ReserveProduct[] = [];

const defaultReserveProduct:ReserveProduct = {
  productName: "",
  productBrand: "",
  productPrice: "",
  productQuantity: "",
}

const shoppingCartContext = createContext<IContextValue>({
  shoppingCartReserveProducts: defaultProductData,
  currentProduct: defaultReserveProduct,
  setCurrentProduct:()=>{},
  addReserveProduct: () => {},
});

export const ShoppingCartContextProvider: React.FC<ContextPropsReactNode> = ({ children }) => {
  const [shoppingCartReserveProducts, setShoppingCartReserveProducts] = useState<ReserveProduct[]>(defaultProductData);
  const [currentProductInPage,setCurrentProductInPage] = useState<ReserveProduct>(defaultReserveProduct);

  const setCurrentSingleProduct = (newCurrentProduct: Partial<ReserveProduct>) => {
    if(currentProductInPage){
      setCurrentProductInPage(newCurrentProduct as ReserveProduct)
    }
  }

  const updateProductData = (newData: Partial<ReserveProduct>) => {
    setShoppingCartReserveProducts((prevData) => {
      const updatedData = [...prevData];
      const existingProductIndex = updatedData.findIndex(
        (product) => product.productName === newData.productName && product.productBrand === newData.productBrand
      );

      if (existingProductIndex !== -1) {
        updatedData[existingProductIndex].productQuantity = newData.productQuantity as string;
      } else {
        updatedData.push(newData as ReserveProduct);
      }
      return updatedData;
    });
  };

  const contextValue: IContextValue = {
    shoppingCartReserveProducts: shoppingCartReserveProducts,
    currentProduct:currentProductInPage,
    setCurrentProduct: setCurrentSingleProduct,
    addReserveProduct: updateProductData,
  };

  return <shoppingCartContext.Provider value={contextValue}>{children}</shoppingCartContext.Provider>;
};

export const useShoppingCartContext = (): IContextValue => {
  const context = useContext(shoppingCartContext);
  if (!context) {
    throw new Error("Debe ser utilizado con el Price Provider");
  }
  return context;
};

