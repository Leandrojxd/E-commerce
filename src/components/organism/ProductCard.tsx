import CustomImage from "../atoms/CustomImage"
import ProductDescription from "../molecules/ProductDescription"
import styles from 'public/home.module.css'

function ProductCard() {
  return (
    <div className={styles.product_card_style}>
        <ProductDescription title="CILINDRO DE ALUMINIO DE 1M3" brand="INEGAR" description="Cilindro de aluminio MED540 1M3 2021" price="$us 25.00"/>
        <div className={styles.product_card_img}>
          <CustomImage src='/assets/ProductImage.png' alt='ProductImage' />
        </div>
    </div>
  )
}

export default ProductCard