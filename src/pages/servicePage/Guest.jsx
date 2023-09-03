import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Guest = () => {
    useEffect(() => {

        gsap.to(
          '.scrollImg',
          { scale : 1.4,
            scrollTrigger: {
              trigger: '.ppp',
              start: 'top top',
              endTrigger: '.end',
              end: 'top center',
              scrub: 1, // Smooth scroll-based transition
            },
          }
        )

        gsap.to(
            '.imgLayer',
            { y : -200,
              scrollTrigger: {
                trigger: '.imgLayer',
                start: 'bottom bottom',
                endTrigger: '.imgLayer',
                end: 'top center',
                scrub: 1, // Smooth scroll-based transition
              },
            }
          )
      }, []);
  return (
    <div className="container-fluid py-5 mt-5 guestsection position-relative overflow-hidden">
        <div className="container-lg pt-lg-5 pt-sm-4 position-relative">
            <div className="row ">
                <div className="col-lg-3 d-lg-block d-none ppp">
                    <div className="card border-0 rounded-0 shadow-none position-relative h-100" style={{minHeight: '200vh', background: '#cecbc6', zIndex: '9'}}>
                        <div className="card-body p-5 px-xl-5 px-4 text-center"><div className="guest text-theme1 fs-4">guest services</div></div>
                        <div className="cardImg position-relative overflow-hidden">
                            <img src="assets/img/asideImg.jpg" className="w-100" alt=""/>
                            <div className="position-absolute top-0  start-0 w-100 h-100 imgLayer" style={{background: '#cecbc6', zIndex: '3'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card border-0 rounded-0 shadow-none bg-transparent h-100">
                        <div className="cardbody">
                            <div className="innerpageHeading text-theme1 my-5 pt-5 d-lg-flex d-none flex-column px-3">Wellbeing <span className="d-inline-flex text-uppercase opacity-50">ME TIME IN STYLE</span></div>
                            <div className="card-img px-lg-3 px-0 position-relative scrollImg" style={{left: '13%'}}><img src="assets/img/guestIMg.jpg" className="w-100" alt=""/></div>
                            <div className="card-body p-lg-3 px-0 end mt-5 pt-5">
                                <div className="row mb-lg-5 pb-lg-5 flex-column row-gap-lg-5 row-gap-md-4 row-gap-3 mt-lg-5 mt-4">
                                    <div className="col-12 d-lg-none d-block"><div className="guest text-theme1 fs-5">guest services</div></div>
                                    <div className="col-12 d-lg-none d-flex innerpageHeading text-theme1  flex-column px-3">Wellbeing <span className="d-inline-flex text-uppercase opacity-50">ME TIME IN STYLE</span></div>
                                    <div className="col-xxl-6 col-xl-7 col-lg-9 selfHeading text-theme1 mt-5 pt-5">Self-care with a sense of La Dolce Vita</div>
                                    <div className="col-xxl-4 col-xl-5 col-md-6 col-sm-8 col-12 mb-lg-5 pb-lg-5 textcontent">Designed to promote rejuvenation, relaxation, and holistic health in the most soothing of settings, Casa Angelina’s extensive selection of wellness offerings including Pilates, sunset yoga, Bodybalance, massage, and world-class facial treatments.</div>
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

export default Guest