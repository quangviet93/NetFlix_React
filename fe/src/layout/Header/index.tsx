import { Logo, Navigation, Search, UserProfile } from '../../components'
import styles from './index.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <Navigation />
      <Search />
      <UserProfile />
    </header>
  )
}

