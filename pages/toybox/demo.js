// pages/toybox/test.js
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
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
          <p>[Demo]</p>
          <p>
          <Image
                priority
                src="/images/fix.png"
                height={108}
                width={108}
                alt=""
              />
          </p>
        </section>
      </main>
    </Layout>
  );
}
