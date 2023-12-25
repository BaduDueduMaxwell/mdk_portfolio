import React from "react";
import Header2 from "../components/BlogComponent/Header2";
import "./blog.css";
import Post1 from "../components/BlogComponent/post1";

export default function Blog() {
  return (
    <div>
      <section className="news" id="news">
        <div className="container">
          <Header2 />
          <Post1 />
        </div>
      </section>
    </div>
  );
}
