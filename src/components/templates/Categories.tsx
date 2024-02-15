"use client";

import CategoryCard from "../molecules/CategoryCard";
import styles from "public/home.module.css";
import { getAllByNameOfTable } from "@/pages/api/Services";
import { CategoriesData } from "@/pages/api/DataType";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import CategoryLoading from "@/app/SkeletonLoading/CategoryLoading";

function Categories({categoriesDataByQuery = []}:{categoriesDataByQuery?:CategoriesData[]}) {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = categoriesDataByQuery.length === 0? 
      ((await getAllByNameOfTable("Category")) as CategoriesData[])
          : categoriesDataByQuery;
      setCategories(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>

      {loading ? (
        <CategoryLoading />
      ) : (
        categories.map((category, index) => (
          <CategoryCard
            key={index}
            category_id={category.Category_id}
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
