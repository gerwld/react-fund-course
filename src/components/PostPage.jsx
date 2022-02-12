import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import { useState } from "react";
import Loader from "./UI/Loader/Loader";

function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, mesError] = useFetching(async (id) => {
    const response = await PostService.getComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [params.id]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post_content">
          {error ? <div className="error">{error}</div> : ""}
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Комментарии:</h1>
          {comments.map((comm) => {
            return (
              <div key={comm.id + "_comment"} className="comment_block">
                <div className="name">Name: {comm.name}</div>
                <div className="email">Email: {comm.email}</div>
                <div className="name">Comment: {comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostPage;
