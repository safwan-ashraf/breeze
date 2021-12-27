import React from 'react'
import DownArrow from '../../assets/images/arrow-down.svg'
import Rocket from '../../assets/images/rock.png'
import rocket from '../../assets/images/rocket.png'
import Ball from '../../assets/images/ball.png'
import RArrow from '../../assets/images/right.svg'


export default function AboutUs() {
    return (
        <>
            <section id="about">
                <section className="wrapper">
                    <div className="arrow-circle">
                        <img src={DownArrow} alt="images" />
                    </div>
                    <div className="top">
                        <div className="left">
                            <h4>About Us</h4>
                            <h5>We work with top brands and startups</h5>
                            <ul>
                                <li>
                                    <div className="img-box one">
                                        <img className="one" src={Rocket} alt="images" />
                                    </div>
                                    <h6>Top Notch</h6>
                                </li>
                                <li>
                                    <div className="img-box one">
                                        <img className="one" src={Rocket} alt="images" />
                                    </div>
                                    <h6>Robust</h6>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={Ball} alt="images" />
                                    </div>
                                    <h6>Reliable</h6>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={Ball} alt="images" />
                                    </div>
                                    <h6>Up-To-Date</h6>
                                </li>
                            </ul>
                            <div className="button-box">
                                <a href="#" className="button">Learn More</a>
                                <div className="img-box">
                                    <img src={RArrow} alt="images" />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <p className="one"><span> Breezed HTML Template</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco</p>
                            <p className="two">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor</p>
                            <p className="three">ipsum dolor sit amet, consectetur adipisicing elit, sed do<span> talk to us</span> ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                                <div className="left">
                                    <div className="img-box">
                                        <img src={rocket} alt="images" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h6>Initial Work</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <div className="button-box">
                                        <a href="#" className="button">Learn More</a>
                                        <div className="img-box">
                                            <img src={RArrow} alt="images" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <div className="img-box">
                                        <img src={rocket} alt="images" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h6>Master Planning</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <div className="button-box">
                                        <a href="#"className="button">Learn More</a>
                                        <div className="img-box">
                                            <img src={RArrow} alt="images" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <div className="img-box">
                                        <img src={rocket} alt="images" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h6>Smooth Execution</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <div className="button-box">
                                        <a href="#" className="button">Learn More</a>
                                        <div className="img-box">
                                            <img src={RArrow} alt="images" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section> 
        </>
    )
}
