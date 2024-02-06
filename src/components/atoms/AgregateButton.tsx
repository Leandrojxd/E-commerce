import { useShoppingCartContext } from '@/pages/api/DataContext'
import styles from 'public/home.module.css'

function AgregateButton({totalQuantity}:{totalQuantity:number}) {
  const { shoppingCartReserveProducts,currentProduct,addReserveProduct,setCurrentProduct } = useShoppingCartContext();
  const sendReserveProductInfo = () => {
    setCurrentProduct( { ...currentProduct , productQuantity: String(totalQuantity) });
    addReserveProduct(currentProduct);
  };
  console.log(shoppingCartReserveProducts)
  return (
    <div>
        <button className={styles.agregate_style_button} onClick={sendReserveProductInfo}>
            <p className={styles.text_style_button_white}>
              agregar
            </p>
        </button>
    </div>
  )
}

export default AgregateButton