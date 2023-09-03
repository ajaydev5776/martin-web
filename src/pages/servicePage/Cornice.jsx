import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cornice = () => {
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
  return (
    <>
    <div className="container-fluid mt-5 pt-5 gourmentsection vh-100 overflow-hidden" ref={parent}>
    <div className="container-lg innerfluid">
        <div className="row row-gap-5 justify-content-center">
            <div className="col-xl-10 col-xxl-11">
                <div className="corniceImg position-relative" ref={child}>
                    <img src="assets/img/ab_product.jpg"  className="w-100" alt=""/>
                    {/* <div className="rightsdePopuo innerPagesidePopup position-absolute start-0 justify-content-end"><span className="layar d-inline-flex w-100 h-100 position-absolute top-0 start-0"></span><span className="d-flex"><img src="assets/img/ab_product_demo.png" className="w-100 h-100" alt=""/></span></div> */}
                </div>
            </div>
        </div>
    </div>
</div>
<div className="secondAnim" ref={secAnim}>
      <div className="container position-relative">
      <div className="rightsdePopu position-absolute justify-content-start start-0 overflow-hidden" ref={secChild} style={{opacity: 1, height: '170px', width: '270px', top: '0', zIndex: '9'}}>
        <span className="d-flex h-100 w-100">
          <img src="assets/img/ab_product_demo.png" className="w-100 h-100 object-fit-cover" alt=""/>
        </span>
        <span className='d-flex h-100 w-100 position-absolute top-0 start-0' ref={layer} style={{background: '#cecbc6', zIndex: 2}}></span>
      </div>
      </div>
    </div>
</>
  )
}

export default Cornice