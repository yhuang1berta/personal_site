import React from 'react'
import "./Skills.css"

const Data = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Data Science <i class="uil uil-star"></i></h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Pytorch</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Spark</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data