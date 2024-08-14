import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Advantages</span></h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/figma.png" alt="Figma"/>
                                    {/* <h1 className="percent">92%</h1> */}
                                </div>
                                <p className="name">Figma</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/javascript.png" alt="Framer"/>
                                    {/* <h1 className="percent">85%</h1> */}
                                </div>
                                <p className="name">JavaScript</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/firebase.png" alt="Webflow"/>
                                    {/* <h1 className="percent">80%</h1> */}
                                </div>
                                <p className="name">Firebase</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/react.png" alt="React"/>
                                </div>
                                <p className="name">React/React Native</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/graphql.png" alt="WordPress"/>
                                </div>
                                <p className="name">GraphQL</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/redux.png" alt="Laravel/PHP"/>
                                </div>
                                <p className="name">Redux</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
