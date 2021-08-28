import axios from 'axios';
import React , {useState , useEffect} from 'react';
import { connect } from 'react-redux';
import Order from './Order/Order.js';
import './Orders.css';
import Spinner from '../Spinner/Spinner.js';
function Orders(props) {
const [purchase, setPurchase] = useState([]);
const [spinner, setSpinner] = useState(true);
useEffect(() => {
    axios.get("https://fauzansnike-default-rtdb.firebaseio.com/orders.json").then(res=>{
        console.log(res.data);
        const fetchedOrders = [];
        for(let key in res.data){
            fetchedOrders.push({ ...res.data[key],
                id : key,
            })
        }
        setPurchase(fetchedOrders);
        setSpinner(false);
    })
},[])
let orders = purchase.map(order=>{
    if(order.localId === props.localId)
    return <Order id= {order.productId}/>
    else{
       return null;
    }
    })

    return (
        <div>
            <div className="orderScreen">
               <h1>Your Orders</h1>
               {spinner ? <Spinner/> : null}
               {orders}
            </div>
        </div>
    )
}

const mapStoreToProps=(state)=>{
    return{
        localId : state.localId,
    }
};

export default connect(mapStoreToProps,null)(Orders);
