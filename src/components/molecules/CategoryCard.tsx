import React from "react";
import CustomImage from "../atoms/CustomImage";
import styles from "public/home.module.css";
import Link from "next/link";

type CategoryItemProps = {
  source: string;
  title: string;
  subtitle: string;
  category_id:string;
};

function CategoryCard({ source, title, subtitle,category_id }: CategoryItemProps) {
  return (
    <Link href={`./Catalog/${category_id}C`}>
      <div className={styles.categoryItem}>
        <CustomImage
          src={source}
          alt="Category"
          width={45}
          height={45}
          className={styles.itemImg_style}
        />
        <h3 className={styles.title_text_style}>{title}</h3>
        <p className={styles.description_text_style}>{subtitle}</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
