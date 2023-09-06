import React from 'react'
import serviceImg from './../../Assets/images/services/wellbeing1.jpg'

const ServiceHero = () => {
  return (
    <section id="detailTop" data-scroll-section>	
	<div className="mainContainer">
			<div className="relative oLeftBar" data-scroll>
				<div className="mainBackground bAlyssum top_translated full has_transition_3000"></div>
				<div className="mobileHidden miniTitle margin cArgilla top_single d700 relative has_transition_2000">Guest Services</div>
			</div>
			<div id="detailTopContent">
				<div id="detailSectionTitle" className="margin" data-scroll data-scroll-repeat>
					<div className="mobileOnly miniTitle margin cArgilla top_low d300 relative has_transition_2000">Guest Services</div>								
					<div className="detailTitle no_overflow"><span className="block top_hidden has_transition_2000 d400">Wellbeing</span></div>
					<div className="detailSubtitle _1 no_overflow has_transition_2000 cFango top_single d500">
						<span><p>me time in style</p></span>
					</div>
				</div>
				<div id="detailTopTarget" data-scroll data-scroll-class="target" data-scroll-id="detailTopTarget"></div>
				<div id="detailTopImgContainer" className="margin relative has_transition_3000 d400" data-scroll>
					<div id="detailTopImg" className="relative no_overflow">	
						<div id="detailImgBlock">
							<img className="fit" data-scroll data-scroll-speed="-1" data-disable-mobile-scroll srcset={serviceImg} width="1440" height="1440"/>
						</div>	
					</div>
				</div>
				<div id="detailIntroTitle" className="blockTitle margin no_overflow" data-scroll data-scroll-repeat>
					<span className="top_hidden block has_transition_3000">Self-care with a sense of <br />La Dolce Vita</span>
				</div>
				<div id="detailText" >
					<div className="text margin limited top_single has_transition_2000" data-scroll data-scroll-repeat>
						<p>Designed to promote rejuvenation, relaxation, and holistic health in the most soothing of settings, Casa Angelina’s extensive selection of wellness offerings including Pilates, sunset yoga, Bodybalance, massage, and world-class facial treatments.  </p>
					</div>
				</div>
			</div>
		</div>
</section>
  )
}

export default ServiceHero