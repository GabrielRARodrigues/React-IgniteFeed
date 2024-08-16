import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  alt?: string
  noBorder?: boolean
}

export function Avatar({ src, alt, noBorder = false }: AvatarProps) {
  return (
    <img
      className={noBorder ? styles.avatarWithoutBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
