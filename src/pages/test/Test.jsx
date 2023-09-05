import React from 'react'
import heroImg from './../../Assets/images/top.jpg'
import heroImg2 from './../../Assets/images/hero2.jpg'
import ethos1 from './../../Assets/images/ethosSmall.jpg'
import ethos2 from './../../Assets/images/ethosBig.jpg'
import countBg from './../../Assets/images/countBg.jpg'
import slide1 from './../../Assets/images/slide1.jpg'
import slide2 from './../../Assets/images/slide2.jpg'
import slide3 from './../../Assets/images/slide3.jpg'
import slide4 from './../../Assets/images/slide4.jpg'
import slide5 from './../../Assets/images/slide5.jpg'
import slide6 from './../../Assets/images/slide6.jpg'
import acc1 from './../../Assets/images/acc1.jpg'
import acc2 from './../../Assets/images/acc2.jpg'
import acc3 from './../../Assets/images/acc3.jpg'
import acc4 from './../../Assets/images/acc4.jpg'
import dining from './../../Assets/images/dining.jpg'
import Footer from '../../myComponents/footer/Footer'
import MenuVideo from './../../Assets/video/home.mp4'




const Test = () => {
  return (
    <>
    <header className="has_transition_400">
		<div id="leftHeader">
			<div id="mainMenuController" className="menuController relative" data-disabled="true"><div className="menuLines">
					<div className="line _1 no_width has_transition_1000_inout"></div>
					<div className="line _2 no_width has_transition_1000_inout"></div>
					<div className="line _3 no_width has_transition_1000_inout"></div>
				</div>
			</div>
			<a id="mainLogo" className="dark urlManager hidden has_transition_1500" href="index.html" data-disabled="true">
				 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854.56 135.26">
					<defs>
						<g id="caLogo">
							<path  d="M764.58,39.55c1.25-3.23.95-8.12.87-9.81S764.23,28,762.08,28a36.61,36.61,0,0,0-6.91,1.52c-2.16.54-4.25,1.19-5.45,1.43-2.72.58-5.69,2.66-4.72,4.42s4.38-.47,8.09-1.44c.73-.24,1.44-.4,2.08-.56,2.75-.73,5-1.21,5-1.21a28.23,28.23,0,0,0-.69,6.19c.24,2.26,3.76,4.5,5.13,1.2"/>
							<path  d="M250,61.7c-4.73,2.72-8,4.9-8-3.61s3.52-18.31-4.58-19.42c-4.25-.58-9.22.71-14,2.95a53.89,53.89,0,0,0-12.19,8.19c-7.09,6.39-24.07,13.06-35.79,9.42a1.49,1.49,0,0,1-.89-2c3.7-9.37,7-14.66,7-17.36s-5.3-3.19-8.9-1.9a110.33,110.33,0,0,0-9.8,5.53c-4.76,2.9-10.9,7.6-17.71,12.22-12.59,8.53-20.31,10.74-23.48,7.37-.82-.87-1.44-1.85-.5-2.6,11.63-9.27,17.32-16.25,11.9-20.44-4.72-3.63-17.11-3.13-25.93-.31-.74.24-1.44.5-2.11.77a1.44,1.44,0,0,1-2-1.29c-.33-3.6-7.33-.87-10.29.91C89.35,42.24,63.68,54.37,53,57.64S21,67.77,15,63,26.5,42.58,32.2,38s25-17.68,40.38-22.64S95,9.42,97.06,12.05s-2.9,9.65-10.51,15.83S71.1,38.56,63.73,39.51c-8.47,1.09,2-6.3,11.8-11.2,4.79-2.38,2.92-9.07-6.48-3.11,0,0-17.82,8.62-17.5,17.38.29,8,23,2.26,34.78-6.49A54.08,54.08,0,0,0,100,22.66C108.71,10,102.27,7.3,97.78,6c-8-2.28-29.69-.41-58.22,18.08A139.13,139.13,0,0,0,9.86,50.21c-2.2,2.66-3.32,7.11-3.52,9.3v1.68c.25,2.66,1.7,4.82,4.18,6.9,12.61,10.69,51.2-7.74,67.38-14.32a1.49,1.49,0,0,1,2,1.52c-.59,9.83,5.77,11.32,11.15,12.13a33.6,33.6,0,0,0,16-2.54,22.6,22.6,0,0,1,4.26-1,1.47,1.47,0,0,1,1.65.7c9,16.85,29.94-.74,35.55-4.32,3.85-2.46,9.61-6.89,14.26-9.62l2-1.21A1.5,1.5,0,0,1,167,51.31l-.71,1.76a1.49,1.49,0,0,1-1.5.94,15.15,15.15,0,0,0-2,0c-3.54.18-8.76,1.39-9,7.71-.31,8.76,3.45,11.32,9,9.47a8.75,8.75,0,0,0,1.45-.65c4.24-1.86,5.89-4.15,6.52-5.48a1.48,1.48,0,0,1,1.67-.78,61.6,61.6,0,0,0,29.64-1.11A1.49,1.49,0,0,1,204,64.41c1,7.66,10.63,7.19,19.41,3.4a37.25,37.25,0,0,0,8.18-4.75,1.5,1.5,0,0,1,2.29.63,8.54,8.54,0,0,0,5.35,4.75c7.06,2.48,15.58-1.84,18.22-4.82a3.86,3.86,0,0,0,1.13-2v-.57c-.4-1.83-5-1.43-8.59.65m-142.9-2.11c-7.45,2.48-15.58,3.76-18.55.55-3.37-3.62,3.44-10.52,6.17-13a1.49,1.49,0,0,1,2,0c3.41,3,6.12,1.39,10.39-.61,1.13-.48,2.34-1,3.63-1.43,7-2.48,14.93-3.61,15.72-1s-2.24,8.08-10.59,12a70.25,70.25,0,0,1-8.76,3.45m57,5.26a12.93,12.93,0,0,1-2.46,1.48,1.49,1.49,0,0,1-2.17-1.25c-.09-1.67,0-3.84.68-4.69,1.95-2.26,3.69,0,4.38.53a3.74,3.74,0,0,1,1,1.32s.42,1.09-1.46,2.61m64.82-10.07a45.24,45.24,0,0,1-5.47,6.37,16.24,16.24,0,0,1-6.24,3.68c-5,1.27-5.16-.23-4-2.65a32.46,32.46,0,0,1,7.54-10.83s1.15-1.05,2.73-2.33c2.26-1.85,5.55-4.27,7.89-4.82,1.51-1.37,3.61-1,2.64,1.13a44.32,44.32,0,0,1-5.06,9.45"/>
							<path  d="M846.38,49.39c2.89-3.76,3.11-9.87-4.66-9.31-3.61.25-9.46,2.89-15.4,5.78-7.08,3.61-12.53,6.53-17.43,8.77-5.57,2.54-17.11,9.21-22.64,7.21,4.4-4.34,12-7.55,13.64-9.24s.64-4.4-3.11-4.4-15.1,7-20.34,9.3-15.72,3.79-15.72,3.79c1.21-4.11,5.22-6.43,7-8.45s-2-3.76-6.1-2.32c-1.45.56-3.77,1.77-6.43,3.12-4.48,2.33-9.93,5.33-14.11,6.75-6.68,2.32-24.11,7-24.4,3.22s7.53-8.43,13.34-11,7.29-6.08,2.61-6.08-13.63,5.21-18.85,6.9l-5.88,2.08c-2.4.86-5.22,1.85-8.17,2.81l.1-.17C694.16,60,688,61.73,683,62.26c-6.37.75-9.1.47-9.34-1.19-.07-1,.67-2.45,2-4.44a16.84,16.84,0,0,1,1.59-1.91l-.06,0c4.33-4.25,12.28-6.23,20.32-9.79,2.48-1.19,6.26-3,10.33-5.11,10.54-5.31,23.53-12.61,26.5-16.39,4-5.22,2.26-8.43-5.27-8.43-4.82,0-13.42,3.37-21.23,7.08a125.8,125.8,0,0,0-11.2,6C688.45,33,672.26,48.7,672.26,48.7c-6.45,2.14-12.52,4.17-18.12,6a1.33,1.33,0,0,0-.14.19c-8,2.55-14.91,4.63-20.36,5.85-3.92.81-8.48,1.94-12.92,2.66-6,.87-11.48,1-14.3-1.53a148.8,148.8,0,0,0,14.3-7.31,189.2,189.2,0,0,0,16.13-10.11c5.24-3.77,4.32-7.79-4-8.66-3.45-.42-7.85,1.18-12.11,3.44a79.89,79.89,0,0,0-14.3,9.64,89.46,89.46,0,0,0-9,9.55c-12.2,1.11-21.51.58-24.72-4.34,4.64-3.53,11.61-7,14.29-9s-5.29-5.85-9.87,0c-1.21-9.29-12.21-8.18-20.32-5.29-3.37,1.31-5.95,2.58-8.11,3.53-3.05,1.37-5.27,2.1-7.85,1-4.34-2.08-12.21,9.47-20.34,12-7.39,2.42-24.38,7.71-32.43,6.82a6.25,6.25,0,0,1-2.08-.4c-6.66-2.32-8.74-5.21-2.87-10.42a41.5,41.5,0,0,0,4.95-5.3c2-2.65,2.5-4.65,0-4.91h-1.2c-5.85.65-10.41,9-17.41,11.65s-23.51,11-29.28,11-11.1-2.58-4.36-9,11.88-9.88,13.56-12.21-.81-4.88-6.9-2-18.37,6.9-30.58,11.22-22.3,8.11-29.28,8.11-3.89-11.25-.42-13.83S395.53,37.17,401.08,34s5.77-2.66,10.75-2,8.11-7-5.22-6.11c11.24-11.08,15.88-21.19,1.71-19.74C396.09,7.3,386.48,9,365,18.71c-3.53,1.51-7.38,3.37-11.56,5.38-13.88,6.66-29.3,17.42-37.4,27-4.11,4.81-6.76,8.66-7.24,11.79V64.7c.42,2.08,2.1,3.69,5.45,4.9,8.78,3.21,24.66-2.32,36.63-8.66,6.27-3.39,11-6,14.12-7.71,2.73-1.61,4.1-2.5,4.1-2.5S366.55,70.67,384,68.67s43.07-14.62,43.07-14.62-9.22,11.56,2,15.09,26.43-3.53,42.7-10.75c-.22,6.19,8.19,9.16,16.29,9.4a32.87,32.87,0,0,0,9.24-1c9-2.64,22.64-5.22,22.64-5.22,3.47,9.24,23.47,5.79,23.47,5.79-5.23,2-18.32,13-18.32,13-15.91,4.16-26.32,7.85-37,13.63a149,149,0,0,0-13.38,8.19c-16.53,11-19.18,17.09-20.63,20.56s-.26,8.42,8.74,7c5.37-.87,15.9-6.34,25.27-12a149,149,0,0,0,15.45-10.6c8.42-7,28.32-22.64,36.11-29.3,2.22-1.87,5.43-4.42,9.06-7.08,9-6.74,20-14.45,20-14.45,6.31,5.31,14,9.89,29.7,7,3.84,4.58,13.5,5.13,22.32,4.4a87.91,87.91,0,0,0,13.56-2.08c8.63-2,30.51-8.61,30.73-8.68-.07.61-.11,1.2-.12,1.76-.21,8.57,6.5,10.08,15.47,9.26,9.4-.9,26.8-6.19,27.52-6.35-.94,2.64-.94,4.74,0,6.35,1.86,2.89,6.91,3.68,14.86,2,12.21-2.56,27.87-8.11,27.87-8.11a8.12,8.12,0,0,0,4.56,3.77c5.55,2.26,14.24.81,22.08-2,6.43,7,24.07.23,24.07.23,5.63,5.14,20.34.5,25-1.19l1.42-.49a16.62,16.62,0,0,0-1.42,4.74v1.68c.39,3.69,3.27,5.69,6.4,6.34,4.68.9,10.68-.89,7.55-2.89s-7.85-1.45-5.53-6.42S843.4,53.18,846.38,49.39ZM707.88,27.25c6.91-3.29,14-5.61,17.6-5.61-2,2.5-9.71,7.71-17.6,12.29-7.12,4.16-14.43,7.77-17.47,8.27C691,37.38,699.31,31.51,707.88,27.25ZM620.72,44.66c4.66-2.32,9.31-3.69,9.41-3,.22,2.26-4.6,5.24-9.41,7.55a101,101,0,0,1-9.34,4C611.82,50.11,616.3,46.92,620.72,44.66ZM370.16,41.91c-1.27.73-3.05,1.68-5.13,2.81-12.53,6.58-36.52,18.46-40.86,18.46-5.05,0-3.45-4.74,1.27-10.35s25.61-19.45,37.35-25.53c.71-.4,1.42-.72,2.24-1.13,18-8.74,37.58-14.85,41.35-15.09,4-.33,2.95,1.05-.8,4.74S379.24,36.85,370.16,41.91ZM488.08,108.8c-2.14,1.53-4,2.9-5.55,4.1-6.4,5-16.69,11.32-19.18,10.51s.59-4.16,5.15-8.11c3.89-3.37,12.21-10.9,19.58-15.24a38.47,38.47,0,0,1,4-2.1c7.93-3.53,21.33-9.71,21.57-8.43C504.4,97.15,494.9,103.83,488.08,108.8ZM548.7,59.26a25.77,25.77,0,0,1-7.23,2c-8,.63-11.54,1-11.24-1.29s10.62-7.06,12.23-8.35c1.35-1.13,2.22-.33,6.24-1.54a20.15,20.15,0,0,1,2.1-.72c5.79-2.24,14.12-7.71,16.38-6.74C563.15,50.11,555.62,56.21,548.7,59.26ZM828.23,57c-3.62,1.67-8.41,3.69-11.37,4.13A1.41,1.41,0,0,1,815.23,60c-.22-1.32,2.19-4.39,10-8.6A65.59,65.59,0,0,1,835,47.15c3.86-1.6,5.13-1.6,2.89,1.93A23.77,23.77,0,0,1,828.23,57Z"/>
						</g>
					</defs>
					<use className="fillColor quickColor" x="0" y="0" xlinkHref="#caLogo" />
					
				</svg>
			</a>
			<div className="langsContainer has_transition_1500 mobileHidden">
				<ul className="langs cWhite list-unstyled">
						<li className="lang-item lang-item-2 lang-item-en current-lang lang-item-first"><a lang="en-US" hreflang="en-US" href="index.html">English</a></li>
	<li className="lang-item lang-item-7 lang-item-it"><a lang="it-IT" hreflang="it-IT" href="it/index.html">Italiano</a></li>
	{/* <li className="lang-item lang-item-12 lang-item-de"><a lang="de-DE" hreflang="de-DE" href="de/index.html">Deutsch</a></li> */}
	{/* <li className="lang-item lang-item-17 lang-item-fr"><a lang="fr-FR" hreflang="fr-FR" href="fr/index.html">Français</a></li> */}
				</ul>
			</div>
		</div>
		<div id="rightHeader">
			<a className="fb has_transition_1500 headerButton" target="_blank"  href="https://www.facebook.com/CasaAngelinaHotel" data-disabled="true">
				<svg className="circlePath mobileHidden has_transition_1000 d400" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000 transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
				<svg className="icon has_transition_1000 d500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path className="fillColor transition_all has_transition_1000" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
			</a>
			<a className="ig has_transition_1500 headerButton d50" target="_blank" href="http://instagram.com/casaangelinalifestyle" data-disabled="true">
				<svg className="circlePath mobileHidden has_transition_1000 d200"><circle className="has_transition_1000 transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
				<svg xmlns="http://www.w3.org/2000/svg" className="icon has_transition_1000 d300" width="18" height="17" viewBox="0 0 24 24"><path className="fillColor transition_all has_transition_1000" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
			</a>
			
			<a href="tel:+390898131333" target="_blank" className="mobile has_transition_1500 headerButton d100" data-disabled="true">
				<svg className="icon has_transition_1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.542 24.958">
  					<path className="fillColor transition_all has_transition_1000"  d="M7.12,7.085,7.8,6.312A3,3,0,0,0,8.6,4.026a3.2,3.2,0,0,0-1.031-2.19L6.412.773A3.31xmlns:xlink,3.31,0,0,0,4.286,0,3.3,3.3,0,0,0,1.935,1.031L1.259,1.8A2.816,2.816,0,0,0,1,2.125l-.032.032A3.866,3.866,0,0,0,.1,5.732,17.684,17.684,0,0,0,15.88,19.967a4.334,4.334,0,0,0,2.705-.58,3.6,3.6,0,0,0,.773-.612L20.034,18a3.193,3.193,0,0,0-.225-4.476L18.65,12.463a3.171,3.171,0,0,0-2.125-.805,3.242,3.242,0,0,0-2.351,1.031l-.676.773a3.027,3.027,0,0,0-.644,1.127l-.064.193-.193-.064A13.449,13.449,0,0,1,5.542,8.244l-.064-.193L5.7,7.987A3.055,3.055,0,0,0,7.12,7.085Z" transform="translate(5.505 -0.001) rotate(16)" />
  				</svg>
  				
			</a>
			<a href="mailto:info@casangelina.com" target="_blank" className="email has_transition_1500 headerButton d150" data-disabled="true">
				<svg className="icon has_transition_1000 d100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
				    <path className="fillColor transition_all has_transition_1000" d="M15.203,17.138H15.11c-0.718,2.019-2.022,3.028-3.911,3.028c-1.417,0-2.56-0.529-3.427-1.586 c-0.868-1.057-1.302-2.521-1.302-4.391c0-2.42,0.601-4.389,1.802-5.906s2.649-2.275,4.343-2.275c1.531,0,2.49,0.618,2.88,1.855 h0.062l0.153-1.569h3.466c-0.462,4.502-0.694,7.446-0.694,8.83c0,1.48,0.39,2.219,1.171,2.219c0.822,0,1.5-0.56,2.033-1.68 c0.534-1.12,0.802-2.584,0.802-4.391c0-2.473-0.766-4.5-2.295-6.08c-1.531-1.58-3.666-2.37-6.408-2.37 c-2.937,0-5.379,1.054-7.324,3.163c-1.946,2.108-2.919,4.68-2.919,7.713c0,2.938,0.86,5.253,2.58,6.944 c1.72,1.691,4.094,2.537,7.124,2.537c2.311,0,4.426-0.454,6.346-1.363v3.028C17.836,25.614,15.577,26,12.815,26 c-3.79,0-6.873-1.118-9.25-3.353C1.188,20.412,0,17.408,0,13.634c0-3.847,1.268-7.081,3.805-9.702C6.34,1.311,9.606,0,13.6,0 c3.697,0,6.688,1.017,8.973,3.052S26,7.768,26,11.098c0,2.738-0.698,4.933-2.095,6.588c-1.396,1.654-3.127,2.481-5.19,2.481 c-1.016,0-1.844-0.28-2.48-0.84C15.597,18.766,15.253,18.036,15.203,17.138z M13.154,8.767c-0.924,0-1.676,0.542-2.256,1.625 c-0.581,1.084-0.871,2.338-0.871,3.765c0,1.015,0.198,1.805,0.593,2.371c0.395,0.566,0.905,0.848,1.532,0.848 c0.966,0,1.725-0.533,2.28-1.601c0.554-1.067,0.831-2.494,0.831-4.28c0-0.846-0.193-1.512-0.578-1.998S13.791,8.767,13.154,8.767z"/>
				</svg>
				<svg className="circlePath mobileHidden has_transition_1000" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000 transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
					
			</a>
			<div id="bookNow" className="oButton whiteArrow has_transition_1500 top_ultralow" data-disabled="true">
				<svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
				  <defs>
				  <g id="outerShape">
            <path className="fill has_transition_1000 transition_all" fill="#FFFFFF" d="M0,1l36.8,0v0c9.9,0,17.9,8,17.9,17.9c0,9.9-8,17.9-17.9,17.9v0H0v0V1z"/>
            <path stroke-width="1" d="M36.85,0L36.85,0L0,0v0v1V0.97h36.85V1c9.88,0,17.93,8.04,17.93,17.93c0,9.88-8.04,17.92-17.93,17.92v0.03H0v-0.03v1v0
              h36.85v0c10.44,0,18.93-8.49,18.93-18.92C55.78,8.49,47.29,0,36.85,0z"/>
					</g>
					</defs>
					<use x="0" y="0" xlinkHref="#outerShape" />

				</svg>
				<div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block cBrown d200 transition_all">book now</span></div></div>
				<div className="oSymbol">
					<svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enablebackground:'new 0 0 14.37 14.37'}} xmlSpace="preserve">
						<defs>
							<path id="buttonArrow" d="M14.29,0.62c-0.1-0.24-0.3-0.44-0.54-0.54C13.63,0.03,13.5,0,13.37,0H2.95c-0.55,0-1,0.45-1,1s0.45,1,1,1h8.01L0.29,12.66
							c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29L12.37,3.41v8.01c0,0.55,0.45,1,1,1s1-0.45,1-1V1
							C14.37,0.87,14.34,0.74,14.29,0.62z"/>
						</defs>
						<use x="0" y="0" xlinkHref="#buttonArrow" />
					</svg>
				</div>
			</div>
			
									
		</div>
	</header>
	<div id="brownies" className="has_transition_1500" data-disabled="true" >
		<div id="cookieBrownie" className="closed brownie relative has_transition_800">
			<div className="brownieBack"></div>
			<div className="brownieContentLayer">
				<div className="brownieIcoContainer hidden has_transition_1500">
					<div className="brownieIco has_transition_800">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.02 16.5" style={{enableBackground:'new 0 0 35.02 16.5'}} xmlSpace="preserve">
							<path className="fillColor has_transition_1000 transition_all" d="M22.76,12.71c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.03,0.02,0.04,0.03
								c0.02,0.02,0.04,0.03,0.06,0.05c0.03,0.02,0.06,0.03,0.09,0.05c0.02,0.01,0.04,0.02,0.06,0.03c0.03,0.01,0.07,0.02,0.11,0.03
								c0.02,0,0.03,0.01,0.05,0.01C23.29,12.99,23.35,13,23.4,13c0,0,0,0,0,0c0,0,0,0,0,0c0.05,0,0.11-0.01,0.16-0.02
								c0.02,0,0.03-0.01,0.05-0.01c0.04-0.01,0.07-0.02,0.11-0.03c0.02-0.01,0.04-0.02,0.06-0.03c0.03-0.02,0.06-0.03,0.09-0.05
								c0.02-0.01,0.04-0.03,0.06-0.04c0.01-0.01,0.03-0.02,0.04-0.03c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.02-0.02,0.03-0.03
								L34.3,1.43c0.32-0.35,0.29-0.89-0.06-1.21c-0.35-0.32-0.89-0.29-1.21,0.06l-9.62,10.58L15.7,2.21c-0.31-0.35-0.86-0.38-1.21-0.07
								c-0.35,0.31-0.38,0.86-0.07,1.21L22.76,12.71z"/>
							<path className="svgLine fillColor has_transition_1000 transition_all" d="M34.52,15.5H0.5C0.22,15.5,0,15.72,0,16s0.22,0.5,0.5,0.5h34.02c0.28,0,0.5-0.22,0.5-0.5
								S34.8,15.5,34.52,15.5z"/>
						</svg>
					</div>
				</div>
				<div className="brownieContent has_transition_800">
					<div className="brownieTitle cWhite"><span>Cookies</span></div>
					<div className="brownieText  cWhite">
						<p>www.casangelina.com uses its own and third-party technical and profiling cookies for its functionality and to send you advertising and information in line with your preferences.						<br />
						To consent to the use of cookies click on the accept button.							
							<br />
							If you want to know more, read our extended privacy policy.							
						</p>
					</div>
					<div className="cookiePrefs">
						<div className="brownieText cWhite">Please select cookies for which you want to express consent:</div>
						<ul>
							<li><input type="checkbox" id="gdprEssential" value="essential" checked="checked" disabled="disabled"/><label for="gdprEssential" title="This type of cookie allows the correct operation of certain sections of the Website. These cookies, always sent from our domain, are necessary to view the site correctly and in relation to the technical services offered, will therefore always be used and sent, unless the user does not change the settings in your browser (thus disrupting the display of pages of the site).">Essentials</label></li>
							<li><input type="checkbox" id="gdprAnalytics" value="analytics"/><label for="gdprAnalytics" title="Cookies in this category are used to collect information on the use of the site. www.casangelina.com will use this information in respect of anonymous statistical analysis in order to improve the use of the Site and to make the content more interesting and relevant to the wishes of users.">Analytics</label></li>
							<li><input type="checkbox" id="gdprMarketing" value="marketing"/><label for="gdprMarketing" title="These cookies are necessary to create user profiles in order to send advertising messages in line with the preferences expressed by the user within the pages of the Site.">Profiling</label></li></ul>
					</div>
					<div className="brownieButtons show">
						<div className="brownieButton accept cWhite">ACCEPT COOKIES<svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></div>
						<div className="brownieButton customize  cWhite">CUSTOMIZE PREFERENCES<svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></div>
					</div>
				</div>
			</div>
		</div>
			<div id="newsLetterBrownie" className="closed brownie relative has_transition_800 ">
			<div className="brownieBack has_transition_800 transition_all"></div>
			<div className="brownieContentLayer">
				<div className="brownieIcoContainer hidden has_transition_1500" >
				<div className="brownieIco has_transition_800">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21.01 15" style={{enableBackground:"new 0 0 21.01 15"}} xmlSpace="preserve">
					<path className="fillColor has_transition_1000 transition_all" d="M20.8,4.89c-0.29,0-0.53,0.24-0.53,0.53v8.51H1.06V1.81l9.2,9.2c0.1,0.1,0.22,0.14,0.3,0.15
					c0.2,0.04,0.37-0.02,0.5-0.14L21.24,0.82c0.09-0.09,0.09-0.26,0.09-0.29c0-0.04,0-0.07-0.01-0.11l-0.03-0.1c0,0,0-0.01,0-0.01
					l-0.05-0.09l-0.02-0.02c-0.07-0.08-0.15-0.15-0.26-0.18l-0.01-0.01C20.87,0,20.83,0,20.8,0h-0.54H3.16H0.53
					C0.49,0,0.46,0,0.43,0.01l-0.1,0.03c0,0,0,0-0.01,0L0.24,0.09C0.22,0.1,0.22,0.11,0.21,0.12C0.17,0.15,0.15,0.17,0.12,0.2
					C0.11,0.22,0.1,0.22,0.09,0.24L0.05,0.32c0,0,0,0.01-0.01,0.01l0,0L0.01,0.43C0,0.46,0,0.5,0,0.53l0,0c0,0,0,0,0,0V0.7c0,0,0,0,0,0
					l0,13.76C0,14.76,0.24,15,0.53,15H20.8c0.29,0,0.53-0.24,0.53-0.53V5.43C21.33,5.13,21.09,4.89,20.8,4.89z M19.52,1.06l-8.85,8.85
					L1.82,1.06H19.52z"/>
					<path className="fillColor has_transition_1000 transition_all" d="M97.95,11.96c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.03,0.02,0.04,0.03
						c0.02,0.02,0.04,0.03,0.06,0.05c0.03,0.02,0.06,0.03,0.09,0.05c0.02,0.01,0.04,0.02,0.06,0.03c0.03,0.01,0.07,0.02,0.11,0.03
						c0.02,0,0.03,0.01,0.05,0.01c0.05,0.01,0.11,0.02,0.17,0.02c0,0,0,0,0,0c0,0,0,0,0,0c0.05,0,0.11-0.01,0.16-0.02
						c0.02,0,0.03-0.01,0.05-0.01c0.04-0.01,0.07-0.02,0.11-0.03c0.02-0.01,0.04-0.02,0.06-0.03c0.03-0.02,0.06-0.03,0.09-0.05
						c0.02-0.01,0.04-0.03,0.06-0.04c0.01-0.01,0.03-0.02,0.04-0.03c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.02-0.02,0.03-0.03
						l10.26-11.29c0.32-0.35,0.29-0.89-0.06-1.21c-0.35-0.32-0.89-0.29-1.21,0.06l-9.62,10.58l-7.71-8.66
						c-0.31-0.35-0.86-0.38-1.21-0.07c-0.35,0.31-0.38,0.86-0.07,1.21L97.95,11.96z"/>
					<path className="fillColor has_transition_1000 transition_all" d="M109.7,14.75H75.68c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5h34.02c0.28,0,0.5-0.22,0.5-0.5
						S109.98,14.75,109.7,14.75z"/>
				
					<path className="fillColor has_transition_1000 transition_all" d="M48.26,15.75c0.19,0,0.38-0.07,0.53-0.22l0.8-0.8l3.78-0.82c0.14-0.03,0.27-0.1,0.37-0.2l9.62-9.62
						c0.14-0.14,0.22-0.33,0.22-0.53c0-0.2-0.08-0.39-0.22-0.53l-3.13-3.13c-0.29-0.29-0.76-0.29-1.05,0l-9.62,9.62
						c-0.1,0.1-0.17,0.23-0.2,0.37l-0.82,3.78l-0.8,0.8c-0.29,0.29-0.29,0.76,0,1.05C47.88,15.68,48.07,15.75,48.26,15.75z
						 M50.76,10.43L59.7,1.5l2.07,2.07l-8.93,8.93l-1.3,0.28l0.31-0.31c0.29-0.29,0.29-0.76,0-1.05c-0.29-0.29-0.76-0.29-1.05,0
						l-0.31,0.31L50.76,10.43z"/>
					<path className="fillColor has_transition_1000 transition_all" d="M60.88-0.77l3.16,3.16c0.15,0.15,0.34,0.22,0.53,0.22s0.38-0.07,0.53-0.22c0.29-0.29,0.29-0.76,0-1.05
						L62.46-1.3l0.63-0.63c1.34-1.34,1.96-0.72,2.26-0.42l0.27,0.27c0.59,0.59,0.52,1.29-0.23,2.07c-0.29,0.3-0.28,0.77,0.02,1.05
						c0.14,0.14,0.33,0.21,0.52,0.21c0.2,0,0.39-0.08,0.54-0.23c1.3-1.35,1.38-2.99,0.21-4.16l-0.27-0.27C65.81-4,64.2-5.15,62.04-2.99
						l-1.16,1.16C60.59-1.54,60.59-1.07,60.88-0.77C60.88-0.77,60.88-0.77,60.88-0.77z"/>
					<path className="fillColor has_transition_1000 transition_all" d="M68.69,18.25H34.67c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5h34.02c0.28,0,0.5-0.22,0.5-0.5
						S68.97,18.25,68.69,18.25z"/>
				</svg>
				</div>
				</div>
				<div className="brownieContent has_transition_800">
					<div className="brownieClose">
						<div className="line _1"></div>
						<div className="line _2"></div>
					</div>
					<div className="brownieTitle cWhite"><span>Stay in touch</span></div>
					<div className="brownieText  cWhite">
						<p>Stay connected with Casa Angelina to get the inside scoop on our latest promotions, news and exclusive offers.</p>
					</div>
					<div className="newsletterForm" rel="newsletter" >
							<span className="newsletterFormTitle">E-NEWSLETTER SUBSCRIPTION</span>
							<div className="wpforms-container " id="wpforms-4385">
                {/* <form id="wpforms-form-4385" className="wpforms-validate wpforms-form wpforms-ajax-form" data-formid="4385" method="post" enctype="multipart/form-data" action="https://www.casangelina.com/" data-token="dcf4ccf87c23420152b0645467552e8e">
                  <noscript className="wpforms-error-noscript">Please enable JavaScript in your browser to complete this form.</noscript>
                  <div className="wpforms-field-container">
                    <div id="wpforms-4385-field_2-container" className="wpforms-field wpforms-field-select newsletter_input title wpforms-field-select-style-classic" data-field-id="2">
                      <label className="wpforms-field-label wpforms-label-hide" for="wpforms-4385-field_2">Title <span className="wpforms-required-label">*</span></label>
                      <select id="wpforms-4385-field_2" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][2]" required="required">
                        <option value="Mr."  selected='selected'>Mr.</option>
                        <option value="Mrs." >Mrs.</option>
                        <option value="Ms." >Ms.</option>
                        </select>
                      </div>
                      <div id="wpforms-4385-field_3-container" className="wpforms-field wpforms-field-text newsletter_input" data-field-id="3">
                        <label className="wpforms-field-label wpforms-label-hide" for="wpforms-4385-field_3">Name <span className="wpforms-required-label">*</span></label>
                        <input type="text" id="wpforms-4385-field_3" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][3]" placeholder="name" required/>
                      </div>
                      <div id="wpforms-4385-field_4-container" className="wpforms-field wpforms-field-text newsletter_input" data-field-id="4">
                        <label className="wpforms-field-label wpforms-label-hide" for="wpforms-4385-field_4">Surname <span className="wpforms-required-label">*</span></label>
                        <input type="text" id="wpforms-4385-field_4" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][4]" placeholder="surname" required /></div><div id="wpforms-4385-field_1-container" className="wpforms-field wpforms-field-email newsletter_input full" data-field-id="1"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-4385-field_1">Email <span className="wpforms-required-label">*</span></label>
                        <input type="email" id="wpforms-4385-field_1" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][1]" placeholder="email" required />
												</div><div id="wpforms-4385-field_5-container" className="wpforms-field wpforms-field-select newsletter_input nLangPref full wpforms-field-select-style-classic" data-field-id="5"><label className="wpforms-field-label" for="wpforms-4385-field_5">language preference:</label><select id="wpforms-4385-field_5" className="wpforms-field-medium" name="wpforms[fields][5]"><option value="english"  selected='selected'>english</option><option value="italian" >italian</option></select></div><div id="wpforms-4385-field_10-container" className="wpforms-field wpforms-field-checkbox newsletter_input radio full" data-field-id="10"><label className="wpforms-field-label" for="wpforms-4385-field_10">Please share your interests with us so we can send you customized information.</label><ul id="wpforms-4385-field_10"><li className="choice-1 depth-1"><input type="checkbox" id="wpforms-4385-field_10_1" name="wpforms[fields][10][]" value="ROMANTIC GETAWAYS"  /><label className="wpforms-field-label-inline" for="wpforms-4385-field_10_1">ROMANTIC GETAWAYS</label></li><li className="choice-2 depth-1"><input type="checkbox" id="wpforms-4385-field_10_2" name="wpforms[fields][10][]" value="DINING EXPERIENCES"  /><label className="wpforms-field-label-inline" for="wpforms-4385-field_10_2">DINING EXPERIENCES</label></li><li className="choice-3 depth-1"><input type="checkbox" id="wpforms-4385-field_10_3" name="wpforms[fields][10][]" value="SPECIAL CELEBRATIONS"  /><label className="wpforms-field-label-inline" for="wpforms-4385-field_10_3">SPECIAL CELEBRATIONS</label></li><li className="choice-4 depth-1"><input type="checkbox" id="wpforms-4385-field_10_4" name="wpforms[fields][10][]" value="LOCAL ACTIVITIES"  /><label className="wpforms-field-label-inline" for="wpforms-4385-field_10_4">LOCAL ACTIVITIES</label></li><li className="choice-5 depth-1"><input type="checkbox" id="wpforms-4385-field_10_5" name="wpforms[fields][10][]" value="WELL-BEING"  /><label className="wpforms-field-label-inline" for="wpforms-4385-field_10_5">WELL-BEING</label></li></ul></div><div id="wpforms-4385-field_9-container" className="wpforms-field wpforms-field-gdpr-checkbox newsletter_input privacy full radio" data-field-id="9"><label className="wpforms-field-label" for="wpforms-4385-field_9">privacy policy <span className="wpforms-required-label">*</span></label><ul id="wpforms-4385-field_9" className="wpforms-field-required"><li className="choice-1"><input type="checkbox" id="wpforms-4385-field_9_1" name="wpforms[fields][9][]" value="I agree to the use of my personal data for the purpose stated above" required /><label className="wpforms-field-label-inline" for="wpforms-4385-field_9_1">I agree to the use of my personal data for the purpose stated above</label></li></ul><div className="wpforms-field-description">The personal data provided by filling this form will be processed, mainly in a digital manner, to provide feedback on the information requested. The submission of data is free but leaving mandatory fields empty will inhibits sending the request. The other fields are optional and allow the company to contact you more quickly, to provide a more accurate answer and to elaborate anonymous statistics about their customers and/or potential customers. The data provided will not be disclosed to third parties or spread in any way. Regarding the processing of data, pursuant to art. 7 of Legislative Decree no. 196 of Italian Costitution, you have the right to obtain confirmation of the existence of personal data concerning you, their origin and the logic on which the treatment is based; to obtain cancellation, transformation into anonymous form or block if processed in violation of law; to get update, rectification or integration. To exercise your rights, please contact DIKETO CASANGELINA SRL, Via G Porzio Is E/7, 80143 Napoli.</div></div><div id="wpforms-4385-field_11-container" className="wpforms-field wpforms-field-hidden" data-field-id="11"><input type="hidden" id="wpforms-4385-field_11" name="wpforms[fields][11]"></div></div><div className="wpforms-submit-container" /><input type="hidden" name="wpforms[id]" value="4385"><input type="hidden" name="wpforms[author]" value="1"/><input type="hidden" name="wpforms[post_id]" value="14"/><button type="submit" name="wpforms[submit]" className="wpforms-submit " id="wpforms-submit-4385" value="wpforms-submit" aria-live="assertive" data-alt-text="Subscribing..." data-submit-text="Subscribe!">Subscribe!</button><img src="wp-content/plugins/wpforms/assets/images/submit-spin.svg" className="wpforms-submit-spinner" style="display: none;" width="26" height="26" alt=""></div></form></div>				 */}
							
							
					</div>
				</div>
			</div>
		</div>
		<div id="covidBrownie" className="closed brownie has_transition_800" style={{display:'none'}}> 
			<div className="brownieBack has_transition_800 transition_all"></div>
			<div className="brownieContentLayer">
				<div className="brownieIcoContainer hidden has_transition_1500">
				<div className="brownieIco has_transition_800">
				
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 306.976 306.976" xmlSpace="preserve">
<g>
	<path d="M230.879,144.952c-3.426-4.771-4.874-10.757-3.84-16.786l2.061-12.018l-8.73-8.51c-0.133-0.129-0.253-0.267-0.382-0.399   c-66.809,55.733-74.408,145.071-73.68,188.929c0.027,1.598,1.254,2.919,2.846,3.067c1.591,0.148,3.039-0.925,3.361-2.491   C170.944,206.99,205.797,164.569,230.879,144.952z"/>
	<path d="M99.861,85.018L79.7,89.531l-7.712,19.167c-0.14,0.348-0.298,0.685-0.454,1.023c31.466,44.515,47.854,135.4,54.405,181.181   c0.154,1.074,1.111,1.846,2.193,1.773c1.082-0.073,1.925-0.968,1.934-2.052c0.797-98.746-14.309-164.631-29.555-205.773   C100.294,84.904,100.081,84.969,99.861,85.018z"/>
	<path d="M237.742,244.904l-2.857-3.93c-2.312-3.18-3.69-6.801-4.133-10.52c-21.992,5.865-55.074,20.873-65.644,58.833   c-0.571,2.05,0.423,4.213,2.35,5.115c1.928,0.902,4.226,0.28,5.434-1.472c11.534-16.727,32.267-38.816,63.187-43.301   c0.017-0.048,0.029-0.097,0.046-0.146L237.742,244.904z"/>
	<path d="M80.479,206.57c-2.011,2.813-4.686,5.177-7.904,6.851l-4.309,2.241l-0.597,4.82c-0.18,1.452-0.504,2.857-0.943,4.21   c18.465,20.857,32.072,49.507,40.295,70.078c0.551,1.379,2.056,2.118,3.486,1.716c1.429-0.403,2.326-1.818,2.077-3.283   C105.303,250.21,92.568,223.285,80.479,206.57z"/>
	<path d="M250.59,109.166l-3.839,22.381c-0.153,0.89,0.213,1.79,0.944,2.321c0.413,0.3,0.903,0.453,1.395,0.453   c0.378,0,0.757-0.09,1.104-0.273l20.1-10.567l20.099,10.567c0.347,0.183,0.726,0.273,1.104,0.273c0.492,0,0.982-0.153,1.395-0.453   c0.731-0.531,1.097-1.431,0.944-2.321l-3.839-22.381l16.261-15.851c0.647-0.631,0.88-1.574,0.601-2.433   c-0.279-0.859-1.022-1.485-1.916-1.615l-22.472-3.265l-10.05-20.363c-0.4-0.81-1.225-1.323-2.128-1.323   c-0.903,0-1.728,0.513-2.128,1.323l-10.05,20.363l-22.472,3.265c-0.894,0.13-1.637,0.756-1.916,1.615   c-0.279,0.859-0.046,1.802,0.6,2.433L250.59,109.166z"/>
	<path d="M95.493,65.501c0.882-0.197,1.575-0.878,1.788-1.756c0.213-0.878-0.09-1.8-0.783-2.38L72.588,41.36l2.925-31.037   c0.085-0.899-0.349-1.769-1.117-2.243c-0.382-0.235-0.814-0.353-1.245-0.353c-0.438,0-0.875,0.121-1.26,0.362L45.476,24.647   L16.861,12.275c-0.303-0.131-0.623-0.195-0.941-0.195c-0.553,0-1.1,0.193-1.537,0.564c-0.689,0.585-0.985,1.51-0.765,2.386   l7.585,30.238L0.593,68.658c-0.597,0.678-0.758,1.636-0.414,2.471c0.344,0.836,1.132,1.404,2.033,1.465l31.102,2.131l15.877,26.829   c0.429,0.725,1.208,1.165,2.042,1.165c0.06,0,0.12-0.002,0.181-0.007c0.901-0.068,1.684-0.642,2.022-1.48l11.637-28.921   L95.493,65.501z"/>
	<path d="M302.251,235.51c-0.13-0.894-0.757-1.636-1.616-1.915l-14.62-4.745l-4.379-14.734c-0.257-0.866-0.984-1.511-1.874-1.663   c-0.134-0.023-0.268-0.034-0.401-0.034c-0.752,0-1.469,0.358-1.92,0.979l-9.031,12.439l-15.366-0.388   c-0.02,0-0.04-0.001-0.06-0.001c-0.88,0-1.69,0.488-2.1,1.269c-0.42,0.8-0.35,1.769,0.181,2.499l9.039,12.433l-5.118,14.495   c-0.301,0.852-0.092,1.8,0.539,2.447c0.454,0.465,1.069,0.716,1.699,0.716c0.245,0,0.493-0.038,0.734-0.116l14.618-4.755   l12.204,9.346c0.422,0.323,0.931,0.489,1.443,0.489c0.358,0,0.717-0.081,1.051-0.245c0.81-0.4,1.323-1.225,1.322-2.129   l-0.005-15.371l12.66-8.718C301.993,237.295,302.381,236.404,302.251,235.51z"/>
	<path d="M63.347,195.678c0.801-0.417,1.297-1.252,1.278-2.156c-0.019-0.903-0.549-1.717-1.368-2.1l-13.925-6.51l-2.531-15.161   c-0.149-0.891-0.79-1.62-1.655-1.881c-0.226-0.068-0.457-0.101-0.685-0.101c-0.647,0-1.279,0.265-1.734,0.753l-10.494,11.232   l-15.202-2.278c-0.118-0.018-0.235-0.026-0.352-0.026c-0.77,0-1.501,0.375-1.948,1.019c-0.516,0.742-0.565,1.712-0.128,2.503   l7.439,13.452l-6.864,13.754c-0.403,0.808-0.313,1.775,0.233,2.495c0.454,0.598,1.156,0.938,1.89,0.938   c0.15,0,0.301-0.014,0.451-0.043l15.092-2.918l10.96,10.778c0.451,0.444,1.052,0.681,1.665,0.681c0.262,0,0.525-0.043,0.78-0.132   c0.853-0.297,1.463-1.053,1.574-1.949l1.889-15.255L63.347,195.678z"/>
	<path d="M164.224,67.025l-1.845-4.493l-4.748-1.027c-3.545-0.767-6.747-2.343-9.427-4.526c-7.651,20.35-13.008,51.827-7.374,99.172   c0.303,2.548,4.02,2.518,4.262-0.036c2.083-21.962,7.451-57.474,21.156-85.27C165.465,69.654,164.781,68.381,164.224,67.025z"/>
	<path d="M170.993,12.588l1.552,15.293l-11.718,9.948c-0.689,0.585-0.986,1.509-0.766,2.386c0.219,0.876,0.917,1.552,1.8,1.743   l15.024,3.25l5.84,14.219c0.343,0.836,1.131,1.404,2.032,1.466c0.055,0.004,0.109,0.006,0.163,0.006   c0.84,0,1.624-0.446,2.051-1.179l7.734-13.284l15.328-1.16c0.901-0.068,1.685-0.642,2.022-1.48c0.337-0.838,0.17-1.795-0.432-2.468   l-10.244-11.46l3.633-14.936c0.214-0.878-0.09-1.801-0.783-2.381c-0.435-0.364-0.977-0.554-1.524-0.554   c-0.324,0-0.65,0.066-0.957,0.202l-14.065,6.201L174.6,10.329c-0.382-0.236-0.814-0.353-1.246-0.353   c-0.437,0-0.875,0.121-1.26,0.362C171.329,10.817,170.902,11.689,170.993,12.588z"/>
