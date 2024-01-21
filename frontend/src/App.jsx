import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  //an array and a function
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)

    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <h1>This is my frontend of the backend code</h1>
    <p>JOKES: {jokes.length}</p>

    {  //we will make the joke id as a unique value
      //here we are studying an api and seeing it returns id,title and content and accordingly
      //we are creating our values
      jokes.map((joke,index)=>(
        <div key={joke.id}>  
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
          
        </div>

      ))
    }
     
        
    </>
  )
}

export default App
