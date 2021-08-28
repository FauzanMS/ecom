import React, { Component } from 'react'
import './AuthSignUp.css';
import axios from 'axios';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import { withRouter } from "react-router-dom";

class AuthSignUp extends Component {
  state = {
    //   name : "",
      email:"",
      password : "",
    //   address : "",
    //   address2 : "",
    //   city : "",
    //   state : "",
    //   zip  : "",
    //   productPrice : "",
    //   productId : "",
  }
  render() {
  const formHandler=(event , inputIdentifier)=>{
    console.log(event.target.value);
    console.log(inputIdentifier);
    // if(inputIdentifier === 'name'){
    //   this.setState({ name : event.target.value})
    //   }
    if(inputIdentifier === 'email'){
    this.setState({ email : event.target.value})
    }
    if(inputIdentifier === 'password'){
    this.setState({ password : event.target.value})
    }
    // if(inputIdentifier === 'address'){
    // this.setState({ address : event.target.value})
    // }
    // if(inputIdentifier === 'address2'){
    // this.setState({ address2 : event.target.value})}
    // if(inputIdentifier === 'state'){
    // this.setState({ state : event.target.value})}
    // if(inputIdentifier === 'city'){
    //   this.setState({ city : event.target.value})}
    //   if(inputIdentifier === 'zip'){
    //   this.setState({ zip : event.target.value})}
    //   this.setState({productPrice : this.props.productPrice})
    //   this.setState({productId : this.props.productId})
  }
  const UpdateFormHandler=(e)=>{
    e.preventDefault();
    const userDetails = {...this.state};
    // console.log(userDetails);
    axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBT9TYA1ncu_vgiRxe_qYfqGicVv0pLQ5g" , userDetails).then(res=>{
        console.log(res.data);
      this.props.history.push("/explore");
    })
  }
//https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
  return (
    <div className="form" id="formCard1">
      <h1>Hola ! Welcome to my world<br/>Please create your Account</h1>
      <form className="row g-3" id="form">
      {/* <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={(event)=>formHandler(event ,"name")} defaultValue = "" type="text" className="form-control" id="inputAddress2" placeholder="" />
        </div> */}
        <div className="col-md-10 m-auto">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input onChange={(event)=>formHandler(event ,"email")} defaultValue = "" type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-10 m-auto" >
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input onChange={(event)=>formHandler(event ,"password")} defaultValue = "" type="password" className="form-control" id="inputPassword4" />
        </div>
        {/* <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input onChange={(event)=>formHandler(event ,"address")} autoComplete="disabled" defaultValue = "" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input onChange={(event)=>formHandler(event ,"address2")} defaultValue = "" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input onChange={(event)=>formHandler(event ,"city")} defaultValue = "" type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" defaultValue="" onChange={(event)=>formHandler(event ,"state")} className="form-select" id="form-control">
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
          <input onChange={(event)=>formHandler(event ,"zip")} defaultValue = "" type="text" className="form-control" id="inputZip" />
        </div> */}
        <div className="formbut">
          <div className="form-check1">
            <button onClick={UpdateFormHandler} className="btn btn-primary" id="formButton">Create my account<LibraryAddCheckIcon/></button>
          </div>
        </div>
      </form>
    </div>
  )
}
}
export default withRouter(AuthSignUp);