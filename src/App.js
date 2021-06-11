import React from 'react';
import './App.css';
import Form from './components/Form.js';
import Header from './components/Header.js';
import ExpenseTable from './components/ExpenseTable.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseArray: [],
      date: '',
      description: '',
      amount: '',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    const localStorageExpenses =
      JSON.parse(localStorage.getItem('expenses')) || [];

    this.setState({
      expenseArray: localStorageExpenses
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenseArray !== prevState.expenseArray.length) {
      localStorage.setItem('expenses', JSON.stringify(this.state.expenseArray));
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('im workin dawg');
    const newExpense = {
      id: Date.now(),
      date: this.formatDate(),
      description: this.state.description,
      amount: this.state.amount,
      location: this.state.location
    };

    this.setState({
      expenseArray: [...this.state.expenseArray, newExpense],
      date: '',
      description: '',
      amount: '',
      location: ''
    });
  }

  deleteExpense(id) {
    const deleteExpenseItem = this.state.expenseArray.filter(
      (expense) => expense.id !== id
    );
    this.setState({
      expenseArray: deleteExpenseItem
    });
  }

  formatDate = () => {
    let date = new Date(this.state.date);
    const options = {
      dateStyle: 'medium',
      timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          date={this.state.date}
          description={this.state.description}
          amount={this.state.amount}
          location={this.state.location}
        />

        <ExpenseTable
          expenseArray={this.state.expenseArray}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;
