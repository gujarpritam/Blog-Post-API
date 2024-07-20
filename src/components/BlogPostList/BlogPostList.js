import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPostItem from "../BlogPostItem/BlogPostItem";
import styles from "./BlogPostList.module.css";

function BlogPostList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let records = data.slice(firstIndex, lastIndex);
  let [npage, setNPage] = useState(0);
  let [numbers, setNumbers] = useState([]);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e16e9d3f43e467381619347d950903f"
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(typeof res?.articles);
        console.log(res?.articles);
        setData([...res?.articles]);
        records = res?.articles.slice(firstIndex, lastIndex);
        let totalPage = Math.ceil(res?.articles.length / recordsPerPage);
        setNPage(totalPage);
        let numArray = numbers;
        numArray = [...Array(totalPage + 1).keys()].slice(1);
        setNumbers([...numArray]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      {records?.map((item, index) => {
        return <BlogPostItem key={index} details={item} id={index} />;
      })}

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>

          {numbers?.map((n, i) => {
            return (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogPostList;