</g>
</svg>
				</div>
				</div>
				<div className="brownieContent has_transition_800">
					<div className="brownieClose">
						<div className="line _1"></div>
						<div className="line _2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>	
	</div>
	<div id="textSwitch" className="relative has_transition_400" style={{display:"none"}}>
		<img className="white" src="wp-content/themes/casangelina/assets/images/home/textSwitch.png" />
		<img className="brown has_transition_1500" src="wp-content/themes/casangelina/assets/images/home/textSwitchDark.png" />
	</div>
	{/* hero */}
	<article data-scroll-container>
<section id="hTop" data-scroll-section>
   <div id="headerShowTarget" data-scroll data-scroll-repeat data-scroll-call="showHeader"></div>
   <div id="headerHideTarget" data-scroll data-scroll-repeat data-scroll-call="hideHeader"></div>
   <div id="hTarget" data-scroll data-scroll-id="hTarget"></div>
   <div id="holder"  data-scroll data-scroll-speed="-10" style={{display:"none"}}></div>
   <div id="hImgContainer" className="has_transition_3000">
     <div id="hImgLayer" className="">
       <div id="hImgCover" className="">
         <img id="hImg" src={heroImg} className="fit " />
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
				<video playsinline autoplay muted loop src="wp-content/themes/casangelina/assets/video/home.mp4"></video>		
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
           <img id="hImgStrip" src={heroImg2} className="fit" data-scroll data-scroll-speed="0.5 "/>
         </div>
       <div id="payFind" className="no_overflow cAlyssum" data-scroll data-scroll-repeat><span className="block has_transition_2000 top_hidden">FIND</span></div>
       <div id="payPerfection" className="cArgilla" data-scroll data-scroll-repeat>
         <span className="top_translated has_transition_2000 inline_block">TRUE</span>
         <span className="top_translated has_transition_2000 d150 inline_block">PERFECTION.</span>
       </div>
     </div>
