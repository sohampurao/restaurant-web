import React, {useEffect} from 'react';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { PizzaMenuList } from '../actions/menuItemsActions';

export default function Pizzamenu(props) {
    const dispatch = useDispatch()
    const pizzaMenuList = useSelector((state) => state.pizzaMenuList);
    var {loading, error, pizzamenu} = pizzaMenuList;

    useEffect(() => {
        dispatch(PizzaMenuList())
    }, [dispatch]);
    
return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
    error? (
    <MessageBox variant='danger'>{error}</MessageBox>
    ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-pizza" title="Pizza's"/>

    <div className="container-fluid pt-3">

        <Innerpagenav active="Pizza's" navto='/Pizzamenu'/>

    <div className="row overflow-x-hidden pt-1">

        <Menuitems menuitem={pizzamenu}/>

    </div>

    </div>

    </>}

    </>
)
}
