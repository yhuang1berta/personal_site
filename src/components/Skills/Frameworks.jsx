import React from 'react'
import "./Skills.css"

const Frameworks = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Frameworks <i class="uil uil-star"></i></h3>

    <div className="skills__box">
    <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Azure</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                
                    <i class="uil uil-star"></i>
                    <div>
                        <h3 className="skills__name">Google</h3>
                        <h3 className="skills__name">Colab</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Frameworks