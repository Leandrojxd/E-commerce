import styles from 'public/home.module.css'
import UpdateTotalButton from '../atoms/AgregateButton'
import AgregateButton from '../atoms/AgregateButton'

function TotalSection({totalQuantity,priceProduct}:{totalQuantity:number,priceProduct:number}) {
  return (
    <div className={styles.total_section_style}>
        <AgregateButton totalQuantity={totalQuantity} />
        <p className={styles.text_style_button_white}>$us {priceProduct? totalQuantity * priceProduct : 0}</p>
    </div>
  )
}

export default TotalSection