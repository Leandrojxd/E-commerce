"use client"

import React, { useEffect, useState } from "react";
import styles from "public/home.module.css";

interface OnChangeTotalQuantity {
  OnChangeTotalQuantity: (newQuantity: number) => void;
} 

function PlusMinusProduct({ OnChangeTotalQuantity }: OnChangeTotalQuantity) {
  const [quantityProducts, setQuantityProducts] = useState(0);

  const handleIncrement = () => {
    setQuantityProducts((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantityProducts > 0) {
      setQuantityProducts((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    OnChangeTotalQuantity(quantityProducts);
  }, [quantityProducts, OnChangeTotalQuantity]);

  return (
    <div className={styles.plusminus_product_section}>
      <button className={styles.plusminus_button_style} onClick={handleDecrement}>
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.plusminus_button_text_style}>-</p>
        </div>
      </button>
      <p className={styles.plusminus_section_text_style}>{quantityProducts}</p>
      <button className={styles.plusminus_button_style} onClick={handleIncrement}>
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.plusminus_button_text_style}>+</p>
        </div>
      </button>
    </div>
  );
}

export default PlusMinusProduct;
