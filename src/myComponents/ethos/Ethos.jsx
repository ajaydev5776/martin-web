import React from 'react'
import MouseMoveEffect from '../mouse/Mouse'

const Ethos = () => {
  return (
    <div className="container-fluid ethosSection py-5 pb-lg-0 my-5 bg-theme1 bg-opacity-25">
    <div className="container-lg innersection pt-4">
        <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
                <div className="ethosImg "><img src="assets/img/ethosPic.jpg" className="w-100" alt=""/></div>
            </div>
            <div className="col-xl-4 col-lg-6">
                <div className="ps-5">
                    <div className="textcontent my-4">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</div>
                    <a href="#" className="text-decoration-none bg-white d-lg-none d-inline-flex align-items-center gap-2 conceptBtn py-lg-2 py-1 px-3 rounded-pill">concept <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow" /></span></a>
                    </div>
            </div>
        </div>
    </div>
    <MouseMoveEffect parentElement={'.ethosSection'} text="concept"/>
</div>
  )
}

export default Ethos