import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Let's Get Pickin'!!</h1>
        <div className="orchard-background">
          <div className="apple-target">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
