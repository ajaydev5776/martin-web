import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";
const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    
    const parent = useRef()
    const child = useRef()
    useEffect(() => {
        gsap.to(
            child.current,
          { y: '-200',
            scrollTrigger: {
              trigger: parent.current,
              start: 'bottom bottom',
              endTrigger: parent.current,
              end: 'top center',
              scrub: 1,
            },
          }
        )
      }, []);
  return (
    <>
    <div className="aboutsection mb-5 pb-5 ">
        <div className="container-fluid innerfluid py-5">
            <div className="container-lg mt-5">
                <div className="row pt-sm-5 align-items-center ">
                    <div className="col-12 mt-xl-5 mb-md-0 mb-2"><div className="aboutusheading countHeading fw-light text-white" data-aos="fade-up"  data-aos-duration="1000">About</div></div>
                    <div className="col-md-6 col-sm-7">
                        <div className="row row-gap-4">
                            <div className="col-12 fs-2 text-theme1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Augustinus Bader</div>
                            <div className="col-12 textcontent " data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Inspired by over three decades of science and innovation, Augustinus Bader’s award-winning approach to professional skincare is rooted in groundbreaking stem cell research and trusted by the world’s most discerning experts. Professor Bader’s clean, efficient formulas are powered by TFC8®, a proprietary cellular renewing technology clinically proven to help support the body’s natural regenerative processes, for a fresh, healthy glow from the inside out.</div>
                            <div className="col-sm-10 text-end">
                                <a href="javascript:;" className="text-decoration-none bg-transparent border border-1 border-theme1 d-inline-flex align-items-center gap-2 conceptBtn py-lg-2 py-1 px-4 rounded-pill"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">more <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5 ms-auto mt-sm-0 mt-5">
                        <div className="aboutImg"><img src="assets/img/aboutUs_img.png" className="w-100" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mb-5 pb-5 treatmentsection gourmentsection " ref={parent}>
        <div className="container-lg innerfluid">
            <div className="row align-items-center row-gap-3">
                <div className="col-md-6">
                    <div className="fs-3 textcontent" data-aos="fade-up" data-aos-duration="1000">To enhance the personalized benefits, schedule a series of custom treatments and make The Method part of your Augustinus Bader skincare regimen.</div>
                </div>
                <div className="col-auto ms-auto">
                    <div className="rightsdePopuo innerPagesidePopup position-relative m-0"><span className="layar d-inline-flex w-100 h-100 position-absolute top-0 start-0" ref={child}></span><span className="d-flex"><img src="assets/img/SET_7_TBC-100ml.png" className="w-100 h-100" alt=""/></span></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About