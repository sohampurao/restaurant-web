import React from 'react';
import Menucards from '../components/Menucards';
import Swiperreview from '../components/Swiperreview';
import '../assets/css/base.css';
import '../assets/css/home.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import ScrollToTop from "react-scroll-to-top";
import Specialitems from '../components/Specialitems';
import { useEffect } from 'react';
import Preloader from '../components/Preloader';
import MessageBox from '../components/MessageBox';
import {useDispatch, useSelector} from 'react-redux'
import { HomeMenuCardList } from '../actions/menuCardAction';
import { LightSpeed } from 'react-reveal';


export default function Home() {
    const dispatch = useDispatch()
    const homeCardList = useSelector((state) => state.homeCardList);
    const {loading, error, homecards} = homeCardList;

    useEffect(() => {
        dispatch(HomeMenuCardList())
    }, [dispatch]);

return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>

    <div id="carouselExampleFade" className="carousel carousel-light slide carousel-fade" data-bs-ride="carousel">
        <div id="carousel-nav" className="carousel-indicators d-none d-lg-flex">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
            <div className="carousel-item active position-relative" data-bs-interval="5500">
                <div className="dark-filter w-100 h-100 position-absolute top-0"></div>
                <img src="./images/home-page/carousel/slide-burger.jpg" className="img-fluid carousel-img" alt="Burger"/>
                <div className="carousel-caption d-none d-md-block text-capitalize">
                    <h3>Rich In Taste As It Is In&nbsp;Tradition</h3>
                    <p>CLASSIC NEIGHBORHOOD ITALIAN</p>
                </div>
            </div>
            <div className="carousel-item position-relative" data-bs-interval="5500">
                <div className="dark-filter w-100 h-100 position-absolute top-0"></div>
                <img src="./images/home-page/carousel/slide-pasta.jpg" className="img-fluid carousel-img" alt="Pasta"/>
                <div className="carousel-caption d-none d-md-block text-capitalize">
                    <h3>Traditional Flavor in the Heart of South&nbsp;Scottsdale</h3>
                    <p>Family Owned and Operated for Over 45 Years</p>
                </div>
            </div>
            <div className="carousel-item position-relative" data-bs-interval="5500">
                <div className="dark-filter w-100 h-100 position-absolute top-0"></div>
                <img src="./images/home-page/carousel/slide-pizza.jpg" className="img-fluid carousel-img" alt="pizza"/>
                <div className="carousel-caption d-none d-md-block text-capitalize">
                    <h3>Established In 1974</h3>
                    <p>10,000 + reviews on google</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-prev" aria-hidden="true">‹</span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-next" aria-hidden="true">›</span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div className="container pt-2 mt-lg-3 main-content overflow-hidden pb-5">

        <div className="container my-lg-5 my-lg-3 about-container overflow-x-hidden">
            <div className="row">
                <Fade distance="100px" left timeout={1500} delay={500}>
                    <div className="col-md-4 about-image-container">
                        <img src="images/about-us/about-us.jpg" alt="about" className="img-fluid" />
                    </div>
                </Fade>
                <Fade distance="100px" right timeout={1500} delay={500}>
                    <div className="col-md-7 about-text p-lg-4">
                        <img src="images/about-us/pizza-inline.jpg" alt="about pizza inline" id="pizza-inline" className="mx-auto d-block my-3" />
                        <Zoom top cascade delay={1500}>
                            <div className="about-title text-center">MODERN &#38; CLASSIC DISHES</div>
                        </Zoom>
                        <div className="about-sub-title text-center text-capitalize">traditional italian dishes</div>
                            <div className="about-discription mt-2">
                                When you sit down at Uncle Sammy's Restaurent, you're dining with the Molinari family and over 45 years of restaurant experience.
                                A Scottsdale tradition for more than a quarter century, we're a little piece of Italy right in the heart of the Valley. Our casual
                                neighborhood atmosphere, combined with creative, timeless dishes make us a favorite for business lunches, casual nights out and special
                                occasions of every kind. From exceptional veal cuts, to fresh pasta and seafood, to an award-winning wine list, our made-from-scratch 
                                menu and warm service bring out the best in classic Italian cuisine. Whether you're from down the street or out of town, you'll find the faces friendly, the conversation lively, and the food and flavors unforgettable
                            </div>
                    </div>
                </Fade>
            </div>
        </div>

        <LightSpeed left timeout={1150} delay={600}>
            <h1 className="d-block menu-heading text-uppercase text-center fst-italic mb-4 mt-5 overflow-hidden">also famous for</h1>
        </LightSpeed>

        <div className="row">
                <Specialitems src="./images/home-page/special-item/special-burger.png" name="Burger Bologona" price="350" link="/burger"/>
                <Specialitems src="./images/home-page/special-item/special-pizza.png" name="Peproni pizza" price="350" link="/pizza"/>
                <Specialitems src="./images/home-page/special-item/special-cocktail.png" name="Hurricane Cocktail" price="250" link="/cocktail"/>
        </div>

        <Fade top cascade delay={1400} distance='60px'>
            <h1 className="d-block menu-heading text-uppercase text-center fst-italic mb-4 mt-5">menus</h1>
        </Fade>

        <div className="row">
            <Menucards cards={homecards}/>
        </div>
    </div>

    <div className="shape-divider overflow-x-hidden">

        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
            <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >
            <stop offset="0%" id="lgrad-start"/>
            <stop offset="100%" id="lgrad-end"/>
            </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>

        <div className="container-fluid pb-4" id="swiper-container">
        <Bounce top cascade delay={800}>
            <h1 className="d-block menu-heading text-uppercase text-center fst-italic mb-3" id="reviews-heading">happy costumer's</h1>
        </Bounce>

        <h4 className="my-4 align-items-center justify-content-center" id="swipe-indicator"><i className="fa-solid fa-right-left"></i></h4>
        <Swiperreview/>
        </div>
    </div>
    </>}
    </>
)
}
