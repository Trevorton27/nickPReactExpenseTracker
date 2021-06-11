import React from 'react';

const ExpenseRow = ({ expenseArray, deleteExpense }) => {
  return expenseArray.map((newExpense) => {
    const { id, date, description, amount, location } = newExpense;

    return (
      <tr key={id}>
        <th className='table-primary'>{date}</th>
        <th className='table-primary'>{description}</th>
        <th className='table-danger'>$ {parseFloat(amount).toFixed(2)}</th>
        <th className='table-primary'>{location}</th>
        <th className='table-warning'>
          <button
            id='delete-button'
            className='btn btn-danger'
            onClick={() => deleteExpense(id)}
          >
            {' '}
            Delete
          </button>
        </th>
      </tr>
    );
  });
};

export default ExpenseRow;
