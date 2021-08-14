import "./App.scss";
import React, { useState, useEffect } from "react";
import Display from "./components/display/Display";

function App() {
  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     console.log(e.key);
  //     // if(e.key === )
  //   });
  // }, []);

  return (
    <div id="App">
      <div id="drum-machine">
        <Display />
      </div>
    </div>
  );
}

export default App;
