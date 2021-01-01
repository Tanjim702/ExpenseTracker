import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const total = transactions.map(item=>item.amount)
    let balance = 0;
    if(total.length !== 0){
        balance = total.reduce((acc,item)=>acc+=item)
    }
    return (
        <div >
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    );
}

export default Balance;