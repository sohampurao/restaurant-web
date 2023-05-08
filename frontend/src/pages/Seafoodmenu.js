import React, {useEffect}  from 'react';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { SeafoodMenuList } from '../actions/menuItemsActions';

export default function Seafoodmenu(props) {
    const dispatch = useDispatch()
    const seafoodMenuList = useSelector((state) => state.seafoodMenuList);
    var {loading, error, seafoodmenu} = seafoodMenuList;

    useEffect(() => {
        dispatch(SeafoodMenuList())
    }, [dispatch]);

return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
    error? (
    <MessageBox variant='danger'>{error}</MessageBox>
    ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-seafood" title="Seafood"/>

    <div className="container-fluid pt-3">

        <Innerpagenav active="Seafood" navto='/Seafood'/>

    <div class="row overflow-x-hidden pt-1">

        <Menuitems menuitem={seafoodmenu}/>

    </div>

    </div>

    </>}
    </>
)
}
