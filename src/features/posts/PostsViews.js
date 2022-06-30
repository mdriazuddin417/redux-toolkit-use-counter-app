import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsViews = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Post View</h1>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article>
                <h5>{post.title}</h5>
                <h5>{post.body}</h5>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsViews;
