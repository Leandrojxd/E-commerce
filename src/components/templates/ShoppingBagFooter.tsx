"use client"

import styles from "public/home.module.css";
import MakeAnOrderButton from "../organism/MakeAnOrderButton";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import { getTotalPriceFromShoppingCartProducts } from "@/pages/api/Services";

function ShoppingBagFooter({
  contextButtonShoppingBag,
}: {
  contextButtonShoppingBag: string;
}) {

  const {shoppingCartReserveProducts} = useShoppingCartContext();
  const totalPrice = getTotalPriceFromShoppingCartProducts(shoppingCartReserveProducts)
  const formattedTotalPrice = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(totalPrice);
  return (
    <div className={styles.shopping_bag_footer_style}>
      <div className={styles.state_shopping_bag_footer_position}>
        <p className={styles.text_style_white5}>Compra total</p>
        <p className={styles.text_style_white7_heading}>{"$ "+formattedTotalPrice}</p>
      </div>
      <MakeAnOrderButton contextButtonShoppingBag={contextButtonShoppingBag}/>
    </div>
  );
}

export default ShoppingBagFooter;
