"use client";

import FilterSearchBar from "@/components/organism/FilterSearchBar";
import Categories from "@/components/templates/Categories";
import NoResults from "@/components/templates/NoResults";
import Products from "@/components/templates/Products";
import { CategoriesData, ProductsData } from "@/pages/api/DataType";
import { fetchDataByQuery } from "@/pages/api/Services";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import styles from "public/home.module.css";
import { useEffect, useState } from "react";

export default function Catalog() {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si el enrutador está disponible antes de utilizarlo
    if (typeof window !== 'undefined') {
      const searchQuery = router.query.q as string;
      if (searchQuery) {
        fetchData(searchQuery);
      }
    }
  }, [router.query.q]);

  const fetchData = async (searchQuery: string) => {
    try {
      const productsData = await fetchDataByQuery(searchQuery, "Products");
      const categoriesData = await fetchDataByQuery(searchQuery, "Category");
      setProducts(productsData as ProductsData[]);
      setCategories(categoriesData as CategoriesData[]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.catalog_page_style}>
      <FilterSearchBar />
      {products.length !== 0 && !loading ? (
        <>
          <Categories categoriesDataByQuery={categories} />
          <Products productsDataByQuery={products} />
        </>
      ) : (
        <NoResults/>
      )}
    </main>
  );
}