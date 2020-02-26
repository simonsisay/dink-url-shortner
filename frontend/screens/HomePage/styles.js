import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
    from{
        transform:translateY(600px);
    }
    to{
        transform:translateY(0px)
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  background-color: ${props => props.theme.backgroundColor};
  background-image: ${props => props.theme.backgroundImage};
  margin: 0px;
  display: flex;
  flex-direction: column;

  .switch-container {
    padding-top: 20px;
    align-self: flex-end;
    padding-right: 30px;
  }

  .content {
    display: flex;
  }

  .left-content {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5vw;
    margin-top: ${props => (props.currentTheme === "dark" ? "6vh" : "0px")};
  }

  .right-content {
    max-width: 50vw;
    display: flex;

    .hero-image {
      width: 45vw;
      animation: ${slideUp} 1s ease-in-out;
    }
  }

  h1 {
    font-family: "Archivo Black";
    margin: 0px;
    font-weight: 400;
    font-size: 3.5em;
    text-transform: uppercase;
    color: ${props => props.theme.mainHeaderColor};
  }

  h4 {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 1.3em;
    margin: 0px;
    margin-top: 12px;
    margin-bottom: 40px;
    line-height: 30px;
    color: ${props => props.theme.subHeaderColor};
  }

  form {
    display: flex;
  }

  input {
    flex: 1;
    width: 65%;
    height: 50px;
    padding: 12px;
    border: none;
    background: ${props => props.theme.inputBackground};
    box-shadow: ${props => props.theme.boxShadow};
    font-size: 1.3em;
    font-family: "Montserrat";
  }

  button {
    width: 25%;
    height: 100%;
    margin-bottom: 12px;
    border: none;
    font-family: "Archivo Black";
    font-size: 1.4em;
    letter-spacing: 0px;
    color: ${props =>
      props.currentTheme === "light" ? "#ffeeee" : props.theme.darkBackground};

    cursor: pointer;
    background: ${props =>
      props.currentTheme === "light"
        ? props.theme.darkBackground
        : props.theme.lightBackground};
  }
`;
