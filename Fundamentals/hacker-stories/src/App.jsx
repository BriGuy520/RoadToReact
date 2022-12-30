import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const welcome = {
    greeting: "Hey", 
  }

  function Name(title){
    return title;
  }

  const listOfPeople = ["Ashley", "Alex", "Lauren", "Carol", "Madeleine", "Douglas"];

  return (
    <div className="App">
      <div>
        <h1>{welcome.greeting}, {Name("React")}!</h1>
        <ul>
          {listOfPeople.map(person => <li>Hello, {person}</li>)}
        </ul>
      </div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
