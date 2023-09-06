import React from 'react'

import slider1 from './../../Assets/images/services/slider1.jpg'
import slider2 from './../../Assets/images/services/slider2.jpg'
import slider3 from './../../Assets/images/services/slider3.jpg'
import slider4 from './../../Assets/images/services/slider4.jpg'
import slider5 from './../../Assets/images/services/slider5.jpg'



const Gallery = () => {
  return (
    <section className="galleryContainer doubleMargin" data-scroll-section>
	<div data-scroll data-scroll-id="galleryLock"></div>
		<div className="gallery no_overflow relative">
		<div className="sliderContainer" data-scroll data-scroll-speed="-1">
			<div className="slideContainer active show">	
				<div className="slide full_height mask_right no_overflow full has_transition_1500_inout">
					<div className="t_container no_overflow has_transition_1500_inout">
						<img className="has_transition_1500_inout fit " src={slider1} alt="" width="1920" height="1080" data-caption=""/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_right no_overflow full has_transition_1500_inout">
					<div className="t_container no_overflow has_transition_1500_inout">
						<img className="has_transition_1500_inout fit " src={slider2} alt="" width="1920" height="1080" data-caption=""/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_right no_overflow full has_transition_1500_inout">
					<div className="t_container no_overflow has_transition_1500_inout">
						<img className="has_transition_1500_inout fit " src={slider3} alt="" width="1920" height="1080" data-caption=""/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_right no_overflow full has_transition_1500_inout">
					<div className="t_container no_overflow has_transition_1500_inout">
						<img className="has_transition_1500_inout fit " src={slider4} alt="" width="1920" height="1080" data-caption=""/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_right no_overflow full has_transition_1500_inout">
					<div className="t_container no_overflow has_transition_1500_inout">
						<img className="has_transition_1500_inout fit " src={slider5} alt="" width="1920" height="1080" data-caption=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="activeLayerContainer">
		<div className="activeLayer left"  data-action="runSlider" data-direction="<" data-icon="textArrow" data-text=""  data-theme="fullWhite left" data-precision="true" data-scroll>
			<div className="mobileArrow bAlyssum left">
				<svg className="oArrow fillColor has_transition_1000 transition_all no_opacity" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
					<use x="0" y="0" xlinkHref="#buttonArrow" />
				</svg>
			</div>
		</div>
		<div className="activeLayer right" data-action="runSlider" data-direction=">" data-icon="textArrow" data-text=""  data-theme="fullWhite right" data-precision="true" data-scroll>
			<div className="mobileArrow bAlyssum right">
				<svg className="oArrow fillColor has_transition_1000 transition_all no_opacity" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
					<use x="0" y="0" xlinkHref="#buttonArrow" />
				</svg>
			</div>
		</div>	
	</div>
	<div className="sliderPreview bAlyssum mobileHidden">
		<div className="previewText">
			<span className="sliderCounter"><span className="current">01</span> / 05</span>
			<span className="previewTitle ">Coming Next</span>
		</div>	
		<div className="previewContainer relative mobileHidden">
			<div className="slideContainer active show">	
				<div className="slide full_height mask_top no_overflow full has_transition_1500">
					<div className="t_container no_overflow has_transition_1500">
						<img className="has_transition_1500 fit" src={slider1} alt="" width="1920" height="1080"/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_top no_overflow full has_transition_1500">
					<div className="t_container no_overflow has_transition_1500">
						<img className="has_transition_1500 fit" src={slider2} alt="" width="1920" height="1080"/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_top no_overflow full has_transition_1500">
					<div className="t_container no_overflow has_transition_1500">
						<img className="has_transition_1500 fit" src={slider3} alt="" width="1920" height="1080"/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_top no_overflow full has_transition_1500">
					<div className="t_container no_overflow has_transition_1500">
						<img className="has_transition_1500 fit" src={slider4} alt="" width="1920" height="1080"/>
					</div>
				</div>
			</div>
			<div className="slideContainer ">	
				<div className="slide full_height mask_top no_overflow full has_transition_1500">
					<div className="t_container no_overflow has_transition_1500">
						<img className="has_transition_1500 fit" src={slider5} alt="" width="1920" height="1080"/>
					</div>
				</div>
			</div>
		</div>		
	</div>
</section>
  )
}

export default Gallery