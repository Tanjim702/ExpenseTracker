import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { useContext } from 'react'
import { GlobalProvider, GlobalContext } from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>

  )
}

  export default App;
