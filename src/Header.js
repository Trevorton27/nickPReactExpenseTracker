import React from 'react'

class Header extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
           return {isLoggedIn: !prevState.isLoggedIn }
        })
    }

  render () {
        return (
            <div>
                <h1>Expense Tracker</h1>
            <form>
                <label>Date:
                <input type="date"></input>
                </label>
                <label>Description:
                <input type="text"></input>
                </label>
                <label>Amount:
                <input type="number"></input>
                </label>
                <label>Location:
                <input type="text"></input>
                </label>
                <br>
                </br>
                
                
            </form>
                  <button class="btn-primary" onClick={this.handleClick}>Add Expense</button>
                  <h1>{this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
              </div>  
            
        )
   }

}

export default Header