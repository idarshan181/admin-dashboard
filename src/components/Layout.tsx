import Head from 'next/head';
import { PropsWithChildren, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

//note: Define flex for layout to keep content inside a screen view

interface Props {
  children?: ReactNode;
  title?: string;
  header?: boolean;
  footer?: boolean;
  sidebar?: boolean;
  className?: string;
}
const Layout = ({
  children,
  title = 'Dashboard',
  header = true,
  footer = true,
  sidebar = false,
  className = ''
}: Props) => {
  return (
    <div
      className={sidebar ? `flex h-screen flex-row` : `flex h-screen flex-col`}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {header && <Header />}
      {sidebar && <Sidebar />}
      <main className={`${className} flex-1`}>{children}</main>
      {header && footer && <Footer />}
    </div>
  );
};

export default Layout;