</section>
<section id="intro" className="tripleMargin" data-scroll-section>
 <div className="mainContainer">
   <div className="introTextContainer">
     <div className="introText text">
       <p><strong>Tastemakers of Understated Chic Luxury</strong><br />
<br />
Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.<br />
<br />
Our 37-room hotel serves as a sanctuary, bearing a fresh, white-washed aesthetic that accentuates every space, from the azure sea and sky outside to the contemporary artworks on display inside.<br />
<br />
We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.</p>
   </div>
   </div>
   
   <div id="partners" className="doubleMargin d-none">
     	<div className="partner lhw"><img src="wp-content/themes/casangelina/assets/images/partners/lhw.png" className="full_width" /></div>
		<div className="partner virtuoso"><img src="wp-content/themes/casangelina/assets/images/partners/virtuoso.png" className="full_width" /></div>
		<div className="partner ae"><img src="wp-content/themes/casangelina/assets/images/partners/american_express.png" className="full_width" /></div>
		<div className="partner traveller"><img src="wp-content/themes/casangelina/assets/images/partners/serandipians.png" className="full_width" /></div>
   </div>
   
   
 </div>
</section>
<section id="ethos" className="tripleMargin" style={{marginBottom: '130px'}} data-scroll-section>
 <div className="mainBackground bAlyssum has_transition_3000 top_translated" data-scroll></div>
 <div className="mainContainer">
   <div id="ethosTitleContainer">
     <div id="ethosIntroPic" className="introPic relative no_overflow covered" data-scroll data-scroll-repeat>
       <img src={ethos1} className="fit" />
     </div>
     <div id="ethosTitle" className="blockTitle" data-scroll data-scroll-repeat>
       <h2 className="flex no_overflow">
       	        	 
         <span className="inlineBlock top_hidden has_transition_3000 d200">e</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d300">t</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d400">h</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d500">o</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d600">s</span>
         </h2>
              </div>
   </div>
   <div id="ethosIntroText" className="boxed margin text no_overflow" data-scroll data-scroll-repeat>
     <p className="top_hidden has_transition_3000">Understated chic is our design ethos and subtle details are our raison d’être.</p>
   </div>
   <div id="ethosContent" data-scroll data-scroll-id="ethosContent">
     <div id="ethosPic" className="sliding no_overflow">
         <img src={ethos2} className="fit" data-scroll data-scroll-speed='-1' />
     </div>
     <div id="ethosText" className="text" data-scroll-repeat data-scroll data-scroll-speed='1' data-disable-mobile-scroll>
       <p>We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
       <div className="oButton margin has_transition_1500 top_ultralow mobileOnly forceWhite" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
        
            <path className="fill has_transition_1000 transition_all" fill="#FFFFFF" d="M0,1l36.8,0v0c9.9,0,17.9,8,17.9,17.9c0,9.9-8,17.9-17.9,17.9v0H0v0V1z"/>
            <path stroke-width="1" d="M36.85,0L36.85,0L0,0v0v1V0.97h36.85V1c9.88,0,17.93,8.04,17.93,17.93c0,9.88-8.04,17.92-17.93,17.92v0.03H0v-0.03v1v0
              h36.85v0c10.44,0,18.93-8.49,18.93-18.92C55.78,8.49,47.29,0,36.85,0z"/>
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block d200 transition_all">concept</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </div>
     </div>
   </div>
 </div>
 <a href="#" className="activeLayer" data-action="navigation" data-icon="textArrow" data-href="https://www.casangelina.com/the-hotel/concept/" data-text="concept"  data-precision="true" data-scroll></a>
 
