import React, { useContext, useState } from "react";
import { withApollo } from "react-apollo";
import { Container } from "./styles";
import HeroText from "../../component/HeroText";
import { ThemeContext } from "../../context/Theme";
import ThemeSwitcher from "../../component/ThemeSwitcher";
import UrlForm from "../../component/UrlForm";
import { CREATE_SHORT_URL } from "./queries";

const HomePage = ({ client }) => {
  const { switchTheme, currentTheme } = useContext(ThemeContext);
  const [originalUrl, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleChange = e => {
    setUrl(e.target.value);
  };

  const getShortUrl = async () => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_SHORT_URL,
        variables: { original: originalUrl }
      });
      setUrl("");
      setNewUrl(`http://localhost:3000/${data.createLink.short}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container currentTheme={currentTheme}>
      <div className="switch-container">
        <ThemeSwitcher changeTheme={switchTheme} currentTheme={currentTheme} />
      </div>
      <div className="content">
        <div className="left-content">
          <HeroText currentTheme={currentTheme} />
          <UrlForm
            handleChange={handleChange}
            newUrl={newUrl}
            getShortUrl={getShortUrl}
            originalUrl={originalUrl}
          />
        </div>
        <div className="right-content">
          <img
            className="hero-image"
            src={
              currentTheme === "light"
                ? require("../../../assets/images/hero-image.png")
                : require("../../../assets/images/hugo-bad.png")
            }
            alt="hero-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default withApollo(HomePage);
