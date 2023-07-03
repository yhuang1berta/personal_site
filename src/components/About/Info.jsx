import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="uil uil-archive-alt about__icon"></i>
            <h3 className="about__title">Interest</h3>
            <span className="about__subtitle">Data Analysis <br /> Data Engineering <br /> Web Development</span>
        </div>
        <div className="about__box">
            <i class="uil uil-bag about__icon"></i>
            <h3 className="about__title">Academic</h3>
            <span className="about__subtitle">3.48/4.0 GPA @ UofT 3.27/4.3 GPA @ HKUST Member of UofT CSEd</span>
        </div>

        
        <img src="https://github-readme-stats.vercel.app/api?username=yhuang1berta&show_icons=true&theme=graywhite&bg_color=FFFFFF&text_bold=false&rank_icon=github&custom_title=My Github Stats (≧▽≦)" alt=''/>
    </div>
  )
}

export default Info