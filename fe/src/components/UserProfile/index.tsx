import styles from './index.module.scss'

export const UserProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <div className={styles.UserProfile__user}>
        <div className={styles.UserProfile__user__name}>Jack Oliver</div>
        <div className={styles.UserProfile__user__image}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" />
        </div>
      </div>
      <div className={styles.UserProfile__menu}>
        <div className={styles.UserNavigation}>
          <ul>
            <li>Your Account</li>
            <li>Help Center</li>
            <li>Sign out of Netflix</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

