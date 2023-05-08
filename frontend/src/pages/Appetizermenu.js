import React, { useEffect} from 'react';
import '../assets/css/base.css';
import '../assets/css/menuitems.css';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { AppetizerMenuList } from '../actions/menuItemsActions';

export default function Appetizermenu(props) {

  const dispatch = useDispatch()
  const appetizerMenuList = useSelector((state) => state.appetizerMenuList);
  var {loading, error, appetizermenu} = appetizerMenuList;

  useEffect(() => {
      dispatch(AppetizerMenuList())
  }, [dispatch]);

  return (
  <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-appetizer" title='Appetizer'/>

    <div className="container-fluid pt-3">

      <Innerpagenav active='Appetizer' navto='/Appetizermenu'/>

      <div className="row overflow-x-hidden pt-1">
        
        {/* category is the link of api request pelease put in small case  */}
        <Menuitems menuitem={appetizermenu}/>

      </div>

    </div>

    </>
    }
  </>
  )
}
