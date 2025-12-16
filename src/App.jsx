import React,{useEffect} from 'react'

// useEffect hook

const App = () => {
  const [counter,setCounter]=React.useState(0);
  const [counter2,setCounter2]=React.useState(0);
  // if dependency array is empty then useEffect will be called only once after initial render
  // if dependency array has some value then useEffect will be called only when that value changes
  // if dependency array is not provided then useEffect will be called after every render
  useEffect(()=>{
    console.log("useEffect called");
    document.title=`You clicked ${counter} times`;
  },[counter]);
  return (
   <>
    <button onClick={()=>setCounter(counter+1)} >Click1</button>
    <button onClick={()=>setCounter2(counter2+1)} >Click2</button>
   </>
  )
}

export default App
