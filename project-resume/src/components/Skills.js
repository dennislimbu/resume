import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "Web Development", percentage: 90 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "Python", percentage: 70},
    { name: "Django", percentage: 70 },
    { name: "Heroku", percentage: 65 },
    { name: "GitHub", percentage: 80 },
    { name: "Git", percentage: 85 },
    { name: "React", percentage: 40 }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>As a software developer with a strong foundation in both front-end and back-end technologies, I have developed a diverse set of skills that enable me to build and maintain dynamic, user-friendly web applications. My technical expertise includes:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <h5>{skill.name}</h5>
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "rgba(128, 0, 128, 0.8)", 
                      })}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};