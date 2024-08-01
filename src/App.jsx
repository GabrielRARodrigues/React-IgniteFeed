import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non itaque beatae? Ullam sapiente nesciunt nam inventore eius explicabo ipsa unde illum impedit possimus quidem vitae sequi voluptatibus, iste rerum."
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  )
}
