import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects.jsx";
import Blog from "./components/blog.jsx";
import Timeline from "./components/timeline";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <div id="colorlib-inner">
              <About />
              <Projects />
              <Timeline />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
