import React, { Component } from 'react'
import './SignUp.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';

class SignUp extends Component {
  state = {
      name : "",
      phone:"",
      password : "",
      address : "",
      address2 : "",
      city : "",
      state : "",
      zip  : "",
      productPrice : "",
      productId : "",
      tokenId : null,
      localId : null,
      loading : false,
  }
  render() {
  const formHandler=(event , inputIdentifier)=>{
    // console.log(event.target.value);
    // console.log(inputIdentifier);
console.log(this.props.token);
    if(inputIdentifier === 'name'){
      this.setState({ name : event.target.value})
      }
    if(inputIdentifier === 'phone'){
    this.setState({ phone : event.target.value})
    }
    if(inputIdentifier === 'password'){
    this.setState({ password : event.target.value})
    }
    if(inputIdentifier === 'address'){
    this.setState({ address : event.target.value})
    }
    if(inputIdentifier === 'address2'){
    this.setState({ address2 : event.target.value})}
    if(inputIdentifier === 'state'){
    this.setState({ state : event.target.value})}
    if(inputIdentifier === 'city'){
      this.setState({ city : event.target.value})}
    if(inputIdentifier === 'zip'){
    this.setState({ zip : event.target.value})
      this.setState({productPrice : this.props.productPrice})
      this.setState({productId : this.props.productId})
      this.setState({tokenId : this.props.token})
      this.setState({localId : this.props.userId})
    }
  }

  const UpdateFormHandler=(e)=>{
    e.preventDefault();
    this.setState({loading: true});
    const userDetails = {...this.state};
    // console.log(userDetails);
    axios.post("https://fauzansnike-default-rtdb.firebaseio.com/orders.json?", userDetails).then(res=>{
      this.setState({loading: false})
      this.props.history.push("/explore");
    })
  }

  return (
    <div className="form" id="formCard" style={{height:"95%"}}>
      <form className="row">
      <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={(event)=>formHandler(event ,"name")} defaultValue = "" type="text" className="form-control" id="inputAddress2" placeholder="" required/>
        </div>
       <div className="col-md-6"> <label htmlFor="inputEmail4" className="form-label">Phone Number</label>
          <input onChange={(event)=>formHandler(event ,"phone")} defaultValue = "" type="number" className="form-control"  required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input onChange={(event)=>formHandler(event ,"password")} defaultValue = "" type="password" className="form-control" id="inputPassword4" required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input onChange={(event)=>formHandler(event ,"address")} autoComplete="disabled" defaultValue = "" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input onChange={(event)=>formHandler(event ,"address2")} defaultValue = "" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input onChange={(event)=>formHandler(event ,"city")} defaultValue = "" type="text" className="form-control" id="inputCity" required/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" defaultValue="" onChange={(event)=>formHandler(event ,"state")} className="form-select" id="form-control" style={{width:"80%" , margin:"auto"}} required>
            <option defaultValue="West Bengal">Choose...</option>
            <option>West Bengal</option>
            <option>Maharastra</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Delhi</option>
            <option>Rajasthan</option>
            <option>Punjab</option>
            <option>Uttar Pradesh</option>
            <option>Bihar</option>
            <option>Jharkhand</option>
            <option>Jammu Kashmir</option>
            <option>Orissa</option>
            <option>Gujrat</option>
            <option>Nagaland</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input onChange={(event)=>formHandler(event ,"zip")} defaultValue = "" type="text" className="form-control" id="inputZip" required />
        </div>
        {this.state.loading? <Spinner/>:
        <div className="col-12">
          <div className="form-check">
            <button onClick={UpdateFormHandler} className="btn" id="formButton">Place Order</button>
          </div>
        </div>}
      </form>
    </div>
  )
}
}

const mapStoreToProps=(state)=>{
  return {
    userId : state.localId,
    token  : state.token,
  }
}

export default connect(mapStoreToProps,null)(withRouter(SignUp));

