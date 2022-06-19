import React , {useReducer}from "react";
import CounterReducer from "./CounterReducer";
import './Child2.css'


const Child2  = () => {

    let [state , dispatch] = useReducer(CounterReducer , 1);

    console.log(state)
    return(
        <div className="child2">


        <h2>This is first child using useReducer</h2>

            <h4>Value of reducer state is :{state}</h4>

            <button onClick={() => dispatch ('INCREMENT')}>Increment Reducer</button>

        </div>
    )
}

export default Child2;