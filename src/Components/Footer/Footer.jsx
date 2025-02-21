import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const FooterStyles = styled.footer`

    margin-top: 50px;
    height: 100px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--black);
    padding: 20px 0 20px 0;
    color: var(--white);
    margin-top: 100px;




    .socials{
        width: 15%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;

            .my-soc{
                font-weight: 600;
                font-size: 15px;
                color: white;
            }
    } 

    hr{
        width: 100vw;
        height: 1px;
        background-color: var(--cannyBlue);
        opacity: 0.3;
    }

    small{
        font-size: 14px;
        opacity: .7;
        display: flex;
        justify-content: center;
        height: 100%;
        width: 40vw;
        gap: 10px;


        span{
            color: var(--cannyBlue);
            opacity: 1;
        }
    }

@media (max-width: 500px){

    margin-top: 50px;
    height: 100px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--black);
    padding: 20px 0 20px 0;
    color: var(--white);
    margin-top: 100px;




    .socials{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;

            .my-soc{
                font-weight: 600;
                font-size: 15px;
                color: white;
            }
    } 

    hr{
        width: 100vw;
        height: 1px;
        background-color: var(--cannyBlue);
        opacity: 0.3;
    }

    small{
        font-size: 12px;
        opacity: .7;
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100vw;
        gap: 10px;


        span{
            color: var(--cannyBlue);
            opacity: 1;
            display: flex;
        }
    }   
}
`;


function Footer(){

    const date = new Date;

    const year = date.getFullYear();

        return(
            <FooterStyles className="my-footer">
                <div className="socials">
                    <a href="https://www.instagram.com/canny_okpoto"><FaInstagram className="my-soc" /></a>
                    <a href="https://www.facebook.com/promise.okpoto"><FaFacebook className="my-soc" /></a>
                    <a href="https://wa.me/2348138957283"><FaWhatsapp className="my-soc" /></a>
                    <a href="mailto:promiseokpoto5050@gmail.com"><MdMailOutline className="my-soc" /></a>
                    <a href="https://www.linkedin.com/in/promise-okpoto-8ba746231"><FaLinkedin className="my-soc" /></a>
                </div>
                <hr/>
                <small>Copyright <div dangerouslySetInnerHTML={{__html: '&#169;'}}></div>{year}. All rights reserved <span>Promise Okpoto</span></small>
            </FooterStyles>
        )
};


    

export default Footer;