import React from "react";
import CustomButton from "../atoms/CustomButton";
import styles from 'public/home.module.css';

function PlusMinusReserve() {
  return (
    <div>
      <div className={styles.plusminus_reserve_section}>
        <CustomButton
          content="-"
          styleText={styles.description_card}
          styleButton={styles.plusminus_button_style}
        />
        <p className={styles.title_card}>10</p>
        <CustomButton
          content="+"
          styleText={styles.description_card}
          styleButton={styles.plusminus_button_style}
        />
      </div>
    </div>
  );
}

export default PlusMinusReserve;
