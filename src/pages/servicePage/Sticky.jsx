import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";

const Sticky = ()=> {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
    <div className="container-fluid gourmentsection pt-lg-0 pt-5">
        <div className="container-lg innerfluid ">
            <div className="row bottomSide ">
                <div className="col-lg-8">
                    <div className="row row-gap-sm-4 row-gap-3">
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="testImg mb-md-4 mb-3"><img src="assets/img/Pool_1.jpg" className="w-100"/></div>
                            <div className="content mb-1">Pool</div>
                            <div className="subContent text-uppercase mb-md-4 mb-3">SUN-SOAKED SERENITY</div>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="testImg mb-md-4 mb-3"><img src="assets/img/Pool_2.jpg" className="w-100"/></div>
                            <div className="content mb-1">Beach</div>
                            <div className="subContent text-uppercase mb-md-4 mb-3">SEASIDE SPLENDOR</div>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="testImg mb-md-4 mb-3"><img src="assets/img/Pool_3.jpg" className="w-100"/></div>
                            <div className="content mb-1">The Grounds</div>
                            <div className="subContent text-uppercase mb-md-4 mb-3">FROM THE THOUGHTFULLY PLANTED TO THE WILD AND UNTAMED.</div>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="testImg mb-md-4 mb-3"><img src="assets/img/Pool_4.jpg" className="w-100"/></div>
                            <div className="content mb-1">Our Boat</div>
                            <div className="subContent text-uppercase mb-md-4 mb-3">sail the amalfi coast</div>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="testImg mb-md-4 mb-3"><img src="assets/img/Pool_5.jpg" className="w-100"/></div>
                            <div className="content mb-1">Concierge</div>
                            <div className="subContent text-uppercase mb-md-4 mb-3">let us look after you</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-lg-block d-none">
                    <div className="blockTitle selfHeading text-theme1 fw-light ps-xl-5 ps-lg-4" style={{position: 'sticky', top: '50%'}}>more<br/> Guest Services</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sticky;