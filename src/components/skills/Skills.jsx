import React from 'react'
import './../about/about.css'
import './Skills.css'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
       <span className="section__subtitle">My Technical skill</span>
       <div className="skills__container container grid">
            <div className="skill__tech grid">
                <div className="skill__box">
                    <i class='bx bxl-html5 skill__icon'></i>
                    <h3 className="skill__title">HTML</h3>
                </div>
                <div className="skill__box">
                <i class='bx bxl-css3 skill__icon'></i>
                    <h3 className="skill__title">CSS</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-javascript skill__icon'></i>
                    <h3 className="skill__title">JavaScript</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-react skill__icon'></i>
                    <h3 className="skill__title">React</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-redux skill__icon'></i>
                    <h3 className="skill__title">Redux</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-mongodb skill__icon'></i>
                    <h3 className="skill__title">Mongo DB</h3>    
                </div>
                <div className="skill__box">
                <i class='bx skill__icon'>ex</i>
                    <h3 className="skill__title">Express</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-nodejs skill__icon'></i>
                    <h3 className="skill__title">Node Js</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-java skill__icon'></i>
                    <h3 className="skill__title">Java</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-netlify skill__icon'></i>
                    <h3 className="skill__title">Netlify</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-github skill__icon'></i>
                    <h3 className="skill__title">GitHUb</h3>    
                </div>
                <div className="skill__box">
                <i class='bx bxl-codepen skill__icon'></i>
                    <h3 className="skill__title">CodePen</h3>    
                </div>
                
            </div>
        </div>
       <span className="section__subtitle">My Soft skill</span>
       <div className="skills__container container grid">
            <div className="skill__soft grid">
                <div className="skill__box">
                <i class='bx bx-support skill__icon'></i>
                    <h3 className="skill__title">Collaboration</h3>
                    
                </div>
                <div className="skill__box">
                <i class='bx bxs-quote-alt-right skill__icon'></i>
                    <h3 className="skill__title">Critical thinking</h3>
                    
                </div>
                <div className="skill__box">
                <i class='bx bx-recycle skill__icon'></i>
                    <h3 className="skill__title">Adaptability</h3>
                    
                </div>
                <div className="skill__box">
                <i class='bx bxs-conversation skill__icon'></i>
                    <h3 className="skill__title">Communication</h3>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills