import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import axios from 'axios';

const initialStories = [
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
];


function App() {

  const [searchTerm, setSearchTerm] = useLocalStorage('search', 'React');

  const [stories, setStories] = React.useState(initialStories);

  const url = "http://hn.algolia.com/api/v1/search?query=";

  React.useEffect(() => {

    fetch(`${url}${searchTerm}`)
    .then(response => response.json())
    .then(data => setStories(data.hits))
    .catch(error => console.log(error))

  }, [searchTerm])

  const handleChange = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
  }

  const deleteStory = (item) => {

    const updatedListOfStories = stories.filter(story => story != item);

    setStories(updatedListOfStories);
    
  }

  return (
    <div className="App">
      <div>
        <h1>My Hacker Stories</h1>
        <InputWithLabel id={"search"} onInputChange={handleChange}>Search: </InputWithLabel>
        <List stories={stories} term={searchTerm} deleteStory={deleteStory} />
      </div>
    </div>
  )
}

const List = ({ stories, term, deleteStory }) => {

  return (
    <ol>
    {stories.map(story => {
      if(Object.values(story).join(' ').includes(term)){
        return <Item key={story.objectID} item={story} deleteStory={deleteStory} />
      }
    })}
    </ol>
  )
}

const Item = ({item, deleteStory}) => {
   
  return (
    <li style={{textAlign: 'left'}}>
      <a href={item.url}>{item.title}</a>
      <p className="post-details">
      <span><strong>Author(s):</strong> {item.author}</span>
      <span><strong> Comments:</strong> {item.num_comments}</span>
      <span><strong> Points:</strong> {item.points}</span>
      <button onClick={() => deleteStory(item)}>Delete</button>
      </p>
    </li>
  );
}

const InputWithLabel = ({
  value,
  id, 
  type = "text",
  onInputChange,
  children
}) => {

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input value={value} id={id} type={type} onChange={onInputChange} />
    </>
  )
}

const useLocalStorage = (key, initialValue) => {
  
  const [value, setValue] = React.useState(window.localStorage.getItem(key) ?? initialValue);

  React.useEffect(() => {

    window.localStorage.setItem(key, value);

  }, [key, value])

  return [value, setValue];

}

export default App
