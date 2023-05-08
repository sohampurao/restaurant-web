import React from'react'

export default function Addtocartbtn(props) {
return (
    <button type='button' className={`add-to-cart d-inline-block text-center text-capitalize ${props.class}`} onClick={props.onClick} disabled={props.disabled}>{props.content}</button>
)
}