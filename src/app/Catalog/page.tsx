import FilterSearchBar from "@/components/organism/FilterSearchBar";
import Categories from "@/components/templates/Categories";
import Products from "@/components/templates/Products";
import styles from 'public/home.module.css';

export default function Catalog() {
  return (
    <main className={styles.catalog_page_style}>
      <FilterSearchBar/>
      <Categories/>
      <Products />
    </main>
  )
}
