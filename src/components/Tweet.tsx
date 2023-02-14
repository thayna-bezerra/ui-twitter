interface TweetProps { //Propriedade do componente Tweet
  user: string
  children: string //content
  likes?: number
}

const tweetStyles = {
  borderRadius: 8
}

export function Tweet(props: TweetProps) { //As propriedades que eu passar para esse Tweet precisam seguir obrigatoriamente o formato da interface
  return (
    <div className="tweet" style={tweetStyles}>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  )
}