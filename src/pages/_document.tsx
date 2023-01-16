import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      {/* <body className="bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 bg-no-repeat text-light-foreground dark:bg-gradient-to-bl dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-dark-foreground"> */}
      <body className="bg-light-background text-light-foreground dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-dark-foreground">
        {/* bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-pink-300 via-purple-300 to-indigo-400 */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
//  dark:bg-dark-background dark:text-dark-foreground
