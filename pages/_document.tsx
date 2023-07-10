import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Iceland&family=Inter:wght@300&family=MuseoModerno:wght@300;400&family=Playfair+Display+SC&family=Poppins:wght@200&family=Solitreo&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
