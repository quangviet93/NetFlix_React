import styles from './index.module.scss'

export const Navigation = () => {
  return (
    <div id="navigation" className={styles.Navigation}>
      <nav>
        <ul>
          <li>Browse</li>
          <li>My list</li>
          <li>Top picks</li>
          <li>Recent</li>
        </ul>
      </nav>
    </div>
  )
}

