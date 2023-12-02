import PlusMinusProduct from '../molecules/PlusMinusProduct'
import TotalSection from '../molecules/TotalSection'
import styles from 'public/home.module.css'

function FooterSingleProduct() {
  return (
    <div className={styles.footer_single_product_position}>
        <PlusMinusProduct/>
        <TotalSection/>
    </div>
  )
}

export default FooterSingleProduct