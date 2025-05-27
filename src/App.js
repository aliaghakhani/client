
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
      <h1>خوش آمدید به دنیای من </h1>
      <img 
        src="https://i.pinimg.com/736x/1b/fc/e9/1bfce97a85aecdd0c0a0cd48348c15ef.jpg" 
        alt="Cute Cat" 
        width="400"
      />
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

