import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogPostList from "../src/components/BlogPostList/BlogPostList";
import BlogPostDetails from "../src/components/BlogPostDetails/BlogPostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
