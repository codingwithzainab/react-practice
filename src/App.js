import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js'
import CounterContext from './CounterContext'

function App() {
   let countState =  useState(1); //[count , setcount]


  return (

    
    

      <CounterContext.Provider  value = {countState}>
        <div>
        <Parent />
        </div>


        </CounterContext.Provider>  

      

    
  );
}

export default App;
