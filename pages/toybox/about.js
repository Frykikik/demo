// pages/toybox/test.js
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout, { SiteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import styles from "./about.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <main>
        <div className="row">
          <div className="col">{` `}</div>
          <div className="col card">
            <section className={"card-body bg-dark text-white"}>
              <ul className={styles.about_ul}>
                目前網站技術主要使用
                <li className={styles.about_li}>
                  Visual Studio Code + ESLint 做程式撰寫
                </li>
                <li className={styles.about_li}>Bootstrap 5 CDN 調整版面</li>
                <li className={styles.about_li}>next.js 作為換頁面router</li>
                <li className={styles.about_li}>axio 做外部api存取 </li>
                <li className={styles.about_li}>版本控管使用git github</li>
              </ul>

              <div className="row">
                <p className="col-sm-4"> </p>
                <p className="col-sm-8">
                  程式碼詳見 :{" "}
                  <Link
                    className={styles.about_a + ""}
                    href="https://github.com/Frykikik/demo"
                  >
                    我的Github
                  </Link>
                </p>
              </div>
            </section>
          </div>
          <div className="col">{` `}</div>
        </div>
      </main>
    </Layout>
  );
}
