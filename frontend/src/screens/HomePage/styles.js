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
`;
