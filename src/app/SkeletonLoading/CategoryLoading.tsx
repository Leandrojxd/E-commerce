import styles from "public/home.module.css";

export default function CategoryLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
    </div>
  );
}
