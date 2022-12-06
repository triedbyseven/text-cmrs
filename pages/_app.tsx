import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: {
    primary: string
  }
};

const theme: ThemeInterface = {
  colors: {
    primary: '#6c38ff',
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp
