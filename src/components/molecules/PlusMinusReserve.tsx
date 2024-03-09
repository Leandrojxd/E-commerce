"use client";

import React, { useEffect, useState } from "react";
import styles from "public/home.module.css";
import { ReserveProduct, useShoppingCartContext } from "@/pages/api/DataContext";

function PlusMinusReserve({reserveProductQuantity,indexProduct}:{reserveProductQuantity:string,indexProduct:number}) {
  const {addReserveProduct,getReserveProductById,shoppingCartReserveProducts} = useShoppingCartContext();
  const [quantityProducts, setQuantityProducts] = useState(Number(reserveProductQuantity));
  let reserveProductByIndex:ReserveProduct = getReserveProductById(indexProduct);
  useEffect(()=>{
    if(reserveProductByIndex){
      console.log(quantityProducts + "useEffect")
      addReserveProduct({
        productName: reserveProductByIndex.productName,
        productBrand: reserveProductByIndex.productBrand,
        productPrice: reserveProductByIndex.productPrice,
        productQuantity: String(quantityProducts + 1),
      })
      localStorage.setItem("shoppingCartReserveProducts",JSON.stringify(shoppingCartReserveProducts))
    }else{
      console.log("no existe")
    }
    
  },[quantityProducts])

  const handleDecrement = () => {
    if (quantityProducts - 1 >= 0) {
      setQuantityProducts((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setQuantityProducts((prev) => prev + 1);
  };

  return (
    <div className={styles.plusminus_reserve_section}>
      <button
        className={styles.plusminus_button_style}
        onClick={handleDecrement}
      >
        <p className={styles.description_card}>-</p>
      </button>
      <p className={styles.title_card}> {quantityProducts} </p>
      <button
        className={styles.plusminus_button_style}
        onClick={handleIncrement}
      >
        <p className={styles.description_card}>+</p>
      </button>
    </div>
  );
}

export default PlusMinusReserve;
