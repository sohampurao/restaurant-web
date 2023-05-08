import React, { useEffect}  from 'react';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { CocktailMenuList } from '../actions/menuItemsActions';

export default function Cocktailmenu(props) {

    const dispatch = useDispatch()
    const cocktailMenuList = useSelector((state) => state.cocktailMenuList);
    var {loading, error, cocktailmenu} = cocktailMenuList;

    useEffect(() => {
        dispatch(CocktailMenuList())
    }, [dispatch]);

return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-cocktail" title="Cocktail's"/>

    <div className="container-fluid pt-3">

        <Innerpagenav active="Cocktail's" navto='/Cocktailmenu'/>

    <div className="row overflow-x-hidden pt-1">
    
        <Menuitems menuitem={cocktailmenu}/>

    </div>

    </div>

    </>
    }
    </>
)
}
