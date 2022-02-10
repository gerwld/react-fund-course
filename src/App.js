import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    { id: "0k", title: "Title", body: "Some text" },
    { id: "1k", title: "Title", body: "Some text" },
    { id: "2k", title: "Title3", body: "Some text" },
    { id: "3k", title: "Title4", body: "Some textdfbdfb" },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  }

  const removePost = (id) => {
    setPosts(posts.filter(e => {
      if(e.id !== id) return e;
    }));
  }

  return (
    <div className="App">
      <PostForm create={createPost} posts={posts}/>
      <PostList remove={removePost} posts={posts} />
    </div>
  );
}

export default App;
