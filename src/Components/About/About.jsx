import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";

const AboutStyles = styled.div`
  width: 90vw;
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 150px;

  .left-hand-side {
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right-hand-side {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    span {
      color: var(--cannyBlue);
    }

    h1 {
      font-size: 30px;
    }

    .usp {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 500px) {
    width: 90vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 80px;
    gap: 15px;

    .left-hand-side {
      width: 100%;
      height: 210px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right-hand-side {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      span {
        color: var(--cannyBlue);
        font-size: 15px;
        font-weight: 700;
      }

      h1 {
        font-size: 25px;
      }

      .usp {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        p {
          font-size: 15px;
          line-height: 1.5;
        }
      }
    }
  }
`;

function About() {
  return (
    <AboutStyles className="hero-section" id="about">
      <div className="left-hand-side">
        <img src={PHOTOS.about} alt="" />
      </div>

      <div className="right-hand-side">
        <span>About Me</span>
        <div className="usp">
          <p>
            I’m an experienced fullstack developer with a strong foundation in
            building dynamic and responsive web applications. With experience
            across MongoDB, Express.js, React.js, and Node.js, I specialize in
            creating full-stack solutions that are scalable, efficient, and
            user-friendly.
          </p>

          <p>
            From designing sleek front-end interfaces to implementing robust
            back-end architectures, I enjoy every aspect of the development
            lifecycle. I thrive in collaborative environments, am committed to
            writing clean, maintainable code, and continuously stay updated with
            the latest trends and best practices in the tech world.
          </p>
        </div>
      </div>
    </AboutStyles>
  );
}

export default About;
