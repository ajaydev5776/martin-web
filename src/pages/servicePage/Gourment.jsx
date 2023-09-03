import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";

gsap.registerPlugin(ScrollTrigger);

const Gourment = () => {

  useEffect(() => {
    AOS.init();
}, [])
    const parent = useRef();
    const child = useRef();
    const secChild = useRef();
    const secAnim = useRef();
    const layer = useRef()



      useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to(child.current, {
            scale: 1.3,
            // ease: "none",
            scrollTrigger: {
              trigger: parent.current,
              pin: true,
              start: 'top top',
              scrub: 1,
              end: "+=1000",
            }
          });
        }, parent);
        return () => ctx.revert();
      });

      useEffect(() => {
    
        gsap.to(
          secChild.current,
          { y: '-80',
            opacity: 1,
            scrollTrigger: {
              trigger: parent.current,
              start: 'bottom bottom',
              endTrigger: secChild.current,
              end: 'top 50',
              scrub: 1, // Smooth scroll-based transition
            },
          }
        )
        gsap.to(
          layer.current,
          { y: '-100%',
            scrollTrigger: {
              trigger: parent.current,
              start: 'bottom bottom',
              endTrigger: secChild.current,
              end: 'top 50',
              scrub: 1, 
            },
          }
        )
      }, []);

    // useLayoutEffect(() => {
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: parent.current,
    //             pin: true,
    //             start: 'top top',
    //             scrub: 1,
    //             end: "+=2500",
    //         }
    //     });
    //     tl.to(child.current, {
    //       scale: 1.45
    //     });
    //     tl.from(".rightsdePopu", {
    //       opacity: 1,
    //       y: 100,
    //     });
    
    //     return () => tl.scrollTrigger.kill()
    //   }, []);
      
  return (
  <>
    <div className="container-fluid mb-5 py-5 gourmentsection srd vh-100 overflow-hidden" ref={parent}>
        <div className="container-lg innerfluid">
            <div className="row row-gap-5 justify-content-center">
                <div className="col-xl-10 col-xxl-11">
                    <div className="corniceImg position-relative" ref={child}>
                        <img src="assets/img/Cornice.jpg"   className="w-100" alt=""/>
                        {/* <div className="rightsdePopu position-absolute justify-content-end" ref={secChild} style={{opacity: 1, height: '130px', width: '190px', right: '100px', top: '100%', zIndex: '9'}}><span className="d-flex h-100 w-100"><img src="assets/img/Cornice_lavorata.jpg" className="w-100 h-100 object-fit-cover" alt=""/></span></div> */}
                    </div>
                </div>
                <div className="col-12 mt-5 pt-md-5">
                    <div className="row py-lg-5">
                        <div className="col-xl-6 col-lg-7 textcontent fs-2" data-aos="fade-up"  data-aos-duration="1000">Reconnect with your body and mind by booking a treatment with one of our expert massage therapists who are skilled in a vast range of methods and techniques to meet a wide variety of needs.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="secondAnim" ref={secAnim}>
      <div className="container position-relative">
      <div className="rightsdePopu position-absolute justify-content-end end-0 overflow-hidden" ref={secChild} style={{opacity: 1, height: '170px', width: '270px', top: '0', zIndex: '9'}}>
        <span className="d-flex h-100 w-100">
          <img src="assets/img/Cornice_lavorata.jpg" className="w-100 h-100 object-fit-cover" alt=""/>
        </span>
        <span className='d-flex h-100 w-100 position-absolute top-0 start-0' ref={layer} style={{background: '#cecbc6', zIndex: 2}}></span>
      </div>
      </div>
    </div>
    </>
  )
}

export default Gourment