import styles from './index.module.scss'

export const Search = () => {
  return (
    <form id="search" className={styles.Search}>
      <input type="search" placeholder="Search for a title..." />
    </form>
  )
}

