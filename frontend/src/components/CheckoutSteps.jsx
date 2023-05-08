import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/base.css'

export default function CheckoutSteps(props) {
return (
    <div className='row checkout-steps text-center'>
        <div className={props.step1 ? 'active' : ''}><Link to="#">Sign-In</Link></div>
        <div className={props.step2 ? 'active' : ''}><Link to="/shipping">Shipping</Link></div>
        <div className={props.step3 ? 'active' : ''}><Link to="/payment">Payment</Link></div>
        <div className={props.step4 ? 'active' : ''}><Link to="/">Place Order</Link></div>
    </div>
)
}
