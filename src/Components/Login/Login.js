import { Link} from 'react-router-dom';
import './Login.css';
import React, { Component } from 'react';
import axios from 'axios';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Spinner from '../Spinner/Spinner';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
class Login extends Component {
  state={
    token : null,
    localId:null,
    spinner : false,
    email : "",
    password:"",
    error:false,
  }
  render() {

    const formHandler=(event , inputIdentifier)=>{
      // console.log(event.target.value);
      // console.log(inputIdentifier);
      // if(inputIdentifier === 'name'){
      //   this.setState({ name : event.target.value})
      //   }
      if(inputIdentifier === 'email'){
      this.setState({ email : event.target.value})
      }
      if(inputIdentifier === 'password'){
      this.setState({ password : event.target.value})
      }
    }
    const UpdateFormHandler=(e)=>{
      e.preventDefault();
      const userDetails = {...this.state};
      this.setState({spinner : true});
      axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBT9TYA1ncu_vgiRxe_qYfqGicVv0pLQ5g" , userDetails).then(res=>{
      this.setState({token : res.data.idToken , localId:res.data.localId})
      this.props.onLogin(this.state.token , this.state.localId);
      this.setState({spinner: false});
      setTimeout(()=>this.props.onLogOut(),3600*1000);
      // history.goBack();
      this.props.history.goBack();
        // this.props.history.push("/explore");
      }).catch(err=>{
           this.setState({error : true})
           this.setState({spinner : false})
          // this.props.history.push("/authsignup");
      })
    }
    return (
      <>
      <div className="loginCard">
          <form>
            {this.state.error ? <h5 style={{color : "red"}}>Wrong Email or Password Try Again !</h5> : null}
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Email address<EmailIcon/></label>
<input onChange={(event)=>formHandler(event ,"email")} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email-id"/>
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Password<LockIcon/></label>
<input onChange={(event)=>formHandler(event ,"password")} type="password"   className="form-control" placeholder="Enter your Password"></input>
</div>
<div className="col-12">
          {this.state.spinner ? <Spinner/> : 
        <button type="submit" className="btn btn-primary" id="LoginButton"  onClick={UpdateFormHandler} >Login<VpnKeyIcon/></button>}
      </div>
<h7>Don't have an account ? Try <Link to="/authsignup" className="signuplink_login">signing in</Link> </h7>
      </form>
      </div>
      </>
    )
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      onLogin : (token , userId)=>dispatch({type:"LOGIN_START" , tokenId : token , userId : userId}),
      onLogOut : ()=>dispatch({type:"LOGOUT"}),
}
}

export default connect(null,mapDispatchToProps)(withRouter(Login));