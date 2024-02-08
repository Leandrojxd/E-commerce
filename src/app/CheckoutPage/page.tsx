"use client"

import React from 'react';

function Page() {
  const handleEditCart = () => {
    // Lógica para volver a editar los productos del carrito de compra
    console.log('Volver a editar los productos del carrito de compra');
  };

  const handleResetCart = () => {
    // Lógica para reiniciar el carrito de compra
    console.log('Reiniciar carrito de compra');
  };

  return (
    <div>
      <h1>Compra Exitosa</h1>
      <p>¡Gracias por tu compra!</p>
      <button onClick={handleEditCart}>Volver a Editar Productos del Carrito</button>
      <button onClick={handleResetCart}>Reiniciar Carrito de Compra</button>
    </div>
  );
}

export default Page;