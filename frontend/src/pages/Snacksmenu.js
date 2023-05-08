import React, { useEffect } from 'react';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { SnacksMenuList } from '../actions/menuItemsActions';

export default function Snacksmenu(props) {
    const dispatch = useDispatch()
    const snacksMenuList = useSelector((state) => state.snacksMenuList);
    var {loading, error, snacksmenu} = snacksMenuList;

    useEffect(() => {
        dispatch(SnacksMenuList())
    }, [dispatch]);
return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-snacks" title="Snack's"/>

    <div className="container-fluid pt-3">

    <Innerpagenav active='Snacks' navto='/Snacksmenu'/>

    <div className="row overflow-x-hidden pt-1">

        <Menuitems menuitem={snacksmenu}/>

    </div>

    </div>

    </>
    }
    </>
)
}
