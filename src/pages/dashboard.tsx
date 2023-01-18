import Link from 'next/link';

import Layout from '@/components/Layout';
import Image from 'next/image';

const DashboardPage = () => {
  return (
    <Layout
      title="Dashboard"
      header={false}
      footer={false}
      className="flex h-screen flex-row"
    >
      <aside className="box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75); z-10 flex h-full w-20 flex-initial flex-col rounded-r-lg bg-[#162041]  text-white sm:w-52 ">
        <div className="flex h-full flex-col">
          {/* Brand Logo */}

          <a
            href="https://www.google.com"
            className="mx-3 mt-3 flex h-16 w-full flex-col items-center justify-center p-2 sm:w-full sm:flex-row sm:justify-start sm:gap-2"
          >
            <Image
              alt="Logo"
              src={`https://cdn.cdnlogo.com/logos/g/35/google-icon.svg`}
              style={{
                objectFit: 'contain'
              }}
              width={24}
              height={24}
            />
            <span className="hidden text-xl font-medium sm:inline-flex">
              Google
            </span>
          </a>

          <ul className="mt-5 flex w-full flex-1 flex-shrink basis-0 flex-col space-y-2 px-3">
            {/* Dashboard */}
            <li className="w-full flex-initial flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Dashboard</span>
              </a>
            </li>

            {/* Kanban */}
            <li className="sm:flex-initial sm:flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-100 hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="ml-3 hidden whitespace-nowrap sm:inline-flex sm:flex-1 sm:flex-row">
                  Kanban
                </span>
                <span className="ml-3 hidden items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300 sm:inline-flex">
                  Pro
                </span>
              </a>
            </li>
            <li className="sm:flex-initial sm:flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Dashboard</span>
              </a>
            </li>
            <li className="w-full flex-initial flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Dashboard</span>
              </a>
            </li>
            <li className="w-full flex-initial flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Dashboard</span>
              </a>
            </li>
            <li className="w-full flex-initial flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Dashboard</span>
              </a>
            </li>
            <li className="mt-auto w-full flex-initial flex-row">
              <a
                href="#"
                className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
                title="Dashboard"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 hidden sm:inline-flex">Last Tab</span>
              </a>
            </li>
          </ul>
          <hr className="mt-auto w-full" />
          <span className="my-2 w-full flex-initial flex-row px-3">
            <a
              href="#"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#242E4D] dark:text-white dark:hover:bg-gray-700 sm:justify-start"
              title="Dashboard"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3 hidden sm:inline-flex">Log Out</span>
            </a>
          </span>
        </div>
      </aside>
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
