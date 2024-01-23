"use client";

import CategoryItem from "../molecules/CategoryItem";
import styles from "public/home.module.css";
import { getAllCategories } from "@/pages/api/Services";
import { CategoriesData } from "@/pages/api/DataType";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>

      {loading ? (
        <Skeleton height={30} width={30} />
      ) : (
        categories.map((category, index) => (
          <CategoryItem
            key={index}
            source={category.Url_Image}
            title={category.Name}
            subtitle={category.Description}
          />
        ))
      )}
    </div>
  );
}

export default Categories;
