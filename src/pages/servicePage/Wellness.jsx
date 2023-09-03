import React, {useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";
const Wellness = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="container-fluid my-5 mt-lg-5 mt-md-4 mt-0 wellnessection">
        <div className="container-lg">
            <div className="row">
                <div className="col-12 fw-light getheading text-dark opacity-75 text-uppercase" data-aos="fade-up"  data-aos-duration="1300">GET BACK IN TUNE WITH YOUR BODY</div>
                <div className="col-12 text-dark subheading opacity-50" data-aos="fade-up"  data-aos-duration="1500">with our wellness experts.</div>
            </div>
        </div>
    </div>
  )
}

export default Wellness