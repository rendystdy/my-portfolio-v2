import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great design begin with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Hi I'm a Front End developer with 5 years of experience. I specialize in building high-performance, scalable, and interactive web and mobile applications using React and its ecosystem. I have a deep understanding of Redux, React Router, and GraphQL, and I'm passionate about creating visually appealing user experiences.</p>
            </div>
        </div>
    </section>
  )
}
