import React,{ useState, useEffect } from 'react';


function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Clock({ color, time }) {
    return <h1 style={{ color: color }}>{time}</h1>;
  }
  

export default function ClockApp() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        选择一个颜色:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">浅珊瑚色</option>
          <option value="midnightblue">午夜蓝</option>
          <option value="rebeccapurple">丽贝卡紫</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
