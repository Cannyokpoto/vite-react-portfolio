import "./Header.css";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PHOTOS from "../Assets/index";
import { Link } from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";



const HeaderStyles = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 7;

    .logo{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    img{
    width: 70%;
    height: 100%;
    }

    .theme{
            display: none;
        }

    .nav-icons{
        display: none;
    }
}

    .desktopNav{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .myNav{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    li{
    list-style: none;

        a{
        font-size: 17px;
        font-weight: 700;
        text-decoration: none;
        padding: 5px;
        position: relative;

            a::after{
            content: "";
            width: 0;
            height: 3px;
            position: absolute;
            bottom: -10px;
            left: 0;
            transition: all .3s;
            }
        }
        a:hover::after{
            width: 90%;
        }
 
    }

    
}

}

@media (max-width: 500px){


    .desktopNav{
    display: none;

}

    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


        .logo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px 0 30px;

        img{
            width: 30%;
            height: 60%
        }

        .nav-icons{
            display: block;

            .myBtn{
                color: var(--black);
                font-size: 30px;
                cursor: pointer;
            }
        }
    }




    .mobile-navbar{
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 50px;
    top: 0;
    padding-left: 15px;
    padding-top: 20px;
    width: 70vw;
    height: 100vh;
    background-color: #fafafa;
    left: -100%;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: all .7s ease-in-out;
    z-index: 20;

}


     .mobile-navbar.mobile-navbar-open{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    position: fixed;
    left: 0;
}




        .mobile-navbar .mobile-navbar-items{
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;

        a{
            width: 90%;
            background-color: transparent;
            height: 40px;
            font-size: 17px;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding-left: 10px;
        }
    }
}

`;

function Header(){

    //Mobile Navbar
    

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };


        return(
            <HeaderStyles>
                <div className="logo">
                    <img src={ PHOTOS.LOGO } alt="logo" />

                    <div className="nav-icons" onClick={handleClick}>
                        {click ? <IoClose className="myBtn" /> : <FiMenu className="myBtn" />}
                    </div>
                </div>

                {/* desktopNav navigation */}

                <nav className="desktopNav">
                    <ul className="myNav">
                        <li><Link to="hero" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500}>Home</Link></li>
                        <li><Link to="about" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500} >About</Link></li>
                        <li><Link to="projects" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                        <li><Link to="contact" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    </ul>
                </nav>

                

                {/* mobile-navigation */}

                <nav className={click ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>

                    <ul className="mobile-navbar-items">
                        <li><Link to="hero" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500}>Home</Link></li>
                        <li><Link to="about" onClick={handleClick} spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
                        <li><Link to="projects" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                        <li><Link to="contact" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </HeaderStyles>
        )
};


    

export default Header ;