import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand bg-bodytertiary fixed-top">
    <div className="container-fluid px-lg-4">
        <button className="shadow-none border-0 rounded-circle toggleBtn d-flex flex-column gap-1 overflow-hidden align-items-center justify-content-center">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a className="navbar-brand mx-md-4 ms-2 d-flex pb-0" href="#"><img src="assets/img/logo.svg" className="h-100" alt=""/></a>
        <div className="collapse navbar-collapse navtabs" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-md-flex d-none">
                <li className="nav-item"><a className="nav-link pe-4 fw-semibold text-dark opacity-50 active" aria-current="page" href="#"><span className="d-inline-flex position-relative">german</span></a> </li>
                <li className="nav-item"><a className="nav-link px-4 fw-semibold text-dark opacity-50" href="#"><span className="d-inline-flex position-relative">english</span></a></li>
            </ul>
            <ul className="list-unstyled d-lg-flex d-none align-items-center gap-3 socialGroup m-0">
                <li><a href="#" className="text-decoration-none socialIcon d-inline-flex p-2 rounded-circle overflow-hidden"><img src="assets/img/insta.svg" alt=""/></a></li>
                <li><a href="#" className="text-decoration-none socialIcon d-inline-flex p-2 rounded-circle overflow-hidden"><img src="assets/img/facebook.svg" alt=""/></a></li>
                <li><a href="#" className="text-decoration-none socialIcon d-inline-flex p-2 rounded-circle overflow-hidden"><img src="assets/img/Linkedin.svg" alt=""/></a></li>
                <li><a href="#" className="text-decoration-none socialIcon d-inline-flex p-2 rounded-circle overflow-hidden"><img src="assets/img/mail.svg" alt=""/></a></li>
            </ul>
            <a href="#" className="text-decoration-none bg-white ms-md-3 ms-auto d-sm-inline-flex d-none align-items-center gap-2 conceptBtn borderdBtn py-lg-2 py-1 px-3 rounded-pill">Anfrage stellen <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
            <a href="#" className="text-decoration-none bg-white ms-auto d-sm-none d-inline-flex align-items-center gap-2 conceptBtn borderdBtn py-lg-2 py-1 px-sm-3 px-2 rounded-pill">Anfrage <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
        </div>
    </div>
</nav>
  )
}

export default Header