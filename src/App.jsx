import { Post } from './components/Post'

import './global.css'

export function App() {
  return (
    <div>
      <Post
        author="Gabriel Rodrigues"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non itaque beatae? Ullam sapiente nesciunt nam inventore eius explicabo ipsa unde illum impedit possimus quidem vitae sequi voluptatibus, iste rerum."
      />
      <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
    </div>
  )
}
