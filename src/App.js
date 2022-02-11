import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import useFetching from "./hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import { usePagination } from "./hooks/usePagination";

function App() {
  const [posts, setPosts] = useState([
    { id: "0k", title: "Bitle", body: "Aome text" },
    { id: "1k", title: "Gitle", body: "bome text" },
    { id: "2k", title: "Aitle3", body: "Come text" },
    { id: "3k", title: "Citle4", body: "Lome textdfbdfb" },
  ]);
  const [filter, setFilter] = useState({ sort: "title", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const pagesArray = usePagination(totalPages);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

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

  const changePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <button onClick={fetchPosts}>Получить посты</button>
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
      {isPostsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      )}
      <div style={{ margin: "30px 0" }}>
        {pagesArray.map((el) => {
          return <span key={el} 
          onClick={() => changePage(el)}
          className={el === page ? 'pag_active' : 'pag_el'}>{el}</span>;
        })}
      </div>
    </div>
  );
}

export default App;
