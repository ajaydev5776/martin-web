import React from "react";
import countBg from "./../../Assets/images/countBg.jpg";
import slide1 from "./../../Assets/images/slide1.jpg";
import slide2 from "./../../Assets/images/slide2.jpg";
import slide3 from "./../../Assets/images/slide3.jpg";
import slide4 from "./../../Assets/images/slide4.jpg";
import slide5 from "./../../Assets/images/slide5.jpg";
import slide6 from "./../../Assets/images/slide6.jpg";
import { Link } from "react-router-dom";

const HorizontalSlider = () => {
  return (
    <>
      <section
        id="hFacilities"
        className="relative no_overflow"
        data-scroll-section
      >
        <div id="hFacilitiesTarget"></div>
        <div
          className="layerUpdate"
          data-scroll
          data-scroll-call="layerUpdate"
          data-scroll-offset="-100%"
        ></div>
        <div
          className="callerTop"
          data-scroll
          data-scroll-repeat
          data-scroll-class="action"
          data-scroll-call="headerToWhite"
          data-scroll-offset="95%"
        ></div>

        <div
          id="hFacilitiesSticky"
          data-scroll
          data-scroll-class="sticky"
          data-scroll-id="hFacilitiesSticky"
          data-scroll-sticky
          data-scroll-target="#hFacilitiesTarget"
        >
          <div className="mainBackground hFacilitiesBackground">
            <img src={countBg} className="fit" />
            <div className="veil"></div>
          </div>
          <div className="mainContainer _1">
            <div id="hFacilitiesTop" className="margin">
              <div className="miniTitle cWhite">
                <span>Guest Services</span>
              </div>
              <div id="hFacilitiesTitle" className="sectionTitle cWhite">
                <div className="big uppercase">that count </div>
                <div className="small uppercase"> the extras</div>
              </div>
            </div>
          </div>
          <div id="hFacilitiesSlider">
            <div id="hFacilitiesScroller">
              <Link
                to={'/service'}
                className="urlManager hFacilitiesItem horizontal relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="/service"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide1} className="fit" />
                </div>
                <div className="hFItemTitle">Wellbeing</div>
              </Link>

              <a
                href="#"
                className="urlManager hFacilitiesItem vertical relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="#"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide2} className="fit" />
                </div>
                <div className="hFItemTitle">Pool</div>
              </a>

              <a
                href="#"
                className="urlManager hFacilitiesItem horizontal relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="#"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide3} className="fit" />
                </div>
                <div className="hFItemTitle">Beach</div>
              </a>

              <a
                href="#"
                className="urlManager hFacilitiesItem vertical relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="#"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide4} className="fit" />
                </div>
                <div className="hFItemTitle">The Grounds</div>
              </a>

              <a
                href="#"
                className="urlManager hFacilitiesItem horizontal relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="#"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide5} className="fit" />
                </div>
                <div className="hFItemTitle">Our Boat</div>
              </a>

              <a
                href="#"
                className="urlManager hFacilitiesItem vertical relative"
                data-action="navigation"
                data-icon="arrow"
                data-href="#"
              >
                <div className="hFItemPic relative">
                  <img alt="" src={slide6} className="fit" />
                </div>
                <div className="hFItemTitle">Concierge</div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="callerBottom"
          data-scroll
          data-scroll-repeat
          data-scroll-class="action"
          data-scroll-call="headerToDark"
          data-scroll-offset="95%"
        ></div>
      </section>
    </>
  );
};

export default HorizontalSlider;
