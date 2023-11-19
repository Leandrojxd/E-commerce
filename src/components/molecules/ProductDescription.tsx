import styles from 'public/home.module.css'

type ProductDescriptionProps = {
    title:string,
    brand:string,
    description:string,
    price: string,
}

function ProductDescription({title, brand, description,price}: ProductDescriptionProps) {
  return (
    <div className={styles.product_description_style}>
        <h1 className={styles.title_card}>{title}</h1>
        <p className={styles.brand_card}>{brand}</p>
        <p className={styles.description_card}>{description}</p>
        <h1 className={styles.price_card}>{price}</h1>
    </div>
  )
}

export default ProductDescription