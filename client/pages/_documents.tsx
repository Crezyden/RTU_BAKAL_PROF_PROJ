import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charSet="UTF-8"/>
      {/* <script src="../component/js/scripts.js"/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}