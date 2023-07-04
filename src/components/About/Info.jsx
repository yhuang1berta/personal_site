import React from 'react'

const Info = () => {
  return (
    <div className="about__info__outer">
      <div className="about__info grid">

      <a href="https://leetcode.com/yhuang1/" className="about__box__ext">
        <a href="https://github.com/yhuang1berta" className="about__box__ext">
          <img src="https://github-readme-stats.vercel.app/api?username=yhuang1berta&show_icons=true&theme=graywhite&bg_color=FFFFFF&text_bold=false&hide_rank=true&custom_title=My Github Stats (≧▽≦)" alt=''/>
        </a>
      </a>
      <div className="about__box">
          <i class="uil uil-bag about__icon"></i>
          <h3 className="about__title">Academic</h3>
          <span className="about__subtitle">3.48/4.0 GPA @ UofT <br /> 3.27/4.3 GPA @ HKUST <br /> Member of UofT CSEd <br /> Dean's list 2018-2021</span>
      </div>
      </div>

      <div className="about__info leetcode__stats">
          <img src="https://leetcard.jacoblin.cool/yhuang1?theme=light&width=602&ext=activity&font=Poppins&bold=false&radius=5" alt=""/>
      </div>
    </div>
  )
}

export default Info