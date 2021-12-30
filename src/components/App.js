import React from "react";
import Header from "./Header";

function App() {
  const name1 = "Person1";
  const name2 = "Person2";

  return (
    <>
      <Header/>
      <h3>3a?</h3>
      <h3>{name1} & {name2}</h3>
      <p><em>issue description</em></p>
      <hr/>
    </>
  );
}

export default App;
