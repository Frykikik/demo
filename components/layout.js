//components/layout.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "../components/footer";

const name = `Frykikik's Website`;
export const SiteTitle = `Frykikik's Website`;

export default function Layout({ children, home }) {
  return (
    <>
      <header>
        <nav className="row">
            <div className="col ">              
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <Image
                    priority
                    src="/images/cat.jpg"
                    className={utilStyles.borderCircle}
                    height={60}
                    width={60}
                    alt=""
                  />
                </Link>{` `}
                <Link href="/">
                  <span className={utilStyles.colorInherit}>{name}</span>
                </Link>
              </h2>
            </div>
            <div className="col">
              <ul className={styles.nav_ul}>
                <li className={styles.nav_li}>
                  <Link className={styles.nav_a} href="/">Home</Link>
                </li>
                <li className={styles.nav_li}>
                  <Link className={styles.nav_a} href="/toybox">Toybox</Link>
                </li>
                <li className={styles.nav_li}>
                  <Link className={styles.nav_a} href="/toybox/demo">Demo</Link>
                </li>
                <li className={styles.nav_li}>
                  <Link className={styles.nav_a} href="/toybox/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col">{` `}</div>
        
        </nav>
      </header>

      {children}

      <Footer />
    </>
  );
}
