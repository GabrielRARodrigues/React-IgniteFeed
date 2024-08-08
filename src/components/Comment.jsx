import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

import { Avatar } from './Avatar'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar noBorder src="https://github.com/GabrielRARodrigues.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Rodrigues</strong>
              <time
                title="1 de Agosto às 10:30h"
                dateTime="2024-08-01 10:30:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
