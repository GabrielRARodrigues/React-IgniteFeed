import styles from './Avatar.module.css'

export function Avatar({ src, noBorder = false }) {
  return (
    <img
      className={noBorder ? styles.avatarWithoutBorder : styles.avatar}
      src={src}
    />
  )
}
