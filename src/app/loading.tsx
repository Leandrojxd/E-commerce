import styles from "public/home.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.category_title_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
      <div className={styles.category_loading}/>
    </div>
  );
}
