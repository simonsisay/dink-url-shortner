import React from "react";
import { Container } from "./styles";

const HeroText = ({ currentTheme }) => {
  return (
    <Container currentTheme={currentTheme}>
      <h1 className="logo">Dink Url shortner</h1>
      <h4 className="sub-text">
        Get your tiny url in seconds. Copy and paste the url here and we will
        give you a short and sweet one. All for $0.
      </h4>
    </Container>
  );
};

export default HeroText;
