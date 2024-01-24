// pages/toybox/index.js
import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";
import AccordionExpandIcon from "../../components/accordionExpandIcon.js";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
        <AccordionExpandIcon />     
      </main>
    </Layout>
  );
}
