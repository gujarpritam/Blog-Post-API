import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBlogPost } from "../../slices/blogPostSlice";
import styles from "./BlogPostItem.module.css";

function BlogPostItem({ details, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showPost = (index) => {
    dispatch(setBlogPost(details));

    navigate(`/post/${index}`);
  };

  return (
    <div className={styles.postContainer} onClick={() => showPost(id + 1)}>
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
      <p>{details?.publishedAt}</p>
    </div>
  );
}

export default BlogPostItem;
