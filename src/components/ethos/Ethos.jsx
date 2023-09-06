import React from "react";
import ethos1 from "./../../Assets/images/ethosSmall.jpg";
import ethos2 from "./../../Assets/images/ethosBig.jpg";

const Ethos = () => {
  return (
    <>
      <section
        id="ethos"
        className="tripleMargin"
        style={{ marginBottom: "130px" }}
        data-scroll-section
      >
        <div
          className="mainBackground bAlyssum has_transition_3000 top_translated"
          data-scroll
        ></div>
        <div className="mainContainer">
          <div id="ethosTitleContainer">
            <div
              id="ethosIntroPic"
              className="introPic relative no_overflow covered"
              data-scroll
              data-scroll-repeat
            >
              <img src={ethos1} alt="ethos" className="fit" />
            </div>
            <div
              id="ethosTitle"
              className="blockTitle"
              data-scroll
              data-scroll-repeat
            >
              <h2 className="flex no_overflow">
                <span className="inlineBlock top_hidden has_transition_3000 d200">
                  e
                </span>

                <span className="inlineBlock top_hidden has_transition_3000 d300">
                  t
                </span>

                <span className="inlineBlock top_hidden has_transition_3000 d400">
                  h
                </span>

                <span className="inlineBlock top_hidden has_transition_3000 d500">
                  o
                </span>

                <span className="inlineBlock top_hidden has_transition_3000 d600">
                  s
                </span>
              </h2>
            </div>
          </div>
          <div
            id="ethosIntroText"
            className="boxed margin text no_overflow"
            data-scroll
            data-scroll-repeat
          >
            <p className="top_hidden has_transition_3000">
              Understated chic is our design ethos and subtle details are our
              raison d’être.
            </p>
          </div>
          <div id="ethosContent" data-scroll data-scroll-id="ethosContent">
            <div id="ethosPic" className="sliding no_overflow">
              <img
                src={ethos2}
                alt="ethos"
                className="fit"
                data-scroll
                data-scroll-speed="-1"
              />
            </div>
            <div
              id="ethosText"
              className="text"
              data-scroll-repeat
              data-scroll
              data-scroll-speed="1"
              data-disable-mobile-scroll
            >
              <p>
                We ensure everything about your stay is immaculate, from the
                pillowy white Etro cotton sheets dressing your bed to the
                thoughtfully-placed garden-grown herb garnishes on your plate.
              </p>
              <div
                className="oButton margin has_transition_1500 top_ultralow mobileOnly forceWhite"
                data-scroll
                data-scroll-repeat
                data-scroll-class="open"
              >
                <svg
                  className="oOuter has_transition_1000 fillColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="-1 -0.5 57.77 38.85"
                  xmlSpace="preserve"
                >
                  <path
                    className="fill has_transition_1000 transition_all"
                    fill="#FFFFFF"
                    d="M0,1l36.8,0v0c9.9,0,17.9,8,17.9,17.9c0,9.9-8,17.9-17.9,17.9v0H0v0V1z"
                  />
                  <path
                    stroke-width="1"
                    d="M36.85,0L36.85,0L0,0v0v1V0.97h36.85V1c9.88,0,17.93,8.04,17.93,17.93c0,9.88-8.04,17.92-17.93,17.92v0.03H0v-0.03v1v0
              h36.85v0c10.44,0,18.93-8.49,18.93-18.92C55.78,8.49,47.29,0,36.85,0z"
                  />
                </svg>
                <div className="oContent">
                  <div className="oBackground has_transition_1000 transition_all"></div>
                  <div className="oLabelContainer no_overflow">
                    <span className="oLabel top_hidden has_transition_1000 block d200 transition_all">
                      concept
                    </span>
                  </div>
                </div>
                <div className="oSymbol">
                  <svg
                    className="oArrow fillColor has_transition_1000 transition_all"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 14.37 14.37"
                    style={{ enableBackground: "new 0 0 14.37 14.37" }}
                    xmlSpace="preserve"
                  >
                    <use x="0" y="0" xlinkHref="#buttonArrow" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="activeLayer"
          data-action="navigation"
          data-icon="textArrow"
          data-href="#"
          data-text="concept"
          data-precision="true"
          data-scroll
        ></a>
      </section>
    </>
  );
};

export default Ethos;
