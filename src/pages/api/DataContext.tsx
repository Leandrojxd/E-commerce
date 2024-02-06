"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContextPropsReactNode {
  children: ReactNode;
}

export interface ReserveProduct {
  productName: string;
  productBrand: string;
  productPrice: string | null;
  productQuantity: string;
}

interface IContextValue {
  shoppingCartReserveProducts: ReserveProduct[];
  currentProduct: ReserveProduct;
  setCurrentProduct: (currentProduct: Partial<ReserveProduct>) => void;
  addReserveProduct: (newData: Partial<ReserveProduct>) => void;
}

const defaultProductData: ReserveProduct[] = [];
const defaultReserveProduct: ReserveProduct = {
  productName: '',
  productBrand: '',
  productPrice: '',
  productQuantity: '',
};

const shoppingCartContext = createContext<IContextValue>({
  shoppingCartReserveProducts: defaultProductData,
  currentProduct: defaultReserveProduct,
  setCurrentProduct: () => {},
  addReserveProduct: () => {},
});

export const ShoppingCartContextProvider: React.FC<ContextPropsReactNode> = ({ children }) => {
  const [shoppingCartReserveProducts, setShoppingCartReserveProducts] = useState<ReserveProduct[]>(defaultProductData);
  const [currentProductInPage, setCurrentProductInPage] = useState<ReserveProduct>(defaultReserveProduct);

  // Recuperar datos del almacenamiento local al cargar el contexto
  useEffect(() => {
    const storedData = localStorage.getItem('shoppingCartReserveProducts');
    if (storedData) {
      setShoppingCartReserveProducts(JSON.parse(storedData));
    }
  }, []);

  // Guardar datos en el almacenamiento local cada vez que cambia el estado
  useEffect(() => {
    localStorage.setItem('shoppingCartReserveProducts', JSON.stringify(shoppingCartReserveProducts));
  }, [shoppingCartReserveProducts]);

  const setCurrentSingleProduct = (newCurrentProduct: Partial<ReserveProduct>) => {
    if (currentProductInPage) {
      setCurrentProductInPage((prevCurrentProduct) => ({
        ...prevCurrentProduct,
        ...newCurrentProduct,
      }));
    }
  };

  const updateProductData = (newData: Partial<ReserveProduct>) => {
    setShoppingCartReserveProducts((prevData) => {
      const existingProductIndex = prevData.findIndex(
        (product) => product.productName === newData.productName && product.productBrand === newData.productBrand
      );

      if (existingProductIndex !== -1) {
        return prevData.map((product, index) =>
          index === existingProductIndex ? { ...product, productQuantity: newData.productQuantity as string } : product
        );
      } else {
        return [...prevData, newData as ReserveProduct];
      }
    });
  };

  const contextValue: IContextValue = {
    shoppingCartReserveProducts: shoppingCartReserveProducts,
    currentProduct: currentProductInPage,
    setCurrentProduct: setCurrentSingleProduct,
    addReserveProduct: updateProductData,
  };

  return <shoppingCartContext.Provider value={contextValue}>{children}</shoppingCartContext.Provider>;
};

export const useShoppingCartContext = (): IContextValue => {
  const context = useContext(shoppingCartContext);
  if (!context) {
    throw new Error('Debe ser utilizado con el Price Provider');
  }
  return context;
};
