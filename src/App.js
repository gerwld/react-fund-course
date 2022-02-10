import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: "0k", title: "Bitle", body: "Aome text" },
    { id: "1k", title: "Gitle", body: "bome text" },
    { id: "2k", title: "Aitle3", body: "Come text" },
    { id: "3k", title: "Citle4", body: "Lome textdfbdfb" },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(
      posts.filter((e) => {
        if (e.id !== id) return e;
      })
    );
  };

  const [filter, setFilter] = useState({ sort: "title", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("getsortedposts");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((e) => e.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} posts={posts} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
