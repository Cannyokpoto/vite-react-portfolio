import React from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectData from "../Data/projectData";

const ProjectsStyles = styled.div`
    width: 90vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 30px;


    .top{
        width: 90vw;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


         >h1{
            color: var(--cannyBlue);
            font-size: 25px;
            font-weight: 700;
        }

        >h2{
            font-size: 15px;
            font-weight: 400;
        }
    }

    .project{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 30px;
        box-shadow: var(--boxShadow);
        border: solid 1px grey;
        border-radius: 5px;


        .left-hand-side{
        width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;


        img{
            width: 100%;
            height: 100%;
        }
    }
}




    .right-hand-side{
        width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        h3{
            font-size: 20px;
        }

        p{
            font-size: 15px;
            line-height: 1.5;
        }

        .tools{
            font-size: 20px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            
            p{
                font-weight: 700;
                color: black;
            }

            .tool-list{
                font-size: 15px;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                flex-wrap: wrap;
                gap: 10px;
            }

            p{
                color: var(--cannyBlue);

                span{
                    color: black;
                }
            }
        }

        .code-demo{
            font-size: 17px;
            width: 70%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            

            .deployed{
                width: 45%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                gap: 5px;
                color: #fafafa;
                font-size: 15px;
                padding: 3px;
                background-color: black;

                &:hover{
                    background-color: transparent;
                    color: black;
                    border: solid 1px black;
                }

                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }

            .source{
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 5px;
                color: black;
                border: solid 1px black;
                font-size: 15px;
                padding: 4px;
                border-radius: 4px;
                
                &:hover{
                    color: #fafafa;
                    background-color: black;
                }
                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }
        }
}

    @media (max-width: 500px){
        
        width: 90vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 70px;
        gap: 30px;

    .top{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        >h1{
            color: var(--cannyBlue);
            font-size: 25px;
        }

        >h2{
            font-size: 15px;
            font-weight: 400;
        }

        >p{
            font-size: 20px;
        }
    }

    .project{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        box-shadow: var(--boxShadow);
        padding: 20px 10px 20px 10px;
        border: solid 1px grey;


        .left-hand-side{
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;


        img{
            width: 100%;
            height: 100%;
        }
    }
}


    .right-hand-side{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        h3{
            font-size: 17px;
        }

        p{
            font-size: 15px;
            line-height: 1.5;
        }

        .tools{
            font-size: 20px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            

            p{
                font-weight: 700;
                color: black;
            }


            .tool-list{
                font-size: 15px;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                flex-wrap: wrap;
            }

            p{
                width: 100%;
                text-align: left;
            }
        }

        .code-demo{
            font-size: 17px;
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            

            .deployed{
                width: 43%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                gap: 5px;
                color: #fafafa;
                font-size: 13px;
                padding: 3px;
                background-color: black;

                &:hover{
                    background-color: transparent;
                    color: black;
                    border: solid 1px black;
                }

                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }

            .source{
                width: 43%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 5px;
                color: black;
                border: solid 1px black;
                font-size: 13px;
                padding: 4px;
                border-radius: 4px;
                
                &:hover{
                    color: #fafafa;
                    background-color: black;
                }
                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }
            
        }
    }

}
`;

function Projects(){

        return(
            <ProjectsStyles className="hero-section" id="projects">

                <div className="top">
                    <h1>Projects</h1>
                    <h2>Each project is a unique piece of development.</h2>
                </div>
        
                {
                    projectData.map((project) =>{
                        return(
                            <div className="project">
                                <div className="left-hand-side">
                                    <img src={project.image} alt=""/>
                                </div>

                                <div className="right-hand-side">
                                    <h3>{project.title}</h3>
                                    
                                    <p>{project.description}</p>

                                    <div className="tools"> 
                                        <p>Technologies:</p>
                                        <div className="tool-list">
                                            {
                                                project.tools.map((tool, i)=>
                                                    <div key={i}>{tool} <span>|</span></div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="code-demo">
                                        <a href={project.demo} className="deployed">
                                            View Site
                                            <FaExternalLinkAlt className="demo" />
                                        </a>

                                        <a href={project.code} className="source">
                                            Source Code
                                            <IoLogoGithub className="demo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </ProjectsStyles>
        )
};


    

export default Projects;