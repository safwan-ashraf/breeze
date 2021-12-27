import React from 'react'
import pic1 from "../../assets/images/pic1.jpg"
import pic2 from "../../assets/images/pic2.jpg"
import pic3 from "../../assets/images/pic3.jpg"
import pic4 from "../../assets/images/pic4.jpg"
import pic5 from "../../assets/images/pic5.jpg"
import pic6 from "../../assets/images/pic6.jpg"

export default function OurProjects() {
    return (
        <>
            <section id="projects">
                <section className="wrapper">
                    <h6>Our Projects</h6>
                    <div className="containr">
                        <div className="left">
                            <h5>Some of our latest projects</h5>
                            <ul>
                                <li>All</li>
                                <li>Web Design</li>
                                <li>Web Devolopment</li>
                                <li>Graphics</li>
                                <li>Artworks</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src={pic1} alt="images" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={pic2} alt="images" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={pic3} alt="images" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={pic4} alt="images" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={pic5} alt="images" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={pic6} alt="images" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
