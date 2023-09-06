import React from 'react'

const Footer = () => {
  return (
    <div className="footer mt-5" data-scroll-section>
        <div className="container-fluid innerfluid py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5 py-5"><a href="javascript:;" className="logo d-inline-flex"><img src="assets/img/logo.svg"  className="h-100" alt="logo"/></a></div>
                    <div className="col-12">
                        <div className="text-white address opacity-75">
                            Via Capriglione, 147 <br/>
                            84010 Praiano <br/>
                            Amalfi Coast, SA <br/>
                            ITALY
                            <a href="tel: +390898131333" className="text-decoration-none text-white">ph +39 089 8131333</a> <br/>
                            <a href="tel: +39089874266" className="text-decoration-none text-white">fax +39 089 874266</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row align-items-end row-gap-4 mt-md-0 mt-4">
                            <div className="col order-md-1 order-2 text-md-start text-center text-white"><div className="copyright pb-md-2">© Casa Angelina 2023 | all rights reserved</div></div>
                            <div className="col-md-auto col-12 order-md-2 order-1">
                                <ul className="list-unstyled d-flex flex-md-column align-items-center justify-content-center gap-2 footericon socialGroup m-0">
                                    <li><a href="javascript:;" className="text-decoration-none socialIcon d-inline-flex align-items-center justify-content-center border-0 p-1 rounded-circle overflow-hidden"><img src="assets/img/facebook.svg" alt=""/></a></li>
                                    <li><a href="javascript:;" className="text-decoration-none socialIcon d-inline-flex align-items-center justify-content-center border-0 p-1 rounded-circle overflow-hidden"><img src="assets/img/insta.svg" alt=""/></a></li>
                                    <li><a href="javascript:;" className="text-decoration-none socialIcon d-inline-flex align-items-center justify-content-center border-0 p-1 rounded-circle overflow-hidden"><img src="assets/img/Linkedin.svg" alt=""/></a></li>
                                    <li><a href="javascript:;" className="text-decoration-none socialIcon d-inline-flex align-items-center justify-content-center border-0 p-1 rounded-circle overflow-hidden"><img src="assets/img/mail.svg" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer