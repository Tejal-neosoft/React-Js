import React, { Component } from 'react'

export class Cart extends Component {  
    render() {
            // Value must be present in the local storage or else it gives null error
            const arr = JSON.parse(localStorage.getItem('myitems'));
            const data= arr.map((data,id)=>
             <tr key={id}>
             <td>{id+1}</td>    
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.quantity}</td>
            <td>{data.price}</td>
            <td>{data.quantity * data.price}</td>
            </tr>)
         
        return (
            <>
            
            <div className="container mt-5">
                
                <h2 className="text-center">Cart Details</h2>
                <table className="table mt-4  table-striped">
                    <thead className="bg-warning">
                        <tr>
                            <th>Sr.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default Cart
