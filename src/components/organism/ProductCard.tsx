import CustomImage from "../atoms/CustomImage"
import ProductDescription from "../molecules/ProductDescription"
import styles from 'public/home.module.css'

function ProductCard() {
  return (
    <div >
        <ProductDescription title="CILINDRO DE ALUMINIO" brand="INEGAR" description="Cilindro de aluminio MED" price="$us 25.00"/>
        <CustomImage src='/assets/ProductImage.png' alt='ProductImage' />
    </div>
  )
}

export default ProductCard