import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";
const Method = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
    <div className="partysection my-5 py-lg-5">
        <div className="container-fluid innerfluid my-5 mt-lg-5 mt-0">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <div className="partyname methodheading fs-3 mb-lg-1 text-theme1 text-lg-start text-center">The Method</div>
                            <div className="partyname text-theme1 text-lg-start text-center">Augustins Bader at Casa Angelina</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card border-0 rounded-0 position-relative">
                            <div className="card-body d-flex align-items-center justify-content-center p-lg-5 p-4 my-lg-4 position-relative zi-1">
                                <a href="javascript:;" className="partylogo d-inline-flex justify-content-center align-items-center text-decoration-none text-white my-lg-0 my-5"><img src="assets/img/ab.png" className="h-100" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5 pt-5 pymd-4 pb4">
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-6">
                    <div className="textcontent lorems" data-aos="fade-up"  data-aos-duration="1000">To provide our guests with only the finest in science- based, professional skincare in Casa Angelina’s haven of wellness, we have partnered with award-winning skincare brand Augustinus Bader, renowned for their innovative products and treatments. Augustinus Bader has curated specific rituals that connect the guest with the Amalfi coast, using oils, salts, and other healing materials harvested from the destination.</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Method