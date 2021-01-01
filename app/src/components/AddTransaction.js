import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { useState } from 'react'
function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext)
  return (

    <div >
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={(e) => {
        e.preventDefault();
        addTransaction({
          id: Math.floor(Math.random() * 1000000000),
          text,
          amount
        });
        setText('');setAmount('')
      }} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={e => setText(e.target.value)}
            type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
              (negative - expense, positive - income)</label
          >
          <input value={amount} onChange={e => setAmount(parseFloat(e.target.value))} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;