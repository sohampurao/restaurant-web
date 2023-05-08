import React, { useEffect } from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { BurgerMenuList } from '../actions/menuItemsActions';

export default function Burgermenu(props) {
    const dispatch = useDispatch()
    const burgerMenuList = useSelector((state) => state.burgerMenuList);
    var {loading, error, burgermenu} = burgerMenuList;

    useEffect(() => {
        dispatch(BurgerMenuList())
    }, [dispatch]);

return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
    error? (
        <MessageBox variant='danger'>{error}</MessageBox>
    ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-burger" title='Burger'/>

    <div className="container-fluid pt-3">

        <Innerpagenav active='Burger' navto='/Burgermenu'/>

        <div className="row overflow-x-hidden pt-1">

            <Menuitems menuitem={burgermenu}/>

        </div>

    </div>

    </>
    }
    </>
)
}
