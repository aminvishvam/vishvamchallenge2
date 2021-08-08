import './App.css';
import React, { useState, useEffect } from 'react';
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //state stuff
  const [inputName, setInputNext] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPost, setInputPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getlocalposts();
  }, [])

  useEffect(() => {
    savelocalStorage();
  }, [posts])

  const savelocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }

  const getlocalposts = () => {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem('posts'))
      setPosts(todolocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Post Your blogs here</h1>
      </header>
      <Form
        inputName={inputName}
        posts={posts}
        setPosts={setPosts}
        setInputName={setInputNext}
        inputEmail={inputEmail}
        inputPost={inputPost}
        setEmail={setInputEmail}
        setPost={setInputPost}
        setResult={setSearchResult}
      />

      {searchResult ? <TodoList setPosts={setPosts} posts={searchResult} /> : <TodoList setPosts={setPosts} posts={posts} />}
    </div>
  );
}

export default App;
