import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const bankAPI = 'http://localhost:8001/transactions'

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => fetch(bankAPI)
  .then(res => res.json())
  .then(setTransactions), [])

  function addNewTransaction(newTrans){
    newTrans.amount = parseFloat(newTrans.amount);
 fetch(bankAPI, {
  method: 'POST',
  headers: {
    Accepts: 'application/json',
    'Content-type': 'application/json'
  },
  body: JSON.stringify(newTrans)
 })
.then(res => res.json())
.then(json => setTransactions([...transactions, json]))
  }
  return (
    <div>
      <Search handleChange={setSearchTerm}/>
      <AddTransactionForm handleSubmit={addNewTransaction} />
      <TransactionsList transactions={transactions.filter(t => t.description.includes(searchTerm))}/>
    </div>
  );
}

export default AccountContainer;
