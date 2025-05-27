
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5d8GmE4Qx_cPm_6CKbZ-WiT2qUI8aM9GQmA&s" 
        alt="Cute Cat" 
        width="400"
      />
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

