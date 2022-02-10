import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

export default function PostList({ posts, remove, ...props }) {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Posts not found.</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((e) => {
          return (
            <CSSTransition
            key={e.id}
            timeout={200}
            classNames="posts"
          >
          <PostItem remove={remove} post={e}  />
          </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
