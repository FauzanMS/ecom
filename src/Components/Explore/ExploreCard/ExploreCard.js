import React from 'react'
import './ExploreCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import * as actionTypes from '../../../store/actions/action';

function ExploreCard(props) {
  let discount = ((props.real - props.price)/(props.real))*100;
  discount = discount.toPrecision(2)
  // const lnk = "/product/"+`${props.id}`;
    return (
      <> 
<div className="card" title={props.title} style={{ height:"100%"}}>
  <img src={props.url} className="card-img-top" style={{height:"60%"}}  />
  <div className="add_to_cart" title="Add to Cart" onClick={()=>props.onAdd(props.id)}><FavoriteRoundedIcon/></div>
  <div className="card-body">
    <h6 className="card-title">{props.title}</h6>
    <p className="card-text"><span className="amount"><b>Rs.{props.price}</b></span><span className="rebate">Rs.{props.real}</span><span className="discount">({discount}% OFF)</span></p>
    <Link to='/product' onClick={()=>props.onBuy(props.id)} className="btn btn-outline-warning" id="buy" style={{marginBottom:"2%" , width:"100%"}} >Buy<MonetizationOnRoundedIcon/></Link>
  </div>
 </div>
        </>
    )
}

const mapStoreToProps = (state) =>{
  return {
    singleBuy : state.singleBuy,
    itemArr : state.items,
    tokenId : state.tokenId,
    localId : state.localId,
    purchasedArray : state.purchasedItems,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    onAdd :(id)=>dispatch({type:actionTypes.ADD_TO_CART , item : id}),
    onRemove : (id)=>dispatch({type:actionTypes.REMOVE_FROM_CART, item : id}),
    onBuy : (id)=>dispatch({type:actionTypes.SINGLE_BUY , item : id})

  }
}

export default connect(mapStoreToProps , mapDispatchToProps)(ExploreCard);