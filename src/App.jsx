import React from 'react'
import { useRef } from 'react'

const App = () => {
  const textInput = useRef();
  // it can't re-render the page when the value changes
  const textHandle = () => {
    console.log(textInput.current);
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={textHandle}>
        Focus the input
      </button>
      
    </div>
  )
}

export default App