</section>
<section id="prIntro" className="tripleMargin d-none" data-scroll-section>
 <div className="mainContainer">
   <div id="accolades" data-scroll data-scroll-call="runAccolades">
     <div id="accoladesScroller">
            <div className="accolade lhwbnh"><img src="wp-content/themes/casangelina/assets/images/accolades/lhwbnh.png" className="full_width" /></div>     
        <div className="accolade design"><img src="wp-content/themes/casangelina/assets/images/accolades/ftg.png" className="full_width" /></div>
       <div className="accolade reader"><img src="wp-content/themes/casangelina/assets/images/accolades/reader2021.png" className="full_width" /></div>

     <div className="accolade ruinart"><img src="wp-content/themes/casangelina/assets/images/accolades/ruinart.jpg" className="full_width" /></div>
       <div className="accolade forbes"><img src="wp-content/themes/casangelina/assets/images/accolades/forbes.png" className="full_width" /></div>     

       <div className="accolade design"><img src="wp-content/themes/casangelina/assets/images/accolades/designrush.png" className="full_width" /></div>

     </div>
   </div>
   <div id="prIntroText" className="text doubleMargin">
     <p>Clean lines and lashings of white underscore the rich tones of nature’s palette.<br />
<br />
An airy refuge, our boutique 37-room hotel is a place where guests can rediscover the forgotten rhythms of long, drawn-out days and easy, lingering evenings.</p>
   </div>
 </div>
