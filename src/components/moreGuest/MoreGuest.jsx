import React from 'react'
import guest1 from './../../Assets/images/services/guest1.jpg'
import guest2 from './../../Assets/images/services/guest2.jpg'
import guest3 from './../../Assets/images/services/guest3.jpg'
import guest4 from './../../Assets/images/services/guest4.jpg'
import guest5 from './../../Assets/images/services/guest5.jpg'


const MoreGuest = () => {
  return (
    <aside id="others" className="doubleMargin" data-scroll-section style={{marginBottom: '120px'}}>
	<div className="layerUpdate" data-scroll data-scroll-call="layerUpdate"></div>
	<div id="otherTarget" className="mobileHidden"></div>
	<div id="otherSticky" data-scroll data-scroll-class="sticky" data-scroll-id="otherSticky" data-scroll-sticky data-scroll-target="#otherTarget">
		<div className="mainContainer">
      <div id="otherItems">
          <a href="javascript:;" className="block otherItem has_transition_3000 relative no_overflow top_double urlManager" data-scroll data-action="navigation" data-icon="arrow">
            <div className="otherItemPic relative"><img alt="" src={guest1} className="full_width" /></div>
            <div className="listItemTitle cMarrone">Pool</div>
            <div className="listItemSubtitle cFango">
            <p>sun-soaked serenity</p>
            </div>
          </a>
                    
          <a href="javascript:;" className="block margin otherItem has_transition_3000 relative no_overflow top_double urlManager" data-scroll data-action="navigation" data-icon="arrow">
            <div className="otherItemPic relative" ><img alt="" src={guest2} className="full_width" /></div>
            <div className="listItemTitle cMarrone">Beach</div>
            <div className="listItemSubtitle cFango">
            <p>seaside splendor</p>
            </div>
          </a>
                    
          <a href="javascript:;" className="block margin otherItem has_transition_3000 relative no_overflow top_double urlManager" data-scroll data-action="navigation" data-icon="arrow">
            <div className="otherItemPic relative"><img alt="" src={guest3} className="full_width" /></div>
            <div className="listItemTitle cMarrone">The Grounds</div>
            <div className="listItemSubtitle cFango">
            <p>from the thoughtfully planted to the wild and untamed.</p>
            </div>
          </a>
                    
          <a href="javascript:;" className="block margin otherItem has_transition_3000 relative no_overflow top_double urlManager" data-scroll data-action="navigation" data-icon="arrow">
            <div className="otherItemPic relative"><img alt="" src={guest4} className="full_width" /></div>
            <div className="listItemTitle cMarrone">Our Boat</div>
            <div className="listItemSubtitle cFango">
            <p>sail the amalfi coast</p>
            </div>
          </a>
                    
          <a href="javascript:;" className="block margin otherItem has_transition_3000 relative no_overflow top_double urlManager" data-scroll data-action="navigation" data-icon="arrow">
            <div className="otherItemPic relative"><img alt="" src={guest5} className="full_width" /></div>
            <div className="listItemTitle cMarrone">Concierge</div>
            <div className="listItemSubtitle cFango">
            <p>let us look after you</p>
            </div>
          </a>
      </div>
			<div id="otherFixed">
				<div className="blockTitle">more<br /> Guest Services</div>
			</div>
		</div>
	</div>
</aside>
  )
}

export default MoreGuest