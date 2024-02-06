"use client"

import styles from "public/home.module.css";

import CustomText from "../atoms/CustomText";

type TopHeaderCategoryProductsProps = {
  content: string;
};

function TopHeaderCategoryProducts({
  content,
}: TopHeaderCategoryProductsProps) {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className={styles.header_category_products_position}>
      <button className={styles.button_style2} onClick={handleGoBack}>
        <p className={styles.button_text_style2}>atras</p>
      </button>
      <CustomText
        content={content}
        customClassName={styles.outfit_style_text_800}
      />
    </div>
  );
}

export default TopHeaderCategoryProducts;