</section>

<section id="prSection" className="margin d-none" data-scroll-section>
 <div className="mainBackground bAlyssum"></div>
 <div className="mainContainer relative">
   <div className="miniTitle lowercase"><span>Suites</span></div>
   <div id="prTop" className="halfMargin">
     <div id="prTitle" className="sectionTitle" data-scroll data-scroll-repeat>
     	       <div className="small no_overflow"><span className="block top_hidden has_transition_1500 cArgilla uppercase">private </span></div>
       <div className="big cRose no_overflow"><span className="block top_hidden has_transition_1500 d100 cAlyssum uppercase"> retreats</span></div>
     </div>
     <div id="prIntroPic" className="introPic relative no_overflow covered" data-scroll data-scroll-repeat>
       <img src="wp-content/themes/casangelina/assets/images/home/prIntro.jpg" className="fit" />
     </div>
   </div>
   <div id="prSlider" className="relative no_overflow halfMargin">
     <img src="wp-content/themes/casangelina/assets/images/home/prBig.jpg" className="fit" />
   </div>
    <div className="oButton show  margin has_transition_1500 top_ultralow mobileOnly lowercase forceWhite" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
            <path className="fill has_transition_1000 transition_all" fill="#FFFFFF" d="M0,1l36.8,0v0c9.9,0,17.9,8,17.9,17.9c0,9.9-8,17.9-17.9,17.9v0H0v0V1z"/>
            <path stroke-width="1" d="M36.85,0L36.85,0L0,0v0v1V0.97h36.85V1c9.88,0,17.93,8.04,17.93,17.93c0,9.88-8.04,17.92-17.93,17.92v0.03H0v-0.03v1v0
              h36.85v0c10.44,0,18.93-8.49,18.93-18.92C55.78,8.49,47.29,0,36.85,0z"/>
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 block d200 transition_all">Angelina Suite</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </div>
 </div>
 <a href="suites/angelina-suite/index.html" className="activeLayer" data-action="navigation" data-icon="textArrow" data-href="https://www.casangelina.com/suites/angelina-suite/" data-text="Angelina Suite"  data-precision="true" data-scroll></a>
</section>

<section id="hFacilities" className="relative no_overflow" data-scroll-section>
 <div id="hFacilitiesTarget"></div>
 <div className="layerUpdate" data-scroll data-scroll-call="layerUpdate" data-scroll-offset="-100%"></div>
 <div className="callerTop" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToWhite" data-scroll-offset="95%"></div>
 
 <div id="hFacilitiesSticky" data-scroll data-scroll-class="sticky" data-scroll-id="hFacilitiesSticky" data-scroll-sticky data-scroll-target="#hFacilitiesTarget">
   <div className="mainBackground hFacilitiesBackground">
     <img src={countBg} className="fit" />
     <div className="veil"></div>
   </div>
   <div className="mainContainer _1">
     <div id="hFacilitiesTop" className="margin">
       <div className="miniTitle cWhite"><span>Guest Services</span></div>
       <div id="hFacilitiesTitle" className="sectionTitle cWhite">
                  <div className="big uppercase">that count </div>
         <div className="small uppercase"> the extras</div>        
       </div>
     </div>
   </div>
   <div id="hFacilitiesSlider">
     <div id="hFacilitiesScroller">
                 
               <a href="guest-services/wellbeing/index.html" className="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/wellbeing/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide1} className="fit" /></div>
                 <div className="hFItemTitle">Wellbeing</div>
               </a>

                              
               <a href="guest-services/pool/index.html" className="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/pool/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide2} className="fit" /></div>
                 <div className="hFItemTitle">Pool</div>
               </a>

                              
               <a href="guest-services/beach/index.html" className="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/beach/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide3} className="fit" /></div>
                 <div className="hFItemTitle">Beach</div>
               </a>

                              
               <a href="guest-services/the-grounds/index.html" className="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/the-grounds/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide4} className="fit" /></div>
                 <div className="hFItemTitle">The Grounds</div>
               </a>

                              
               <a href="guest-services/our-boat/index.html" className="urlManager hFacilitiesItem horizontal relative" data-action="navigation" data-icon="arrow" data-href="guest-services/our-boat/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide5} className="fit" /></div>
                 <div className="hFItemTitle">Our Boat</div>
               </a>

                              
               <a href="guest-services/concierge/index.html" className="urlManager hFacilitiesItem vertical relative" data-action="navigation" data-icon="arrow" data-href="guest-services/concierge/index.html">
                 <div className="hFItemPic relative"><img alt=""  src={slide6} className="fit" /></div>
                 <div className="hFItemTitle">Concierge</div>
               </a>
     </div>
   </div>
 </div>
  <div className="callerBottom" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToDark" data-scroll-offset="95%"></div>
 
