import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chatbot from "./components/ChatBot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>AI Chatbot</h1>
      <Chatbot />
    </div>
  );
}

export default App;
