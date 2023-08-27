import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'

gsap.registerPlugin(ScrollTrigger);

const Gourment = () => {

  const parentRef = useRef(null);
  const stickyChildRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const stickyChild = stickyChildRef.current;

    gsap.to(
      stickyChild,
     // Start position (below the parent)
      { ease: 'none',
        position: 'sticky',
        // top: -300,
        // height: 300,
         // End position (sticky at the top of the parent)
        scrollTrigger: {
          trigger: '.gourmentsection',
          start: 'top top',
          endTrigger: parent,
          end: 'bottom bottom',
          scrub: true, // Smooth scroll-based transition
        },
      }
    );
    // gsap.to('.firstContent', {
    //   color: 'white',
    //     scrollTrigger: {
    //       trigger: '.firstParent',
    //       start: 'top top',
    //       endTrigger: parent,
    //       end: 'bottom bottom',
    //       delay: 3
    //       // scrub: true,
    //     }
    // })
  }, []);
  return (
    <div class="gourmentsection  my-5  py-md-4" ref={parentRef}>
    <div className="abLayer"></div>
        <div class="container-fluid innerfluid">
            <div class="container-lg position-relative">
            <div className="layer top-0" ref={stickyChildRef}></div>

                <div class="row position-absolute top-0 w-100 start-0">
                    <div class="col-lg-auto col-12 text-white mb-lg-4 py-md-5 py-4 pt-lg-5 pt-0 order-lg-1 order-2">
                        <div class="servicesText fs-4 mb-4">dining</div>
                        <div class="countHeading text-uppercase d-flex flex-column-reverse  w-100 align-items-end"><span class="d-flex justify-content-end">the extras</span> gourment </div>
                    </div>
                    <div class="col d-flex justify-content-end order-lg-2 order-1"> <div class="rightsdePopuo positionabsolute"><span class="d-flex"><img src="assets/img/gourmetIntro.jpg" class="w-100 h-100" alt=""/></span></div></div>
                </div>
                <div class="row bottomSide position-relative">
                    <div class="col-lg-8 order-lg-1 order-2">
                        <div class="row row-gap-4">
                            <div class="col-12 text-center firstParent">
                                <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide1.jpg" class="w-100"/></div>
                                <div class="content mb-1 firstContent">Un Piano Nel Cielo, A Fine Dining Restaurant</div>
                                <div class="subContent text-uppercase mb-4">Campania-inspired cuisine paired with spectacular sea views</div>
                            </div>
                            <div class="col-12 text-center">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide2.jpg" class="w-100"/></div>
                                        <div class="content mb-1">Seascape Casual Dining</div>
                                        <div class="subContent text-uppercase mb-4">relaxed all day dining</div>
                                    </div>
                                    <div class="col-6">
                                        <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide3.jpg" class="w-100"/></div>
                                        <div class="content mb-1">Seascape Cocktail Bar</div>
                                        <div class="subContent text-uppercase mb-4">delicious cocktails & stunning views</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide4.jpg" class="w-100"/></div>
                                <div class="content mb-1">Wine Cellar</div>
                                <div class="subContent text-uppercase mb-4">an award-winning wine selection </div>
                            </div>
                            <div class="col-12 text-center">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide5.jpg" class="w-100"/></div>
                                        <div class="content mb-1">Breakfast</div>
                                        <div class="subContent text-uppercase mb-4">mediterranean mornings start with a full-spread breakfast</div>
                                    </div>
                                    <div class="col-6">
                                        <div class="testImg mb-4"><img src="assets/img/gourmetIntroSlide6.jpg" class="w-100"/></div>
                                        <div class="content mb-1">Rooftop Terrace</div>
                                        <div class="subContent text-uppercase mb-4">private dining & intimate celebrations</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-lg-2 order-1">
                        <div class="ps-lg-5 my-4 mt-lg-4 mt-0 sticky-top">
                            <div class="contentHeading fs-1 text-white">taste</div>
                            <div class="textcontent text-white">Fine dining, Amalfi style. At Casa Angelina, the rich flavors and ingredients of Campania inspire every.</div>
                            {/* <a href="javascript:;" class="text-decoration-none bg-white d-lg-none d-inline-flex align-items-center gap-2 conceptBtn py-lg-2 py-1 px-3 rounded-pill">concept <span class="d-inline-flex"><img src="assets/img/arrow.svg" class="w-100" alt="arrow"></span></a>  */}
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </div>
  )
}

export default Gourment