</section>
<section id="hDining" className="doubleMargin" data-scroll-section>
  <div className="callerTop" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToWhite" data-scroll-offset="95%"></div>
 <div id="hDiningTarget"></div>
 <div id="hDiningSticky" data-scroll data-scroll-class="sticky" data-scroll-id="hDiningSticky" data-scroll-sticky data-scroll-target="#hDiningTarget">
   <div className="mainBackground bMarrone"></div>
   <div className="mainContainer flexed">     
     <div id="hDiningScroll">
       <div className="miniTitle cWhite"><span>Dining</span></div>
               <div id="hDiningTitle" className="sectionTitle halfMargin no_overflow" data-scroll data-scroll-repeat>
         <div className="small cWhite uppercase"><span className="block top_hidden has_transition_1500 d100">experience </span></div>
         <div className="big cWhite uppercase" ><span className="block top_hidden has_transition_1500"> gourmet</span></div>
       </div>
       <div id="hDiningItems" className="margin">
        <div className="callerBottom mobileOnly" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToDark" data-scroll-offset="90%"></div>
        
                       
         
         <a href="dining/un-piano-nel-cielo/index.html" className="block hDiningItem long relative no_overflow urlManager" data-action="navigation" data-theme="dark" data-icon="arrow" data-href="https://www.casangelina.com/dining/un-piano-nel-cielo/" data-scroll data-scroll-repeat data-scroll-class="whitening" data-scroll-offset="108%">
                      <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2021/12/3_Un_Piano_Nel_Cielo.jpg 1010w, https://www.casangelina.com/wp-content/uploads/2021/12/3_Un_Piano_Nel_Cielo-300x143.jpg 300w, https://www.casangelina.com/wp-content/uploads/2021/12/3_Un_Piano_Nel_Cielo-768x365.jpg 768w" src="wp-content/uploads/2021/12/3_Un_Piano_Nel_Cielo.jpg" width="1010" height="480" /></div>
           <div className="listItemTitle cMarrone has_transition_800 transition_all">Un Piano Nel Cielo, A Fine Dining Restaurant</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>Campania-inspired cuisine paired with spectacular sea views</p>
</div>
         </a>
         <div className="hDiningItemRow halfMargin">
           <a href="dining/seascape-restaurant/index.html"  className="hDiningItem" data-action="navigation" data-icon="arrow" data-href="https://www.casangelina.com/dining/seascape-restaurant/" data-scroll data-scroll-repeat data-scroll-class="whitening" data-scroll-offset="138%">
             <div className="hDiningItemContainer top_translated has_transition_3000" data-scroll>
                          <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2021/12/seascapeRestaurantHome.jpg 533w, https://www.casangelina.com/wp-content/uploads/2021/12/seascapeRestaurantHome-191x300.jpg 191w" src="wp-content/uploads/2021/12/seascapeRestaurantHome.jpg" width="533" height="836" /></div>
               <div className="listItemTitle cMarrone has_transition_800 transition_all">Seascape Casual Dining</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>relaxed all day dining</p>
</div>
             </div>
           </a>
          <a href="dining/seascape-cocktail-bar/index.html"   className="hDiningItem" data-action="navigation" data-icon="arrow" data-href="https://www.casangelina.com/dining/seascape-cocktail-bar/" data-scroll data-scroll-repeat data-scroll-class="whitening" data-scroll-offset="138%">
             <div className="hDiningItemContainer top_translated has_transition_3000 d200" data-scroll>
                           <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2021/12/seascapeBarHome.jpg 533w, https://www.casangelina.com/wp-content/uploads/2021/12/seascapeBarHome-191x300.jpg 191w" src="wp-content/uploads/2021/12/seascapeBarHome.jpg" width="533" height="836" /></div>
                <div className="listItemTitle cMarrone has_transition_800 transition_all">Seascape Cocktail Bar</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>delicious cocktails &amp; stunning views</p>
</div>
             </div>
           </a>
         </div>
        <a href="dining/wine-cellar/index.html"  className="hDiningItem long relative no_overflow halfMargin" data-action="navigation" data-theme="dark" data-icon="arrow" data-href="https://www.casangelina.com/dining/wine-cellar/" data-scroll data-scroll-repeat data-scroll-class="whitening" data-scroll-offset="108%">
 			           <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2022/02/4_Wine_Cellar.jpg 1010w, https://www.casangelina.com/wp-content/uploads/2022/02/4_Wine_Cellar-300x143.jpg 300w, https://www.casangelina.com/wp-content/uploads/2022/02/4_Wine_Cellar-768x365.jpg 768w" src="wp-content/uploads/2022/02/4_Wine_Cellar.jpg" width="1010" height="480" /></div>
           <div className="listItemTitle cMarrone has_transition_800 transition_all">Wine Cellar</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>an award-winning wine selection&nbsp;</p>
</div>
         </a>
         <div className="hDiningItemRow halfMargin">
          <a href="dining/breakfast/index.html" className="hDiningItem" data-action="navigation" data-icon="arrow" data-href="dining/breakfast/index.html">
             <div className="hDiningItemContainer top_translated has_transition_3000" data-scroll>
                           <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2021/12/breakfastHome.jpg 480w, https://www.casangelina.com/wp-content/uploads/2021/12/breakfastHome-189x300.jpg 189w" src="wp-content/uploads/2021/12/breakfastHome.jpg" width="480" height="760" /></div>
                <div className="listItemTitle cMarrone has_transition_800 transition_all">Breakfast</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>mediterranean mornings start with a full-spread breakfast</p>
</div>
             </div>
           </a>
           <a href="dining/rooftop-terrace/index.html" className="hDiningItem" data-action="navigation" data-icon="arrow" data-href="dining/rooftop-terrace/index.html">
             <div className="hDiningItemContainer top_translated has_transition_3000 d200" data-scroll>
                         <div className="hDiningItemPic relative"><img className="fit" alt="" srcset="https://www.casangelina.com/wp-content/uploads/2022/02/GIA01201.jpg 533w, https://www.casangelina.com/wp-content/uploads/2022/02/GIA01201-191x300.jpg 191w" src="wp-content/uploads/2022/02/GIA01201.jpg" width="533" height="836" /></div>
                <div className="listItemTitle cMarrone has_transition_800 transition_all">Rooftop Terrace</div>
           <div className="listItemSubtitle cFango  has_transition_800 transition_all">
<p>private dining &amp; intimate celebrations</p>
</div>
             </div>
           </a>
         </div>
         
       </div>
     </div>
     <div id="hDiningFixed" className="relative">
       <div id="hDiningIntroPic" className="introPic relative no_overflow covered" data-scroll data-scroll-repeat>
           <img src={dining} className="fit top" />
       </div>
       <div id="tasteTitle" className="blockTitle" data-scroll>
         <h2 className="flex no_overflow cWhite">
                   	 
         <span className="inlineBlock top_hidden has_transition_3000 d200">t</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d300">a</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d400">s</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d500">t</span>
                	 
         <span className="inlineBlock top_hidden has_transition_3000 d600">e</span>
         </h2>
                </div>
       <div id="tasteText" className="text halfMargin cWhite no_overflow" data-scroll>
         <p className="top_hidden block has_transition_3000">Fine dining, Amalfi style.<br />
At Casa Angelina, the rich flavors and ingredients of Campania inspire every.</p>
       </div>


     </div>
   </div>
 </div>
  <div className="callerBottom mobileHidden" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToDark" data-scroll-offset="75%"></div>

</section>
<section id="hExperiences" className="tripleMargin" data-scroll-section>
 <div className="callerTop" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToWhite" data-scroll-offset="95%"></div>
 <div className="mainBackground bGreige"></div>
 <div className="mainContainer flexed">
   <h2 id="hExperiencesTitle" className="slidingTitle" data-scroll data-scroll-repeat>
         <span className="slidingTitleSmall block top_single has_transition_1500 uppercase">memorable </span>
     <span className="slidingTitleBig block no_overflow cWhite" style={{marginTop: '-1.5vw'}}>
     	         <span className="top_hidden inline_block has_transition_2000 uppercase d100"> </span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d200">e</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d300">x</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d400">p</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d500">e</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d600">r</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d700">i</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d800">e</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d900">n</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d1000">c</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d1100">e</span>
             <span className="top_hidden inline_block has_transition_2000 uppercase d1200">s</span>
           </span>
   </h2>
   <div id="hExperiencesContainer" className="margin">
     <div id="hExperiencesLayer" className="relative no_overflow">

       
               
       <div className="hExperienceBlock _1 show has_transition_2000 no_overflow bGreige">
         <div className="hExperienceButton relative bGreige">
           <div className="hExperienceTitle cWhite"><h2>Chef on Board</h2></div>
           <a href="experiences/chef-on-board/index.html" className="urlManager hExperienceArrow">
             <div className="hExperienceBackground has_transition_400"></div>
             <svg className="fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
               <use x="0" y="0" xlinkHref="#buttonArrow" />
             </svg>
           </a>
         </div>
         <div className="hExperienceContent has_transition_2000">
           <div className="hExperienceSubTitle miniTitle"><h3>
<p>Amalfi Flavors, At Sea Level</p>
</h3></div>
           <div className="hExperiencePic _1 show active mobileOnly">
             <div className="mask_top full_height has_transition_2000 full no_overflow">
               <div className="t_container has_transition_2000 full_height no_overflow">
                 <img src={"wp-content/uploads/2022/01/1_Top_GIO00045-1024x1024.jpg"} className="fit has_transition_2000"  />
               </div>
             </div>
           </div>
           <div className="hExperienceText cWhite">
           	<div className="text small">
           		<p>This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.<br /><br /></p>
           		<p></p>
           	</div>
           	 <div className="hExperienceActions halfMargin">
           <a className="oButton show whiteArrow has_transition_1500 top_ultralow hBook" style={{display:"none"}} data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">book this experience!</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
      <a href="experiences/chef-on-board/index.html"  className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">more details</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
     </div>
           </div>
          
         </div>
       </div>

       
       <div className="hExperienceBlock _2  has_transition_2000 no_overflow bGreige">
         <div className="hExperienceButton relative bGreige">
           <div className="hExperienceTitle cWhite"><h2>Fine Driving on the Amalfi Coast</h2></div>
           <a href="experiences/fine-driving-on-the-amalfi-coast/index.html" className="urlManager hExperienceArrow">
             <div className="hExperienceBackground has_transition_400"></div>
             <svg className="fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
               <use x="0" y="0" xlinkHref="#buttonArrow" />
             </svg>
           </a>
         </div>
         <div className="hExperienceContent has_transition_2000">
           <div className="hExperienceSubTitle miniTitle"><h3>
