import Link from 'next/link';

import Layout from '@/components/Layout';

const DashboardPage = () => {
  return (
    <Layout
      title="Buttons"
      header={true}
      footer={false}
      sidebar={true}
      className={`flex max-h-screen flex-col items-center justify-center`}
    >
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
