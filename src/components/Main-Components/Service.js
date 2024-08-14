import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Web Development & Mobile Development</h2>
                        <p>I build website & mobile go live with Beutiful Web App & Hybrid Mobile App Development</p>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
