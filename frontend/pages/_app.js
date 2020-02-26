import App from "next/app";
import Head from "next/head";
import { GlobalStyles, theme } from "../globalStyles";
import { ThemeProvider } from "styled-components";
import AppThemeProvider, { ThemeContext } from "../context/Theme";
import { useContext } from "react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppThemeProvider>
        <ThemeContext.Consumer>
          {context => (
            <ThemeProvider theme={theme[context.currentTheme]}>
              <Head>
                <link
                  href="https://fonts.googleapis.com/css?family=Archivo+Black|Montserrat&display=swap"
                  rel="stylesheet"
                />
              </Head>
              <GlobalStyles />
              <Component {...pageProps} />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </AppThemeProvider>
    );
  }
}

export default MyApp;
