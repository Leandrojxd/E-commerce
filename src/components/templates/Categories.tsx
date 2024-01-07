import CategoryItem from "../molecules/CategoryItem";
import styles from "public/home.module.css";
import { getAllCategories, getImageByName } from "@/pages/api/Services";
import { CategoriesData } from "@/pages/api/DataType";

async function Categories() {
  const categories: CategoriesData[] = await getAllCategories();
  const imageCategory = getImageByName("ProductsImage","Categories/CategoryImg.png")
  
  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>
      {
      categories.map((category: any, index: number) => 
      (
        <CategoryItem
          key={index}
          source={imageCategory}
          title={category.Name}
          subtitle={category.Description}
        />
      ))}
    </div>
  );
}

export default Categories;
