"use client";

import React, { useState } from "react";
import styles from "public/home.module.css";

function PlusMinusReserve({reserveProductQuantity}:{reserveProductQuantity:string}) {
  const [quantityProducts, setQuantityProducts] = useState(Number(reserveProductQuantity));
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
