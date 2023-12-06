import CustomImage from "../atoms/CustomImage"
import ProductDescription from "../molecules/ProductDescription"
import styles from 'public/home.module.css'
import Link from "next/link"

type ProductCardProps = {
  title:string,
  brand:string,
  description:string,
  price:string,

}

function ProductCard({ title, brand, description, price }: ProductCardProps) {
  const handleClick = () => {
    console.log("ENLACE")
  };

  return (
    <div className={styles.product_card_link} onClick={handleClick}>
      <div className={styles.product_card_style}>
        <ProductDescription title={title} brand={brand} description={description} price={`$us ${price}.00`} />
        <div className={styles.product_card_img}>
          <CustomImage src='/assets/ProductImage.png' alt='ProductImage' />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;