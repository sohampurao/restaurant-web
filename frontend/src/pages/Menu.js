import React, { useEffect} from 'react';
import '../assets/css/thumbnail.css';
import '../assets/css/menucards.css';
import Menucards from '../components/Menucards';
import Bounce from 'react-reveal/Bounce';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import { MenuPageCardsList } from '../actions/menuCardAction';
import {useDispatch, useSelector} from 'react-redux'
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';

export default function Menu() {
  const dispatch = useDispatch()
    const menuCardlist = useSelector((state) => state.menuCardlist);
    const {loading, error, menucards} = menuCardlist;

    useEffect(() => {
        dispatch(MenuPageCardsList())
    }, [dispatch]);
  return (
    <>
  
  {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
  <>
  <ScrollToTop smooth className='scroll-up' top='800' component={<i class="fa-solid fa-arrow-up"></i>}/>

    <Thumbnail title='menu' id='menu-thumbnail'/>
    <div className="container-fluid pt-2 my-md-4 main-content mb-5">
        <div className="row">
            <Bounce left cascade>
            <div className="d-block menu-heading text-uppercase text-center fst-italic mt-2 mb-md-3">please select the menu</div>
            </Bounce>
            <Menucards cards={menucards}/>
        </div>
    </div>
    </>}
    </>
  )
}
