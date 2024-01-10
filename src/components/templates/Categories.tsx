import CategoryItem from "../molecules/CategoryItem";
import styles from "public/home.module.css";
import { getAllCategories } from "@/pages/api/Services";
import { CategoriesData } from "@/pages/api/DataType";

async function Categories() {
  const categories: CategoriesData[] = await getAllCategories();

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>
      {
      categories.map((category: CategoriesData, index: number) => 
      (
        <CategoryItem
          key={index}
          source={category.Url_Image}
          title={category.Name}
          subtitle={category.Description}
        />
      ))}
    </div>
  );
}

export default Categories;
