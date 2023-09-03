import React from 'react'
import {Link} from 'react-router-dom'
import {SERVICE_URL} from './../../routes/routeConstants'

const Menu = ({showMenu, setShowMenu}) => {
  return (
    <div class={`offcanvas menuoffcanvas offcanvas-start bg-transparent border-0 ${showMenu ? 'show' : ''}`} data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="rounded-3 m-3 innerbodyPart h-100 overflow-hidden">
            <div className="row flex-column flex-nowrap  h-100">
                <div className="col-12">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title d-flex" id="staticBackdropLabel"><span className="logo d-inline-flex"><img src="assets/img/logo.svg" className="h-100" alt="logo"/></span></h5>
                        <button type="button" onClick={()=> setShowMenu(false)} className="closeBtn rounded-circle shadow-none bg-transparent d-inline-flex align-items-center justify-content-center p-2" data-bs-dismiss="offcanvas" aria-label="Close"><img src="assets/img/close.svg" className="w-100" alt="close"/></button>
                    </div>
                </div>
                <div className="col-12 h-100 flex-fill overflow-y-auto">
                    <div className="offcanvas-body menubody ">
                        <div className="row row-gap-2">
                            <div className="col-12"><div className="tabheading text-white">Hotel at a Glance</div></div>
                            <div className="col-12">
                                <ul className="list-unstyled navs d-flex flex-column gap-2">
                                    <li className="items"><Link to={SERVICE_URL} className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></Link></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                </ul>
                            </div>
                            <div className="col-12"><div className="tabheading text-white">Hotel at a Glance</div></div>
                            <div className="col-12">
                                <ul className="list-unstyled navs d-flex flex-column gap-2">
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                    <li className="items"><a href="javascript:;" className="text-decoration-none itemlink rounded-pill px-3 position-relative d-flex align-items-center justify-content-between">concept <span className="d-inline-flex position-relative pe-1"><img src="assets/img/arrow-right.svg" className="h-100" alt=""/></span></a></li>
                                </ul>
                            </div>
                            <div className="col-12"><a href="javascript:;" className="text-decoration-none bg-white ms-md-3 ms-auto d-inline-flex align-items-center gap-2 conceptBtn borderdBtn py-lg-2 py-1 px-3 rounded-pill">Anfrage stellen <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu