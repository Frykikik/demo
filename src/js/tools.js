import React from 'react';
import { useState , useMemo , useEffect, useCallback } from 'react';


import { name, age } from './person.js';
import message from './message.js';
import Car2 from './car2.js';
import Car1 from './car1.js';
import Img from './img.js';
import Todos from './todo.js';
import { Timer, OnceCounter, Counter } from './timer.js';
import Context from './useContext.js';
import ToggleTheme from './toggleTheme.js';
import { TestUseRef, ElementUseRef, PreviousInputValueUseRef } from './useRef.js';
import { DoThing, CounterRdr, ReducForm, DataFetching } from './hooks.js';
import {useFetch , GetData , AxiosGet} from "./useFetch";
import OxGame from "./oxGame.js";
import ShowProduct from "./product.js";
import AccordionExpandIcon from "./ui.js";
import ClockApp from "./Clock.js";
import MovingDot from "./moveingMouse.js";
import TaskApp from "./TaskApp.js";


import styles from '../css/my-style.module.css';


export { Car1, Car2, Img ,AccordionExpandIcon , ClockApp ,MovingDot,TaskApp}
export { Timer, OnceCounter, Counter ,GetData , AxiosGet ,OxGame , ShowProduct}
export { Context, ToggleTheme, TestUseRef, ElementUseRef, PreviousInputValueUseRef, DoThing, CounterRdr, ReducForm, DataFetching }

/**
 * @param {int} a The first number.
 */
export function MissedGoal(a) {
    alert('MISSED! ' + a);
}

/**
 * @param {int} a The first number.
 */
export function MadeGoal(a) {
    alert('Goal!! ' + a);
}


export function Football() {
    const shoot = (isGoal, b) => {
        let Goal = Math.floor(Math.random() * 10 + 1);
        if (Goal > 5) {
            isGoal = true;
        }

        if (isGoal) {
            MadeGoal(Goal);
        } else {
            MissedGoal(Goal);
        }
    }

    return (
        <button onClick={(event) => shoot(false, event)}>Take the shot!</button>
    );
}


export function Car(props) {
    return Car2(props);
}

export function Garage() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

export function MyForm2() {
    const [name, setName] = useState('');

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}

const myStyle = {
    color: "white",
    backgroundColor: "Red",
    padding: "10px",
    fontFamily: "Sans-Serif"
};

export function FavoriteColor() {
    const [color, setColor] = useState('red');

    return (
        <>
            <h1 style={myStyle}>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor('blue')}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor('red')}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor('pink')}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor('green')}
            >Green</button>
        </>
    );
}


export function TextareaForm() {
    const [textarea, setTextarea] = useState(
        'The content of a textarea goes in the value attribute'
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

export function MySelectForm() {
    const [myCar, setMyCar] = useState('Volvo');

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <label htmlFor="pet-select">Choose a car : </label>
            <select value={myCar} onChange={handleChange} id="pet-select">
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        //event.preventDefault();
        alert(`The name you entered was: ${inputs.username}  The age you entered was: ${inputs.age}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ''}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ''}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}



export const Do = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount((c) => c - 1);
        }
    };


    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                CountDo: {count}
                <button onClick={increment}>+</button><button onClick={decrement}>-</button><button onClick={reset}>Reset</button>
            </div>
        </>
    );
};

export const TodoCount = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo a"]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Countaaa: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    console.log("Calculating...END");
    return num;
};

// export const GetData = () => {
//     const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
//     return (
//       <>
//         {data &&
//           data.map((item) => {
//             return <p key={item.id}>{`
//             id: ${item.id},
//             userId: ${item.userId},           
//             title: ${item.title},
//             completed: ${item.completed}`}</p>;
//           })}
//       </>
//     );
//   };


export default function Log(message) {
    console.log(message);
}


//export default {car}