import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./views";

function App() {
  const [count, setCount] = useState(0);

  return <Landing />;
}

export default App;
