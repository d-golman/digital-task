import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Game Base{title && ` | ${title}`}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;