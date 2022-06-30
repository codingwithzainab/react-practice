import React, { useContext ,useState } from "react";
import {TransactionContext} from './transContext'

function Child () {
    let{ transactions , addTransaction} = useContext(TransactionContext);
    let[newDesc, setDes]= useState("");
    let[newAmount , setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if(Number(newAmount) === 0)
        alert("please enter correct value")
        addTransaction({
            amount:Number(newAmount),
            desc:newDesc
        })
    } 
    
    const getIncome = () => {
        let income= 0;
        for(var i=0; i < transactions.length; i++) {
            if(transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income;
    }  
      const getExpense = () => {
        let expense= 0;
        for(var i=0; i < transactions.length; i++) {
            if(transactions[i].amount < 0)
         expense += transactions[i].amount
        }
        return expense;
    }

  
 
    return (
        <div className="container">

            <h1 className="text">Expense Tracker</h1>

            <h3>YOUR BALANCE  <br/> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">

                <h3>INCOME <br/> ${getIncome()}</h3>
                <h3>EXPENSE  <br/> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((transObj , ind) =>{
                      return (
                        <li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>

                      )
                } )}

                
            </ul>

            <h3>Add new transaction</h3>

            <hr/>

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br/>
                    <input type="text"  placeholder="Enter text" required onChange={(ev) =>setDes(ev.target.value)}/>
                </label>
                <br/>
                <label>
                    Amount<br/>
                    <input type = "number" placeholder= "Enter amount" required onChange={(ev) =>setAmount(ev.target.value)} />
                </label>

                 <br/>

                <input className="sub" type="submit"  value = "Add Transaction"/>
            </form>

        </div>
    )
}

export default Child ;