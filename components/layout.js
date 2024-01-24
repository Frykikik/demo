//components/layout.js
import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from '../components/footer';

const name = `Frykikik's Website`;
export const SiteTitle = `Frykikik's Website`;

export default function Layout({ children, home }) {
  return (
    <>
     <header>      
      <nav>
      <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <Image
                priority
                src="/images/cat.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
              <Link href="/">
                <span className={utilStyles.colorInherit}>{name}</span>
              </Link>
            </h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/toybox">Toybox</Link>
          </li>
          <li>
            <Link href="/toybox/about">About Me</Link>
          </li>
        </ul>
      </nav>
      </header>

    {children}

    <Footer />
    </>
  );
}
