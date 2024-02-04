import React, {useState} from "react";
import styles from 'public/home.module.css';

function PlusMinusReserve() {
  const [quantityProducts, setQuantityProducts] = useState(0); 

  const handleChangeTotalQuantity = (newQuantity) => {
    console.log(`Nueva cantidad total: ${newQuantity}`);
  };

  const handleDecrement = () => {
    if (quantityProducts - 1 >= 0) {
      setQuantityProducts((prev) => prev - 1);
      handleChangeTotalQuantity(quantityProducts - 1);
    }
  };

  const handleIncrement = () => {
    setQuantityProducts((prev) => prev + 1);
    handleChangeTotalQuantity(quantityProducts + 1);
  };

  return (
    <div className={styles.plusminus_product_section}>
      <button
        className={styles.plusminus_button_style}
        onClick={handleDecrement}
      >
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.plusminus_button_text_style}>-</p>
        </div>
      </button>
      <p className={styles.plusminus_section_text_style}> {quantityProducts} </p>
      <button
        className={styles.plusminus_button_style}
        onClick={handleIncrement}
      >
        <div className={styles.plusminus_button_text_position}>
          <p className={styles.description_card}>+</p>
        </div>
      </button>
    </div>
  );
}

export default PlusMinusReserve;
