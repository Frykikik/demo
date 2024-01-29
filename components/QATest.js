// components/QATest.js
import React from "react";
import { useState } from 'react';

import styles from './QATest.module.css';

export default function QATest() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    setTimeout(() => {
        reset();
      }, 2000);
  
    return <h1>答對了！</h1>

  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function reset(){
    setStatus('typing');
    setAnswer('');
    setError(null)
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>測試</h2>
      <p>
        哪個水果是紅色有的甜有的酸？
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          回答
        </button>
        {error !== null &&
          <p className={styles.Error}>
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // 模拟接口请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = (answer.toLowerCase() !== 'apple' && answer.toLowerCase()!== '蘋果');
      if (shouldError) {
        reject(new Error('猜得不錯，但答案不對。再試試看吧！'));
      } else {
        resolve();
      }
    }, 1500);
  });
}



export  function SameStateTest() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="关于"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        阿拉木图人口约200万，是哈萨克斯坦最大的城市。在1929年至1997年之间，它是该国首都。
      </Panel>
      <Panel
        title="词源"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        这个名字源于哈萨克语 <span lang="kk-KZ">алма</span>，是“苹果”的意思，通常被翻译成“满是苹果”。事实上，阿拉木图周围的地区被认为是苹果的祖籍，<i lang="la">Malus sieversii</i> 被认为是目前本土苹果的祖先。
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className={styles.panel}>
      <h3>{title}</h3>
      {isActive ? (
        <p className={styles.qaP}>{children}</p>
      ) : (
        <button onClick={onShow}>
          显示
        </button>
      )}
    </section>
  );
}
