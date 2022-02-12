import React from "react";
import { useNavigate } from "react-router";
import "../styles/App.css";
import MyButton from './UI/button/MyButton';

export default function PostItem({ post, remove}) {
  let navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id + '. '}{post.title}</strong>
        <div>{post.body}</div>
        <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/id${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post.id)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}
