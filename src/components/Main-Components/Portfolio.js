import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio-1.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio-1.png" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://www.figma.com">Figma</a>
                                    </li>
                                    <li>
                                        <a href="https://reactnative.dev/">React Native</a>
                                    </li>
                                    <li>
                                        <a href="https://www.javascript.com/">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="https://firebase.google.com">Firebase</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a href="https://play.google.com/store/apps/details?id=com.dboapp&hl=id">Salesman App - DBO</a></h2>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio-2.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio-2.png" alt="portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://www.figma.com">Figma</a>
                                    </li>
                                    <li>
                                        <a href="https://reactnative.dev/">React Native</a>
                                    </li>
                                    <li>
                                        <a href="https://www.javascript.com/">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="https://firebase.google.com">Firebase</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a href="https://www.hinterland.com">WaitHub by AntriQue App</a></h2>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </section>
  )
}
