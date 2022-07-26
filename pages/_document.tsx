import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark scroll-smooth">
        <Head />
        <body className="dark:bg-orange-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
