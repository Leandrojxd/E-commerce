import CategoryItem from "../molecules/CategoryItem";
import styles from "public/home.module.css";
import { CategoriesData, getAllCategories } from "@/pages/api/Services";

async function Categories() {
  const categories: CategoriesData[] = await getAllCategories();

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>
      {categories.map((category: any, index: number) => (
        <CategoryItem
          key={index}
          source={"/assets/CategoryImg.png"}
          title={category.Name}
          subtitle={category.Description}
        />
      ))}
    </div>
  );
}

export default Categories;
