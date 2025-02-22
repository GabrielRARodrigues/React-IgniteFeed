import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, IPost } from './components/Post'

interface Post extends IPost {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GabrielRARodrigues.png',
      name: 'Gabriel Rodrigues',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#novoprojeto #nlw #rocketseat'
      }
    ],
    publishedAt: new Date('2024-08-01 10:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala pessoal 👋'
      },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#uiux #userexperience'
      }
    ],
    publishedAt: new Date('2024-08-05 10:30:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
