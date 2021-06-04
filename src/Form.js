import React from 'react'

class Form extends React.Component {
    constructor () {
        super()
        this.state = {
            date: "",
            description: "",
            amount: "",
            location: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }

  render () {
        return (
            <div>
            <form className="form-dark">

                <label>Date
                <input 
                    type="date" 
                    name="date"
                    value={this.state.date}
                    onChange={this.handleClick}
                    className="form-control"
                    />
                </label>

                <label>Description
                <input 
                    type="text" 
                    name="description"
                    value={this.state.description}
                    onChange={this.handleClick}
                    className="form-control"
                    />
                </label>

                <label>Amount
                <input 
                    type="number" 
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleClick}
                    className="form-control"
                    />
                </label>

                <label>Location
                <input 
                    type="text" 
                    name="location"
                    value={this.state.location}
                    onChange={this.handleClick}
                    className="form-control"
                    />
                </label>
                
                <br />

                <button id="add-expense" className="btn btn-primary" onClick={this.handleClick}>Add Expense</button>
                <h1>{this.state.date}</h1>
                
            </form>
                  

              </div>  
            
        )
   }

}

export default Form