import React, { useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { savePaymentMethod } from '../actions/Cartaction';
import { useEffect } from 'react';

export default function PaymentMethodScreen() {
    const navigate = useNavigate();
    const cart = useSelector((state)=> state.Cart);
    const { shippingAddress } = cart;
    useEffect(() => {
        if(!shippingAddress.address) {
            navigate('/shipping')
        }
    })
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }
return (
    <>
    <main className="container-fluid">
        <CheckoutSteps step1 step2 step3/>
        <div className="main-content mx-auto my-5 form-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>

                <div className="fs-5 fw-semibold text-capitalize p-2">Payment Method</div>

                <div className="form-check my-sm-2 p-2 ms-4">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    value="PayPal" 
                    name="paymentMethod" 
                    id="paypal"  
                    checked 
                    onChange={(e) => {setPaymentMethod(e.target.value)}}
                />
                    <label className="form-check-label form-input-label text-capitalize" htmlFor="paypal">PayPal</label>
                </div>

                <div className="form-check my-sm-2 p-2 ms-4">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    value="Card" 
                    name="paymentMethod" 
                    id="card"
                    onChange={(e) => {setPaymentMethod(e.target.value)}}
                />
                    <label className="form-check-label form-input-label text-capitalize" htmlFor="card">Card</label>
                </div>
                
                <footer className="d-flex justify-content-center align-items-center mt-4 flex-column">
                    <button type="submit" className="btn btn-warning form-submit-btn fw-semibold text-light">Continue</button>
                </footer>
                
            </form>
        </div>
    </main>
    </>
)
}
