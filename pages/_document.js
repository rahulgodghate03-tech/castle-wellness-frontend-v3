import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/mr-group-logo.jpg" />
        <link rel="shortcut icon" href="/mr-group-logo.jpg" />
        <link rel="apple-touch-icon" href="/mr-group-logo.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}