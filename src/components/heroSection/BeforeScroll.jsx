import React from 'react'
import heroImg from './../../Assets/images/top.jpg'
import MenuVideo from './../../Assets/video/home.mp4'

const BeforeScroll = () => {
  return (
    <>
    <section id="hTop" data-scroll-section>
   <div id="headerShowTarget" data-scroll data-scroll-repeat data-scroll-call="showHeader"></div>
   <div id="headerHideTarget" data-scroll data-scroll-repeat data-scroll-call="hideHeader"></div>
   <div id="hTarget" data-scroll data-scroll-id="hTarget"></div>
   <div id="holder"  data-scroll data-scroll-speed="-10" style={{display:"none"}}></div>
   <div id="hImgContainer" className="has_transition_3000">
     <div id="hImgLayer" className="">
       <div id="hImgCover" className="">
         <img id="hImg" src={heroImg} alt='hero' className="fit " />
       </div>
     </div>
   </div>
   <div id="hElementsLayer" data-scroll data-scroll-speed="-10" data-scroll-class="stand">
     <div id="hLogo">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854.56 135.26">
			<g className="logoPay top_single has_transition_1500">
				<use className="fillColor quickColor" x="0" y="0" xlinkHref="#caLogo" />
			</g>
		</svg>
     </div>
    <div className="mobileOnly" id="hVideoLayer"  data-icon="textArrow"  data-text="watch" data-theme="whiteArrow">
				<video playsinline autoplay muted loop src={MenuVideo}></video>		
	</div>
	<div className="oButton mobileOnly watch whiteArrow margin has_transition_1500 top_ultralow mobileOnly">
							<svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
			         <use x="0" y="0" xlinkHref="#outerShape" />
			       </svg>
			       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block d200 transition_all">watch</span></div></div>
			       <div className="oSymbol">
			         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
			           <use x="0" y="0" xlinkHref="#buttonArrow" />
			         </svg>
			       </div>
			     </div>
			     
			     <div className="oButton mobileOnly close whiteArrow margin has_transition_1500 top_ultralow mobileOnly">
							<svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
			         <use x="0" y="0" xlinkHref="#outerShape" />
			       </svg>
			       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block d200 transition_all">close</span></div></div>
			       <div className="oSymbol">
			         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
			           <use x="0" y="0" xlinkHref="#buttonArrow" />
			         </svg>
			       </div>
			     </div>
			     <div id="scrollDown">
			     	<svg id="verticalArrow" className="top_low has_transition_1500" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 16.74 39.42" style={{enablebackground:"new 0 0 16.74 39.42" }}xmlSpace="preserve">
					<path fill="#FFFFFF" d="M7.99,39.42c0.24,0.1,0.52,0.1,0.77,0c0.12-0.05,0.23-0.12,0.32-0.22l7.37-7.37c0.39-0.39,0.39-1.02,0-1.41
						s-1.02-0.39-1.41,0l-5.66,5.66L9.37,1c0-0.55-0.45-1-1-1C8.09,0,7.84,0.11,7.66,0.29C7.48,0.47,7.37,0.72,7.37,1l0,35.08l-5.66-5.66
						c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l7.37,7.37C7.75,39.29,7.87,39.37,7.99,39.42z"/>
					</svg>
			     	<div className="scrollDownText cWhite no_overflow mobileHidden"><span className="has_transition_2000 block top_hidden d100 uppercase">scroll down <br />to start the experience</span></div>
			     	<div className="scrollDownText cWhite no_overflow mobileOnly"><span className="has_transition_2000 block top_hidden d100 uppercase">swipe up <br />to start the experience</span></div>			     	
			     </div>
   </div>

</section>
    </>
  )
}

export default BeforeScroll