"use client";

import React from "react";
import styles from "public/home.module.css";
import Link from "next/link";
import ReserveProducts from "@/components/templates/ReserveProducts";
import { ReserveProduct } from "@/pages/api/DataContext";
function CheckoutPageFinal() {
  const handleEditCart = () => {
    window.history.back();
  };
  const restartShoppingCart = () => {
    localStorage.setItem("shoppingCartReserveProducts",JSON.stringify([]))
    window.history.back();
  }
  return (
    <div className={styles.checkout_page_position}>
      <h1 className={styles.title_style}>Compra Exitosa</h1>
      <p className={styles.title_style}>¡Gracias por tu compra!</p>
      <div className={styles.checkout_page_button_position}>
        <button
          className={styles.agregate_style_button}
          onClick={handleEditCart}
        >
          <p className={styles.plusminus_section_text_style}>
            Volver a Editar Productos del Carrito
          </p>
        </button>
        <button onClick={restartShoppingCart} className={styles.agregate_style_button}>
          <p className={styles.plusminus_section_text_style}>
            Reiniciar Carrito de Compra
          </p>
        </button>
      </div>
    </div>
  );
}

export default CheckoutPageFinal;