<p>A DOSE OF RETRO MAGIC</p>
</h3></div>
           <div className="hExperiencePic _2  mobileOnly">
             <div className="mask_top full_height has_transition_2000 full no_overflow">
               <div className="t_container has_transition_2000 full_height no_overflow">
                 <img src="wp-content/uploads/2022/01/1_Top_Fine_Driving-1024x1024.jpg" className="fit has_transition_2000"  />
               </div>
             </div>
           </div>
           <div className="hExperienceText cWhite">
           	<div className="text small">
           		<p>Few places in Italy exemplify la dolce vita quite like the Amalfi Coast...<br /><br /></p>
           		<p></p>
           	</div>
           	 <div className="hExperienceActions halfMargin">
           <a className="oButton show whiteArrow has_transition_1500 top_ultralow hBook" style={{display:"none"}} data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">book this experience!</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
      <a href="experiences/fine-driving-on-the-amalfi-coast/index.html"  className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">more details</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
     </div>
           </div>
          
         </div>
       </div>

       
       <div className="hExperienceBlock _3  has_transition_2000 no_overflow bGreige">
         <div className="hExperienceButton relative bGreige">
           <div className="hExperienceTitle cWhite"><h2>Romance Retreat</h2></div>
           <a href="experiences/romance-retreat/index.html" className="urlManager hExperienceArrow">
             <div className="hExperienceBackground has_transition_400"></div>
             <svg className="fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
               <use x="0" y="0" xlinkHref="#buttonArrow" />
             </svg>
           </a>
         </div>
         <div className="hExperienceContent has_transition_2000">
           <div className="hExperienceSubTitle miniTitle"><h3>
<p>A STARRY-EYED WEEKEND STAY</p>
</h3></div>
           <div className="hExperiencePic _3  mobileOnly">
             <div className="mask_top full_height has_transition_2000 full no_overflow">
               <div className="t_container has_transition_2000 full_height no_overflow">
                 <img src="wp-content/uploads/2022/01/1_Top_GIA01133-1024x1024.jpg" className="fit has_transition_2000"  />
               </div>
             </div>
           </div>
           <div className="hExperienceText cWhite">
           	<div className="text small">
           		<p>With our dreamy cliff-side setting and pared-back, sophisticated style, Casa Angelina is the ultimate romantic getaway for loved-up couples.<br /><br /></p>
           		<p></p>
           	</div>
           	 <div className="hExperienceActions halfMargin">
           <a className="oButton show whiteArrow has_transition_1500 top_ultralow hBook" style={{display:"none"}} data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">book this experience!</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
      <a href="experiences/romance-retreat/index.html"  className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">more details</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
     </div>
           </div>
          
         </div>
       </div>

       
       <div className="hExperienceBlock _4  has_transition_2000 no_overflow bGreige">
         <div className="hExperienceButton relative bGreige">
           <div className="hExperienceTitle cWhite"><h2>Body &#038; Soul</h2></div>
           <a href="experiences/body-soul/index.html" className="urlManager hExperienceArrow">
             <div className="hExperienceBackground has_transition_400"></div>
             <svg className="fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
               <use x="0" y="0" xlinkHref="#buttonArrow" />
             </svg>
           </a>
         </div>
         <div className="hExperienceContent has_transition_2000">
           <div className="hExperienceSubTitle miniTitle"><h3>
<p>GETTING BACK TO YOUR BEST SELF</p>
</h3></div>
           <div className="hExperiencePic _4  mobileOnly">
             <div className="mask_top full_height has_transition_2000 full no_overflow">
               <div className="t_container has_transition_2000 full_height no_overflow">
                 <img src="wp-content/uploads/2022/01/1_Top_IMG_0431_lavorata-1024x1024.jpg" className="fit has_transition_2000"  />
               </div>
             </div>
           </div>
           <div className="hExperienceText cWhite">
           	<div className="text small">
           		<p>Decompress with this three-night wellness package, which is all about making you feel fit, healthy and stress-free.<br /><br /></p>
           		<p></p>
           	</div>
           	 <div className="hExperienceActions halfMargin">
           <a className="oButton show whiteArrow has_transition_1500 top_ultralow hBook" style={{display:"none"}} data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">book this experience!</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
      <a href="experiences/body-soul/index.html"  className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore" data-scroll data-scroll-repeat data-scroll-class="open">
       <svg className="oOuter has_transition_1000 fillColor transition_all" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-1 -0.5 57.77 38.85" xmlSpace="preserve">
         <use x="0" y="0" xlinkHref="#outerShape" />
       </svg>
       <div className="oContent"><div className="oBackground has_transition_1000 transition_all"></div><div className="oLabelContainer no_overflow"><span className="oLabel top_hidden has_transition_1000 d200 transition_all">more details</span></div></div>
       <div className="oSymbol">
         <svg className="oArrow fillColor has_transition_1000 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
           <use x="0" y="0" xlinkHref="#buttonArrow" />
         </svg>
       </div>
     </a>
     </div>
           </div>
          
         </div>
       </div>

            


     </div>
     <div id="hExperiencesPics" className="no_overflow mobileHidden">
       <div id="hExperiencesPicsContainer" data-scroll data-scroll-speed="-1">
                   <div className="hExperiencePic _1 show active">
           <div className="mask_top full_height has_transition_2000 full no_overflow">
             <div className="t_container has_transition_2000 full_height no_overflow">
               <img src={acc1} className="fit has_transition_2000"  />
             </div>
           </div>
         </div>
                  <div className="hExperiencePic _2 ">
           <div className="mask_top full_height has_transition_2000 full no_overflow">
             <div className="t_container has_transition_2000 full_height no_overflow">
               <img src={acc2} className="fit has_transition_2000"  />
             </div>
           </div>
         </div>
                  <div className="hExperiencePic _3 ">
           <div className="mask_top full_height has_transition_2000 full no_overflow">
             <div className="t_container has_transition_2000 full_height no_overflow">
               <img src={acc3} className="fit has_transition_2000"  />
             </div>
           </div>
         </div>
                  <div className="hExperiencePic _4 ">
           <div className="mask_top full_height has_transition_2000 full no_overflow">
             <div className="t_container has_transition_2000 full_height no_overflow">
               <img src={acc4} className="fit has_transition_2000"  />
             </div>
           </div>
         </div>
                


       </div>
     </div>
   </div>
 </div>
 <div className="callerBottom" data-scroll data-scroll-repeat data-scroll-class="action" data-scroll-call="headerToDark" data-scroll-offset="95%"></div>

</section>
<section id="hLifeStyle" className="doubleMargin mobileHidden" style={{display:"none"}} data-scroll-section>
 
 <div className="mainBackground bAlyssum"></div>
 <div className="mainContainer flexed">
   <h2 id="hLifeStyleTitle" className="slidingTitle" data-scroll>
     <span className="slidingTitleBig block no_overflow cAlyssum">
       <span className="top_hidden inline_block has_transition_2000">I</span>
       <span className="top_hidden inline_block has_transition_2000 d100">N</span>
       <span className="top_hidden inline_block has_transition_2000 d200">S</span>
       <span className="top_hidden inline_block has_transition_2000 d300">T</span>
       <span className="top_hidden inline_block has_transition_2000 d400">A</span>
       <span className="top_hidden inline_block has_transition_2000 d500">G</span>
       <span className="top_hidden inline_block has_transition_2000 d600">R</span>
       <span className="top_hidden inline_block has_transition_2000 d700">A</span>
       <span className="top_hidden inline_block has_transition_2000 d800">M</span>
     </span>
     <span className="slidingTitleSmall top_single has_transition_1500 d900 cArgilla">@CASANGELINA</span>
   </h2>
   <a id="hLifeStylePanel" href="http://instagram.com/casaangelinalifestyle" target="_blank">
     <div className="hLifeStyleBlock">
       <div id="hLifeStyleTarget"></div>
 	   <div id="hLifeStyleSticky" data-scroll data-scroll-class="sticky" data-scroll-id="hLifeStyleSticky" data-scroll-sticky data-scroll-target="#hLifeStyleTarget">
	       <div className="hLSBlockTitle panelLabel bAlyssum relative"><h3>Dolce far niente profumato al limone</h3></div>
	       <div className="hLSBlockPic relative no_overflow"><img src="wp-content/themes/casangelina/assets/images/home/IG_01.jpg" className="fit"  /></div>
	    </div>
     </div>
     <div className="hLifeStyleBlock">
       <div id="hLifeStyleTarget2"></div>
 	   <div id="hLifeStyleSticky2" data-scroll data-scroll-class="sticky" data-scroll-id="hLifeStyleSticky2" data-scroll-sticky data-scroll-target="#hLifeStyleTarget2">
	       <div className="hLSBlockTitle panelLabel bAlyssum relative"><h3>Un sorso di paradiso</h3></div>
	       <div className="hLSBlockPic relative no_overflow"><img src="wp-content/themes/casangelina/assets/images/home/IG_02.jpg" className="fit"  /></div>
	    </div>
     </div>
     <div className="hLifeStyleBlock">
       <div id="hLifeStyleTarget3"></div>
 	   <div id="hLifeStyleSticky3" data-scroll data-scroll-class="sticky" data-scroll-id="hLifeStyleSticky3" data-scroll-sticky data-scroll-target="#hLifeStyleTarget3">
	       <div className="hLSBlockTitle panelLabel bAlyssum relative"><h3>Suggestioni romantiche</h3></div>
	       <div className="hLSBlockPic relative no_overflow"><img src="wp-content/themes/casangelina/assets/images/home/IG_03.jpg" className="fit"  /></div>
	    </div>
     </div>
     <div className="hLifeStyleBlock">
       
	       <div className="hLSBlockTitle panelLabel bAlyssum relative"><h3>Less is more...</h3></div>
	       <div className="hLSBlockPic relative no_overflow"><img src="wp-content/themes/casangelina/assets/images/home/IG_04.jpg" className="fit"  /></div>
	    </div>
     </a>
   </div>
 {/* </div> */}
</section>
<aside id="clocks" className=" doubleMargin d-none" data-scroll-section>
	<div className="mainContainer" id="clocksContainer">
		<div className="clock" timezone="America/New_York">
			<div className="clock-container">
				<div id="hour_1" className="clock-hour"></div>
				<div id="minute_1" className="clock-minute"></div>
				<div id="second_1" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>New York</p>
			</div>

		</div>
		<div className="clock mobileHidden" timezone="Europe/London">
			<div className="clock-container">
				<div id="hour_2" className="clock-hour"></div>
				<div id="minute_2" className="clock-minute"></div>
				<div id="second_2" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>London</p>
			</div>
		</div>
		<div className="clock mobileHidden" timezone="Australia/Sydney">
			<div className="clock-container">
				<div id="hour_3" className="clock-hour"></div>
				<div id="minute_3" className="clock-minute"></div>
				<div id="second_3" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>Sydney</p>
			</div>
		</div>
		<div className="clock main" timezone="Europe/Rome">
			<div className="clock-container">
				<div id="hour_4" className="clock-hour"></div>
				<div id="minute_4" className="clock-minute"></div>
				<div id="second_4" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>Praiano</p>
			</div>
		</div>
		<div className="clock mobileHidden" timezone="America/Toronto">
			<div className="clock-container">
				<div id="hour_5" className="clock-hour"></div>
				<div id="minute_5" className="clock-minute"></div>
				<div id="second_5" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>Toronto</p>
			</div>
		</div>
		<div className="clock mobileHidden" timezone="America/Sao_Paulo">
			<div className="clock-container">
				<div id="hour_6" className="clock-hour"></div>
				<div id="minute_6" className="clock-minute"></div>
				<div id="second_6" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>San Paolo</p>
			</div>
		</div>
		<div className="clock" timezone="Asia/Hong_Kong">
			<div className="clock-container">
				<div id="hour_7" className="clock-hour"></div>
				<div id="minute_7" className="clock-minute"></div>
				<div id="second_7" className="clock-second"></div>
			</div>
			<div className="clock-city">
				<p>Hong Kong</p>
			</div>
		</div>
	</div>
