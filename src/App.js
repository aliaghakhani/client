
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://fullstack-app-8c2y.onrender.com/") // Ensure this is a valid backend URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My World</h1>
      <img 
        src="https://imgcdn.stablediffusionweb.com/2024/10/28/46ed59ea-8517-4092-b8cb-da34423e54c5.jpg" 
        alt="Cute Cat" 
        width="400"
      />
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

