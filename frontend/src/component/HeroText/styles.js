import styled from "styled-components";

export const Container = styled.div`
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
    margin-bottom: 30px;
    line-height: 30px;
    color: ${props => props.theme.subHeaderColor};
  }
`;
