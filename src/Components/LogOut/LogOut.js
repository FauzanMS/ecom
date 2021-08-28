import React from 'react'
import { connect } from 'react-redux'

function LogOut() {
    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
    onLogOut : ()=>dispatch({type:"LOGOUT"}),
}};
export default connect()(LogOut);
