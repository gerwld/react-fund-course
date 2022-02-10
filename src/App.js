import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: "0k", title: "Title", body: "Some text" },
    { id: "1k", title: "Title", body: "Some text" },
    { id: "2k", title: "Title3", body: "Some text" },
    { id: "3k", title: "Title4", body: "Some textdfbdfb" },
  ]);

  const bodyInputRef = useRef(0);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: posts.length + 'k', title: post.title, body: post.body }]);
    setPost({title: '', body: ''});
  };

  return (
    <div className="App">
      <form onSubmit={addNewPost}>
        <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder="Название поста" />
        <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type="text" placeholder="Описание поста" />

        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
