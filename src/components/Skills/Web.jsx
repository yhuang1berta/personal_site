import React from 'react'
import "./Skills.css"

const Web = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development <i class="uil uil-star"></i></h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Node</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Flask</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Web