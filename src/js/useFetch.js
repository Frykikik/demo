import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

//GET請求
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))

//POST請求
// axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',{
//     email: 'javascriptBasics@gmail.com',
//     password: '1234'
// })
//     .then( (response) => console.log(response))
//     .catch( (error) => console.log(error))

export function AxiosGet() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
      <div>
        {/* 使用從伺服器獲取的數據進行渲染 */}
        {/* <p>Data: {JSONData}</p> */}
        {data &&
          data.map((item) => {
            return <p key={item.id}>{`
            aa id: ${item.id},
            userId: ${item.userId},           
            title: ${item.title},
            completed: ${item.completed}`}</p>;
          })}
      </div>
    );
  }

const useFetch = (url) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);
  
    return [data];
  };

  export const GetData = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{`
            id: ${item.id},
            userId: ${item.userId},           
            title: ${item.title},
            completed: ${item.completed}`}</p>;
          })}
      </>
    );
  };

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             setLoading(true);
//             const response = await fetch(url);
//             const result = await response.json();
//             setData(result);
//           } catch (error) {
//             setError(error);
//           } finally {
//             setLoading(false);
//           }
//         };
    
//         fetchData();
//       }, [url]);

  
//     return { data, loading, error };
//   };
  
 
//   export function GetData() {
//     const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
//     //const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
  
//     if (error) {
//       return <p>Error: {error.message}</p>;
//     }
  
//     return (
//       <div>
//         {/* 使用從伺服器獲取的數據進行渲染 */}
//         <p>Data: {data}</p>
//       </div>
//     );
//   }

export default useFetch;