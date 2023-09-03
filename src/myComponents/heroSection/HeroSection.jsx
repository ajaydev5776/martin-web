import React, { useEffect, useRef } from 'react'
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TasteMakers from '../tasteMakers/TasteMakers';
import img from './../../Assets/images/top.jpg'

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	
  const parentRef = useRef(null);
  const stickyChildRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const stickyChild = stickyChildRef.current;

    gsap.to(
      stickyChild,
      { ease: 'none',
        position: 'relative',
        scrollTrigger: {
          trigger: parent,
          start: 'top bottom',
          // endTrigger: parent,
          // end: 'bottom bottom',
          scrub: true, // Smooth scroll-based transition
        },
      }
    )
  }, []);
	return (
		<>
			<div className="heroSection vh-100 position-relative">
				{/* <img className='h-100 w-100 object-fit-cover' src="assets/img/top.jpg" alt="" /> */}
				<div className="d-flex justify-content-center flex-column container h-100">
					<div className="row w-100 align-items-center">
						<div className="col-6">
							<div className="lookText text-uppercase">LOOK
								<span>beyond limits</span>
							</div>
						</div>
						<div className="col-6 imgParent" ref={stickyChildRef} style={{height: '160px'}}>
							<img className='h-100 w-100 object-fit-cover heroImg position-absolute top-0 start-0' src={img} alt="" />
						</div>
					</div>
					<div className="row w-100 my-4 align-items-end">
						<div className="col-9" style={{height: '160px'}}>
							<img className='h-100 w-100 object-fit-cover' src={img} alt="" />
						</div>
						<div className="col-3">
							<div className="findText text-uppercase text-end">find
							</div>
						</div>
					</div>
					<div className="row w-100">
						<div className="col-12 text-end text-uppercase perfectText">true perfection</div>
					</div>
				</div>
			</div>
			<div className="container-fluid py-5 tastemakerssection" ref={parentRef}>
      <div className="container innersection">
          <div className="row">
              <div className="col-lg-6 col-12 ms-auto">
                  <div className="sectionheading fw-semibold">Tastemakers of Understated Chic Luxury</div>
                  <div className="textcontent mt-xl-5 mt-4">Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</div>
                  <div className="textcontent my-xl-5 my-4">Our 37-room hotel serves as a sanctuary, bearing a fresh, white-washed aesthetic that accentuates every space, from the azure sea and sky outside to the contemporary artworks on display inside.</div>
                  <div className="textcontent">We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.</div>
              </div>
          </div>
      </div>
    </div>
			{/* <TasteMakers ref={parentRef}/> */}

		</>
	)
}

export default HeroSection