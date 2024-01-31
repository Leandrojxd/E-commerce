import React from "react";
import styles from "public/home.module.css";

export default function ProductsLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.product_loading} />
      <div className={styles.product_loading} />
      <div className={styles.product_loading} />
    </div>
  );
}
