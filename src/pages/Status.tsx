import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente sunt, ratione natus quo atque consequatur omnis assumenda aspernatur facilis architecto enim est, illum beatae nihil porro molestiae unde? Quam!" />

      <Separator/>

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/thayna-bezerra.png" alt="Thayna Bezerra" />
          <textarea id="tweet" placeholder="Tweet your answer?" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}