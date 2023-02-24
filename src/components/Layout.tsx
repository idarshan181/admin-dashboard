import Head from 'next/head';
import { ReactNode } from 'react';

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
    <div className="flex h-screen flex-col">
      {header && <Header />}
      <div
        className={sidebar ? `flex h-full flex-row` : `flex h-full flex-col`}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        {sidebar && <Sidebar />}
        <main className={`${className} flex-1`}>{children}</main>
      </div>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
