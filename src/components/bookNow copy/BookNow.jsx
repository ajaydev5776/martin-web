import React from 'react'
import './style.css'

const BookNow = () => {
  return (
    <>
    <aside className="overlay has_transition_1000" id="bookOverlay">
	<div className="mainBackground bTortora hidden has_transition_1000"></div>
	<div className="overlayClose" id="bookNowClose">
		<svg className="circlePath" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000_inout transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
		<div className="overlayCloseInner has_transition_1000"></div>
	</div>
	<div className="overlayContainer">
		<div className="overlayTitle cWhite no_overflow detailTitle">
			<span className="top_hidden block has_transition_1500 uppercase">book now</span>
			<div style={{display:"none"}} className="ovSmall cMarrone no_overflow has_transition_1500 top_single">
				<span className="uppercase">See you from April 1st, 2023</span>
			</div>
		</div>
		<div className="ovGroup no_overflow benefits double">
			<div className="ovSmall cMarrone no_overflow has_transition_1500 top_single d50">
				<span><span className="uppercase">Why book direct:</span><br /><br />
						- exclusive in-room welcome amenities<br />
						- upsells with discounts & best rate guarantee<br />
						- more Flexibility in the booking process<br />
						- more personalized Guest Experience<br />
						</span>
			</div>
			<div className="ovSmall cMarrone no_overflow has_transition_1500 top_single d50">
				<span><span className="uppercase">Important Note:</span><br /><br />
						- adults-only Hotel, children are welcome from 12 years and above<br />
						- pets are not allowed						</span>
			</div>
		</div>
		
		<div className="ovGroup bookArrival no_overflow">
			<label for="bookArrival" className="has_transition_1500 overlayLabel detailTitle cWhite top_single d100">arrival <span className="icoContainer mobileHidden top_single has_transition_1500 d100"><img className="calendarIco" src="wp-content/themes/casangelina/assets/images/calendar.png"/></span></label><input id="bookArrival" className="cMarrone detailTitle top_single has_transition_1500 d200"/>
		</div>
		<div className="ovGroup bookDeparture no_overflow">
			<label for="bookDeparture" className="has_transition_1500 overlayLabel detailTitle cWhite top_single d300">departure <span className="icoContainer mobileHidden top_single has_transition_1500 d300"><img className="calendarIco" src="wp-content/themes/casangelina/assets/images/calendar.png"/></span></label><input id="bookDeparture" className="cMarrone detailTitle top_single has_transition_1500 d400"/>
		</div>
		<div className="ovGroup bookGuests no_overflow">
			<label for="bookGuests" className="has_transition_1500 overlayLabel detailTitle cWhite top_single d500">guests <span className="icoContainer top_single has_transition_1500 d500"><span className="downArrow"></span></span></label>
			<select id="bookGuests" name="bookGuests" className="cMarrone detailTitle top_single has_transition_1500 d600">
				<option>1</option>
				<option selected>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>10+</option>
			</select>
		</div>
			<div id="bookSubmit" className="oButton whiteArrow has_transition_1500 top_ultralow d600" data-disabled="true">
				<svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
					<defs>
					<path id="outerShape" stroke-width="1" d="M36.85,0L36.85,0L0,0v0v1V0.97h36.85V1c9.88,0,17.93,8.04,17.93,17.93c0,9.88-8.04,17.92-17.93,17.92v0.03H0v-0.03v1v0
						h36.85v0c10.44,0,18.93-8.49,18.93-18.92C55.78,8.49,47.29,0,36.85,0z"/>
					</defs>
					<use x="0" y="0" xlinkHref="#outerShape" />
				</svg>
				<div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block cBrown d800 transition_all">submit</span></div></div>
				<div className="oSymbol">
					<svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
						<use x="0" y="0" xlinkHref="#buttonArrow" />
					</svg>
				</div>
			</div>
			<a className="ovGroup no_overflow leaders" target="_blank" href="https://www.lhw.com/leaders-club-hub?hotel=38068">
			<div className="ovSmall cMarrone no_overflow"><span className="block has_transition_1500 top_single d700">Member of <img src="wp-content/themes/casangelina/assets/images/leaders-club.png"/>? <br />Click <u>here</u> to enjoy enhanced stays and special benefits!</span></div>
		
		</a>		
		</div>
</aside>
    </>
  )
}

export default BookNow