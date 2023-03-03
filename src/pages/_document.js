import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from './../../components/Navbar/Navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
