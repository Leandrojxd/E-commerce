import styles from 'public/home.module.css'
import UpdateTotalButton from '../atoms/UpdateTotalButton'

function TotalSection({totalQuantity,priceProduct}:{totalQuantity:number,priceProduct:number}) {
  return (
    <div className={styles.total_section_style}>
        <UpdateTotalButton totalQuantityToAgregate={priceProduct? totalQuantity * priceProduct : 0} />
        <p className={styles.text_style_button_white}>$us {priceProduct? totalQuantity * priceProduct : 0}</p>
    </div>
  )
}

export default TotalSection