import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  const list = [
    {
      title: "React", 
      url: "https://reactjs.org", 
      author: "Jordan Wilke", 
      num_comments: 3,
      points: 4, 
      objectID: 0,
    }, {
      title: "Redux", 
      url: "https://redux.js.org", 
      author: "Dan Abramov, Andrew Clark", 
      num_comments: 2, 
      points: 5, 
      objectID: 1,
    }
  ]

  return (
    <div className="App">
      <div>
        <h1>My Hacker Stories</h1>

        <ul>
          {list.map(item => {
            return (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                <p>Author(s): {item.author}</p>
                <p>Comments: {item.num_comments}</p>
                <p>Points: {item.points}</p>

              </li>

            );
          })}
        </ul>
      </div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
