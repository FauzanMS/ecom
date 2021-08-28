
import React from 'react'
import { connect } from 'react-redux';
import SignUp from '../SignUp/SignUp';
// import { Link } from 'react-router-dom';

import './PlaceOrder.css';
function PlaceOrder(props) {
    return (
        <div className="PlaceOrderBox">
            <div className="PlaceOrderProduct">
            <img src={props.items[props.singleBuy-1].url} className="PlaceOrderProductImage"/>
            <h5 style={{textAlign:"center"}}>{props.items[props.singleBuy-1].title}</h5>
                <h6 style={{textAlign:"center"}}>Rs.{props.items[props.singleBuy-1].price} <span className="noprice">Rs.{props.items[props.singleBuy-1].real}</span></h6>
                <table className="tablePlace">
                    <tr>
                      <td>Retail Price</td>
                      <td>:</td>
                      <td>Rs.{props.items[props.singleBuy-1].real}</td>
                    </tr>
                    <tr>
                      <td>Discount Applied</td>
                      <td>:</td>
                      <td>Rs.{props.items[props.singleBuy-1].real-props.items[props.singleBuy-1].price}</td>
                    </tr>
                    <tr>
                      <td>Delivery Charges</td>
                      <td>:</td>
                      <td>Rs. 0</td>
                    </tr>
                    <tr>
                      <td><h5>Total Payable</h5></td>
                      <td><h5>:</h5></td>
                      <td><h5>Rs.{props.items[props.singleBuy-1].price}</h5></td>
                    </tr>
                </table>
         </div>
            <div className="information">
                <SignUp productPrice={props.items[props.singleBuy-1].price} productId={props.items[props.singleBuy-1].id} localId = {props.localId} token = {props.tokenId} />
                </div>
            </div>
    )
}
const mapStoreToProps=(state)=>{
  return {
    items : state.items,
    singleBuy : state.singleBuy,
    tokenId : state.token,
    localId : state.localId,
  }
}


export default connect(mapStoreToProps)(PlaceOrder);


{/* <div className="button">
<Link to="/explore" className="btn btn-outline-warning" style={{marginRight:"2%"}}>
    Back to Home
</Link>
<button className="btn btn-outline-success">
    Place Order
</button>
</div> */}