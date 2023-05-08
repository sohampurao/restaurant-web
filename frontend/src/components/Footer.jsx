import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
    const whatsapp = new URL('https://api.whatsapp.com/send/?phone=%2B919518556937&text&app_absent=0" className="nav-link d-block text-center mx-auto"><i className="fa-brands fa-whatsapp')
return (
    <footer className="panel-footer mt-auto">

        <div className="container-fluid">

            <div className="row">

                <section className="col-md-3 footer text-center text-md-start ps-3">
                    <div className="footer-title mb-1">Active Hours</div>
                    <span className="footer-sub">
                        SUN - THURS: 3pm - 9pm<br/>
                        FRI and SAT: 3pm - 10pm<br/>
                    </span>
                    <hr/>
                </section>

                <section className="col-md-3 footer text-center text-md-start ps-3">
                    <div className="footer-title mb-1">Location</div>
                    <span className="footer-sub">40220l Alibag vidhyanagar<br/>
                    Raigarh Maharashtra<br/>
                    </span>
                    <p id="delivery">Delivery area Within 3-4 miles, with mainimum <br/> order of 200&#8377; + 50&#8377; charge for all deliveries.</p>
                    <hr/>
                </section>

                <section className="col-md-3 footer text-center text-md-start ps-3">
                    <div className="footer-title mb-1">We accept all credit cards</div>
                    <ul className="nav-link d-inline-flex align-items-centee justify-content-center" id="footer-cards-ul">
                        <li title="Visa Credit Card" className="nav footer-cards-li"><img src="/images/footer/card1.png" alt="credit card" className="footer-cards-img img-fluid" /></li>
                        <li title="Master Credit Card" className="nav footer-cards-li"><img src="/images/footer/card2.png" alt="credit card " className="footer-cards-img img-fluid" /></li>
                        <li title="Paypal Credit Card" className="nav footer-cards-li"><img src="/images/footer/card3.png" alt="credit card " className="footer-cards-img img-fluid" /></li>
                        <li title="Discover Credit Card" className="nav footer-cards-li"><img src="/images/footer/card4.png" alt="credit card " className="footer-cards-img img-fluid" /></li>
                    </ul>
                    <hr/>
                </section>

                <section className="col-md-3 footer text-center text-md-start ps-3">
                    <div className="footer-title mb-1">Get In Touch</div>
                    <div title="Contact Number" id="phone-num"><a className="m-0" href="tel:+91 999 8888 777">999 8888 777</a></div>
                    <ul id="footer-social-ul" className="my-2 d-inline-flex justify-content-center align-items-center">
                        <li title="Instagram" className="footer-social-li"><a href="https://www.instagram.com/mr.purao.12/"><i className="fa-brands fa-instagram"><span className="visually-hidden">Instagram</span></i></a></li>
                        <li title="Facebook" className="footer-social-li"><a href="/"><i className="fa-brands fa-facebook"><span className="visually-hidden">Facebook</span></i></a></li>
                        <li title="YouTube" className="footer-social-li"><a href="/"><i className="fa-brands fa-youtube"><span className="visually-hidden">YouTube</span></i></a></li>
                    </ul>
                    <hr/>
                </section>

                <div title="Whatsapp Link" id="wa-num" className="mb-3"><a href={whatsapp} className="nav-link d-block text-center mx-auto"><i className="fa-brands fa-whatsapp"></i> Chat With Us </a></div>
                
                <div id="copyright" className="text-center">&copy; uncle sammy's kichten. All rigths reserved</div> 
            
            </div>
        </div>
    </footer>
)
}

export default Footer
