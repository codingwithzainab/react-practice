import  React ,{ createContext, useReducer} from "react";
import TransactionReducer from "./transReducer";



const intialTransactions = [
    {amount: +500 , desc: "Cash"},
    {amount: -600 , desc: "Book"},
    {amount: +200 , desc: "camera"}

]

export const TransactionContext = createContext (intialTransactions);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer (TransactionReducer ,intialTransactions   )

    function addTransaction(transObj){
        dispatch( {
            type:"ADD_TRANSACTION",
            payload : {
                amount: transObj.amount,
                desc : transObj.desc
            },
        

         })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction


        }}>
            {children}

        </TransactionContext.Provider>
    )
}
