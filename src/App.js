import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    alert(
      // "Button clicked ❤️ by "+
       inputText);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Kunju Lover</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <br/>

      <br />

      <button onClick={handleClick} style={{ padding: "8px 16px" }}>
        Click Me
      </button>
    </div>
  );
}

export default App;
