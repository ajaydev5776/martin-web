
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
    // const navigate = useNavigate()
    // const component = useRef();
    // const slider = useRef();

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       let panels = gsap.utils.toArray(".scrollCol");
    //       gsap.to(panels, {
    //         xPercent: -100 * (panels.length - 3),
    //         // ease: "none",
    //         scrollTrigger: {
    //           trigger: component.current,
    //           pin: true,
    //           start: 'top -400',
    //           scrub: 1,
    //           end: "+=2500",
    //         }
    //       });
    //     }, component);
    //     return () => ctx.revert();
    //   });
  return (
//     <div className="thatcountFunction my-5 py-5 " style={{backgroundAttachment: 'fixed'}} data-scroll-section>
//     <div className="container-fluid innerfluid vh100 mt-lg-5 py-5">
//         <div className="container-lg h-100">
//             <div className="row align-items-center h-100">
//                 <div className="col-12 d-lg-block d-none mb-lg-5 pb-lg-5">
//                     <div className="row">
//                         <div className="col-6 ms-auto  text-white">
//                             <div className="servicesText">guest services</div>
//                             <div className="countHeading text-uppercase d-flex flex-column w-100 align-items-end"><span className="d-flex justify-content-end">the extras</span> that count </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="row align-items-center flex-nowrap gx-5">
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide1} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide2} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide3} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide4} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide5} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide6} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//     <div className="thatcountFunction my-5 py-5 " style={{backgroundAttachment: 'fixed'}} ref={component}>
//     <div className="container-fluid innerfluid vh100 mt-lg-5 py-5">
//         <div className="container-lg h-100">
//             <div className="row align-items-center h-100">
//                 <div className="col-12 d-lg-block d-none mb-lg-5 pb-lg-5">
//                     <div className="row">
//                         <div className="col-6 ms-auto  text-white">
//                             <div className="servicesText">guest services</div>
//                             <div className="countHeading text-uppercase d-flex flex-column w-100 align-items-end"><span className="d-flex justify-content-end">the extras</span> that count </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12" ref={slider}>
//                     <div className="row align-items-center flex-nowrap gx-5">
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol" onClick={()=> navigate('/service')}>
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide1} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide2} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide3} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide4} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard">
//                                 <div className="cardImg"><img src={slide5} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div>
//                         <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 scrollCol">
//                             <div className="card rounded-0 border-0 shadow-none position-relative serviceCard vrcard">
//                                 <div className="cardImg"><img src={slide6} className="w-100 h-100" alt=""/></div>
//                                 <div className="title text-uppercase position-absolute"><span>Wellbeing</span></div>
//                             </div>
//                         </div> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
<section id="hFacilities" class="relative no_overflow" data-scroll-section>
 <div id="hFacilitiesTarget"></div>
 <div class="layerUpdate" data-scroll data-scroll-call="layerUpdate" data-scroll-offset="-100%"></div>
 <div class="callerTop" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToWhite" data-scroll-offset="95%"></div>
 
 <div id="hFacilitiesSticky" data-scroll data-scroll-class="sticky" data-scroll-id="hFacilitiesSticky" data-scroll-sticky data-scroll-target="#hFacilitiesTarget">
   <div class="mainBackground hFacilitiesBackground">
     <img src="wp-content/themes/casangelina/assets/images/home/facilitiesBack.jpg" class="fit" />
     <div class="veil"></div>
   </div>
   <div class="mainContainer _1">
     <div id="hFacilitiesTop" class="margin">
       <div class="miniTitle cWhite"><span>Guest Services</span></div>
       <div id="hFacilitiesTitle" class="sectionTitle cWhite">
                  <div class="big uppercase">that count </div>
         <div class="small uppercase"> the extras</div>        
       </div>
     </div>
   </div>
   <div id="hFacilitiesSlider">
     <div id="hFacilitiesScroller">                 
               <a href="guest-services/wellbeing/index.html" class="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/wellbeing/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide1} class="fit" /></div>
                 <div class="hFItemTitle">Wellbeing</div>
               </a>

                              
               <a href="guest-services/pool/index.html" class="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/pool/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide2} class="fit" /></div>
                 <div class="hFItemTitle">Pool</div>
               </a>

                              
               <a href="guest-services/beach/index.html" class="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/beach/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide3} class="fit" /></div>
                 <div class="hFItemTitle">Beach</div>
               </a>

                              
               <a href="guest-services/the-grounds/index.html" class="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/the-grounds/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide4} class="fit" /></div>
                 <div class="hFItemTitle">The Grounds</div>
               </a>

                              
               <a href="guest-services/our-boat/index.html" class="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/our-boat/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide5} class="fit" /></div>
                 <div class="hFItemTitle">Our Boat</div>
               </a>

                              
               <a href="guest-services/concierge/index.html" class="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/concierge/index.html">
                 <div class="hFItemPic relative"><img alt=""  src={slide6} class="fit" /></div>
                 <div class="hFItemTitle">Concierge</div>
               </a>
     </div>
   </div>
 </div>
  <div class="callerBottom" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToDark" data-scroll-offset="95%"></div>
 
</section>
  )
}

export default Count