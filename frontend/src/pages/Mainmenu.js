import React, { useEffect} from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { MainMenuList } from '../actions/menuItemsActions';

export default function Mainmenu(props) {
  const dispatch = useDispatch()
  const mainMenuList = useSelector((state) => state.mainMenuList);
  var {loading, error, mainmenu} = mainMenuList;

  useEffect(() => {
      dispatch(MainMenuList())
  }, [dispatch]);
return (
<>
{loading? <Preloader class='menu-preloader'/>:
  error? (
    <MessageBox variant='danger'>{error}</MessageBox>
    ):
    <>

    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail id="menu-main-menu" title='Main-Menu'/>

    <div className="container-fluid pt-3">

      <Innerpagenav active='Main-Menu' navto='/Main-Menu'/>

      <div className="row overflow-x-hidden pt-1">
        
        <Menuitems menuitem={mainmenu}/>

      </div>

    </div>

    </>
  }
</>
)
}
