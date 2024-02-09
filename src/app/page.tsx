"use client";

import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import Products from "@/components/templates/Products";
import ShoppingBagFooter from "@/components/templates/ShoppingBagFooter";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import styles from "public/home.module.css";

export default function Home() {
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  return (
    <main>
      <Header />
      <Categories />
      <Products />

      {shoppingCartReserveProducts.length != 0 ? (
        <>
          <div className={styles.generate_space} />
          <ShoppingBagFooter contextButtonShoppingBag="ver pedido" />
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
