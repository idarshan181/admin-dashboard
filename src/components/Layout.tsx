import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: ReactNode;
  title?: string;
}
const Layout = ({ children, title = 'Dashboard' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
