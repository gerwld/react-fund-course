import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton.jsx";

export default function PostForm({ posts, create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: posts.length + "k",
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form onSubmit={addNewPost}>
      <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type='text' placeholder='Название поста' />
      <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type='text' placeholder='Описание поста' />

      <MyButton>Создать пост</MyButton>
    </form>
  );
}
