import React from 'react'
import './qulaification.css'
const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle"></span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
               
                <div className="qualification__button button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience 
                </div>
            </div>
            <div className="qualifications__sections">
                <div className="qualifications__content qualifications__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualifiaction__title">MERN : FULL STACK DEVELOPEMENT </h3>
                            <span className="qualifiaction__subtitle">MASAI SCHOOL</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> sep 2022 -present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualifiaction__title">BSC IT </h3>
                            <span className="qualifiaction__subtitle">MUMBAI UNIVERSITY</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> jul 2017-oct 2020
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification