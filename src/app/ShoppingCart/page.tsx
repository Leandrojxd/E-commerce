"use client"

import TopHeaderCategoryProducts from "@/components/organism/TopHeaderCategoryProducts";
import BookingForm from "@/components/templates/BookingForm";
import EmptyShoppingCart from "@/components/templates/EmptyShoppingCart";
import ReserveProducts from "@/components/templates/ReserveProducts";
import ShoppingBagFooter from "@/components/templates/ShoppingBagFooter";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import React, { Suspense } from "react";

export default function ShoppingCart() {
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  return (
    <div>
      {shoppingCartReserveProducts? (
        <>
          <EmptyShoppingCart />
        </>
      ) : (
        <>
          <TopHeaderCategoryProducts content="DETALLE DE TU RESERVA" />
          <ReserveProducts />
          <BookingForm />
          <ShoppingBagFooter contextButtonShoppingBag="realizar pedido" />
        </>
      )}
    </div>
  );
}
