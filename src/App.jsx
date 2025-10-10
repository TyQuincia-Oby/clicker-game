import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  function clickTarget(){
    setScore(score + 1);
    {/*clickTarget.stopPropagation(); -make sure this is correct, then uncomment*/} 
  
  }

  return (
    <>
      <div className="full-page">
        <div className="stats">
          <h1>Let's Get Pickin'!!</h1>
          
          <p>Score: {score} </p>
        </div>
        <div className="orchard-background">
          <div className="apple-target" onClick={clickTarget}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
