import Link from 'next/link';

import Layout from '@/components/Layout';

const DashboardPage = () => {
  return (
    <Layout title="Dashboard">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </Layout>
  );
};

export default DashboardPage;
