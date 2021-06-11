import React from 'react';

const Form = ({
  handleChange,
  handleSubmit,
  date,
  description,
  amount,
  location
}) => {
  return (
    <div>
      <form className='form-dark' onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type='date'
            name='date'
            value={date}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>

        <label>
          Description:
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>

        <label>
          Amount:
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>

        <label>
          Location:
          <input
            type='text'
            name='location'
            value={location}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>

        <br />

        <button id='add-expense' className='btn btn-primary'>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Form;
