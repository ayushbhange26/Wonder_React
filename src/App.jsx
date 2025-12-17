import React,{useEffect, useReducer} from 'react'



const App = () => {

  // now to learn useReducer hook

  // ye hamari initial state hogi
  const initialState = {
    count : 0,
    isLoading : false,
  }
  // reducer function jo state or action lega
  const reducer = (state, action) => {
    switch(action.type){
      case "INCREMENT":
        // return {...state,count :state.count + 1};  // aise bhi likh skte hai multiple state hone pe
        return {...state,count :state.count + 1,isLoading:true};
      case "DECREMENT":
        return {count :state.count - 1};
        // aur default mein normal state return krdega
      default:
        return state;  
    }
  }
  const [state,dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    console.log("Re-render page")

  },[state.isLoading])
  
  return (
   
   <>
    <h1>{state.count}</h1>
    {/* onclick pe hum dispatch function call krenge jisse apna action jayega */}
    <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
    <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
   </>
  )
}

export default App
