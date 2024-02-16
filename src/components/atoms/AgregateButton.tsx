import { ReserveProduct, useShoppingCartContext } from '@/pages/api/DataContext'
import styles from 'public/home.module.css'
import { useEffect } from 'react';

function AgregateButton({totalQuantity}:{totalQuantity:number}) {
  const { currentProduct,addReserveProduct,setCurrentProduct } = useShoppingCartContext()
  const sendReserveProductInfo = () => {
    console.log("Agregate button inside send",totalQuantity)
    setCurrentProduct({
      productQuantity: String(totalQuantity),
    }); 
    addReserveProduct(currentProduct);
  };
  useEffect(() => {
    if(currentProduct.productQuantity !== ""){
      addReserveProduct(currentProduct)
    }
  }, [currentProduct.productQuantity])
  
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