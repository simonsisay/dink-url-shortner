import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
    from{
        transform:translateY(-40px);
    }
    to{
        transform:translateY(0px)
    }
`;

export const Container = styled.div`
  .form {
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
    z-index: 10;
  }

  button {
    width: 25%;
    height: 74px;
    margin-bottom: 12px;
    border: none;
    font-family: "Archivo Black";
    font-size: 1.4em;
    letter-spacing: 0px;
    color: ${props =>
      props.currentTheme === "light" ? "#ffeeee" : props.theme.darkBackground};
    z-index: 100;
    cursor: pointer;
    background: ${props =>
      props.currentTheme === "light"
        ? props.theme.darkBackground
        : props.theme.lightBackground};
  }

  .new-url {
    animation: ${slideDown} 0.8s ease-out;
    font-family: "Montserrat";
    font-size: 18px;
    color: ${props => (props.currentTheme === "light" ? "#7b00b5" : "yellow")};
    font-weight: 500;
    a {
      font-weight: normal;
      margin-left: 12px;
      color: ${props =>
        props.currentTheme === "dark" ? "#baaaff" : "#00afaf"};
    }
  }
`;
