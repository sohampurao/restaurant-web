import React from 'react'
import { Link } from 'react-router-dom';

function Menuitemdisplay(props) {
    const {menuitem} = props;
return (
    <>
    <div className="col-lg-6 col-md-12 ">
        <div className="menu-item-container mx-auto mb-4 p-3">
            <div className="row align-items-center">
                
                <div className="px-0 mt-1 col-sm-3 col-12">
                    <img className="menu-item-img mx-auto d-block" src={menuitem.image} alt={menuitem.name} loading='lazy'/>
                </div>

                <div className="text-center text-sm-start mt-2 col-12  col-sm-9 ps-md-4">
                    <h3 className="menu-item-title mb-0 mt-1 text-capitalize">{menuitem.name}</h3>
                    <div className="menu-item-price">{menuitem.price}&#8377;</div>
                    <h5 className="menu-item-sub mt-1 mt-sm-0 w-100">{menuitem.text}</h5>
                    <Link to={`/productdetails/${menuitem.category}/${menuitem._id}`}>
                    <button className="add-to-cart d-inline-block text-center text-capitalize" ><i className="fa-solid fa-bag-shopping"></i></button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </>
)
}
export default function Menuitems(props) {
    const {menuitem} = props
return (
    <>
    {
    menuitem.map((menuitem) => {
        return  <Menuitemdisplay key={menuitem._id} menuitem={menuitem}/>
    })
    }
    </>
)
}