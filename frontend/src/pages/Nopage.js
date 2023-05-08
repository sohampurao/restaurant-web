import React from 'react'

export default function Nopage() {
    const errorPage = {
        top : 35+"%",
        left : 50+"%",
        transform : "translate(-50%, -50%)"
        }
  return (
    <div className='position-absolute  text-center fs-3' style={errorPage}>Opps! Error occured</div>
  )
}
