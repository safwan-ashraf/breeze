import React from 'react'
import Call from "../../assets/images/call.png"
import Message from "../../assets/images/message.png"
import Ball from "../../assets/images/ball.png"
import RArrow from '../../assets/images/right.svg'

export default function Contact() {
    return (
        <>
           <section id="contact">
                <section className="wrapper">
                    <h5>Contact us</h5>
                    <div className="content">
                        <div className="left">
                            <h6>Feel free to keep in touch with us!</h6>
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src={Call} alt="images" />
                                    </div>
                                    <p>010-020-0860</p>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={Message} alt="images" />
                                    </div>
                                    <p>info@company.com</p>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={Ball} alt="images" />
                                    </div>
                                    <p>www.company.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <form>
                                <input type="text" className="top" placeholder="Your Name" />
                                <input type="tel" className="top" placeholder="Your Phone" />
                                <input type="email" className="top" placeholder="Your Email" />
                                <input type ="text" className="top" placeholder="Subject" />
                            </form>
                            <textarea rows="6" cols="50" name="comment" form="usrform">
                            Message</textarea>
                            <div className="button-box">
                                <a className="button">Send message</a>
                                <div className="img-box">
                                    <img src={RArrow} alt="images" />
                                </div>
                            </div>    
                        </div>
                    </div>
                </section>   
            </section> 
        </>
    )
}
