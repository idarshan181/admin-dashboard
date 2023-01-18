import Head from 'next/head';
import { PropsWithChildren, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

//note: Define flex for layout to keep content inside a screen view

interface Props {
  children?: ReactNode;
  title?: string;
  header?: boolean;
  footer?: boolean;
  className?: string;
}
const Layout = ({
  children,
  title = 'Dashboard',
  header = true,
  footer = true,
  className = ''
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {header && <Header />}
      <main className={className}>{children}</main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
