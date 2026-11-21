import React from "react";
import ReactDOM from "react-dom/client";
import { Assignment2 } from "./Assignment2";
import {FoodApp} from "./FoodApp/FoodApp";

const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");

const jsxHeading = 
<h1 id="jsxHeading" style={{color: "blue"}}>
  Hello World from JSX!  
</h1>

const Title = () => <h1>I am here!!!!!</h1>

const ReactFunctionHeading = () => (
<div id="container">
  {Title()}
  <Title/>
  300 + 200 = {300 + 200}
  <h1 id="reactFunctionHeading" style={{color: "green"}}>
    Hello World from React Function!
  </h1>
  <Assignment2/>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
