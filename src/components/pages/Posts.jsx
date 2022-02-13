import React, { useEffect, useRef, useState } from "react";
import PostList from "../PostList";
import MyPagination from "../UI/pagination/MyPagination";
import "./../../styles/App.css";
import Loader from "../UI/Loader/Loader";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import { getPagesCount } from "../../utils/pages";
import PostService from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { usePosts } from "../../hooks/usePosts";
import { useObserver } from "../../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = useState([
    { id: "0k", title: "Bitle", body: "Aome text" },
    { id: "1k", title: "Gitle", body: "bome text" },
    { id: "2k", title: "Aitle3", body: "Come text" },
    { id: "3k", title: "Citle4", body: "Lome textdfbdfb" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

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

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} posts={posts} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {postsError && <div>Error {postsError}</div>}

      {isPostsLoading && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Loader />
        </div>
      )}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      <div ref={lastElement} style={{ height: "20px", backgroundColor: "red" }}></div>

      <MyPagination totalPages={totalPages} changePage={setPage} page={page} />
    </div>
  );
}

export default Posts;
