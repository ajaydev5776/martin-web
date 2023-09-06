import React from 'react'
import heroImg2 from './../../Assets/images/hero2.jpg'

const AfterScroll = () => {
  return (
    <>
    <section id="hPay" data-scroll-section>
   <div id="hPayTarget" data-scroll data-scroll-id="hPayTarget"></div>
   <div id="hPayLayer" className="no_overflow">
       <div id="payLook" className="no_overflow cAlyssum" data-scroll data-scroll-repeat>
         <span className="inline_block has_transition_2000 top_hidden">L</span>
         <span className="inline_block has_transition_2000 top_hidden d100">O</span>
         <span className="inline_block has_transition_2000 top_hidden d200">O</span>
         <span className="inline_block has_transition_2000 top_hidden d300">K</span>
         	<div id="payLimits" className="no_overflow has_transition_3000 cArgilla" data-scroll data-scroll-repeat >
	         <span className="inline_block has_transition_3000 top_hidden d400">BEYOND</span>
	         <span className="inline_block has_transition_3000 top_hidden d500">LIMITS.</span>
	       </div>
       </div>


         <div id="hStrip" className="no_overflow relative">
           <img id="hImgStrip" src={heroImg2} alt='hero' className="fit" data-scroll data-scroll-speed="0.5 "/>
         </div>
       <div id="payFind" className="no_overflow cAlyssum" data-scroll data-scroll-repeat><span className="block has_transition_2000 top_hidden">FIND</span></div>
       <div id="payPerfection" className="cArgilla" data-scroll data-scroll-repeat>
         <span className="top_translated has_transition_2000 inline_block">TRUE</span>
         <span className="top_translated has_transition_2000 d150 inline_block">PERFECTION.</span>
       </div>
     </div>
</section>
    </>
  )
}

export default AfterScroll