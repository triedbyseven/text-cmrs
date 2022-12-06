import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  };

  render() {
    return (
      <Html>
        <Head />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Black.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Black.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Bold.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraBold.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraBold.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraLight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraLight.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-ExtraLight.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Light.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Light.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Medium.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Medium.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Regular.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-SemiBold.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-SemiBold.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Thin.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Thin.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};