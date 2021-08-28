import React from 'react';
import { connect } from 'react-redux';
import './Order.css';
function Order(props) {    
    return (
        <div>
            <div className="orderContainer">
               <img src = {props.items[props.id-1].url}  className="orderImage"/>
               <div className="orderDetails">
                  <h4>{props.items[props.id-1].title}</h4>
                  <h4>Rs.{props.items[props.id-1].price}/-</h4>
                  <h7>Status : <span style={{color:"green"}}>DELIVERED</span></h7>
               </div>
            </div>
        </div>
    )
}
const mapStoreToProps=(state)=>{
    return{
    items : state.items,
}
};

export default connect(mapStoreToProps,null)(Order);
