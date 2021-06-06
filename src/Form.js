import React, {useState} from 'react'

function Form () {

    const expenseData = {
            id: Date.now(),
            date: "",
            description: "",
            amount: "",
            location: ""
    }; 

    const [itemData, setItemData] = useState(expenseData);

    function setItem(e) {
        e.preventDefault()
       // setItemData()
        console.log({expenseData})
    }
        return (
            <div>
            <form className="form-dark">

                <label>Date
                <input 
                    type="date" 
                    name="date"
                    value={itemData.date}
                    onChange={(e) => setItemData({...itemData, date: e.target.value})}
                    className="form-control"
                    />
                </label>

                <label>Description
                <input 
                    type="text" 
                    name="description"
                    value={itemData.description}
                    onChange={(e) => setItemData({...itemData, description: e.target.value})}
                    className="form-control"
                    placeholder="What?"
                    />
                </label>

                <label>Amount
                <input 
                    type="number" 
                    name="amount"
                    value={itemData.amount}
                    onChange={(e) => setItemData({...itemData, amount: e.target.value})}
                    className="form-control"
                    placeholder="How Much?"
                    />
                </label>

                <label>Location
                <input 
                    type="text" 
                    name="location"
                    value={itemData.location}
                    onChange={(e) => setItemData({...itemData, location: e.target.value})}
                    className="form-control"
                    placeholder="Where?"
                    />
                </label>
                
                <br />

                <button id="add-expense" className="btn btn-primary" type="submit" onClick={setItem}>Add Expense</button>
                <h1>{}</h1>
                
            </form>
            </div>  
        )
   }

export default Form