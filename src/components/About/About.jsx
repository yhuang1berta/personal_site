import React from 'react';
import "./About.css";
// import CV from "../../CV.pdf"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me </h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <div className="about__data">
                <Info />
                <div className="about__lower__box">
                    <a href="/CV" target='__blank' className="button button--flex">View CV &nbsp; <i class="uil uil-file-info-alt"/></a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;