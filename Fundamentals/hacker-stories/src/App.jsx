import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [searchTerm, useSearchTerm] = React.useState('');

  
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

  const handleChange = (e) => {
    e.preventDefault();

    useSearchTerm(e.target.value);
    list
  }

  return (
    <div className="App">
      <div>
        <h1>My Hacker Stories</h1>
        <Search handleSearch={handleChange} term={searchTerm} />
        <List list={list} term={searchTerm} />
      </div>
    </div>
  )
}

const List = ({ list, term }) => {


  return (
    <ul>
    {list.map(item => {
      if(term && Object.values(item).join(' ').includes(term)){
        return <Item key={item.objectID} item={item} />
      }
    })}
    </ul>
  )

}


const Item = ({item}) => {
   
  return (
    <li style={{textAlign: 'left'}}>
      <a href={item.url}>{item.title}</a>
      <span> Author(s): {item.author}</span>
      <span> Comments: {item.num_comments}</span>
      <span> Points: {item.points}</span>
    </li>
  );
}

const Search = ({handleSearch, term}) => {

  
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input value={term} id="search" type="text" onChange={handleSearch} />
      <p><strong>The current search term is:</strong> {term}</p>
    </>
  );

}

export default App
