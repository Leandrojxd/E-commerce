"use client";

import FilterSearchBar from "@/components/organism/FilterSearchBar";
import Categories from "@/components/templates/Categories";
import Products from "@/components/templates/Products";
import { ProductsData } from "@/pages/api/DataType";
import { fetchDataByQuery } from "@/pages/api/Services";
import { useSearchParams } from "next/navigation";
import styles from "public/home.module.css";
import { useEffect, useState } from "react";

export default function Catalog() {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;

  const [products, setProducts] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchDataByQuery(searchQuery as string);
        console.log(productsData)
        setProducts(productsData as ProductsData[]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);
  return (
    <main className={styles.catalog_page_style}>
      <FilterSearchBar />
      <Categories />
      <Products productsDataByQuery={products} />
    </main>
  );
}
