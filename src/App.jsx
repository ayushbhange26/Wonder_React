import React,{useState} from 'react'

const App = () => {
  const [Data,setData] = useState({
    loading : false,
    counter : 0,
    users : []
  })
  function onHandleClick(){
    setData({...Data, counter : Data.counter + 1})
  }
  return (
   <>
     <h1>{Data.counter}</h1>
     <input type="text" />
     <button onClick={onHandleClick}>Increase</button>
   </>
  )
}

export default App
