  
import React, {useContext} from "react";
import './Child.css'

import counterContext from "./CounterContext";


const Child = () => {

    const  counterValue = useContext(counterContext);
    // console.log(counterValue);

    return (
        <div className="child">

            <h1>Assigment of React Hocks : Context and  useReducer</h1>
            <h2>This is first child using  Counter  Context</h2>
            <h4>counter value is : {counterValue[0]}</h4>

            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment context</button>
        </div>
    )
}
export default Child;