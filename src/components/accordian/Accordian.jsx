import React from "react";
import acc1 from "./../../Assets/images/acc1.jpg";
import acc2 from "./../../Assets/images/acc2.jpg";
import acc3 from "./../../Assets/images/acc3.jpg";
import acc4 from "./../../Assets/images/acc4.jpg";

const Accordian = () => {
  return (
    <>
      <section id="hExperiences" className="tripleMargin" data-scroll-section>
        <div
          className="callerTop"
          data-scroll
          data-scroll-repeat
          data-scroll-class="action"
          data-scroll-call="headerToWhite"
          data-scroll-offset="95%"
        ></div>
        <div className="mainBackground bGreige"></div>
        <div className="mainContainer flexed">
          <h2
            id="hExperiencesTitle"
            className="slidingTitle"
            data-scroll
            data-scroll-repeat
          >
            <span className="slidingTitleSmall block top_single has_transition_1500 uppercase">
              memorable{" "}
            </span>
            <span
              className="slidingTitleBig block no_overflow cWhite"
              style={{ marginTop: "-1.5vw" }}
            >
              <span className="top_hidden inline_block has_transition_2000 uppercase d100">
                {" "}
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d200">
                e
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d300">
                x
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d400">
                p
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d500">
                e
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d600">
                r
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d700">
                i
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d800">
                e
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d900">
                n
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d1000">
                c
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d1100">
                e
              </span>
              <span className="top_hidden inline_block has_transition_2000 uppercase d1200">
                s
              </span>
            </span>
          </h2>
          <div id="hExperiencesContainer" className="margin">
            <div id="hExperiencesLayer" className="relative no_overflow">
              <div className="hExperienceBlock _1 show has_transition_2000 no_overflow bGreige">
                <div className="hExperienceButton relative bGreige">
                  <div className="hExperienceTitle cWhite">
                    <h2>Chef on Board</h2>
                  </div>
                  <a
                    href="#"
                    className="urlManager hExperienceArrow"
                  >
                    <div className="hExperienceBackground has_transition_400"></div>
                    <svg
                      className="fillColor has_transition_1000 transition_all"
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
                  </a>
                </div>
                <div className="hExperienceContent has_transition_2000">
                  <div className="hExperienceSubTitle miniTitle">
                    <h3>
                      <p>Amalfi Flavors, At Sea Level</p>
                    </h3>
                  </div>
                  <div className="hExperiencePic _1 show active mobileOnly">
                    <div className="mask_top full_height has_transition_2000 full no_overflow">
                      <div className="t_container has_transition_2000 full_height no_overflow">
                        <img src={acc1} className="fit has_transition_2000" />
                      </div>
                    </div>
                  </div>
                  <div className="hExperienceText cWhite">
                    <div className="text small">
                      <p>
                        This is an enjoyable and delicious experience, full of
                        taste and adventure (from 18:30 to 21:00). An unusual
                        way to enjoy the authentic Neapolitan cuisine.
                        <br />
                        <br />
                      </p>
                      <p></p>
                    </div>
                    <div className="hExperienceActions halfMargin">
                      <a
                        className="oButton show whiteArrow has_transition_1500 top_ultralow hBook"
                        style={{ display: "none" }}
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              book this experience!
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
                      </a>
                      <a
                        href="#"
                        className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore"
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              more details
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hExperienceBlock _2  has_transition_2000 no_overflow bGreige">
                <div className="hExperienceButton relative bGreige">
                  <div className="hExperienceTitle cWhite">
                    <h2>Fine Driving on the Amalfi Coast</h2>
                  </div>
                  <a
                    href="#"
                    className="urlManager hExperienceArrow"
                  >
                    <div className="hExperienceBackground has_transition_400"></div>
                    <svg
                      className="fillColor has_transition_1000 transition_all"
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
                  </a>
                </div>
                <div className="hExperienceContent has_transition_2000">
                  <div className="hExperienceSubTitle miniTitle">
                    <h3>
                      <p>A DOSE OF RETRO MAGIC</p>
                    </h3>
                  </div>
                  <div className="hExperiencePic _2  mobileOnly">
                    <div className="mask_top full_height has_transition_2000 full no_overflow">
                      <div className="t_container has_transition_2000 full_height no_overflow">
                        <img src={acc2} className="fit has_transition_2000" />
                      </div>
                    </div>
                  </div>
                  <div className="hExperienceText cWhite">
                    <div className="text small">
                      <p>
                        Few places in Italy exemplify la dolce vita quite like
                        the Amalfi Coast...
                        <br />
                        <br />
                      </p>
                      <p></p>
                    </div>
                    <div className="hExperienceActions halfMargin">
                      <a
                        className="oButton show whiteArrow has_transition_1500 top_ultralow hBook"
                        style={{ display: "none" }}
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              book this experience!
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
                      </a>
                      <a
                        href="#"
                        className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore"
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              more details
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hExperienceBlock _3  has_transition_2000 no_overflow bGreige">
                <div className="hExperienceButton relative bGreige">
                  <div className="hExperienceTitle cWhite">
                    <h2>Romance Retreat</h2>
                  </div>
                  <a
                    href="#"
                    className="urlManager hExperienceArrow"
                  >
                    <div className="hExperienceBackground has_transition_400"></div>
                    <svg
                      className="fillColor has_transition_1000 transition_all"
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
                  </a>
                </div>
                <div className="hExperienceContent has_transition_2000">
                  <div className="hExperienceSubTitle miniTitle">
                    <h3>
                      <p>A STARRY-EYED WEEKEND STAY</p>
                    </h3>
                  </div>
                  <div className="hExperiencePic _3  mobileOnly">
                    <div className="mask_top full_height has_transition_2000 full no_overflow">
                      <div className="t_container has_transition_2000 full_height no_overflow">
                        <img src={acc3} className="fit has_transition_2000" />
                      </div>
                    </div>
                  </div>
                  <div className="hExperienceText cWhite">
                    <div className="text small">
                      <p>
                        With our dreamy cliff-side setting and pared-back,
                        sophisticated style, Casa Angelina is the ultimate
                        romantic getaway for loved-up couples.
                        <br />
                        <br />
                      </p>
                      <p></p>
                    </div>
                    <div className="hExperienceActions halfMargin">
                      <a
                        className="oButton show whiteArrow has_transition_1500 top_ultralow hBook"
                        style={{ display: "none" }}
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              book this experience!
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
                      </a>
                      <a
                        href="#"
                        className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore"
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              more details
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hExperienceBlock _4  has_transition_2000 no_overflow bGreige">
                <div className="hExperienceButton relative bGreige">
                  <div className="hExperienceTitle cWhite">
                    <h2>Body &#038; Soul</h2>
                  </div>
                  <a
                    href="#"
                    className="urlManager hExperienceArrow"
                  >
                    <div className="hExperienceBackground has_transition_400"></div>
                    <svg
                      className="fillColor has_transition_1000 transition_all"
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
                  </a>
                </div>
                <div className="hExperienceContent has_transition_2000">
                  <div className="hExperienceSubTitle miniTitle">
                    <h3>
                      <p>GETTING BACK TO YOUR BEST SELF</p>
                    </h3>
                  </div>
                  <div className="hExperiencePic _4  mobileOnly">
                    <div className="mask_top full_height has_transition_2000 full no_overflow">
                      <div className="t_container has_transition_2000 full_height no_overflow">
                        <img src={acc4} className="fit has_transition_2000" />
                      </div>
                    </div>
                  </div>
                  <div className="hExperienceText cWhite">
                    <div className="text small">
                      <p>
                        Decompress with this three-night wellness package, which
                        is all about making you feel fit, healthy and
                        stress-free.
                        <br />
                        <br />
                      </p>
                      <p></p>
                    </div>
                    <div className="hExperienceActions halfMargin">
                      <a
                        className="oButton show whiteArrow has_transition_1500 top_ultralow hBook"
                        style={{ display: "none" }}
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              book this experience!
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
                      </a>
                      <a
                        href="#"
                        className="urlManager oButton show whiteArrow has_transition_1500 top_ultralow hMore"
                        data-scroll
                        data-scroll-repeat
                        data-scroll-class="open"
                      >
                        <svg
                          className="oOuter has_transition_1000 fillColor transition_all"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="-1 -0.5 57.77 38.85"
                          xmlSpace="preserve"
                        >
                          <use x="0" y="0" xlinkHref="#outerShape" />
                        </svg>
                        <div className="oContent">
                          <div className="oBackground has_transition_1000 transition_all"></div>
                          <div className="oLabelContainer no_overflow">
                            <span className="oLabel top_hidden has_transition_1000 d200 transition_all">
                              more details
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hExperiencesPics" className="no_overflow mobileHidden">
              <div
                id="hExperiencesPicsContainer"
                data-scroll
                data-scroll-speed="-1"
              >
                <div className="hExperiencePic _1 show active">
                  <div className="mask_top full_height has_transition_2000 full no_overflow">
                    <div className="t_container has_transition_2000 full_height no_overflow">
                      <img src={acc1} className="fit has_transition_2000" />
                    </div>
                  </div>
                </div>
                <div className="hExperiencePic _2 ">
                  <div className="mask_top full_height has_transition_2000 full no_overflow">
                    <div className="t_container has_transition_2000 full_height no_overflow">
                      <img src={acc2} className="fit has_transition_2000" />
                    </div>
                  </div>
                </div>
                <div className="hExperiencePic _3 ">
                  <div className="mask_top full_height has_transition_2000 full no_overflow">
                    <div className="t_container has_transition_2000 full_height no_overflow">
                      <img src={acc3} className="fit has_transition_2000" />
                    </div>
                  </div>
                </div>
                <div className="hExperiencePic _4 ">
                  <div className="mask_top full_height has_transition_2000 full no_overflow">
                    <div className="t_container has_transition_2000 full_height no_overflow">
                      <img src={acc4} className="fit has_transition_2000" />
                    </div>
                  </div>
                </div>
              </div>
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

export default Accordian;
