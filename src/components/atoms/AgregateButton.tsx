import { ReserveProduct, useShoppingCartContext } from '@/pages/api/DataContext'
import styles from 'public/home.module.css'
import { useEffect } from 'react';

function AgregateButton({totalQuantity}:{totalQuantity:number}) {
  const { currentProduct,addReserveProduct,setCurrentProduct,shoppingCartReserveProducts } = useShoppingCartContext()
  const sendReserveProductInfo = () => {
    setCurrentProduct({
      productQuantity: String(totalQuantity),
    }); 
    addReserveProduct(currentProduct);
  };
  
  useEffect(()=>{
    localStorage.setItem('shoppingCartReserveProducts',JSON.stringify(shoppingCartReserveProducts));
  },[shoppingCartReserveProducts])

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