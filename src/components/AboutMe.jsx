import React from 'react';
import styled from 'styled-components';
import img from '../assets/51004.jpg';  // Replace with your image path

// Styled components
const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #121212;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #ff7e00;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const RightSide = styled.div`
  flex: 2;
  padding: 20px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
    line-height: 1.6;
    animation: fadeIn 1s ease-out;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    &:nth-child(4) {
      animation-delay: 0.6s;
    }

    &:nth-child(5) {
      animation-delay: 0.8s;
    }

    &:nth-child(6) {
      animation-delay: 1s;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #ff7e00;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e06600;
  }
`;

const AboutMe = () => {
  return (
    <AboutSectionContainer id="about">
      <SectionHeading>About Me</SectionHeading>
      <ContentWrapper>
        <LeftSide>
          <img src={img} alt="Harish Kumar" />
        </LeftSide>
        <RightSide>
          <p>Hi, I'm Harish Kumar, a passionate Full-Stack Developer.</p>
          <p>I hold a Bachelor's degree in Mechanical Engineering.</p>
          <p>I love creating web applications that are both functional and aesthetically pleasing.</p>
          <p>My expertise includes working with JavaScript, React, Node.js, and various modern web technologies.</p>
          <p>I'm fascinated by technology and am always eager to learn and implement new ideas.</p>
          <p>I'm looking forward to collaborating and creating something amazing with you!</p>
          <ContactButton href="/contact">Get in Touch</ContactButton>
        </RightSide>
      </ContentWrapper>
    </AboutSectionContainer>
  );
};

export default AboutMe;
