import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function Layout({title, children }) {
  return (
    <>
    <Head>
        <title>{title ? title + '-Amazon' : 'Amazon'}</title>
        <meta name="description" content="E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </div>
    </>
  );
}
