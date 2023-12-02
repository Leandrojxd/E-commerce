import styles from 'public/home.module.css'

function AgregateButton() {
  return (
    <div>
        <button className={styles.agregate_style_button}>
            <p className={styles.text_style_button_white}>
              agregar
            </p>
        </button>
    </div>
  )
}

export default AgregateButton