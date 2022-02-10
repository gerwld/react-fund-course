import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: "0k", title: "Bitle", body: "Aome text" },
    { id: "1k", title: "Gitle", body: "bome text" },
    { id: "2k", title: "Aitle3", body: "Come text" },
    { id: "3k", title: "Citle4", body: "Lome textdfbdfb" },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(
      posts.filter((e) => {
        if (e.id !== id) return e;
      })
    );
  };

  const [selectedSort, setSelect] = useState('title');
  const [searchQuery,setSearchQuery] = useState('');
  

  const changeSelect = (sort) => {
    setSelect(sort);
  }

  const sortedPosts = useMemo(() => {
    console.log('getsortedposts');
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));
  },[searchQuery, sortedPosts])

  return (
    <div className="App">
      <PostForm create={createPost} posts={posts} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput placeholder="Поиск..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <Select value={selectedSort} onChange={changeSelect} defaultValue="Сортировка по:" options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
          ]} />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts yet.</h1>
      )}
    </div>
  );
}

export default App;
