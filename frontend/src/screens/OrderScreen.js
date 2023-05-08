import React, { useState } from 'react';
import '../assets/css/cart.css';
import '../assets/css/base.css';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import Axios from 'axios';
import {PayPalButton}  from 'react-paypal-button-v2';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../constants/orderConstants';



export default function OrderScreen() {
    const dispatch = useDispatch();
    const { id:orderId } = useParams();
    const [sdkReady, setSdkReady] = useState(false);

    const orderDetails = useSelector((state) => state.orderDetails);
    const {order, loading, error} = orderDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderPay = useSelector((state) => state.orderPay);
    const { error: errorPay, success: successPay, loading: loadingPay } = orderPay;

    const orderDeliver = useSelector((state) => state.orderDeliver);
    const { error: errorDeliver, success: successDeliver, loading: loadingDeliver } = orderDeliver;

    useEffect(() => {
        const addPayPalScript = async () => {
            const {data} = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type ="text/javascript";
            script.src =`https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        }
        if(!order || successPay|| successDeliver || (order && order._id !== orderId)) {
            dispatch({type: ORDER_PAY_RESET});
            dispatch({type: ORDER_DELIVER_RESET});
            dispatch(detailsOrder(orderId));
        } else {
            if(!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, orderId, order, setSdkReady, successPay, successDeliver])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult))
    }
    
    const deliverHandler = () => {
        dispatch(deliverOrder(order._id))
    }
return loading? (
    <Preloader class='menu-preloader'/>
    ):error? (
    <MessageBox variant='danger'>{error}</MessageBox>
    ):(
    <>
        <main className="container-fluid mb-sm-0 pb-3 my-2">
            <div className="cart-container">
                <div className="row">

                <div className="order-details col-sm-12 col-md-7">

                    <div className="shipping-details mb-2">
                        <header className="shipping-details-title p-3 text-white">Order Details</header>

                        <div className="shipping-costumer-details p-2">
                        <div className="fs-normal py-1"><span className="fw-semibold">order id: </span>{order._id}</div>
                            <div className="fs-normal py-1"><span className="fw-semibold">Name: </span>{order.shippingAddress.fullName}</div>
                            <div className="fs-normal py-1">
                                <span className="fw-semibold">Payment Method: </span>{order.paymentMethod} 
                                <span className='fw-semibold ms-2'>
                                    Status: {order.isPaid? 
                                        (<span className='bg-success fw-medium d-inline-block px-2 py-1 text-white rounded-2'>Paid At: {' '+ order.paidAt.substring(0, 10)}</span>)
                                        : 
                                        (<span className='bg-danger fw-medium d-inline-block px-2 py-1 text-white rounded-2'>Not Paid</span>)}
                                </span>
                            </div>
                            <address className="fs-normal py-1"><span className="fw-semibold">Address: </span>{order.shippingAddress.address}, {order.shippingAddress.landMark}, {order.shippingAddress.postalCode}</address>
                            {order.isDelivered? 
                            <MessageBox variant='success'>Delivered at: {order.deliveredAt.substring(0, 10)}</MessageBox>
                            : 
                            <MessageBox variant='danger'>Not Delivered</MessageBox>
                        }
                        </div>
                    </div>

                    <main className="cart-body">

                        <header className="cart-title p-3">
                            <div className="text-white">Order
                                {order.orderItems.length > 0 
                                ? <span className='fs-6'>({order.orderItems.length} items)</span> 
                                : ''}
                            </div>
                        </header>
                        {order.orderItems.length === 0
                        ?<div className='container my-2 text-capitalize'><MessageBox>its Looks like your cart is empty!<Link to='/menu'> <span className='text-danger'>Go For Shopping <i className="fa-solid fa-angles-right"></i></span></Link></MessageBox></div>
                        :(
                        <main className="order-items-container">
                        {order.orderItems.map((item) => (
                        <article key={item.product} className="cart-row d-flex align-items-center justify-content-around py-2">
                                <div className="cart-product-image overflow-hidden rounded-3">
                                    <Link to={`/productdetails/${item.category}/${item.product}`}>
                                        <img src={item.image} alt={item.name} className="image-fluid rounded-3" title={item.name}/>
                                    </Link>
                                </div>
                                <div className="cart-product-details">
                                    <Link to={`/productdetails/${item.category}/${item.product}`}>
                                        <div className="cart-product-title">{item.name}</div>
                                    </Link>
                                    <div className="d-flex align-items-center justify-content-start gap-3 mt-1">
                                        <div className="cart-product-price" title='price'>{item.price}&#8377;</div>
                                        <Link to={`/${item.category}`}>
                                            <div className="cart-product-category px-2" title='category'>{item.category}</div>
                                        </Link>
                                    </div>
                                </div>
                                <div >
                                    <div className="text-center cart-product-price">{item.qty} x {item.price} = {item.qty * item.price}&#8377;</div>
                                </div>
                            </article>))}
                        </main>)}
                    </main>

                </div>

                    <footer className="col-sm-12 col-md-5 mt-2">

                        <div className="cart-bill container py-3">
                            <div className="order-summary-title text-capitalize mb-1 p-2">Order Summary</div>
                            
                            <div className="shipping p-2 d-flex justify-content-between align-items-center">
                                <div className="shipping-title text-capitalize">Items:</div>
                                <div className="shipping-price">{order.itemsPrice}&#8377;</div>
                            </div>

                            <div className="shipping p-2 d-flex justify-content-between align-items-center">
                                <div className="shipping-title text-capitalize">Shipping:</div>
                                <div className="shipping-price">{order.shippingPrice}&#8377;</div>
                            </div>
                            <div className="total p-2 d-flex justify-content-between align-items-center">
                                <div className="total-title text-capitalize">total:</div>
                                <div className="total-price">{order.totalPrice}&#8377;</div>
                            </div>
                            {
                                !order.isPaid && (
                                    <div className='w-75 mx-auto mt-1'>
                                        {!sdkReady ? (
                                        <Preloader class='menu-preloader'></Preloader>
                                        ) : (
                                            <>
                                            {errorPay && (
                                            <MessageBox variant='danger'>{errorPay}</MessageBox>
                                            )}
                                            {loadingPay && (
                                                <Preloader class='menu-preloader'/>
                                            )}
                                            <PayPalButton
                                            amount={order.totalPrice}
                                            onSuccess={successPaymentHandler}>
                                            </PayPalButton>
                                            </>
                                        )}
                                    </div>
                                )
                            }
                            {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                <>
                                {loadingDeliver && <Preloader class='menu-preloader'></Preloader>}
                                {errorDeliver && <MessageBox>{errorDeliver}</MessageBox>}
                                <button onClick={deliverHandler} type='button' className='btn btn-warning text-white w-75 mx-auto d-block fw-semibold'>Deliver Order</button>
                                </>
                            )}
                        </div>
                    </footer>

                </div>

            </div>

        </main>
    </>
)
}
