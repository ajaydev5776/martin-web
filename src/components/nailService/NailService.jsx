import React from 'react'
import nail from './../../Assets/images/services/comman1.png'

const NailService = () => {
  return (
    <section id="detailComposition" className="infoBlock relative doubleMargin" data-scroll-section>
	<div className="mainBackground bAlyssum"></div>
	<div className="mainContainer">
		<div className="blockText ruinart">
			<div className="text tech smaller">
				<p>The Highest-Quality Nail Services</p>
			</div>
		</div>
		<div className="outerBlock bWhite cnd">
			<div className="outerBorders">
				<div className="top bTortora"></div>
				<div className="right bTortora"></div>
				<div className="bottom bTortora"></div>
				<div className="left bTortora"></div>
			</div>
			<div className="outerContent">
				<a href="javascript:;" className="outerRow _1" target="_blank">
					<div className="outerPic"><img alt="CND" src={nail} className="full_width" /></div>
				</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default NailService