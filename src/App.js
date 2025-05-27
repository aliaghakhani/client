import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://fullstack-app-8c2y.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Full-Stack App 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
