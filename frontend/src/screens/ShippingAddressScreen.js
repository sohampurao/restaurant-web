import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import {useDispatch, useSelector} from 'react-redux';
import { saveShippingAddress } from '../actions/Cartaction';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ShippingAddressScreen() {
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    
    const cart = useSelector((state) => state.Cart);
    const { shippingAddress } = cart;

    const { userInfo } = userSignin;
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [landMark, setLandMark] = useState(shippingAddress.landMark);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const dispatch = useDispatch();

    useEffect(() => {if (!userInfo) {
        navigate('/signin');
    }})

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, landMark, postalCode}));
        navigate('/payment')
    }
    return (
    <>
    <main class="container-fluid">
        <CheckoutSteps step1 step2/>
        <div class="main-content mx-auto my-3 form-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>

                <div class="fs-5 fw-semibold text-capitalize p-2">Shipping Details</div>

                <section class="my-sm-2 p-2">
                    <label for="fullName" class="form-label form-input-label mb-2 text-capitalize">Full Name</label>
                    <input type="text" class="form-control" id="fullName" value={fullName} onChange={(e) => {setFullName(e.target.value)}} placeholder="Enter full name" required/>
                </section>

                <address class="my-sm-2 p-2">
                    <label for="address" class="form-label form-input-label mb-2 text-capitalize">address</label>
                    <input type="text" class="form-control" id="address" value={address} onChange={(e) => {setAddress(e.target.value)}} placeholder="Enter address" required/>
                </address>

                <section class="my-sm-2 p-2">
                    <label for="land-mark" class="form-label form-input-label mb-2 text-capitalize">land mark</label>
                    <input type="text" class="form-control" id="land-mark" value={landMark} onChange={(e) => {setLandMark(e.target.value)}} placeholder="Enter Land Mark" required/>
                </section>

                <section class="my-sm-2 p-2">
                    <label for="postalcode" class="form-label form-input-label mb-2 text-capitalize">postal code</label>
                    <input type="text" class="form-control" id="postalcode" value={postalCode} pattern="[0-9]{6}" maxLength="6" onChange={(e) => {setPostalCode(e.target.value)}} placeholder="Enter postal code" title='Please Enter 6 digit code' required/>
                </section>

                <footer class="d-flex justify-content-center align-items-center mt-4 flex-column">
                    <button type="submit" class="btn btn-warning form-submit-btn fw-semibold text-light">Continue</button>
                </footer>
                
            </form>
        </div>
    </main>
    </>
)
}
