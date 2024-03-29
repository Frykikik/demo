// pages/toybox/test.js
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout, { SiteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <main>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </section>
      </main>
    </Layout>
  );
}
