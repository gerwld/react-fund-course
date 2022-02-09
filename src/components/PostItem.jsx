import React from "react";
import "../styles/App.css";

export default function PostItem({ post, keyY }) {

  return (
    <div key={keyY} className="post">
      <div className="post__content">
        <strong>{post.title}</strong>
        <div>{post.body}</div>
        <div className="post__btns">
          <button className="delete">Удалить</button>
        </div>
      </div>
    </div>
  );
}
