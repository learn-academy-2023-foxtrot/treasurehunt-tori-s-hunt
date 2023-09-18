import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

const handleClick = (selectedIndex)
// return something
  alert(selectedIndex)
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
    </>
  )
}

export default App
