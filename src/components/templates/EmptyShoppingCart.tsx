import React from "react";
import CustomButton from "../atoms/CustomButton";
import styles from "public/home.module.css";
import CustomText from "../atoms/CustomText";
import TopBarHeader from "../organism/TopBarHeader";
import Link from "next/link";

function EmptyShoppingCart() {
  return (
    <>
      <TopBarHeader />
      <div className={styles.empty_shopping_cart_position}>
        <CustomText
          content="Aun no has agregado nada a tu carrito."
          customClassName={styles.empty_message_text_style}
        />
        <Link href={`./`} className={styles.link_style}>
          <button className={styles.button_shopping_cart_empty_style}>
            <div className={styles.back_products_button_position}>
              <p className={styles.back_button_text_style}>
                LLEVAME A LOS PRODUCTOS
              </p>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default EmptyShoppingCart;
