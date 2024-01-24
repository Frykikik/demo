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
      <div>
        選個顏色:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">淺珊瑚色</option>
          <option value="midnightblue">午夜藍</option>
          <option value="rebeccapurple">麗貝卡紫</option>
        </select>
      </div>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
