import { useState } from 'react'
import './App.css'

function randomNumber(a,b){
  return Math.floor(Math.random() * (b-a) + a);
}
function App() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [appleSize, setappleSize] = useState(100)
  const appleStyle = {
    width: appleSize + "px",
    height: appleSize + "px"
  }

  function clickTarget(event){
    console.log("Apple clicked")
    setScore(score + 1);
    event.stopPropagation();
    randomSize();
  }

  function missTarget(){
    console.log("Background clicked")
    setLives(lives - 1);
    randomSize();
  }

  function randomSize(){
    const randomSize = randomNumber(20,100);
    setappleSize(randomSize);
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
          <div className="apple-target" onClick={clickTarget} style={appleStyle}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
