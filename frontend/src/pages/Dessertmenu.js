import React, { useEffect } from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { DessertMenuList } from '../actions/menuItemsActions';

export default function Dessertmenu(props) {
    const dispatch = useDispatch()
    const dessertMenuList = useSelector((state) => state.dessertMenuList);
    var {loading, error, dessertmenu} = dessertMenuList;

    useEffect(() => {
    dispatch(DessertMenuList())
    }, [dispatch]);
return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-dessert" title="Dessert's"/>

    <div className="container-fluid pt-3">

        <Innerpagenav active="Dessert's" navto='/Dessertmenu'/>

        <div className="row overflow-x-hidden pt-1">

            <Menuitems menuitem={dessertmenu}/>

        </div>

    </div>

    </>
    }
    </>
)
}
