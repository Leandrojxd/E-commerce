import { usePriceContext } from '@/pages/api/DataContext'
import styles from 'public/home.module.css'

function AgregateButton({totalQuantityToAgregate}:{totalQuantityToAgregate:number}) {
  const {setContextDataPrice} = usePriceContext();
  const sendPriceToShoppingCart = () => {
    const priceToSend = String(totalQuantityToAgregate)
    setContextDataPrice(priceToSend);
  }
  return (
    <div>
        <button className={styles.agregate_style_button} onClick={()=>{console.log(totalQuantityToAgregate)}}>
            <p className={styles.text_style_button_white}>
              agregar
            </p>
        </button>
    </div>
  )
}

export default AgregateButton