import React from 'react'

const Accordian = () => {
  return (
    <div className="memorableSection  my-5 py-5 overflow-hidden">
        <div className="container-fluid innerfluid py-5">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-auto col-12 text-white">
                        {/* <div className="servicesText fs-4 mb-4">dining</div>  */}
                        <div className="countHeading experiences text-uppercase d-flex flex-column  w-100 align-itemsend"><span className="d-flex justify-contentend">memorable</span> experiences </div>
                    </div>
                    <div className="col-12 mt-5 pt-lg-5">
                        <div className="row contentSide">
                            <div className="col-lg-5 order-lg-1 order-2">
                                <div className="accordions h-100">
                                    <div className="accordionItem active">
                                        <a href="javascript:;" className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                        <div className="accordionbody py-4">
                                            <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
                                            <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
                                            <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
                                        </div>
                                    </div>
                                    <div className="accordionItem">
                                        <a href="javascript:;" className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                    </div>
                                    <div className="accordionItem">
                                        <a href="javascript:;" className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 order-lg-2  order-1">
                                <div className="accordionsImg h-100"><img src="assets/img/accordionImg.jpg" className="w-100 h-100" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordian