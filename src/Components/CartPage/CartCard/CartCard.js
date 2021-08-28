import React from 'react';
import './CartCard.css';
import * as actionTypes from '../../../store/actions/action';
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
function CartCard(props) {
    return ( 
    <div className="CartCard">
    <div className="card" >
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body">
      <p className="cardtex">{props.title}</p>
    <p className="card-text">Rs.{props.price}</p>
  </div>
  <div className="remove" onClick={()=>props.onRemove(props.id)}><DeleteIcon/></div>
</div>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onRemove : (id)=>dispatch({type:actionTypes.REMOVE_FROM_CART , item : id})
  }
}

export default connect(null,mapDispatchToProps)(CartCard);

