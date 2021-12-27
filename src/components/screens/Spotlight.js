import React, { useState } from 'react'
import styled from "styled-components"
import Search from '../../assets/images/search.svg'
import DArrow from '../../assets/images/aroow.svg'
import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../../assets/images/slide-01.jpg'
import bg2 from '../../assets/images/slide-02.jpg'
import bg3 from '../../assets/images/slide-03.jpg'
import menu from "../../assets/images/menu.svg"
import close from "../../assets/images/close.svg"


export default function Spotlight() {
    const[menuBar, setMenuBar]= useState(false)
    return (
        <>
            
            <section id="spotlight">
                <section className="wrapper">
                    <header>
                        <div className="left">
                            <h1><a href="#">.Breezed</a></h1>
                        </div>
                        <div className="right">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li>
                                    <div className="contents">
                                        <a className="drop" href="#">Drop Down</a>
                                        <div className="img-box">
                                            <img src={DArrow} alt="images" />
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Contact Us</a></li>
                                <li>
                                    <a href="#">
                                        <div className="simg-box">
                                            <img src={Search} alt="images" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a id="menu-icon" onClick={()=>{
                                    setMenuBar(!menuBar)
                                }}>
                                <img src={menu} />
                            </a>
                            {menuBar?(<>
                                    <a id="close-icon" onClick={()=>{
                                    setMenuBar(!menuBar)
                            }}>
                                <img src={close} alt="image" />
                            </a>
                            <nav id="mobile-menu">
                    
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Awards</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                            <span className="overlay" onClick={()=>{
                                setMenuBar(!menuBar)
                            }}></span>
                            </>):null}
                                

                                
                    </header>
                </section>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bg1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <p className="carousel">Welcome to Breezed.</p>
                        <h3 className="carousel">New Bootstrap Template</h3>
                        <div className="carousel-button-container">
                            <div className="carousel-abox one">
                                <a className="carousel-button one">Learn More</a>
                            </div>
                            <div className="carousel-abox two">
                                <a className="carousel-button two">Get it now</a>
                            </div>
                        </div>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bg2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <p className="carousel">Welcome to Breezed.</p>
                        <h3 className="carousel">New Bootstrap Template</h3>
                        <div className="carousel-button-container">
                            <div className="carousel-abox one">
                                <a className="carousel-button one">Learn More</a>
                            </div>
                            <div className="carousel-abox two">
                                <a className="carousel-button two">Get it now</a>
                            </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bg3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <p className="carousel">Welcome to Breezed.</p>
                        <h3 className="carousel">New Bootstrap Template</h3>
                        <div className="carousel-button-container">
                            <div className="carousel-abox one">
                                <a className="carousel-button one">Learn More</a>
                            </div>
                            <div className="carousel-abox two">
                                <a className="carousel-button two">Get it now</a>
                            </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                    
            </section> 
            {/* <SotLight>
            <Crapper className="wrapper">
                <Header>
                    <Left>
                        <Jogo>
                            <Anc href="#"></Anc>
                        </Jogo>
                    </Left>
                    <Right>
                        <ListItems>
                            <Item>
                                <Anc href="#">Home</Anc>
                            </Item>
                            <Item>
                                <Anc href="#">About</Anc>
                            </Item>
                            <Item>
                                <Anc href="#">Projects</Anc>
                            </Item>
                            <Item>
                                <DivBox>
                                    <Anc href="#">Drop Down
                                        <Arrow>  </Arrow>
                                    </Anc>
                                </DivBox>
                            </Item>
                            <Item><Anc href="#">Contact Us</Anc></Item>
                            <Item><Anc href="#"><ImgBox><ImgSearch src={Search} alt="Images" /></ImgBox></Anc></Item>
                        </ListItems>
                    </Right>
                </Header>
            </Crapper>
        </SotLight> */}
        </>
        
    )
}

// const SotLight = styled.section``
// const Crapper = styled.section``
// const Header = styled.header``
// const Left = styled.div``
// const Jogo = styled.h1
// const Anc = styled.a``
// const Right = styled.div``
// const ListItems = styled.ul``
// const Item = styled.li``
// const DivBox = styled.div``
// const Arrow = styled.small``
// const ImgBox = styled.div``
// const ImgSearch = styled.img``

