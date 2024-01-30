//components/CatFriends.js
import React, { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import styles from "./CatFriends.module.css";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  let selectedRef = useRef(0);

  function handleScroll(index) {
    flushSync(() => {
      setIndex(index);
    });
    selectedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let t = 0;
      if (index < catList.length - 1) {
        t = index + 1;
      }
      handleScroll(t);
      console.log("Calling setTimeout index:" + index);
    }, 3000);
    return () => {
      console.log("🟡 clearTimeout index:" + index);
      clearTimeout(timeoutId);
    };
  }, [index, selectedRef]);

  return (
    <>
      <nav className={styles.nav}>
        <button onClick={() => handleScroll(0)}>{`<<`}</button>
        <button
          onClick={() => {
            if (index > 0) {
              handleScroll(index - 1);
            } else {
              handleScroll(catList.length - 1);
            }
          }}
        >
          上一个
        </button>
        <button onClick={() => handleScroll(5)}>Maru</button>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              handleScroll(index + 1);
            } else {
              handleScroll(0);
            }
          }}
        >
          下一个
        </button>
        <button onClick={() => handleScroll(9)}>{`>>`}</button>
      </nav>
      <div className={styles.div}>
        <ul className={styles.ul}>
          {catList.map((cat, i) => (
            <li
              className={styles.li}
              key={cat.id}
              ref={index === i ? selectedRef : null}
            >
              <img
                className={index === i ? styles.imgActive : styles.img}
                src={cat.imageUrl}
                alt={"猫猫 #" + cat.id}
                width="25%"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
