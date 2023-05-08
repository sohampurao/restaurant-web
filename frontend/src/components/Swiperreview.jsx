import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/css/base.css';
import '../assets/css/swiper.css';

const Swiperreview = () => {

return (
    <div className="slide-container swiper mt-md-1">
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    0: {slidesPerView: 1},
                    520: {slidesPerView: 2},
                    950: {slidesPerView: 3}
                }}
                autoplay = {true}
                navigation = {{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                pagination = {{
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true
                }}
                loop = {true}
                spaceBetween={25}
                slidesPerView={3}
                
                className="slide-content overflow-x-hidden">
                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile1.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Thomas Pearson</h2>
                                <p className="description">Great food, big servings. Good wine pour, attentive servers. this place is a little gem. The Chicken Marsala appetizer is awesome!!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile2.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Ruben Chavez</h2>
                                <p className="description">The prices are as good as the menu! Each time I spend money, than anywhere else and get a fresh, tasty, homemade dinner!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile3.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Charles Morgan</h2>
                                <p className="description">I have never had a bad meal at Uncle Sammy's Restaurant. This is the type of Italian place that has you unbuttoning your pants at the end of your meal AND taking left overs home! Great wine.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile4.jpg" className="card-img" alt="profile" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Francisco Brown</h2>
                                <p className="description">Easily one the BEST Italian restaurants in Arizona… I use to live in central Scottsdale and would eat there 3 to 4 times a month… My current residence is 40 minutes NNE; and we drive by 100’s of restaurants to eat at Uncle Sammy's Restaurant.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile5.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Lisa Flores</h2>
                                <p className="description">I have never had a bad meal at Uncle Sammy's Restaurant. This is the type of Italian place that has you unbuttoning your pants at the end of your meal AND taking left overs home! Great wine.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile6.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Joshua Walker</h2>
                                <p className="description">Easily one the BEST Italian restaurants in Arizona… I use to live in central Scottsdale and would eat there 3 to 4 times a month… My current residence is 40 minutes NNE; and we drive by 100’s of restaurants to eat at Uncle Sammy's Restaurant.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile7.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Jeff Bezos</h2>
                                <p className="description">The prices are as good as the menu! Each time I spend money, than anywhere else and get a fresh, tasty, homemade dinner!.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile8.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Kylie Jenner</h2>
                                <p className="description">The prices are as good as the menu! Each time I spend money, than anywhere else and get a fresh, tasty, homemade dinner!.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src="./images/home-page/swiper-review/profile9.jpg" alt="Costumer profile pic" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Elon Musk</h2>
                                <p className="description">I have never had a bad meal at Uncle Sammy's Restaurant. This is the type of Italian place that has you unbuttoning your pants at the end of your meal AND taking left overs home! Great wine.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next swiper-navBtn"></div>
                <div className="swiper-button-prev swiper-navBtn"></div>
                <div className="swiper-pagination"></div>
    </div>
)
}

export default Swiperreview;