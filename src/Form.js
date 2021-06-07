import React from 'react'
import Expenses from './Expenses.js'

class Form extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            expenseArray: [],
            date: "",
            description: "",
            amount: "",
            location: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddExpense = this.handleAddExpense.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleAddExpense (e) {
        e.preventDefault();

        const newExpense = {
          id: Date.now(),
          date: this.state.date,
          description: this.state.description,
          amount: this.state.amount,
          location: this.state.location
        }
    
        this.setState( {
          expenseArray: [...this.state.expenseArray, newExpense],
          date: '',
          desription: '',
          amount: '',
          location: ''

        } )
        console.log(newExpense)
      }


  render () {
        return (
            <div>
            <form className="form-dark">
            
                <label>Date:
                <input 
                    type="date" 
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                </label>
                <label>Description:
                <input 
                    type="text" 
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                </label>
                <label>Amount:
                <input 
                    type="number" 
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                </label>
                <label>Location:
                <input 
                    type="text" 
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                </label>

                    <br />

                <button id="add-expense" className="btn btn-primary" onClick={this.handleAddExpense}>Add Expense</button>
        
            </form>
            <Expenses expenseArray={this.state.expenseArray} />
        </div>  
        )
    }
}

export default Form