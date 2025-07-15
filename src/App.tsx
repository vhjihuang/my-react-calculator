import { useState } from 'react'
import './App.css'

const button = (id: string, num: number | string) => <button id={id}>{num}</button>

function App() {

  return (
    <>
      <div className="container">
        <div id="display" className="display">0</div>
        <div className="buttons">
          { button("zero", 0) }
          { button("one", 1) }
          { button("two", 2) }
          { button("three", 3) }
          { button("four", 4) }
          { button("five", 5) }
          { button("six", 6) }
          { button("seven", 7) }
          { button("eight", 8) }
          { button("nine", 9) }
          { button("add", "+") }
          { button("subtract", "-") }
          { button("multiply", "*") }
          { button("divide", "/") }
          { button("decimal", ".") }
          { button("equals", "=") }
          { button("clear", "C") }
        </div>
      </div>
    </>
  )
}

export default App
