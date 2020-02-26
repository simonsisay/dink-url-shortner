import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    transition: all 1s;

    &:active {
      transform: skew("20deg");
      opacity: 1;
    }
  }
  svg path {
    fill: ${props => (props.currentTheme === "light" ? "#0b0316" : "#d6d9e3")};
  }
`;
