import styles from 'public/home.module.css'

function NoResults() {
  return (
    <div className={styles.no_results_style}>
        <p className={styles.no_results_text_style}>Uhm, al parecer no tenemos lo que buscas por el momento 😕</p>
    </div>
  )
}

export default NoResults