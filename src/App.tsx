import React from "react";

import "./App.css";
import { Greet } from "./Components/Greet";
import { Intro } from "./Components/Intro";

function App() {
  const Fullname = [
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "John",
      last: "Doe",
    },
  ];
  return (
    <div className="App">
      <Greet name="Nikita" messageCount={5} isLoggedIn={true} />
      <Intro name={Fullname} />
    </div>
  );
}

export default App;
