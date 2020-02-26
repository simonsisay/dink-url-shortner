import App from "next/app";
import Head from "next/head";
import withData from "../apolloConfig";
import { ApolloProvider } from "@apollo/react-hooks";
import { GlobalStyles, theme } from "../globalStyles";
import { ThemeProvider } from "styled-components";
import AppThemeProvider, { ThemeContext } from "../src/context/Theme";

class AppWrapper extends App {
  render() {
    const { Component, pageProps, apollo: client } = this.props;
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}

export default withData(AppWrapper);
