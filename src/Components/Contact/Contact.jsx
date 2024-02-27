import React from "react";
import styled from "styled-components";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactStyles = styled.div`

    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    border-radius: 15px;
    gap: 15px;

    .tag{
        width: 79%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        /* border-radius: 15px; */
        background-color: transparent;

        
    >span{
            color: var(--cannyBlue);
            font-size: 15px;
            font-weight: 700;
        }

        p{
            font-size: 15px;
            text-align: center;
            margin-top: 20px;

            span{
                font-weight: 700;
                color: var(--black);
            }
        }
    }


        form{
            width: 79%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            background-color: transparent;
            margin-top: 70px;

            .message-label{
                width: 100%;
                height: 150px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 15px;
            }


            label{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            font-size: 15px;


            input{
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: solid 1px grey;
        }

        
        textarea{
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: solid 1px grey;
        }
        
    }

        .submit{
                background-color: var(--cannyBlue);
                color: white;
                width: 30%;
                height: 60px;
                padding: 2px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 4px;
                font-size: 15px;
                cursor: pointer;

                &:hover{
                    background-color: blue;
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
        margin-top: 100px;
        border-radius: 15px;
        gap: 15px;

    .tag{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background-color: transparent;

        
    span{
            color: var(--cannyBlue);
            font-size: 15px;
            font-weight: 700;
        }

        p{
            font-size: 15px;
            margin-top: 10px;

            span{
                font-weight: 600;
                color: var(--black);
            }
        }
    }


        form{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            background-color: transparent;
            margin-top: 50px;

            .message-label{
                width: 100%;
                height: 150px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 15px;
            }


            label{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            font-size: 15px;


            input{
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: solid 1px grey;
        }

        
        textarea{
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: solid 1px grey;
        }
        
    }

        .submit{
                background-color: var(--cannyBlue);
                color: white;
                width: 50%;
                height: 50px;
                padding: 2px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 4px;
                font-size: 15px;
                cursor: pointer;

                &:hover{
                    background-color: blue;
                }
        }

}
}
`;







function Contact(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gdxwhaj', 
                'template_496jb5h', 
                form.current, 
                'k2DFz0De-15n0uIo6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  const Toast = () =>{
    toast.success("Message Sent.", {
        position: toast.POSITION.TOP_CENTER
      });
  };

        return(
            <ContactStyles className="hero-section" id="contact">
                <div className="tag">
                    <span>Contact Me</span>
                    <p>Phone: <span>+2348138957283</span></p>
                    <p>email: <span>promiseokpoto5050@gmail.com</span></p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <h3>Leave A Message</h3>
                    <label htmlFor="name">Name
                        <input type="text" name="user_name" id="name" />
                    </label>
                    <label htmlFor="email">Email
                        <input type="email" name="user_email" id="email" />
                    </label>
                    <label htmlFor="subject">Subject
                        <input type="text" name="subject" id="subject" />
                    </label>
                    <label htmlFor="message" className="message-label">Message
                        <textarea name="message" id="message" cols="50" rows="10"></textarea>
                    </label>
                    
                    <input type="submit" value="Send Message" className="submit" onClick={e => Toast()} />
                </form>
                <ToastContainer />
            </ContactStyles>
        )
};


    

export default Contact;