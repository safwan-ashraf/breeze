import React from 'react'
import fb from "../../assets/images/fb.svg"
import twitter from "../../assets/images/twitter.svg"
import insta from "../../assets/images/insta.svg"
import linkin from "../../assets/images/linkin.svg"



export default function Foote() {
    return (
        <>
            <footer>
                <section className="wrapper">
                    <div className="contents">
                        <div className="left">
                            <p>Copyright &copy; 2020 Breezed Co. Ltd - Design: TemplateMo</p>
                        </div>
                        <div className="right">
                            <p>Follow us</p>
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src={twitter} alt="twitter" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={fb} alt="twitter" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={linkin} alt="twitter" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={insta} alt="twitter" />
                                    </div>
                                </li>
                            </ul>        
                        </div>
                    </div>
                </section>
            </footer>  
        </>
    )
}
