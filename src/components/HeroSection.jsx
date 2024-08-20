import React, { useState, useEffect } from 'react';
import TypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../assets/51004.jpg';
import LoadingSpinner from './LoadingSpinner';

// Styled-components for HeroSection
const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden; // To prevent scrollbar due to animations

  @media (max-width: 768px) {
    flex-direction: column; // Stack content vertically on smaller screens
    justify-content: center; // Center align for better visual balance
    padding: 20px;
    height: auto; // Adjust height for smaller screens
  }
`;

const TextContent = styled.div`
  flex: 1;
  color: ${(props) => props.theme.palette.text.primary};
  animation: fadeIn 2s ease-in;
  margin-left: 50px; // Adjust to move content from left to right

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  .typed-text {
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.text.secondary};
    margin: 20px 0;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.palette.text.secondary};
    margin-top: 20px;
    max-width: 500px;
  }

  button {
    margin-top: 20px;
    margin-right: 15px; // Add space between buttons
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: #fff;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.palette.primary.dark};
      transform: scale(1.05);
    }
  }

  .link-button {
    text-decoration: none;
    display: inline-block;
  }

  @media (max-width: 768px) {
    margin-left: 0; // Remove left margin on smaller screens
    text-align: center; // Center text on smaller screens
  }
`;

const Image = styled.img`
  max-width: 40%; /* Adjust size as needed */
  height: auto;
  border-radius: 50%; /* Make the image round */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  margin-right: 40px; /* Add margin to move image to the right */

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 3s infinite; /* Continuous animation */

  /* Media Queries for Responsiveness */
  @media (max-width: 1200px) {
    max-width: 30%;
  }

  @media (max-width: 992px) {
    max-width: 25%;
    margin-right: 20px; /* Less margin on medium screens */
  }

  @media (max-width: 768px) {
    max-width: 50%; /* Adjust size on smaller screens */
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-top: 20px; /* Add margin-top to create space between text and image */
  }

  @media (max-width: 576px) {
    max-width: 70%; /* Adjust size on extra small screens */
  }
`;

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <HeroSectionContainer>
      <TextContent>
        <h1>I'm Harish Kumar</h1>
        <TypingEffect
          className="typed-text"
          text={['Web Developer', 'MERN Dev']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor) => <span>{cursor}</span>}
        />
        <p>
          I am a full-stack developer specializing in the MERN stack. I have completed various projects, including building scalable web applications and integrating complex APIs. My expertise spans from front-end development to back-end server management.
        </p>
        <div>
          <Link className="link-button" to="/contact">
            <button>Contact</button>
          </Link>
          <Link className="link-button" target="_blank" to="https://drive.google.com/file/d/1aoVsWrIt94HIiX42QVYAr3qUA6LwFksf/view?usp=drivesdk">
            <button>Resume</button>
          </Link>
        </div>
      </TextContent>
      <Image src={img} alt="Harish Kumar" />
    </HeroSectionContainer>
  );
};

export default HeroSection;
