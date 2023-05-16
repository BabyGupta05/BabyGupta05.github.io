import React from 'react'
import './../about/about.css'
import './Skills.css'
const Skills = () => {
  return (
    <section className="skills section " id="skills">
        <h2 className="section__title">Skills</h2>
       <span className="section__subtitle">My Technical skill</span>
       <div className="skills__container container grid">
            <div className="skill__tech grid">
                <div className="skill__box skills-card-img">
                    <i class='bx bxl-html5 skill__icon'></i>
                    <h3 className="skill__title skills-card-name">HTML</h3>
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-css3 skill__icon'></i>
                    <h3 className="skill__title skills-card-name">CSS</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-javascript skill__icon'></i>
                    <h3 className="skill__title skills-card-name">JavaScript</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-react skill__icon'></i>
                    <h3 className="skill__title skills-card-name">React</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-redux skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Redux</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-mongodb skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Mongo DB</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx skill__icon'>ex</i>
                    <h3 className="skill__title skills-card-name">Express</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-nodejs skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Node Js</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-java skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Java</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-netlify skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Netlify</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-github skill__icon'></i>
                    <h3 className="skill__title skills-card-name">GitHUb</h3>    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxl-codepen skill__icon'></i>
                    <h3 className="skill__title skills-card-name">CodePen</h3>    
                </div>
                
            </div>
        </div>
       <span className="section__subtitle">My Soft skill</span>
       <div className="skills__container container grid">
            <div className="skill__soft grid">
                <div className="skill__box skills-card-img">
                <i class='bx bx-support skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Collaboration</h3>
                    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxs-quote-alt-right skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Critical thinking</h3>
                    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bx-recycle skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Adaptability</h3>
                    
                </div>
                <div className="skill__box skills-card-img">
                <i class='bx bxs-conversation skill__icon'></i>
                    <h3 className="skill__title skills-card-name">Communication</h3>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills