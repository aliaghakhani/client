
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #141E30, #243B55);
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const MessageBox = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://fullstack-app-8c2y.onrender.com/") // Replace with actual API
      .then((res) => res.json())
      .then((data) => setMessage(data.message || "No message received"))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Container>
      <Title>🌍 Welcome to My World 🌍</Title>
      <Image 
        src="https://i.pinimg.com/736x/1b/fc/e9/1bfce97a85aecdd0c0a0cd48348c15ef.jpg" 
        alt="Cute Cat" 
      />
      <MessageBox>Backend says: {message}</MessageBox>
    </Container>
  );
}

export default App;
