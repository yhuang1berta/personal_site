import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="uil uil-archive-alt about__icon"></i>
            <h3 className="about__title">Interest</h3>
            <span className="about__subtitle">Data Analysis Data Engineering Web Development</span>
        </div>
        <div className="about__box">
            <i class="uil uil-award-alt about__icon"></i>
            <h3 className="about__title">Membership</h3>
            <span className="about__subtitle">UofT CSEd</span>
        </div>
        <div className="about__box">
            <i class="uil uil-bag about__icon"></i>
            <h3 className="about__title">Grades</h3>
            <span className="about__subtitle">3.48/4.0 GPA @ UofT 3.27/4.3 GPA @ HKUST</span>
        </div>
    </div>
  )
}

export default Info