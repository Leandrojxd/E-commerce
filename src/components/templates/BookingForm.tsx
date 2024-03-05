"use client"

import React, { ChangeEvent, useState } from "react";
import styles from "public/home.module.css";
import {  useUserContext } from "@/pages/api/UserContext";



function BookingForm() {
  const {setCurrentUser} = useUserContext();
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
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{
          setCurrentUser({userName: event.target.value})
        }}  
      />
      <h2 className={styles.subtitle_style}>Ciudad Destino</h2>
      <input
        className={styles.input_style}
        type="text"
        placeholder="Selecciona destino"
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{
          setCurrentUser({destinyCity: event.target.value})
        }}  
      />
    </div>
  );
}

export default BookingForm;
