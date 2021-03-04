import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          /> */}
          <link
            rel="preload"
            href="/fonts/FontsFree-Net-SFProText-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/FontsFree-Net-SFProText-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/FontsFree-Net-SFProDisplay-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
