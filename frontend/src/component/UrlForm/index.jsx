import React, { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { Container } from "./styles";

const UrlForm = ({ newUrl, originalUrl, getShortUrl, handleChange }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Container currentTheme={currentTheme}>
      <div className="form">
        <input
          value={originalUrl}
          name="originalUrl"
          onChange={handleChange}
          placeholder="Paste your link here..."
        />
        <button onClick={getShortUrl} className="send-button">
          Shorten
        </button>
      </div>
      {newUrl && (
        <p className="new-url">
          New Link:
          <a target="_blank" href={newUrl}>
            {newUrl}
          </a>
        </p>
      )}
    </Container>
  );
};

export default UrlForm;
