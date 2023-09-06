import React from "react";

const Cookies = () => {
  return (
    <>
      <div
        id="cookieBrownie"
        className="closed brownie relative has_transition_800"
      >
        <div className="brownieBack"></div>
        <div className="brownieContentLayer">
          <div className="brownieIcoContainer hidden has_transition_1500">
            <div className="brownieIco has_transition_800">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 35.02 16.5"
                style={{ enableBackground: "new 0 0 35.02 16.5" }}
                xmlSpace="preserve"
              >
                <path
                  className="fillColor has_transition_1000 transition_all"
                  d="M22.76,12.71c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.03,0.02,0.04,0.03
								c0.02,0.02,0.04,0.03,0.06,0.05c0.03,0.02,0.06,0.03,0.09,0.05c0.02,0.01,0.04,0.02,0.06,0.03c0.03,0.01,0.07,0.02,0.11,0.03
								c0.02,0,0.03,0.01,0.05,0.01C23.29,12.99,23.35,13,23.4,13c0,0,0,0,0,0c0,0,0,0,0,0c0.05,0,0.11-0.01,0.16-0.02
								c0.02,0,0.03-0.01,0.05-0.01c0.04-0.01,0.07-0.02,0.11-0.03c0.02-0.01,0.04-0.02,0.06-0.03c0.03-0.02,0.06-0.03,0.09-0.05
								c0.02-0.01,0.04-0.03,0.06-0.04c0.01-0.01,0.03-0.02,0.04-0.03c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.02-0.02,0.03-0.03
								L34.3,1.43c0.32-0.35,0.29-0.89-0.06-1.21c-0.35-0.32-0.89-0.29-1.21,0.06l-9.62,10.58L15.7,2.21c-0.31-0.35-0.86-0.38-1.21-0.07
								c-0.35,0.31-0.38,0.86-0.07,1.21L22.76,12.71z"
                />
                <path
                  className="svgLine fillColor has_transition_1000 transition_all"
                  d="M34.52,15.5H0.5C0.22,15.5,0,15.72,0,16s0.22,0.5,0.5,0.5h34.02c0.28,0,0.5-0.22,0.5-0.5
								S34.8,15.5,34.52,15.5z"
                />
              </svg>
            </div>
          </div>
          <div className="brownieContent has_transition_800">
            <div className="brownieTitle cWhite">
              <span>Cookies</span>
            </div>
            <div className="brownieText  cWhite">
              <p>
                www.casangelina.com uses its own and third-party technical and
                profiling cookies for its functionality and to send you
                advertising and information in line with your preferences.{" "}
                <br />
                To consent to the use of cookies click on the accept button.
                <br />
                If you want to know more, read our extended privacy policy.
              </p>
            </div>
            <div className="cookiePrefs">
              <div className="brownieText cWhite">
                Please select cookies for which you want to express consent:
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="gdprEssential"
                    value="essential"
                    checked="checked"
                    disabled="disabled"
                  />
                  <label
                    for="gdprEssential"
                    title="This type of cookie allows the correct operation of certain sections of the Website. These cookies, always sent from our domain, are necessary to view the site correctly and in relation to the technical services offered, will therefore always be used and sent, unless the user does not change the settings in your browser (thus disrupting the display of pages of the site)."
                  >
                    Essentials
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="gdprAnalytics" value="analytics" />
                  <label
                    for="gdprAnalytics"
                    title="Cookies in this category are used to collect information on the use of the site. www.casangelina.com will use this information in respect of anonymous statistical analysis in order to improve the use of the Site and to make the content more interesting and relevant to the wishes of users."
                  >
                    Analytics
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="gdprMarketing" value="marketing" />
                  <label
                    for="gdprMarketing"
                    title="These cookies are necessary to create user profiles in order to send advertising messages in line with the preferences expressed by the user within the pages of the Site."
                  >
                    Profiling
                  </label>
                </li>
              </ul>
            </div>
            <div className="brownieButtons show">
              <div className="brownieButton accept cWhite">
                ACCEPT COOKIES
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
              <div className="brownieButton customize  cWhite">
                CUSTOMIZE PREFERENCES
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
    </>
  );
};

export default Cookies;
