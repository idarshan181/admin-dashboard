import Link from 'next/link';

import Layout from '@/components/Layout';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const DashboardPage = () => {
  return (
    <Layout
      title="Dashboard"
      header={false}
      footer={false}
      className="flex h-screen flex-row"
    >
      <Sidebar />
      <div className="flex-1 flex-col">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/">Home</Link>
        </p>
      </div>
    </Layout>
  );
};

export default DashboardPage;
