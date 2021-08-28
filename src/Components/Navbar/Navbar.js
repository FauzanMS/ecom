import React , {useState} from 'react'
import { NavLink, Redirect} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';
import logo from './R.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Navbar(props) {

// let tokenBool = false;
// if(props.token){
//   tokenBool = true;
// }
// else{
//   tokenBool = false;
// }
  const [show,setShow]=useState(false);
    return (
        <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
  <div className="container-fluid" id="navbar">   
    <a className="navbar-brand" href="/"> <img src={logo} alt="" width="65" height="24" class="d-inline-block align-text-top"/>
Fauzan's Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" onClick={()=>setShow(!show)} aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?"show":null}`} id="collapseNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" id="signupdiv">
          <NavLink className="nav-link" aria-current="page" title="Home" to="/explore" exact><HomeIcon/></NavLink>
        </li>
        <li className="nav-item" id="signupdiv">
         {props.token!=="" ? <NavLink to="/order" title="My Orders" className="nav-link" id="signup"><ShoppingCartIcon /></NavLink>: <NavLink to="/authsignup" className="nav-link" title="Sign in " id="signup"><PersonAddRoundedIcon/></NavLink>}
        </li>
        <li className="nav-item" id="logdiv">
        {props.token!=="" ? <div className="nav-link"  title="Log-Out" id="signup" onClick={()=>props.onLogOut()}><ExitToAppIcon/></div> : <NavLink className="nav-link" title="Login" id="login" to="/login"><AccountCircleIcon/></NavLink> }
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)}

const mapStoreToProps=(state)=>{
  return{
  token : state.token,
}};
const mapDispatchToProps=(dispatch)=>{
  return{
  onLogOut : ()=>dispatch({type:"LOGOUT"}),
}};

export default connect(mapStoreToProps,mapDispatchToProps)(Navbar);