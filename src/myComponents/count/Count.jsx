
import React, { useLayoutEffect, useRef } from 'react';
import slide1 from './../../Assets/images/slide1.jpg'
import slide2 from './../../Assets/images/slide2.jpg'
import slide3 from './../../Assets/images/slide3.jpg'
import slide4 from './../../Assets/images/slide4.jpg'
import slide5 from './../../Assets/images/slide5.jpg'
import slide6 from './../../Assets/images/slide6.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
    const navigate = useNavigate()
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray(".scrollCol");
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 3),
            // ease: "none",
            scrollTrigger: {
              trigger: component.current,
              pin: true,
              start: 'top -400',
              scrub: 1,
            //   snap: 1 / (panels.length - 1),
              end: "+=2500",
            //   markers: true
            }
          });
        }, component);
        return () => ctx.revert();
      });
  return (
    <div className="thatcountFunction my-5 py-5 " style={{backgroundAttachment: 'fixed'}} ref={component}>
    <div className="container-fluid innerfluid vh100 mt-lg-5 py-5">
        <div className="container-lg h-100">
            <div className="row align-items-center h-100">
                <div className="col-12 d-lg-block d-none mb-lg-5 pb-lg-5">
                    <div className="row">
                        <div className="col-6 ms-auto  text-white">
                            <div className="servicesText">guest services</div>
                            <div className="countHeading text-uppercase d-flex flex-column w-100 align-items-end"><span className="d-flex justify-content-end">the extras</span> that count </div>
                        </div>
                    </div>
                </div>
                <div className="col-12" ref={slider}>
                    <div className="row align-items-center flex-nowrap gx-5">
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol" onClick={()=> navigate('/service')}>
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
                                <div className="cardImg"><img src={slide1} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
                                <div className="cardImg"><img src={slide2} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div> 
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
                                <div className="cardImg"><img src={slide3} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
                                <div className="cardImg"><img src={slide4} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div> 
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
                                <div className="cardImg"><img src={slide5} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
                            <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
                                <div className="cardImg"><img src={slide6} className="w-100 h-100" alt=""/></div>
                                <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Count