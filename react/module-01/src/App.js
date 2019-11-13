import React from "react";
// , { Component }
import Title from "./components/Title/Title";

const App = () => (
  <>
    App
    <Title text="First" />
    <Title text="Third">
      <Title text="Second" />
      Children text
    </Title>
    <Title text="Fourth" color="blue" />
  </>
);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <Title />
//         <Title />
//         <Title />
//         <Title />
//       </div>
//     );
//   }
// }

export default App;
