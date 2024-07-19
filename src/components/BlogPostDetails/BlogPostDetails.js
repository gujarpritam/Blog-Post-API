import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBlogPost } from "../../slices/blogPostSlice";
import styles from "./BlogPostDetails.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function BlogPostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogPostState = useSelector((state) => state.blogPost);
  const [details, setDetails] = useState({ ...blogPostState.value });

  console.log(id);
  console.log(details);
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.box}>
          <div className={styles.headingBox}>
            <h2>Title</h2>
          </div>
          {details?.title ? (
            <p className={styles.title}>{details?.title}</p>
          ) : (
            <p>Not Available</p>
          )}
        </div>

        <div className={styles.box}>
          <div className={styles.headingBox}>
            <h2>Description</h2>
          </div>
          {details?.description ? (
            <p className={styles.description}>{details?.description}</p>
          ) : (
            <p>Not Available</p>
          )}
        </div>

        <div className={styles.contentBox}>
          <div className={styles.headingBox}>
            <h2>Content :</h2>
          </div>
          {details?.content ? (
            <p className={styles.content}>{details?.content}</p>
          ) : (
            <p>Not Available</p>
          )}
          <img src={details?.urlToImage} className={styles.image} alt="image" />
        </div>

        <div className={styles.publishDetails}>
          <div className={styles.author}>
            <h4>Author: </h4>

            {details?.author ? (
              <p className={styles.authorName}>{details?.author}</p>
            ) : (
              <p>Not Available</p>
            )}
          </div>

          <div className={styles.publishInfo}>
            <h4>Published At: </h4>

            {details?.publishedAt ? (
              <p className={styles.publishedContent}>{details?.publishedAt}</p>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostDetails;
