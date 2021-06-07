import React from 'react'

function Expenses(props){

        return (
            <div>
                <table className="table">
                    <thead className="table table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {props.expenseArray.map((newExpense) => {
                            const {id, date, description, amount, location} = newExpense; 
                       
                        return (
                        <tr key={id}>
                            <th className="table-primary">{date}</th>
                            <th className="table-primary">{description}</th>
                            <th className="table-danger">$ {parseFloat(amount).toFixed(2)}</th>
                            <th className="table-primary">{location}</th>
                            <th className="table-warning">
                                <button id="delete-button" className="btn btn-danger" onClick={() => props.deleteExpense( id )}>Delete</button>
                            </th>
                        </tr>
                        )
                    })}
                    
                    </tbody>
                </table>
            </div>
        )
                        
    }

export default Expenses