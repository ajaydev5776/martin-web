import React from "react";
import dining from "./../../Assets/images/dining.jpg";
import taste1 from "./../../Assets/images/taste1.jpg"
import taste2 from "./../../Assets/images/taste2.jpg"
import taste3 from "./../../Assets/images/taste3.jpg"
import taste4 from "./../../Assets/images/taste4.jpg"
import taste5 from "./../../Assets/images/taste5.jpg"
import taste6 from "./../../Assets/images/taste6.jpg"



const Gourmet = () => {
  return (
    <>
      <section id="hDining" className="doubleMargin" data-scroll-section>
        <div
          className="callerTop"
          data-scroll
          data-scroll-repeat
          data-scroll-class="action"
          data-scroll-call="headerToWhite"
          data-scroll-offset="95%"
        ></div>
        <div id="hDiningTarget"></div>
        <div
          id="hDiningSticky"
          data-scroll
          data-scroll-class="sticky"
          data-scroll-id="hDiningSticky"
          data-scroll-sticky
          data-scroll-target="#hDiningTarget"
        >
          <div className="mainBackground bMarrone"></div>
          <div className="mainContainer flexed">
            <div id="hDiningScroll">
              <div className="miniTitle cWhite">
                <span>Dining</span>
              </div>
              <div
                id="hDiningTitle"
                className="sectionTitle halfMargin no_overflow"
                data-scroll
                data-scroll-repeat
              >
                <div className="small cWhite uppercase">
                  <span className="block top_hidden has_transition_1500 d100">
                    experience{" "}
                  </span>
                </div>
                <div className="big cWhite uppercase">
                  <span className="block top_hidden has_transition_1500">
                    {" "}
                    gourmet
                  </span>
                </div>
              </div>
              <div id="hDiningItems" className="margin">
                <div
                  className="callerBottom mobileOnly"
                  data-scroll
                  data-scroll-repeat
                  data-scroll-class="action"
                  data-scroll-call="headerToDark"
                  data-scroll-offset="90%"
                ></div>

                <a
                  href="#"
                  className="block hDiningItem long relative no_overflow urlManager"
                  data-action="navigation"
                  data-theme="dark"
                  data-icon="arrow"
                  data-href="#"
                  data-scroll
                  data-scroll-repeat
                  data-scroll-class="whitening"
                  data-scroll-offset="108%"
                >
                  <div className="hDiningItemPic relative">
                    <img
                      className="fit"
                      alt=""
                      // srcset=""
                      src={taste1}
                      width="1010"
                      height="480"
                    />
                  </div>
                  <div className="listItemTitle cMarrone has_transition_800 transition_all">
                    Un Piano Nel Cielo, A Fine Dining Restaurant
                  </div>
                  <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                    <p>
                      Campania-inspired cuisine paired with spectacular sea
                      views
                    </p>
                  </div>
                </a>
                <div className="hDiningItemRow halfMargin">
                  <a
                    href="#"
                    className="hDiningItem"
                    data-action="navigation"
                    data-icon="arrow"
                    data-href="#"
                    data-scroll
                    data-scroll-repeat
                    data-scroll-class="whitening"
                    data-scroll-offset="138%"
                  >
                    <div
                      className="hDiningItemContainer top_translated has_transition_3000"
                      data-scroll
                    >
                      <div className="hDiningItemPic relative">
                        <img
                          className="fit"
                          alt=""
                          // srcset="#"
                          src={taste2}
                          width="533"
                          height="836"
                        />
                      </div>
                      <div className="listItemTitle cMarrone has_transition_800 transition_all">
                        Seascape Casual Dining
                      </div>
                      <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                        <p>relaxed all day dining</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="hDiningItem"
                    data-action="navigation"
                    data-icon="arrow"
                    data-href="#"
                    data-scroll
                    data-scroll-repeat
                    data-scroll-class="whitening"
                    data-scroll-offset="138%"
                  >
                    <div
                      className="hDiningItemContainer top_translated has_transition_3000 d200"
                      data-scroll
                    >
                      <div className="hDiningItemPic relative">
                        <img
                          className="fit"
                          alt=""
                          // srcset=""
                        src={taste3}
                          width="533"
                          height="836"
                        />
                      </div>
                      <div className="listItemTitle cMarrone has_transition_800 transition_all">
                        Seascape Cocktail Bar
                      </div>
                      <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                        <p>delicious cocktails &amp; stunning views</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="hDiningItem long relative no_overflow halfMargin"
                  data-action="navigation"
                  data-theme="dark"
                  data-icon="arrow"
                  data-href="#"
                  data-scroll
                  data-scroll-repeat
                  data-scroll-class="whitening"
                  data-scroll-offset="108%"
                >
                  <div className="hDiningItemPic relative">
                    <img
                      className="fit"
                      alt=""
                      // srcset=""
                      src={taste4}
                      width="1010"
                      height="480"
                    />
                  </div>
                  <div className="listItemTitle cMarrone has_transition_800 transition_all">
                    Wine Cellar
                  </div>
                  <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                    <p>an award-winning wine selection&nbsp;</p>
                  </div>
                </a>
                <div className="hDiningItemRow halfMargin">
                  <a
                    href="#"
                    className="hDiningItem"
                    data-action="navigation"
                    data-icon="arrow"
                    data-href="#"
                  >
                    <div
                      className="hDiningItemContainer top_translated has_transition_3000"
                      data-scroll
                    >
                      <div className="hDiningItemPic relative">
                        <img
                          className="fit"
                          alt=""
                          // srcset=""
                          src={taste5}
                          width="480"
                          height="760"
                        />
                      </div>
                      <div className="listItemTitle cMarrone has_transition_800 transition_all">
                        Breakfast
                      </div>
                      <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                        <p>
                          mediterranean mornings start with a full-spread
                          breakfast
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="hDiningItem"
                    data-action="navigation"
                    data-icon="arrow"
                    data-href="#"
                  >
                    <div
                      className="hDiningItemContainer top_translated has_transition_3000 d200"
                      data-scroll
                    >
                      <div className="hDiningItemPic relative">
                        <img
                          className="fit"
                          alt=""
                          // srcset=""
                          src={taste6}
                          width="533"
                          height="836"
                        />
                      </div>
                      <div className="listItemTitle cMarrone has_transition_800 transition_all">
                        Rooftop Terrace
                      </div>
                      <div className="listItemSubtitle cFango  has_transition_800 transition_all">
                        <p>private dining &amp; intimate celebrations</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="hDiningFixed" className="relative">
              <div
                id="hDiningIntroPic"
                className="introPic relative no_overflow covered"
                data-scroll
                data-scroll-repeat
              >
                <img src={dining} className="fit top" alt="asd" />
              </div>
              <div id="tasteTitle" className="blockTitle" data-scroll>
                <h2 className="flex no_overflow cWhite">
                  <span className="inlineBlock top_hidden has_transition_3000 d200">
                    t
                  </span>

                  <span className="inlineBlock top_hidden has_transition_3000 d300">
                    a
                  </span>

                  <span className="inlineBlock top_hidden has_transition_3000 d400">
                    s
                  </span>

                  <span className="inlineBlock top_hidden has_transition_3000 d500">
                    t
                  </span>

                  <span className="inlineBlock top_hidden has_transition_3000 d600">
                    e
                  </span>
                </h2>
              </div>
              <div
                id="tasteText"
                className="text halfMargin cWhite no_overflow"
                data-scroll
              >
                <p className="top_hidden block has_transition_3000">
                  Fine dining, Amalfi style.
                  <br />
                  At Casa Angelina, the rich flavors and ingredients of Campania
                  inspire every.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="callerBottom mobileHidden"
          data-scroll
          data-scroll-repeat
          data-scroll-class="action"
          data-scroll-call="headerToDark"
          data-scroll-offset="75%"
        ></div>
      </section>
    </>
  );
};

export default Gourmet;
