import React from 'react';
import Web from './Web';
import Data from './Data';
import Frameworks from './Frameworks';
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Languages</span>

        <div className="skills__container container grid">
            <Web></Web>
            <Data></Data>
            <Frameworks></Frameworks>
        </div>
    </section>
  );
};

export default Skills;