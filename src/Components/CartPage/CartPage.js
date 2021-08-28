import React from 'react'
import {connect} from 'react-redux';
import CartCard from './CartCard/CartCard';
import './CartPage.css';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Cart(props) {
    let totalPrice = 0;
    const cartcard = props.purchasedArray.map(igKey=>{
        totalPrice = totalPrice+props.items[igKey].price;
        return <CartCard title = {props.items[igKey].title} id={props.items[igKey].id} price = {props.items[igKey].price} url = {props.items[igKey].url}  />
    }) 
    return (
        <div className="out" >
            {props.purchasedArray.length>0?<h1>Here are your Products</h1> :<h1 style={{marginTop:"10%"}}>YOUR CART IS EMPTY !!!</h1>}
            <h2>Total Price : Rs.{totalPrice}/-</h2>
          <div className="buttonOrder"  onClick={()=>props.placeOrder(props.purchasedArray) , ()=>setTimeout(props.history.push('/placeorder') , 360)}><Button>Place order<ShoppingCartIcon/></Button></div>
        <div className="carts">
           {cartcard}
        </div>
        </div>
    )
};

const mapStoreToProps= (state)=>{
    return{
    purchasedArray : state.purchasedItems,
    items : state.items
}
};

const mapDispatchToProps=(dispatch)=>{
    return{
    placeOrder :(itemsArr)=>dispatch({type:"PLACE_ORDER" , arr : itemsArr}),
}
};

export default connect(mapStoreToProps,mapDispatchToProps)(Cart);