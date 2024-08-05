import React, {useState} from "react";

function AddTransactionForm({handleSubmit}) {
  const [newTrans, setNewTrans] = useState({
      date: '',
      description: '',
      category: '',
      amount: 0,
  });
  function handleChange(e){
    const newName = e.target.name;
    const newValue = e.target.value;
    const newTransaction = {...newTrans}
    newTransaction[newName]=newValue;
    setNewTrans(newTransaction);
  }
  function submitForm(e){
    e.preventDefault();
    handleSubmit(newTrans)
    setNewTrans({
      date: '',
      description: '',
      category: '',
      amount: 0,
    })
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitForm}>
        <div className="inline fields">
          <input type="date" name="date" 
          value={newTrans.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={newTrans.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={newTrans.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={newTrans.amount} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
