import React from 'react'

const ProductCard = ()=> {
  return (
    <>
    <div className="container-fluid cards-section mb-5">
        <div className="container-lg inner-container">
            <div className="row g-2 g-sm-3 g-lg-4">
                <div className="col-6">
                    <div className="card-box">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0">
                                <div className="card-img">
                                    <img src="./assets/img/rich-cream.png" alt="Rich Cream " className="h-100 w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-card h-100 overflow-hidden ">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0 overflow-hidden ">
                                <div className="row h-100 justify-content-between flex-column ">
                                    <div className="col-12">
                                        <div className="text d-flex justify-content-end">
                                            <span>LIST</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="content px-2 px-sm-3 px-lg-4">
                                            <div className="morebutton">
                                                <a href="javascript:;" className="text-decoration-none bg-white d-inline-flex align-items-center gap-2 conceptBtn downloadBtn py-lg-2 py-1 px-sm-3 px-2 rounded-pill">download <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                            </div>
                                            <div className="bottom-text text-white mt-1 mt-lg-2">
                                                AB
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-card h-100 overflow-hidden ">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0 overflow-hidden ">
                                <div className="row h-100 justify-content-between flex-column ">
                                    <div className="col-12">
                                        <div className="text d-flex justify-content-end">
                                            <span>LIST</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="content px-2 px-sm-3 px-lg-4">
                                            <div className="morebutton">
                                                <a href="javascript:;" className="text-decoration-none bg-white d-inline-flex align-items-center gap-2 conceptBtn downloadBtn py-lg-2 py-1 px-sm-3 px-2 rounded-pill">download <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                            </div>
                                            <div className="bottom-text text-white mt-1 mt-lg-2">
                                                SPA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-box">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0">
                                <div className="card-img">
                                    <img src="./assets/img/card-2.jpg" alt="Rich Cream " className="h-100 w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-box">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0">
                                <div className="card-img">
                                    <img src="./assets/img/card-3.jpg" alt="Rich Cream " className="h-100 w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-card h-100 overflow-hidden ">
                        <div className="card rounded-0 border-0 h-100">
                            <div className="card-body p-0 overflow-hidden ">
                                <div className="row h-100 justify-content-between flex-column ">
                                    <div className="col-12">
                                        <div className="text d-flex justify-content-end">
                                            <span>PROGRAM</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="content px-2 px-sm-3 px-lg-4">
                                            <div className="morebutton">
                                                <a href="javascript:;" className="text-decoration-none bg-white d-inline-flex align-items-center gap-2 conceptBtn downloadBtn py-lg-2 py-1 px-sm-3 px-2 rounded-pill">download <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a>
                                            </div>
                                            <div className="bottom-text text-white mt-1 mt-lg-2">
                                                FITNESS
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard;