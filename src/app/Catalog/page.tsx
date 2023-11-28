import SortButton from "@/components/atoms/SortButton";
import FilterSearchBar from "@/components/organism/FilterSearchBar";
import ProductCard from "@/components/organism/ProductCard";
import Search from "@/components/organism/Search";
import Categories from "@/components/templates/Categories";
import NoResults from "@/components/templates/NoResults";
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
