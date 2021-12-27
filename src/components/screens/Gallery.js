import React from 'react'
import Slider from "react-slick";
import pro1 from "../../assets/images/pro1.jpg"
import pro2 from "../../assets/images/pro2.jpg"
import pro3 from "../../assets/images/pro3.jpg"
import pro4 from "../../assets/images/pro4.jpg"
import pro5 from "../../assets/images/pro5.jpg"
import pro6 from "../../assets/images/pro6.jpg"

export default function Gallery() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <section id="gallery">
                <section className="wrapper">
                    <div className="content-box">
                        <p>Digital Team</p>
                        <h5>Young and talented members</h5>
                        <Slider {...settings}>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro1}alt="images" />
                                </div>
                                <h6>.01 White Cheese</h6>
                                <p>Digital Marketer</p>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro2} alt="images" />
                                </div>
                                <h6>.02 Snow Mary</h6>
                                <p>Site Analyst</p>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro3} alt="images" />
                                </div>
                                <h6>.03 Johny Egg</h6>
                                <p>Digital Influencer</p>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro4} alt="images" />
                                </div>
                                <h6>.03 sudheep</h6>
                                <p>Digital Influencer</p>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro5} alt="images" />
                                </div>
                                <h6>.03 vishak jog</h6>
                                <p>Digital Influencer</p>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src={pro6} alt="images" />
                                </div>
                                <h6>.03 Shyam gegg</h6>
                                <p>Digital Influencer</p>
                            </div>
                        </Slider> 
                    </div>
                </section>
            </section>
        </>
    )
}
