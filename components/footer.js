//components/footer.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ children, home }) {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">{" "}</div>
          <div className="col">
            <p>歡迎隨時聯絡我</p>
            <p>Email : frykikik@gmail.com</p>
          </div>
          <div className="col">
            {" "}
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <Image src="/vercel.svg" alt="Vercel" width={50} height={20} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
