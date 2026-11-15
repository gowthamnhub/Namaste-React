import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello world from React!"
);

const parent = React.createElement(
  "div",
  {
    id: "parent"
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am Gowthaman"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag from child2"),
      React.createElement("h2", {}, "I am an h2 tag from child2"),
    ]),
  ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
