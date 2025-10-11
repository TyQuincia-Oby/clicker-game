import { useState } from 'react'
import './App.css'

function randomNumber(a,b){
  return Math.floor(Math.random() * (b-a) + a);
}

function App() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [appleSize, setappleSize] = useState(100)
  const [appleX, setAppleX] = useState(0)
  const [appleY, setAppleY] = useState(0)
  const appleStyle = {
    width: appleSize + "px",
    height: appleSize + "px",
    left: appleX + "px",
    top: appleY + "px" 
  }

  function clickTarget(event){
    console.log("Apple clicked")
    setScore(score + 1);
    event.stopPropagation();
    randomSize();
    randomSpot();
    
  }

  function missTarget(){
    console.log("Background clicked")
    setLives(lives - 1);
    randomSize();
    randomSpot();
  }

  function randomSize(){
    const randomSize = randomNumber(20,100);
    setappleSize(randomSize);
    console.log("Size: " + randomSize + "px" );
  }

  function randomSpot(){
    const appleX = randomNumber(0,400);
    const appleY = randomNumber(0, 400);
    setAppleX(appleX);
    setAppleY(appleY);
  }

 const statsStyle = {
    color: "whitesmoke",
    textAlign: "center",
    fontFamily: "Courier New, Courier, monospace",
    padding: "20px",
    borderRadius: "20px",
    
  }

  if (score <= 5){ 
    statsStyle.backgroundColor = "tomato";
  } else if (score <= 10){
    statsStyle.backgroundColor="lightgreen";
  } else if (score <= 15){
    statsStyle.backgroundColor="gold"
  } else if (score <= 20){
    statsStyle.backgroundColor="tan"
  } else if (score <= 25){
    statsStyle.backgroundColor="darkorange"
  }  else if (score <= 30){
    statsStyle.backgroundColor="darkgreen"
  }  else if (score <= 35){
    statsStyle.backgroundColor="darkred"
  }  
  
  return (
    <>
      <div className="full-page">
        <div className="stats" style={statsStyle}>
          <h1>Let's Get Pickin'!!</h1>
          <p>Score: {score} </p>
          <p>Lives: {lives} </p>
          
        </div>
        <div className="orchard-background" onClick={missTarget}>
          { score < 50 ? 
            <div className="apple-target" onClick={clickTarget} style={appleStyle}></div>
            : <h3 className="win">YOU WIN!!</h3>
          }
        </div>
      </div>
    </>
  )
}

export default App
