import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Explore from './Components/Explore/Explore';
import { BrowserRouter, Route } from 'react-router-dom';
import MyProduct from './Components/MyProduct/MyProduct';
import Login from './Components/Login/Login';
import CartPage from './Components/CartPage/CartPage';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import AuthSignUp from './Components/AuthSign/AuthSignUp';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer';
import {connect} from 'react-redux';

function App(props) {
  
  return (<>
    <BrowserRouter>
      <Navbar/>
    <div className="App">
      <Route path="/ecom" exact component={HomePage}/>
      <Route path="/explore" exact component={Explore}/>
      <Route path="/product" exact  component={MyProduct}/>
      <Route path="/cart" exact  render={ ({match}) => <PlaceOrder id={match.params.id}  />}/>
      <Route path="/placeorder" exact  component={PlaceOrder}/>
      {props.localId ? <Route path="/authsignup" exact component={Explore}/> :<Route path="/authsignup" exact component={AuthSignUp}/>}
      <Route path="/login" exact component={Login}/>
      <Route path="/cartpage" exact component={CartPage}/>
      {props.localId  ? 
      <Route path="/order" exact component={Orders}/> : <Route path="/order" exact component={Explore}/>}
    </div>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
const mapStoreToProps = (state) =>{
  return{
  localId : state.localId
}
}

export default connect(mapStoreToProps,null)(App);
