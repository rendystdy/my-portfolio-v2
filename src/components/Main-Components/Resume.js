import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Nov 2021 - Present</span>
                        <h2>Frontend Engineer</h2>
                        <p>Rebelworks - Full-time</p>
                        <h6>Tech</h6>
                        <p>React, React Native, JavaScript, Redux, GraphQL, Firebase, Moengage</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Aug 2019 - Nov 2021</span>
                        <h2>Front End Developer</h2>
                        <p>Meteor Inovasi Digital - Full-time</p>
                        <h6>Tech</h6>
                        <p>React, React Native, JavaScript, Redux, GraphQL, Firebase, Moengage</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Aug 2021 - Aprl 2023</span>
                        <h2>React Native Developer</h2>
                        <p>Antrique - Part-time</p>
                        <h6>Tech</h6>
                        <p>React Native, JavaScript, Redux, Firebase, Google API</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2012 - 2017</span>
                        <h2>Associate's Degree of Informatics Management</h2>
                        <p>Bina Sarana Informatika University</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
