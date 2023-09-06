import React from 'react'
import MenuVideo from './../../Assets/video/home.mp4'
import './style.css'
const Menu = () => {
return (
<nav className="has_transition_1000">
   <div className="overlayClose" id="menuClose">
      <svg className="circlePath" xmlns="http://www.w3.org/2000/svg">
         <circle className="has_transition_1000_inout transition_all fillColor" cx="19" cy="19" r="18" stroke-width="1.3" fill="transparent"></circle>
      </svg>
      <div className="overlayCloseInner has_transition_1000"></div>
   </div>
   <div id="navVideo" className="no_opacity has_transition_1500">
      <video autoplay muted loop playsinline src={MenuVideo}></video>
   </div>
   <div id="navBackground" className="hidden has_transition_1000 bTortora"></div>
   <div id="navInner">
      <div id="navTop">
         <div id="navBar" className="justify-content-start">
            <a id="navLogo" href="javascript:;" className="urlManager">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854.56 135.26">
                  <use className="top_single has_transition_1500 fillColor" x="0" y="0" xlinkHref="#caLogo" />
               </svg>
            </a>
            <div id="navSideItems" >
               <a className="navSideItem cWhite block no_overflow urlManager" href="javascript:;" ><span className="block has_transition_1500 top_hidden">Services</span></a>
               {/* <a className="navSideItem cWhite block no_overflow urlManager" href="javascript:;" ><span className="block has_transition_1500 top_hidden d50">Hotel Policies</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager" href="javascript:;" ><span className="block has_transition_1500 top_hidden d100">Travel Safe</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager" href="javascript:;" ><span className="block has_transition_1500 top_hidden d150">Faq</span></a>
               <a className="navSideItem cWhite block no_overflow " href="javascript:;" target="_blank"><span className="block has_transition_1500 top_hidden d200">Leaders club</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager margin" href="javascript:;" ><span className="block has_transition_1500 top_hidden d250">Contacts</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager margin no_default credits " href="javascript:;" ><span className="block has_transition_1500 top_hidden d300">Credits</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager no_default thanks  " href="javascript:;" ><span className="block has_transition_1500 top_hidden d350">Special Thanks</span></a>
               <a className="navSideItem cWhite block no_overflow urlManager" href="javascript:;" ><span className="block has_transition_1500 top_hidden d400">Privacy Policy</span></a> */}
            </div>
         </div>
         <div id="navContent">
            <div id="navScroller" className="navscrollermobile">
               <div className="navSection relative" data-scroll>
                  <div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">All Services</span></div>
                  <div className="navSectionItems">
                     <a className="navItem urlManager block top_low has_transition_1500 d100" href="javascript:;">Wellbeing
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit. </p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d150" href="javascript:;">Pool
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d200" href="javascript:;">Beach
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d250" href="javascript:;">The Grounds
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d300" href="javascript:;">Our Boat
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
					 <a className="navItem urlManager block top_low has_transition_1500 d300" href="javascript:;">Concierge
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                  </div>
               </div>
               <div className="navSection relative" data-scroll>
                  <div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Suites </span></div>
                  <div className="navSectionItems">
                     <a className="navItem urlManager block top_low has_transition_1500 d100" href="javascript:;">Example1
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d150" href="javascript:;">Example2
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p className="m-0">Lorem ipsum dolor sit.</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                  </div>
               </div>
			   {/* Desktop nav End*/}
			   {/* Mobile Nav Start */}
               {/* <div className="navSection relative mobileOnly" data-scroll>
                  <div className="navSectionTitle no_overflow"><span className="block top_hidden has_transition_2000">Miscellaneous </span></div>
                  <div className="navSectionItems">
                     <a className="navItem urlManager block top_low has_transition_1500 d0   " href="javascript:;" >
                        Press
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p>IN THE PRESS</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d50   " href="javascript:;" >
                        Hotel Policies
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d100   " href="javascript:;" >
                        Travel Safe
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d150   " href="javascript:;" >
                        Faq
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem block top_low has_transition_1500 d200   " href="javascript:;">
                        Leaders club
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d250 margin  " href="javascript:;" >
                        Contacts
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow">
                              <span className="block t_container has_transition_2000 no_overflow">
                                 <p>IN TOUCH</p>
                              </span>
                           </span>
                           <svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d300 margin no_default credits" href="javascript:;" >
                        Credits
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d350 no_default thanks " href="javascript:;" >
                        Special Thanks
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                     <a className="navItem urlManager block top_low has_transition_1500 d400   " href="javascript:;" >
                        Privacy Policy
                        <span className="subItem">
                           <span className="subTitle block mask_left has_transition_2000 no_overflow"><span className="block t_container has_transition_2000 no_overflow"></span></span><svg className="no_opacity oArrow fillColor has_transition_1500 transition_all" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.37 14.37" style={{enableBackground:"new 0 0 14.37 14.37"}} xmlSpace="preserve">
                           <use x="0" y="0" xlinkHref="#buttonArrow" />
                           </svg>
                        </span>
                     </a>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
      <div id="navBottom">
         <div className="socials">
            <a className="block fb top_low has_transition_1500 d300" target="_blank"  href="javascript:;">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
               </svg>
            </a>
            <a className="block ig top_low has_transition_1500 d400" target="_blank" href="javascript:;" >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </svg>
            </a>
         </div>
         <div className="langsContainer" >
            <ul className="langs cWhite m-0">
               <li className="lang-item lang-item-2 lang-item-en current-lang lang-item-first"><a  href="javascript:;">English</a></li>
               <li className="lang-item lang-item-7 lang-item-it"><a  href="javascript:;">german</a></li>
               {/* <li className="lang-item lang-item-12 lang-item-de"><a  href="javascript:;">english</a></li> */}
            </ul>
         </div>
      </div>
   </div>
</nav>
)
}
export default Menu