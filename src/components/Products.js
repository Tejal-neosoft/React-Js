import React, { Component } from 'react';
import json from '../products.json';
import Cart from './Cart';
export class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            total:1,
           
        };
    }

    // For adding data into the cart
    addCart=(id,name,price)=>{
        let myitems=[];
        let data={
         id:id,
         quantity:1,
         name:name,
         price:price,
         
        }
        if(localStorage.getItem('myitems')!==undefined){
             
             if(JSON.parse(localStorage.getItem('myitems'))===null){
                 myitems.push(data);
                 localStorage.setItem('myitems',JSON.stringify(myitems))
                 this.setState({total:this.state.total+1})
                 alert("Product is Added")
             }
             else{
                 const localData=JSON.parse(localStorage.getItem('myitems'));
                 localData.map(prod=>{
                     if(data.id===prod.id){
                         data.quantity = prod.quantity+1;
                     }
                     else{
                         myitems.push(prod);
                     }
                     return null;
                 });
                 myitems.push(data)
                 localStorage.setItem('myitems',JSON.stringify(myitems));
                 this.setState({total:this.state.total+1})
                 alert("Product is Added")
             }
        }
        else{
           myitems.push(data);
           localStorage.setItem('myitems',JSON.stringify(myitems));
           this.setState({total:this.state.total+1})
           alert("Product is Added")
         }
 
     }
    

    render() {
        return(
            <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <button className="nav-link active" href="#">Home</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link active" href="#">Products</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link active" href="#">Cart {this.state.total}</button>
                </li>
            </ul>
                <div className="container mt-4">
                    <h3 className="text-center">Products</h3>
                    <div className="row">
                        {json.products.map((data,id)=>
                            <div className="col-sm-4 mt-3" key={id}>
                                <div className="card-column">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={`${data.images}`} className="card-img-top" height="300px"  alt='' />
                                            <p className="card-title"><b>Name : </b>{data.pnmae}</p>
                                            <p>Id : {data.id}</p>
                                            <p>Price: <span style={{color:'red'}}>{data.price}</span> </p>
                                          
                                            <button className="btn btn-success"onClick={()=>this.addCart(data.id,data.pnmae,data.price)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )}

                    </div>
                </div>
                <div>
                    {/* Only works when there is value in the local storage else it gives errors */}
                    <Cart/>
                </div>

            </>
        )
    }
}

export default Products
