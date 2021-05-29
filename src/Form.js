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
            <form>
                <label>Date:
                <input 
                    type="date" 
                    name="date"
                    value={this.state.date}
                    onChange={this.handleClick}
                    />
                </label>
                <label>Description:
                <input 
                    type="text" 
                    name="description"
                    value={this.state.description}
                    onChange={this.handleClick}
                    />
                </label>
                <label>Amount:
                <input 
                    type="number" 
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleClick}
                    />
                </label>
                <label>Location:
                <input 
                    type="text" 
                    name="location"
                    value={this.state.location}
                    onChange={this.handleClick}
                    />
                </label>
                
                <br />
                <button class="btn-primary" onClick={this.handleClick}>Add Expense</button>
                
            </form>
                  
                  <h1>{this.state.date} {this.state.description} {this.state.amount} {this.state.location}</h1>
              </div>  
            
        )
   }

}

export default Form