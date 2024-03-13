"use client";

import FilterSearchBar from "@/components/organism/FilterSearchBar";
import Categories from "@/components/templates/Categories";
import NoResults from "@/components/templates/NoResults";
import Products from "@/components/templates/Products";
import { CategoriesData, ProductsData } from "@/pages/api/DataType";
import { fetchDataByQuery } from "@/pages/api/Services";
import styles from "public/home.module.css";
import { Suspense, useEffect, useState } from "react";

export default function Catalog({searchParams}:{searchParams:{q:string | null}}) {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(searchParams.q)
      try {
        const productsData = await fetchDataByQuery(
          searchParams.q as string,
          "Products"
        );
        const categoriesData = await fetchDataByQuery(
          searchParams.q as string,
          "Category"
        );
        setProducts(productsData as ProductsData[]);
        setCategories(categoriesData as CategoriesData[]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams.q]);

  return (
    <main className={styles.catalog_page_style}>
      <FilterSearchBar />
        {!loading ? (
          products.length !== 0 ? (
            <>
            <Categories categoriesDataByQuery={categories} />
            <Products productsDataByQuery={products} />
          </>
          ):
          (
            <NoResults/>
          )
        ) : (
          <>
            Loading
          </>
        )}
    </main>
  );
}