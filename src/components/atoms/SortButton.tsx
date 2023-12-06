import styles from 'public/home.module.css'
import CustomImage from './CustomImage'

function SortButton() {
  return (
    <div>
        <button className={styles.sort_button_style}>
          <CustomImage src='/assets/sort.png' alt='SortIcon' width={24} height={25} className={styles.sort_icon_style}/>
        </button>
    </div>
  )
}

export default SortButton