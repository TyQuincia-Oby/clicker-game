import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)

  function clickTarget(event){
    console.log("Apple clicked")
    setScore(score + 1);
    event.stopPropagation();
  }

  function missTarget(){
    console.log("Background clicked")
    setLives(lives - 1);

    
  }

  return (
    <>
      <div className="full-page">
        <div className="stats">
          <h1>Let's Get Pickin'!!</h1>
          <p>Score: {score} </p>
          <p>Lives: {lives} </p>
        </div>
        <div className="orchard-background" onClick={missTarget}>
          <div className="apple-target" onClick={clickTarget}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
