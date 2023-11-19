import styles from 'public/home.module.css'

function SortButton() {
  return (
    <div>
        <button className={styles.sort_button_style}>Sort</button>
    </div>
  )
}

export default SortButton