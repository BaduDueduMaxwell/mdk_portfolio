import React from "react";
import Home from "./Pages/Home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Project from "./pages/projects";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Blog />
      <Project />
      <Footer />
    </div>
  );
}
