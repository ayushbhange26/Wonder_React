import React,{useReducer} from 'react'



const App = () => {

  // now to learn useReducer hook

  // ye hamari initial state hogi
  const initialState = {
    count : 0
  }
  // reducer function jo state or action lega
  const reducer = (state, action) => {
    switch(action.type){
      case "INCREMENT":
        return {count :state.count + 1};
      case "DECREMENT":
        return {count :state.count - 1};
      default:
        return state;  
    }
  }
   const [state,dispatch] = useReducer(reducer, initialState);
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
