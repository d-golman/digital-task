import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './Footer';



const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>Game Base{title && ` | ${title}`}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;