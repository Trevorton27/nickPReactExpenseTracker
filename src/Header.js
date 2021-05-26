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
                <h1>{this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
   }

}

export default Header