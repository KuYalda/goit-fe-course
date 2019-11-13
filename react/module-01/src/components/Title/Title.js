import React from "react";

// const Title = props => <h1>{props.text + "!"}</h1>;

const Title = ({ text, color, children }) => (
  <h1 style={{ backgroundColor: color }}>
    {text + "!"}
    {children}
  </h1>
);

// const Title = props =>
//   console.log("props", props) || <h1>{props.text + "!"}</h1>;

export default Title;
