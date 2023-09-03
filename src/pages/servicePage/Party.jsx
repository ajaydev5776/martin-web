import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";

const Party = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className="partysection my-5 py-lg-5 pt-4 pb-1">
        <div className="container-fluid innerfluid my-5 mt-lg-5 mt-0">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-lg-6"><div className="partyname text-theme1 py-4 text-lg-start text-center">The Highest-Quality Nail Services</div></div>
                    <div className="col-lg-6">
                        <div className="card border-0 rounded-0 position-relative">
                            <div className="card-body d-flex align-items-center justify-content-center p-lg-5 p-4 my-lg-4 position-relative zi-1">
                                <a href="javascript:;" className="partylogo d-inline-flex justify-content-center align-items-center text-decoration-none text-white"><img src="assets/img/cnd.png" className="h-100" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Party