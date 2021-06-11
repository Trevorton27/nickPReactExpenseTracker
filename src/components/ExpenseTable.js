import React from 'react';
import ExpenseRow from './ExpenseRow';
function ExpenseTable({ expenseArray, deleteExpense }) {
  let total = 0;
  expenseArray.map((expense) => {
    return (total += parseFloat(expense.amount));
  });

  return (
    <div>
      <table className='table'>
        <thead className='table table-dark'>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Location</th>
            <th>Total: ${total}</th>
          </tr>
        </thead>

        <tbody>
          <ExpenseRow
            expenseArray={expenseArray}
            deleteExpense={deleteExpense}
          />
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
