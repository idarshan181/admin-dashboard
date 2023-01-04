import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      {/* <body className="bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 bg-no-repeat text-light-foreground dark:bg-gradient-to-bl dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-dark-foreground"> */}
      <body className="bg-gradient-to-bl from-[#a1c4fd] to-[#c2e9fb] bg-no-repeat text-light-foreground dark:bg-gradient-to-bl dark:from-[#000428]  dark:to-[#004e92] dark:text-dark-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
//  dark:bg-dark-background dark:text-dark-foreground
