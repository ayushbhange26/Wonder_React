import React,{useState, useEffect} from 'react'
import axios from 'axios'

// useEffect hook

const App = () => {
  // useEffect hook part 2 doing data fetching

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3004/users')
    .then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  return (
   <>
    <div>
      {users.map((user)=>(
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
   </>
  )
}

export default App
