import styles from 'public/home.module.css'
import UpdateTotalButton from '../atoms/UpdateTotalButton'

function TotalSection() {
  return (
    <div className={styles.total_section_style}>
        <UpdateTotalButton/>
        <p className={styles.text_style_button_white}>$us 0.00</p>
    </div>
  )
}

export default TotalSection