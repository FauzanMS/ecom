import React from 'react'
import { Link } from 'react-router-dom';
import './MyProduct.css';
import {connect} from 'react-redux';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function MyProduct(props) {
let tokenBool = false;
if(props.token!==""){
 tokenBool = true;
}
const lnk = "/cart";
    return (<>
        <div className="ProductView">
            <div className="Production">
            <img src={props.items[props.singleBuy-1].url} className="productImage"/>
            <div className="info">
                <h2 style={{textAlign:"center"}}>{props.items[props.singleBuy-1].title}</h2>
                <h1 style={{textAlign:"center"}}>Rs.{props.items[props.singleBuy-1].price} <span className="noprice">Rs.{props.items[props.singleBuy-1].real}</span></h1>
                <table className="table1">
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
                {tokenBool ? null :<h1 style={{marginTop:"5%" , backgroundColor:"red" , color:"black"}}>You must login first !</h1>}
                <div className="button">
                <Link to="/explore" className="btn btn-outline-warning" style={{marginRight:"2%"}}>
                   <ArrowBackIcon/>Back to Home
                </Link>
                {tokenBool ? <Link to={lnk} className="btn btn-outline-success">Place Order<CheckCircleIcon/></Link> : <Link to="/login" className="btn btn-outline-success" >
                  Login<VerifiedUserIcon/>
                </Link> }
            </div>
                </div>
            </div>
        </div>
        </>
    )
}


const mapStoreToProps  = (state) =>{
  return {
    items : state.items,
    singleBuy : state.singleBuy,
    token : state.token ,
  };
};


export default connect(mapStoreToProps)(MyProduct);
