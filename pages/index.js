// pages/index.js
import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

import Layout, { SiteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>{`Frykikik's 測試網站`}</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>

      {/* 添加第三方 JavaScript */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script正確地載入，window.FB 已被定義`)
        }
      />

      <main>
        <h2 className={styles.title}>
          歡迎來到我的測試網站       
        </h2>

        <p className={styles.description}>
        這裡主要用來做測試、演示、記錄學習成果
        </p>

        <p className={styles.description}>
        這網站還在施工中，離完成還有一段距離。
        </p>

        <Image
                priority
                src="/images/fix.png"
                height={108}
                width={108}
                alt=""
              />
       
      </main>
     
   

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
     
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </Layout>
  );
}