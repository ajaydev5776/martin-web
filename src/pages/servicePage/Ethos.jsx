import React, {useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";
const Ethos = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div class="container-fluid ethosSection mb-5">
        <div class="container-lg innersection pb-5">
            <div class="row align-items-center">
                <div class="col-xl-8 col-lg-6">
                    <div class="ethosImg m-0"><img src="assets/img/Cornice-IMG_0431_lavorata.jpg" class="w-100" alt=""/></div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div class="ps-lg-5">
                        <div class="textcontent my-4" data-aos="fade-up"  data-aos-duration="1000">Our wellness experts use products sourced exclusively from Nectarome, an organic aromatic garden located in the foothills of the Moroccan Atlas Mountains.</div>
                        {/* <a href="javascript:;" class="text-decoration-none bg-white d-lg-none d-inline-flex align-items-center gap-2 conceptBtn py-lg-2 py-1 px-3 rounded-pill">concept <span class="d-inline-flex"><img src="assets/img/arrow.svg" class="w-100" alt="arrow"/></span></a>  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ethos