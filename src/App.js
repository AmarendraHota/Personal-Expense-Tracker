import React, { useState } from 'react';
import LoginPopup from './LoginPopup';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    category: '',
    description: '',
    amount: '',
  });

  const handleCreateExpense = () => {
    setExpenses([...expenses, { ...formData, id: expenses.length + 1 }]);
    setFormData({
      name: '',
      date: '',
      category: '',
      description: '',
      amount: '',
    });
  };

  const handleUpdateExpense = (id, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => (expense.id === id ? updatedExpense : expense))
    );
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='bg-fuchsia-900 w-full'>
      <div className='flex items-center justify-between bg-black text-white p-6 px-11 w-4/4'>
        <h1 className=' text-2xl'>Personal Expense Tracker</h1>
        <LoginPopup />
       
      </div>

      <div className='flex items-center justify-between flex-col '>
        <h2 className='text-3xl my-10 font-bold bg-red-700 text-white p-3'>Create New Expense</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateExpense();
          }}
          className='border-solid border-4 border-white p-5 w-3/4 md:w-1/4'
        >
          <div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
               required
              placeholder='Enter Name'
              className='border-solid border-4 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
            />
          </div>

          <div>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
               required
              className='border-solid border-4 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
            />
          </div>

          <div>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
               required
              placeholder='Select Category'
              className='border-solid border-4 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
            />
          </div>

          <div>
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
               required
              placeholder='Your Description'
              className='border-solid border-4 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
            />
          </div>

          <div>
            <input
              type="number"
              id="amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
               required
              placeholder='Enter Amount'
              className='border-solid border-4 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
            />
          </div>
          <button type="submit" className='bg-green-700 text-white  border-solid border-4 border-black font-bold text-xl  tracking-widest font-sans uppercase p-2 mt-4 w-full'>Save Expense</button>
        </form>
      </div>

      <div className='flex justify-center flex-col items-center text-white  mt-10'>
        <h2 className='text-3xl my-7 font-bold bg-blue-700 text-white p-3 px-9 '>See All Your Expenses</h2>
        <ul className='md:grid md:grid-cols-7 hidden font-bold md:tracking-widest md:text-center md:mt-10 font-sans uppercase w-full p-5 bg-blue-700 text-white md:px-36'>
          <li>Name</li>
          <li>Date</li>
          <li>Category</li>
          <li>Description</li>
          <li>Amount</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>

        {expenses.map((expense) => (
          <div key={expense.id}
            className='md:grid md:grid-cols-7 md:text-center font-bold md:tracking-widest md:mt-3 font-sans border-solid border-4 border-white w-full p-5 bg-gray-700 text-white md:px-36'>
            <h3 className=' break-all'>{expense.name}</h3>
            <p className=' break-all'>{expense.date}</p>
            <p className=' break-all'>{expense.category}</p>
            <p className=' break-all'>{expense.description}</p>
            <p className=' break-all'>{expense.amount}</p>



            <button
              className='bg-green-600 text-white  border-solid border-4 border-white p-1 mx-3 font-bold text-xl  tracking-widest font-sans uppercase '
              onClick={() => {
                const updatedName = prompt('Enter updated name:', expense.name);
                const updatedDate = prompt('Enter updated date of expense:', expense.date);
                const updatedCategory = prompt('Enter updated category:', expense.category);
                const updatedDescription = prompt('Enter updated description:', expense.description);
                const updatedAmount = prompt('Enter updated amount:', expense.amount);
                if (
                  updatedName !== null &&
                  updatedDate !== null &&
                  updatedCategory !== null &&
                  updatedDescription !== null &&
                  updatedAmount !== null
                ) {
                  handleUpdateExpense(expense.id, {
                    ...expense,
                    name: updatedName,
                    date: updatedDate,
                    category: updatedCategory,
                    description: updatedDescription,
                    amount: updatedAmount,
                  });
                }
              }}
            >
              Edit
            </button>
            <button
              className='bg-red-600 text-white  border-solid border-4 border-white p-1 mx-3 font-bold text-xl  tracking-widest font-sans uppercase '
              onClick={() => handleDeleteExpense(expense.id)}>Delete</button>

          </div>
        ))}
      </div>
      <div>
      <p className='bg-black text-white mt-7 py-5 text-center'>&copy; 2023 Personal Expense Tracker | All rights reserved By Amarendra Hota</p>
      </div>
      
    </div>

  );
}

export default App;
