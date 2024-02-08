import styles from "public/home.module.css";
import MakeAnOrderButton from "../organism/MakeAnOrderButton";

interface ShoppingBagFooterProps{
  contextButtonShoppingBag: string;
}

function ShoppingBagFooter({
  contextButtonShoppingBag,
}: {
  contextButtonShoppingBag: string;
}) {
  return (
    <div className={styles.shopping_bag_footer_style}>
      <div className={styles.state_shopping_bag_footer_position}>
        <p className={styles.text_style_white5}>Compra total</p>
        <p className={styles.text_style_white7_heading}>$us 0.00</p>
      </div>
      <MakeAnOrderButton contextButtonShoppingBag={contextButtonShoppingBag}/>
    </div>
  );
}

export default ShoppingBagFooter;
