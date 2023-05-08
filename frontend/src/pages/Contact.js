import React from 'react'
import '../assets/css/base.css'
import '../assets/css/contact.css'

export default function Contact() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 col-sm-12 pb-5" id="contact-details">

                {/* <!-- ============= ADDRESS =============  --> */}
                <div className="contact-info w-75 mt-5">
                    <div className="location-title text-capitalize p-2"> Location </div>
                    <div className="location-description mt-2 p-2">
                        40220l-Alibag, vidhyanagar, Raigad Maharashtra.
                    </div>
                </div>

                {/* <!-- ============= TIMING =============  --> */}
                <div className="contact-info w-75 mt-5">
                    <div className="location-title text-capitalize p-2"> Active Hours </div>
                    <div className="location-description mt-2 p-2">
                        SUN - THURS: 3pm - 9pm <br/>
                        FRI & SAT: 3pm - 10pm
                    </div>
                </div>

                {/* <!-- ============= PHONE NUMBER =============  --> */}
                <div className="contact-info w-75 mt-5">
                    <div className="location-title text-capitalize p-2"> Call Us On </div>
                    <div className="location-description mt-2 p-2">
                        <a href="tel:+999 8888 777">(+999) 8888 777</a>
                    </div>
                </div>

                {/* <!-- ============= MAIL SECTION =============  --> */}
                <div className="contact-info w-75 mt-5">
                    <div className="location-title text-capitalize p-2"> For Feedback </div>
                    <div className="location-description mt-2 p-2">
                        <a href="mailto:unclesammy@gmail.com">unclesammy@gmail.com</a> 
                    </div>
                </div>
            
            {/* <!-- Note --> */}
            <div id="note" className="mt-5 w-75 fst-italic">
                <span>Note: </span>
                We accept reservations by phone only. For reservations or inquiries, call us on Monday thrusday Friday, 9 a.m. to 9 p.m.
            </div>

            </div>

            {/* <!-- ============= MAP START =============  --> */}
            <div className="col-md-6 col-sm-12 p-0" id="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483100.0318648437!2d72.27287526562499!3d18.921698199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1655023236159!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map location'></iframe>
            </div>
            
        </div>
    </div>
    </>
  )
}
