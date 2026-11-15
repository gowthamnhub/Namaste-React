import React from "react";
export function Assignment2() {

  const Header = React.createElement("div", {className: "title"},
    React.createElement("h1", {}, "H1"),
    React.createElement("h2", {}, "H2"),
    React.createElement("h3", {}, "H3")
  )


  return (
    <div className="title">
      {/* {Header} */}
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
    </div>
  );
}

