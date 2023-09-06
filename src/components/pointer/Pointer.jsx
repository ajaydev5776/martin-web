import React from 'react'

const Pointer = () => {
  return (
    <div id="tracker" className="has_transition_400 mobileHidden">
	<div id="simpleTrack" className="has_transition_800 bAlyssum no_opacity"></div>
	<div id="navigationTrack" className="oButton top_ultralow has_transition_1500">
		<svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
			<use x="0" y="0" xlinkHref="#outerShape" />
		</svg>
		<div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block d200 transition_all">concept</span></div></div>
		<div className="oSymbol has_transition_1000 d200">
			<svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
				<use x="0" y="0" xlinkHref="#buttonArrow" />
			</svg>
		</div>
	</div>
	<div id="actionTrack">
		<svg className="oArrow fillColor has_transition_1000 transition_all no_opacity" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
			<use x="0" y="0" xlinkHref="#buttonArrow" />
		</svg>
		<svg className="circlePath" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000 transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
	</div>
	<div className="loading has_transition_1000"><svg><circle cx="15" cy="15" r="14" stroke-width="2" fill="transparent"></circle></svg></div>								
</div>
  )
}

export default Pointer