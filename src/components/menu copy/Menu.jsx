import React from 'react'
import MenuVideo from './../../Assets/video/home.mp4'
import './style.css'

const Menu = () => {
  return (
    <nav className="has_transition_1000">
	<div className="overlayClose" id="menuClose">
		<svg className="circlePath" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000_inout transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
		<div className="overlayCloseInner has_transition_1000"></div>
	</div>
	<div id="navVideo" className="no_opacity has_transition_1500">
		<video autoplay muted loop playsinline src={MenuVideo}></video>
	</div>
	<div id="navBackground" className="hidden has_transition_1000 bTortora"></div>
	<div id="navInner">
		<div id="navTop">
			<div id="navBar">
				<a id="navLogo" href="index.html" className="urlManager">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854.56 135.26">
						<use className="top_single has_transition_1500 fillColor" x="0" y="0" xlinkHref="#caLogo" />
					</svg>	
				</a>
										<div id="navSideItems">
												<a className="navSideItem cWhite block no_overflow urlManager    " href="press-area/index.html" ><span className="block has_transition_1500 top_hidden">Press</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager    " href="hotel-policies/index.html" ><span className="block has_transition_1500 top_hidden d50">Hotel Policies</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager    " href="travel-safe/index.html" ><span className="block has_transition_1500 top_hidden d100">Travel Safe</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager    " href="faq/index.html" ><span className="block has_transition_1500 top_hidden d150">Faq</span></a>
												<a className="navSideItem cWhite block no_overflow " href="#" target="_blank"><span className="block has_transition_1500 top_hidden d200">Leaders club</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager margin   " href="contacts/index.html" ><span className="block has_transition_1500 top_hidden d250">Contacts</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager margin no_default credits " href="#" ><span className="block has_transition_1500 top_hidden d300">Credits</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager no_default thanks  " href="#" ><span className="block has_transition_1500 top_hidden d350">Special Thanks</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager    " href="privacy-policy/index.html" ><span className="block has_transition_1500 top_hidden d400">Privacy Policy</span></a>
												
					</div>
			</div>
			<div id="navContent">
				<div id="navScroller">
															<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Hotel at a Glance </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="the-hotel/concept/index.html">Concept<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>sublime modern minimalism</p>



<p></p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="the-hotel/location/index.html">Location<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>an oasis of peace and quiet</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="the-hotel/explore-praiano/index.html">Explore Praiano<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>Amalfi Coast’s best kept secret</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250" href="the-hotel/our-sustainability-journey/index.html">Our Sustainability Journey<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300" href="the-hotel/hotel-boutique/index.html">Shop CA<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>BRING HOME OUR WORLD OF STYLE</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Suites </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="suites/angelina-suite/index.html">Angelina Suite<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>the ethos of casa angelina</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="suites/azure-suite/index.html">Azure Suite<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>launched in April 2023</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Rooms </span></div>
						<div className="navSectionItems">
													<a className="navItem urlManager block top_low has_transition_1500 d100" href="rooms/grand-de-luxe/index.html">Grand De Luxe<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>our style statement</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="rooms/deluxe-corner-sea-view/index.html">Deluxe Corner Sea View<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>where style and spaciousness converge.</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="rooms/terrace/index.html">Terrace<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>slow living</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250" href="rooms/relaxing/index.html">Relaxing<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>tranquil beauty</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300" href="rooms/romantic/index.html">Romantic<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>the ultimate romantic hideaway</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d350" href="rooms/canopy/index.html">Canopy<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>light and airy</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d400" href="rooms/classic/index.html">Classic<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>cozy chic</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d450" href="rooms/single/index.html">Single<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>a truly private experience</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d500" href="rooms/eaudesea-experience/index.html">Eaudesea Experience<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>where sea and sky hypnotize your soul</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Dining </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="dining/taste/index.html">Taste<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>a mediterranean feast</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="dining/breakfast/index.html">Breakfast<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>mediterranean mornings start with a full-spread breakfast</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="dining/un-piano-nel-cielo/index.html">Un Piano Nel Cielo, A Fine Dining Restaurant<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>Campania-inspired cuisine paired with spectacular sea views</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250" href="dining/wine-cellar/index.html">Wine Cellar<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>an award-winning wine selection&nbsp;</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300" href="dining/seascape-restaurant/index.html">Seascape Casual Dining<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>relaxed all day dining</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d350" href="dining/seascape-cocktail-bar/index.html">Seascape Cocktail Bar<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>delicious cocktails &amp; stunning views</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d400" href="dining/rooftop-terrace/index.html">Rooftop Terrace<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>private dining &amp; intimate celebrations</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Guest Services </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="guest-services/wellbeing/index.html">Wellbeing<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>me time in style</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="guest-services/pool/index.html">Pool<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>sun-soaked serenity</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="guest-services/beach/index.html">Beach<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>seaside splendor</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250" href="guest-services/the-grounds/index.html">The Grounds<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>from the thoughtfully planted to the wild and untamed.</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300" href="guest-services/our-boat/index.html">Our Boat<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>sail the amalfi coast</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d350" href="guest-services/concierge/index.html">Concierge<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>let us look after you</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Experiences </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="experiences/chef-on-board/index.html">Chef on Board<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>Amalfi Flavors, At Sea Level</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="experiences/fine-driving-on-the-amalfi-coast/index.html">Fine Driving on the Amalfi Coast’s Winding Roads<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>A DOSE OF RETRO MAGIC</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="experiences/romance-retreat/index.html">Romance Retreat<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>A STARRY-EYED WEEKEND STAY</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250" href="experiences/body-soul/index.html">Body &#038; Soul<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>GETTING BACK TO YOUR BEST SELF</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative" data-scroll>
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Photogallery </span></div>
						<div className="navSectionItems">

													<a className="navItem urlManager block top_low has_transition_1500 d100" href="photogallery/hotel/index.html">Hotel<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150" href="photogallery/rooms-suites/index.html">Rooms &#038; Suites<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d200" href="photogallery/dining/index.html">Dining<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
										<div className="navSection relative mobileOnly" data-scroll>
												
						<div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Miscellaneous </span></div>
						<div className="navSectionItems">
													<a className="navItem urlManager block top_low has_transition_1500 d0   " href="press-area/index.html" >Press<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>IN THE PRESS</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d50   " href="hotel-policies/index.html" >Hotel Policies<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d100   " href="travel-safe/index.html" >Travel Safe<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d150   " href="faq/index.html" >Faq<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem block top_low has_transition_1500 d200   " href="#" target="_blank">Leaders club<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250 margin  " href="contacts/index.html" >Contacts<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>IN TOUCH</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300 margin no_default credits" href="#" >Credits<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d350 no_default thanks " href="#" >Special Thanks<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d400   " href="privacy-policy/index.html" >Privacy Policy<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
				</div>
			</div>
		</div>
		<div id="navBottom">
			<div className="socials">
						<a className="block fb top_low has_transition_1500 d300" target="_blank"  href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
						<a className="block ig top_low has_transition_1500 d400" target="_blank" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
			</div>
			<div className="langsContainer" >
				<ul className="langs cWhite">
					<li className="lang-item lang-item-2 lang-item-en current-lang lang-item-first"><a lang="en-US" hreflang="en-US" href="index.html">English</a></li>
	<li className="lang-item lang-item-7 lang-item-it"><a lang="it-IT" hreflang="it-IT" href="it/index.html">Italiano</a></li>
	<li className="lang-item lang-item-12 lang-item-de"><a lang="de-DE" hreflang="de-DE" href="de/index.html">Deutsch</a></li>
	<li className="lang-item lang-item-17 lang-item-fr"><a lang="fr-FR" hreflang="fr-FR" href="fr/index.html">Français</a></li>
				</ul>
			</div>
		</div>	
	</div>
	
</nav>
  )
}

export default Menu