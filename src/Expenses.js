import React from 'react'

function Expenses(){

        return (
            <div>
                <table className="table">
                    <thead className="table table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th className="table-primary">06/02/2021</th>
                            <th className="table-primary">Groceries</th>
                            <th className="table-danger">$108.63</th>
                            <th className="table-primary">Kroger</th>
                        </tr>
                        <tr>
                            <th className="table-primary">06/02/2021</th>
                            <th className="table-primary">Groceries</th>
                            <th className="table-danger">$108.63</th>
                            <th className="table-primary">Kroger</th>
                        </tr>
                        <tr>
                            <th className="table-primary">06/02/2021</th>
                            <th className="table-primary">Groceries</th>
                            <th className="table-danger">$108.63</th>
                            <th className="table-primary">Kroger</th>
                        </tr>
                        <tr>
                            <th className="table-primary">06/02/2021</th>
                            <th className="table-primary">Groceries</th>
                            <th className="table-danger">$108.63</th>
                            <th className="table-primary">Kroger</th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    
    
}

export default Expenses