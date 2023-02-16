import {ArrowsClockwise, ChatCircle, Heart} from 'phosphor-react'
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) { //As propriedades que eu passar para esse Tweet precisam seguir obrigatoriamente o formato da interface
  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/thayna-bezerra.png" alt="Thayna Bezerra" />
      
      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Thayna Bezerra</strong>
          <span>@thrummer</span>
        </div>
        
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle/>
            20
          </button>

          <button type='button'>
            <ArrowsClockwise/>
            20
          </button>

          <button type='button'>
            <Heart/>
            20
          </button>
        </div>
      </div>
    </Link>
  )
}