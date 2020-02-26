import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../context/Theme";
import ThemeSwitcher from "../../component/ThemeSwitcher";

const HomePage = () => {
  const { switchTheme, currentTheme } = useContext(ThemeContext);
  return (
    <Container currentTheme={currentTheme}>
      <div className="switch-container">
        <ThemeSwitcher changeTheme={switchTheme} currentTheme={currentTheme} />
      </div>
      <div className="content">
        <div className="left-content">
          <h1 className="logo archivo">Dink Url shortner</h1>
          <h4 className="sub-text">
            Get your tiny url in seconds. Copy and paste the url here and we
            will give you a short and sweet one. All for $0.
          </h4>
          <form>
            <input placeholder="Paste your link here..." />
            <button className="send-button">Shorten</button>
          </form>
        </div>
        <div className="right-content">
          <img
            className="hero-image"
            src={
              currentTheme === "light"
                ? require("../../assets/images/hero-image.png")
                : require("../../assets/images/hugo-bad.png")
            }
            alt="hero-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
