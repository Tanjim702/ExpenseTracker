import { useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
function TransactionList() {
    const { transactions,deleteTransaction ,getTransactions} = useContext(GlobalContext)

    useEffect(()=>{
        getTransactions();
        //eslint-disable
    },[])

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <li key={transaction._id} className={transaction.amount >=0? 'plus':'minus'}>
                        {transaction.text}
                        <span>{transaction.amount}</span>
                        <button onClick={()=>deleteTransaction(transaction._id)} className="delete-btn">x</button>
                    </li>
                ))}

            </ul>
        </>
    );
}

export default TransactionList;