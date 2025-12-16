import React,{useEffect} from 'react'

// useEffect hook

const App = () => {
  const [counter,setCounter]=React.useState(0);
  useEffect(()=>{
    console.log("useEffect called");
    document.title=`You clicked ${counter} times`;
  },[counter]);
  return (
   <>
    <button onClick={()=>setCounter(counter+1)} >Click</button>
   </>
  )
}

export default App
