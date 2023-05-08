import React, { useState } from 'react';
import "../assets/css/navbar.css";
import '../assets/css/base.css';
import { Outlet , NavLink, Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.Cart);
    const {cartItems} = cart;

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;

    // function for menu toggle
    const [menuToggle, setMenuToggle] = useState('hide')
    let menuToggler =() => {
        if (menuToggle === 'hide') {
            setMenuToggle('show')
        } else {
            setMenuToggle('hide')
        }
    }

    // remove the offcanvas when user click on nav-link
    const navHide = () => {setMenuToggle('hide')}   
    
    const signoutHandler = () => {
        dispatch(signout());
    }
    return (
    
    <>
    <header className="header container-fluid bg-black">
        <nav className="nav-bar d-flex align-items-center justify-content-between">

            <div className="brand-logo rounded-circle" title="brand logo">
                <NavLink to="/">
                    <img  src="/images/common/res-logo.jpg" alt="restaurent logo" className="img-fluid rounded-circle"/>
                </NavLink>
            </div>

            <div className="brand-name text-capitalize me-auto ms-2 text-white" title="brand name">
                <NavLink to="/">
                    {props.title}
                </NavLink>
            </div>

            <div className="cart-icon text-white me-3" title="Order Cart" id="cart-icon">
                <NavLink to='/cart'>
                    <i className="fa-solid fa-cart-shopping position-relative">
                        {cartItems.length > 0 && (
                        <span className="cart-bubble position-absolute text-center">{cartItems.length}</span>)}
                    </i>
                </NavLink>
            </div>

            <div className="nav-toggler text-white me-2 d-inline-flex d-md-none" id="nav-toggler" title="Toggle Menu" onClick={menuToggler}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`nav-menu bg-black text-center d-flex menu-${menuToggle}`} id="nav-menu" tabIndex='0' onBlur= {() => setMenuToggle('hide')}>
                <ul className="nav-list text-capitalize d-flex me-md-2" id="nav-list">
                    <li className="nav-item position-relative"><NavLink to="/" className="nav-link" onClick={navHide}>Home</NavLink></li>
                    <li className="nav-item position-relative"><NavLink to="/Menu" className="nav-link" onClick={navHide}>Menu</NavLink></li>
                    <li className="nav-item position-relative"><NavLink to="/Contact" className="nav-link" onClick={navHide}>Contact</NavLink></li>
                    <li className="nav-item">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                            {userInfo 
                                ? (
                                <>
                                <NavLink className="dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{userInfo.name}</NavLink>
                                <ul className="dropdown-menu dropdown-menu-dark mt-lg-4 text-center">
                                    <li><Link className="dropdown-item" to="/profile">User Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/orderhistory">Order History</Link></li>
                                    <li><Link className="dropdown-item" to="#signout" onClick={signoutHandler}>Sign-Out</Link></li>
                                </ul>
                                </>
                                )
                                : <NavLink to="/signin" onClick={navHide}>sign-In</NavLink>}
                            </li>
                        </ul>
                    </li>
                    {userInfo && userInfo.isAdmin 
                    && (
                    <>
                    <li className="nav-item">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <NavLink className="dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</NavLink>
                                <ul className="dropdown-menu dropdown-menu-dark mt-lg-4 text-center">
                                    <li><Link className="dropdown-item" to="/orderlist">Orders</Link></li>
                                    <li><Link className="dropdown-item" to="/burgerlist">Burger Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/snackslist">Snacks Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/appetizerlist">Appetizer Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/mainmenulist">Main-Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/seafoodlist">Seafood Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/pizzalist">Pizaa Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/cocktaillist">Cocktail's Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/dessertlist">Dessert Menu</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </>
                )
                }

                <div className="nav-close d-inline-flex d-md-none position-absolute text-white" id="nav-close" onClick={menuToggler}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                </ul>
            </div>
        </nav>
    </header>
    <Outlet></Outlet>
    </>
    )
}

export default Navbar;
