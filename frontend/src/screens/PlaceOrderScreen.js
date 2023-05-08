import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import '../assets/css/cart.css';
import '../assets/css/base.css';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MessageBox from '../components/MessageBox';
import Addtocartbtn from '../components/buttons/Addtocartbtn';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import Preloader from '../components/Preloader';


export default function PlaceOrderScreen() {
    const navigate = useNavigate();
    const cart = useSelector((state)=> state.Cart);
    useEffect(() => {
        if (!cart.paymentMethod) {
            navigate("/payment")
        }
    });
    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    cart.shippingPrice = cart.itemsPrice  > 3000 ? 0 : 50;

    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems}));

    }
    useEffect(() => {
        if(success) {
            navigate(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [dispatch, order, navigate, success])
return (
    <>
    <main className="container-fluid mb-sm-0 pb-3">
    <CheckoutSteps step1 step2 step3 step4/>
        <div className="cart-container">
            <div className="row">

            <div className="order-details col-sm-12 col-md-7 mb-2">

                <div class="shipping-details mb-2">
                    <header class="shipping-details-title p-3 text-white">Shipping Details</header>

                    <div class="shipping-costumer-details p-2">
                        <div class="fs-normal"><span class="fw-semibold">Name: </span>{cart.shippingAddress.fullName}</div>
                        <div class="fs-normal"><span class="fw-semibold">Payment Method: </span>{cart.paymentMethod}</div>
                        <address><span class="fw-semibold">Address: </span>{cart.shippingAddress.address}, {cart.shippingAddress.landMark}, {cart.shippingAddress.postalCode}</address>
                    </div>
                </div>

                <main className="cart-body">

                    <header className="cart-title p-3">
                        <div className="text-white">Order
                            {cart.cartItems.length > 0 
                            ? <span className='fs-6'>({cart.cartItems.length} items)</span> 
                            : ''}
                        </div>
                    </header>
                    {cart.cartItems.length === 0
                    ?<div className='container my-2 text-capitalize'><MessageBox>its Looks like your cart is empty!<Link to='/menu'> <span className='text-danger'>Go For Shopping <i className="fa-solid fa-angles-right"></i></span></Link></MessageBox></div>
                    :(
                    <main className="order-items-container">
                    {cart.cartItems.map((item) => (
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
                            <div className='placeorder-cart-calc'>
                                <div className="text-center cart-product-price">{item.qty} x {item.price} <br className='d-block d-sm-none'/> = {item.qty * item.price}&#8377;</div>
                            </div>
                        </article>))}
                    </main>)}
                </main>

            </div>

                <footer className="col-sm-12 col-md-5">

                    <div className="cart-bill container py-3">
                        <div className="order-summary-title text-capitalize mb-1 p-2">Order Summary</div>
                        
                        <div className="shipping p-2 d-flex justify-content-between align-items-center">
                            <div className="shipping-title text-capitalize">Items:</div>
                            <div className="shipping-price">{cart.itemsPrice}&#8377;</div>
                        </div>

                        <div className="shipping p-2 d-flex justify-content-between align-items-center">
                            <div className="shipping-title text-capitalize">Shipping:</div>
                            <div className="shipping-price">{cart.shippingPrice}&#8377;</div>
                        </div>
                        <div className="total p-2 d-flex justify-content-between align-items-center">
                            <div className="total-title text-capitalize">total:</div>
                            <div className="total-price">{cart.totalPrice}&#8377;</div>
                        </div>
                        <div className="checkout-btn d-flex align-items-center justify-content-center mt-2">
                            <Addtocartbtn disabled={cart.cartItems.length === 0} onClick={placeOrderHandler} content='Place Order' class="px-3"/>
                        </div>
                    </div>
                    {loading && <Preloader class='menu-preloader'/>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                </footer>

            </div>

        </div>

    </main>
    </>
  )
}
