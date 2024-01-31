"use client"

import React, { useState } from "react";
import styles from "public/home.module.css";

interface OnChangeTotalQuantity {
  OnChangeTotalQuantity: (newQuantity: number) => void;
} 

function PlusMinusProduct({OnChangeTotalQuantity}:OnChangeTotalQuantity) {
  const [quantityProducts, setQuantityProducts] = useState(0);
  const checkQuatityProduct= () =>{
    console.log(quantityProducts);
  }
  return (
    <div className={styles.plusminus_product_section}>
      <button
        className={styles.plusminus_button_style}
        onClick={() => {
          if(quantityProducts - 1 >=0){
            setQuantityProducts((prev) => {
              return prev - 1;
            });
            OnChangeTotalQuantity(quantityProducts - 1);
          }
        }}
      >
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.plusminus_button_text_style}>-</p>
        </div>
      </button>
      <p className={styles.plusminus_section_text_style}>
        {" "}
        {quantityProducts}{" "}
      </p>
      <button
        className={styles.plusminus_button_style}
        onClick={() => {
          setQuantityProducts((prev) => prev + 1);
          OnChangeTotalQuantity(quantityProducts + 1);
        }}
      >
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.plusminus_button_text_style}>+</p>
        </div>
      </button>
    </div>
  );
}

export default PlusMinusProduct;
