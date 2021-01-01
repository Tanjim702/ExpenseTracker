import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(n=>n.amount)
    let income=0;
    let expense=0;
    if(amounts){
        amounts.forEach(amount=>{
            if(amount >= 0){
                income = income + amount
            }else{
                expense= expense+ amount
            }
            
        })
    }
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    );
}

export default IncomeExpense;