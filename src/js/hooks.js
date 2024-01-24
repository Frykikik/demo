import React from 'react';
import { useReducer ,useEffect } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export function DoThing() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

// 計數器 定義 reducer 函數
const rdr = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export function CounterRdr() {
    // 使用 useReducer，傳入 reducer 函數和初始狀態
    const [state, dispatch] = useReducer(rdr, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            {/* 使用 dispatch 來觸發 action，從而更新狀態 */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}


// 表單狀態管理 定義 reducer 函數
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            console.log(`username: ${action.value}`);
            return { ...state, username: action.value };
        case 'UPDATE_EMAIL':
            console.log(`email: ${action.value}`);
            return { ...state, email: action.value };
        default:
            return state;
    }
};

export function ReducForm() {
    const [state, dispatch] = useReducer(formReducer, {
        username: '',
        email: '',
    });

    return (
        <div>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={state.username}
                        onChange={(e) => dispatch({ type: 'UPDATE_USERNAME', value: e.target.value })}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'UPDATE_EMAIL', value: e.target.value })}
                    />
                </label>
            </form>
        </div>
    );
}


//  異步數據加載 定義 reducer 函數
const dataReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_START':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
 export function DataFetching() {
    const [state, dispatch] = useReducer(dataReducer, {
      data: null,
      loading: false,
      error: null,
    });
  
    useEffect(() => {
      dispatch({ type: 'FETCH_START' });
  
      // 模擬異步數據加載
      setTimeout(() => {
        // 假設數據成功加載
        dispatch({ type: 'FETCH_SUCCESS', payload: 'Mock Data' });
        // 或者假設數據加載失敗
        // dispatch({ type: 'FETCH_ERROR', payload: 'Error Message' });
      }, 2000);
    }, []);
  
    return (
      <div>
        {state.loading && <p>Loading...</p>}
        {state.data && <p>Data: {state.data}</p>}
        {state.error && <p>Error: {state.error}</p>}
      </div>
    );
  }