</aside>
<Footer/>
<footer className="doubleMargin relative d-none" data-scroll-section>
	<div className="layerUpdate" data-scroll data-scroll-call="layerUpdate"></div>
	<div id="footerTarget" data-scroll data-scroll-id="footerTarget"></div>
	<div id="weatherIn" data-scroll-id="weatherIn" data-scroll data-scroll-repeat data-scroll-call="weatherManage"></div>
	<div id="footerSticky" data-scroll  data-scroll-id="footerSticky" data-scroll-class="sticky" data-scroll-sticky data-scroll-target="#footerTarget">
		<div id="footerMain" className="relative">
			<div className="mainBackground no_overflow">
				<img src="wp-content/themes/casangelina/assets/images/home/footer.jpg" className="fit" data-scroll data-scroll-speed="-1" data-scroll-offset="0,100%" />
			</div>
			<div className="mainContainer">
				<div id="footerLeft">
					<div id="footerLogo">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854.56 135.26">
							<use className="fillColor" x="0" y="0" xlinkHref="#caLogo" />
						</svg>				
					</div>
					<div id="footerInfo" className="doubleMargin">
						<p>
						<a href="https://goo.gl/maps/cc6LjHbEs9wj742H8" target="_blank" data-disabled="true">Via Capriglione, 147<br />
						84010 Praiano<br />
						Amalfi Coast, SA<br />
						ITALY</a><br />
						ph <a href="tel:+390898131333">+39 089 8131333</a><br />
						fax +39 089 874266
						</p>
					</div>
					<div id="copyright" className="doubleMargin">
						<p>© Casa Angelina 2023 | all rights reserved</p>
					</div>
				</div>
				<div id="footerRight">
					<div className="socials">
						<a className="fb" target="_blank"  href="https://www.facebook.com/CasaAngelinaHotel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
						<a className="ig" target="_blank" href="http://instagram.com/casaangelinalifestyle" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
						<a className="tw" target="_blank" href="https://twitter.com/Casangelina"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
					</div>
				</div>
			</div>
		</div>
		<div id="footerData">
			<div id="footerDataTop">
				<div id="date" className="weatherContainer">
					<h4 className="year cLightBrown"></h4>
					<h4 className="day"></h4>
				</div>
				<div id="days" className="halfMargin mobileHidden">
					<div className="weatherContainer">
						<div className="day_name active">
							<div className="day_back has_transition_1000"></div>
							<p>Today</p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
						<div className="day_name">
							<div className="day_back has_transition_1000"></div>
							<p></p>
						</div>
					</div>
				</div>
				<div id="weather" className="halfMargin">
					<div id="weatherBox">	
						<div className="meteo_row">
							<div className="weatherContainer">
								<div className="wind_ico meteo_col animating top_low has_transition_1000">
									<div className="meteo_ico_big">
										<img src="#" />
									</div>
									<p className="meteo_stats"></p>
								</div>
								<div className="weather_ico meteo_col animating top_low has_transition_1000">
									<div className="meteo_ico_big">
										<img src="#" />
									</div>
									<p className="meteo_stats"></p>
			
								</div>
								<div className="sea_ico meteo_col animating top_low has_transition_1000">
									<div className="meteo_ico_big">
										<img src="#" />
									</div>
									<p className="meteo_stats"></p>
								</div>
							</div>
						</div>
						<div className="meteo_row">
							<div className="weatherContainer">
								<div className="data meteo_col animating top_low has_transition_1000">
									<div className="wind_direction">
										<img src="wp-content/themes/casangelina/assets/images/weather/wind_dir.png" />
										<p className="meteo_small"></p>
									</div>
									<div className="wind_speed">
										<img src="wp-content/themes/casangelina/assets/images/weather/wind_speed.png" />
										<p className="meteo_small"></p>
									</div>
								</div>
								<div className="data meteo_col animating top_low has_transition_1000">
			
									<p className="temp_text">
										<span className="temp_num">12</span> <span className="temp_deg">°</span>
									</p>
			
								</div>
								<div className="data meteo_col animating top_low has_transition_1000">
									<div className="wave_height">
										<img src="wp-content/themes/casangelina/assets/images/weather/wave_height.png" />
										<p className="meteo_small">
											<span className="wave_num"></span> M
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="hourlyBox">
						<div className="hourly_row">
							<div className="weatherContainer">
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">00:00</p>
									</div>
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">03:00</p>
									</div>
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">06:00</p>
									</div>
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">09:00</p>
									</div>
			
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">12:00</p>
									</div>
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">15:00</p>
									</div>
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">18:00</p>
									</div>
			
								</div>
								<div className="hour_box animating has_transition_1000 top_low">
									<div className="hour_ico">
										<img className="has_transition_1000 transform_all" src="#" />
									</div>
									<div className="separator"></div>
									<div className="active_line has_transition_800"></div>
									<div className="no_overflow hour_text">
										<p className="has_transition_1000">21:00</p>
									</div>
			
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="footerDataBottom">
				<div className="weatherContainer">
					<div className="partner lhw"><img src="wp-content/themes/casangelina/assets/images/partners/lhw.png" className="full_width" /></div>
					<div className="partner virtuoso"><img src="wp-content/themes/casangelina/assets/images/partners/virtuoso.png" className="full_width" /></div>
					<div className="partner ae"><img src="wp-content/themes/casangelina/assets/images/partners/american_express.png" className="full_width" /></div>
					<div className="partner traveller"><img src="wp-content/themes/casangelina/assets/images/partners/serandipians.png" className="full_width" /></div>
				</div>
			</div>
		</div>
	</div>
</footer>
</article>
{/* menu bar */}
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
												<a className="navSideItem cWhite block no_overflow    " href="https://www.lhw.com/leaders-club-hub?hotel=38068" target="_blank"><span className="block has_transition_1500 top_hidden d200">Leaders club</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager margin   " href="contacts/index.html" ><span className="block has_transition_1500 top_hidden d250">Contacts</span></a>
												<a className="navSideItem cWhite block no_overflow urlManager margin no_default credits " href="https://www.mediasoul.it/en/" ><span className="block has_transition_1500 top_hidden d300">Credits</span></a>
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
													<a className="navItem block top_low has_transition_1500 d200   " href="https://www.lhw.com/leaders-club-hub?hotel=38068" target="_blank">Leaders club<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d250 margin  " href="contacts/index.html" >Contacts<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow">
<p>IN TOUCH</p>
</span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d300 margin no_default credits" href="https://www.mediasoul.it/en/" >Credits<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d350 no_default thanks " href="#" >Special Thanks<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
													<a className="navItem urlManager block top_low has_transition_1500 d400   " href="privacy-policy/index.html" >Privacy Policy<span className="subItem"><span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve"><use x="0" y="0" xlinkHref="#buttonArrow" /></svg></span></a>						
												</div>					
					</div>
				</div>
			</div>
		</div>
		<div id="navBottom">
			<div className="socials">
						<a className="block fb top_low has_transition_1500 d300" target="_blank"  href="https://www.facebook.com/CasaAngelinaHotel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
						<a className="block ig top_low has_transition_1500 d400" target="_blank" href="http://instagram.com/casaangelinalifestyle" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
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
	{/* </div> */}
</aside>
<aside className="overlay has_transition_1000" id="creditsOverlay">
	<div className="mainBackground bTortora hidden has_transition_1000"></div>
	<div className="overlayClose" id="creditsClose">
		<svg className="circlePath" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000_inout transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
		<div className="overlayCloseInner has_transition_1000"></div>
	</div>
	<div className="overlayContainer">
		<div className="overlayTitle cWhite no_overflow detailTitle"><span className="top_hidden block has_transition_1500 uppercase">Credits</span></div>
		<div className="ovGroup no_overflow">
			<div className="ovRole cWhite no_overflow text tech small"><span className="block has_transition_1500 top_hidden d50">Content Management & Supervision</span></div>
			<div className="ovPeople no_overflow cMarrone"><span className="block has_transition_1500 top_hidden d100">Ms Annarita Aprea</span></div>
			<div className="ovSmall cMarrone top_low has_transition_1500 d150">casa angelina director of sales&marketing</div>
		</div>
		<div className="ovGroup no_overflow">
			<div className="ovRole cWhite no_overflow text tech small"><span className="block has_transition_1500 top_hidden d200">Work Group Coordination</span></div>
			<div className="ovPeople cMarrone no_overflow"><span className="block has_transition_1500 top_hidden d250">Mr Domenico De Simone</span></div>
			<div className="ovSmall cMarrone top_low has_transition_1500 d300">casa angelina managing director</div>
		</div>
		<div className="ovGroup no_overflow">
			<div className="ovRole cWhite no_overflow text tech small"><span className="block has_transition_1500 top_hidden d350">Art Direction, Storytelling Web Design, UI/UX & Mobile Experience</span></div>
			<div className="ovPeople cMarrone no_overflow"><span className="block has_transition_1500 top_hidden d400">Mediasoul</span></div>
		</div>
		<div className="ovGroup no_overflow">
			<div className="ovRole cWhite no_overflow text tech small"><span className="block has_transition_1500 top_hidden d450">Photography</span></div>
			<div className="ovPeople no_overflow cMarrone"><span className="block has_transition_1500 top_hidden d500">Umberto D’Aniello, Gianni De Gennaro</span></div>
		</div>
		
	</div>
		
</aside>
<aside className="overlay has_transition_1000" id="thanksOverlay">
	<div className="mainBackground bTortora hidden has_transition_1000"></div>
	<div className="overlayClose" id="creditsClose">
		<svg className="circlePath" xmlns="http://www.w3.org/2000/svg"><circle className="has_transition_1000_inout transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle></svg>	
		<div className="overlayCloseInner has_transition_1000"></div>
	</div>
	<div className="overlayContainer">
		<div className="overlayTitle cWhite no_overflow detailTitle"><span className="top_hidden block has_transition_1500 uppercase">our special thanks go to</span></div>
		<div className="ovGroup no_overflow">
			<div className="ovSmall cMarrone top_low has_transition_1500 d100">All our Guests, loyal Travel Trade and Industry Partners, and the entire Casa Angelina Team who largely backed the project.</div>
			<div className="ovPeople no_overflow cMarrone margin"><span className="block has_transition_1500 top_hidden d200 uppercase">thank you</span></div>
		</div>
		
		
		
	</div>
</aside>
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
    </>
  )
}

export default Test