"use client";

import React from "react";
import styles from "public/home.module.css";
function CheckoutPageFinal() {
  const handleEditCart = () => {
    // Lógica para volver a editar los productos del carrito de compra
    console.log("Volver a editar los productos del carrito de compra");
  };

  const handleResetCart = () => {
    // Lógica para reiniciar el carrito de compra
    console.log("Reiniciar carrito de compra");
  };

  return (
    <div className={styles.checkout_page_position}>
      <h1 className={styles.title_style}>Compra Exitosa</h1>
      <p className={styles.title_style}>¡Gracias por tu compra!</p>
      <div className={styles.checkout_page_button_position} >
        <button
          className={styles.agregate_style_button}
          onClick={handleEditCart}
        >
          <p className={styles.plusminus_section_text_style}>
            Volver a Editar Productos del Carrito
          </p>
        </button>
        <button
          className={styles.agregate_style_button}
          onClick={handleResetCart}
        >
          <p className={styles.plusminus_section_text_style}>
            Reiniciar Carrito de Compra
          </p>
        </button>
      </div>
    </div>
  );
}

export default CheckoutPageFinal;
