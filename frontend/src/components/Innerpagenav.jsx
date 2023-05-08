import React from 'react'
import { NavLink } from "react-router-dom";

const Innerpagenav = (props) => {
return (
    <>
    <div className="page-inner-nav w-100 mb-4 d-inline-flex justify-content-center align-items-center">
            <div>
                <NavLink to="/Menu">Menu</NavLink>
            </div>
            <span> | </span>
            <div>
                <NavLink to={props.navto} className="inner-nav-active text-capitalize">{props.active}</NavLink>
            </div>
        </div>
    </>
)
}

export default Innerpagenav;

