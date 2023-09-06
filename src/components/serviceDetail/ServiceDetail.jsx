import React from 'react'
import details from './../../Assets/images/services/wellbeing2.jpg'

const ServiceDetail = () => {
  return (
    <section id="detailInfo" className="above noText" data-scroll-section>
	<div className="mainContainer">
		<div className="introPic relative no_overflow covered" data-scroll data-scroll-repeat>
		<img alt="" src={details} width="330" height="220" className="fit" /></div>
		<div className="layerUpdate" data-scroll data-scroll-call="layerUpdate"></div>
		<div id="detailSnippets" className="doubleMargin">
			<div className="snippet _1 text tech" data-scroll data-scroll-speed="1.8"  data-disable-mobile-scroll><span>GET BACK IN TUNE WITH YOUR BODY </span></div>
			<div className="snippet _2 text tech small" data-scroll data-scroll-speed="1.8" data-scroll-delay="0.15"  data-disable-mobile-scroll><span> with our wellness experts.</span></div>
		</div>
	</div>
</section>
  )
}

export default ServiceDetail