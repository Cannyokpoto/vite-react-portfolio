import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";
import StackData from "../Data/StackData";

const HeroStyles = styled.div`

    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 70px;

    .left-hand-side{
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        h1{
            font-size: 55px;

            span{
                color: var(--cannyBlue);
            }
        }

        >p{
            font-size: 20px;
            color: var(--darkGrey);
        }

        .tech-stack{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            margin-top: 80px;

           h5{
            color: black;
            position: relative;
            padding-left: 10px;

                &::before{
                    content: "";
                    width: 4px;
                    height: 30px;
                    background-color: var(--cannyBlue);
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                }
           }

            .stack{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

                span{
                    width: 10%;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;

                        img{
                        width: 100%;
                        height: 60%;
                    }

                       p{
                            font-size: 14px;
                            color: black;
                    }
                }
            }
        }
    }

    .right-hand-side{
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
        }
    }


    @media (max-width: 500px){
    
        width: 90vw;
        height: 450px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-top: 120px;


    .left-hand-side{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;


        h1{
            font-size: 25px;

            span{
                color: var(--cannyBlue);
            }
        }

        p{
            font-size: 15px;
            color: var(--darkGrey);
        }

        .tech-stack{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            margin-top: 40px;

           h5{
            color: black;
            position: relative;
            padding-left: 7px;

                &::before{
                    content: "";
                    width: 4px;
                    height: 25px;
                    background-color: var(--cannyBlue);
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                }
           }

            .stack{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

                span{
                    width: 10vw;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    

                        img{
                        width: 100%;
                        height: 60%;
                    }

                       p{
                            font-size: 10px;
                            color: black;
                    }
                }
            }
        }
    }

    .right-hand-side{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 70%;
            height: 100%;
        }
    }
}
`;

function Hero(){

        return(
            <HeroStyles className="hero-section" id="hero">
                <div className="left-hand-side">
                    <h1><span>ReactJS </span> Developer</h1>

                    <p>Hi, I'm Promise Okpoto, a passionate front-end react developer based in Lagos state, Nigeria.</p>

                    <div className="tech-stack">
                        
                        <h5>Tech Stack</h5>

                        <div className="stack">
                            {
                                StackData.map((stack) => {
                                    return(
                                        <span>
                                            <img src={stack.image} alt="tool" />
                                            <p>{stack.name}</p>
                                        </span> 
                                    )
                                }
                            )}                         
                        </div>
                    </div>
                </div>
        
                <div className="right-hand-side">
                    <img src={PHOTOS.HERO} alt=""/>
                </div>
            </HeroStyles>
        )
};


    

export default Hero;