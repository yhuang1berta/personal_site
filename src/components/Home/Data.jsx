import React from 'react'
import Typewriter from "typewriter-effect";

const Data = () => {

  const typeAndDelete = (typewriter, text, pause = 500) => {
      typewriter
          .typeString(text)
          .pauseFor(pause)
          .changeDeleteSpeed(50)
          .deleteChars(text.length)
          .pauseFor(1000);
  };

  return (
    <div className="home__data">
        <h1 className="home__title">Ye Huang</h1>

        <h3 className="home__subtitle"><Typewriter
                        options={{ loop: true, autoStart: true }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1000);
                            typeAndDelete(typewriter, "Data Scientist");
                            typeAndDelete(typewriter, "Web Developer");
                            typeAndDelete(typewriter, "Guitarist");
                            typewriter.changeDeleteSpeed(5).deleteAll().start();
                        }}
                        /></h3>
        <p className="home__description">Modus Ponens</p>
        <a href="https://www.linkedin.com/in/ye-huang-6923951b9/" className="button button--flex">
            Say Hi
        </a>
    </div>
  )
}

export default Data