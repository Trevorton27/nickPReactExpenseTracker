import React from 'react'

function Expenses (){

        return (
            <div>
                <table class="table">
                    <thead class="table table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th class="table-primary">06/02/2021</th>
                            <th class="table-primary">Groceries</th>
                            <th class="table-danger">$108.63</th>
                            <th class="table-primary">Kroger</th>
                            <button class="btn btn-danger">Delete</button>
                        </tr>
                        <tr>
                            <th class="table-primary">06/02/2021</th>
                            <th class="table-primary">Groceries</th>
                            <th class="table-danger">$108.63</th>
                            <th class="table-primary">Kroger</th>
                            <button class="btn btn-danger">Delete</button>
                        </tr>
                        <tr>
                            <th class="table-primary">06/02/2021</th>
                            <th class="table-primary">Groceries</th>
                            <th class="table-danger">$108.63</th>
                            <th class="table-primary">Kroger</th>
                            <button class="btn btn-danger">Delete</button>
                        </tr>
                        <tr>
                            <th class="table-primary">06/02/2021</th>
                            <th class="table-primary">Groceries</th>
                            <th class="table-danger">$108.63</th>
                            <th class="table-primary">Kroger</th>
                            <button class="btn btn-danger">Delete</button>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    
    
}

export default Expenses