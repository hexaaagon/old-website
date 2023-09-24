import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';
import * as Icon from "react-feather";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="light bg-gray-300 dark:bg-gray-800">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
