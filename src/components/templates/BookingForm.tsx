import React from "react";
import styles from "public/home.module.css";

function BookingForm() {
  return (
    <div className={styles.booking_form_style}>
      <h1 className={styles.title_form_style}>Datos de tu reserva</h1>
      <p className={styles.description_form_style}>
        Rellena este formulario para que podamos contactarte por whatsapp.
      </p>
      <h2 className={styles.subtitle_style}>Nombre</h2>
      <input
        className={styles.input_style}
        type="text"
        placeholder="Ingresa tu nombre"
      />
      <h2 className={styles.subtitle_style}>Ciudad Destino</h2>
      <input
        className={styles.input_style}
        type="text"
        placeholder="Selecciona destino"
      />
    </div>
  );
}

export default BookingForm;
