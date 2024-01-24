import React from "react";
import Link from "next/link";
import Head from 'next/head';

import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post sss</h1>
      <h2>
        <Link href="/">
          Back to home
        </Link>               
      </h2>
      <h2><Link href="/toybox/test">
       go test
        </Link></h2>
    </Layout>
  );
}