import React from 'react'

const Contact = ()=> {
  return (
    <>
     <div className="container-fluid contactSection mb-5">
        <div className="container-lg">
            <div className="contactCard pt-5 p-lg-4 p-md-3 p-2">
                <div className="row mx-0">
                    <div className="col-lg-auto col-12 text-white px-lg-5">
                        {/* <div className="servicesText fs-4 mb-4">dining</div>  */}
                        <div className="countHeading experiences text-uppercase d-flex flex-column  w-100 align-itemsend"><span className="d-flex justify-contentend">get your me time</span> BOOKED </div>
                    </div>
                    {/* <div className="countHeading col-12 text-white experiences text-uppercase d-flex flex-column  w-100 align-itemsend">BOOKED</div>  */}
                    <div className="col-12 p-lg-5 pb-3 mt-5">
                        <div className="row contactContent">
                            <div className="col-lg-5">
                                <div className="textcontent text-white">To book a massage, a beauty treatment or a fitness lesson please fill in this form. You will receive an email confirming that your request is being handled by our Concierge Team.</div>
                            </div>
                            <div className="col-lg-7 px-0">
                                <form className="row formData mx-0">
                                    <div className="col-12 px-lg-3 px-0">
                                        <div className="row mx-0 gx-lg-5 InputInner">
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="name*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="surname*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 px-lg-3 px-0">
                                        <div className="row mx-0 gx-lg-5 InputInner">
                                            <div className="col-lg-6">
                                                <input type="email" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="email*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="room number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 px-lg-3 px-0">
                                        <div className="row mx-0 gx-lg-5 InputInner">
                                            <div className="col-lg-6 ContactInput border-0 fw-medium text-white">
                                                reservation for
                                            </div>
                                            <div className="col-lg-6">
                                                 {/* <input type="checkbox" id="massage"  className="form-control checkInput px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="room number">  */}
                                                <div className="d-flex flex-column gap-2">
                                                    <div className="form-check d-flex align-items-center">
                                                        <input className="form-check-input position-relative rounded-0 checkInput shadow-none" type="checkbox" value="" id="massage" checked/>
                                                        <label className="form-check-label text-white checkBtn ContactInput border-0 ms-3" for="massage">massage</label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input className="form-check-input position-relative rounded-0 checkInput shadow-none" type="checkbox" value="" id="beautytreatment" checked/>
                                                        <label className="form-check-label text-white checkBtn ContactInput border-0 ms-3" for="beautytreatment">beauty treatment </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input className="form-check-input position-relative rounded-0 checkInput shadow-none" type="checkbox" value="" id="fitnessroom" checked/>
                                                        <label className="form-check-label text-white checkBtn ContactInput border-0 ms-3" for="fitnessroom">fitness room</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input position-relative rounded-0 checkInput shadow-none" type="checkbox" value="" id="other" checked/>
                                                        <label className="form-check-label text-white checkBtn ContactInput border-0 ms-3" for="other">other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ms-auto text-end">
                                        <textarea name="" id="" rows="5" cols="10" className="ContactInput shadow-none form-control ms-auto rounded-0 border-1 border border-white w100 bg-transparent text-white textBox" placeholder="comments"></textarea>
                                    </div>
                                    <div className="col-12 px-lg-3 px-0">
                                        <div className="row mx-0 gx-lg-5 InputInner">
                                            <div className="col-lg-6">
                                                <input type="date" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="date*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="time" className="form-control px-1 ContactInput bg-transparent shadow-none text-white pb-0 rounded-0 " placeholder="time*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check d-flex align-itemscenter">
                                            <input className="form-check-input position-relative mt-sm-1 mt-2 rounded-0 checkInput shadow-none" type="checkbox" value="" id="agreeone" checked/>
                                            <label className="form-check-label text-white checkBtn ContactInput  border-0 ms-3" for="agreeone">I agree to the use of my personal data for the purpose stated above. <span className="star text-danger">*</span></label>
                                        </div>
                                        <div className="form-check d-flex mt-3 alignitemscenter">
                                            <input className="form-check-input position-relative rounded-0 checkInput shadow-none" type="checkbox" value="" id="agreetwo" checked/>
                                            <label className="form-check-label lh-sm text-white checkBtn ContactInput  border-0 ms-3" for="agreetwo">I agree to the use of my personal data to receive news and offers according to my preferences.</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="scrollcontent border border-1 border-white text-white overflow-y-auto">The personal data provided by filling this form will be processed, mainly in a digital manner, to provide feedback on the information requested. The submission of data is free but leaving mandatory fields empty will inhibits sending the request. The other fields are optional and allow the company to contact you more quickly, to provide a more accurate answer and to elaborate anonymous statistics about their customers and/or potential customers. The data provided will not be disclosed to third parties or spread in any way. Regarding the processing of data, pursuant to art. 7 of Legislative Decree no. 196 of Italian Costitution, you have the right to obtain confirmation of the existence of personal data concerning you, their origin and the logic on which the treatment is based; to obtain cancellation, transformation into anonymous form or block if processed in violation of law; to get update, rectification or integration. To exercise your rights, please contact DIKETO CASANGELINA SRL, Via G Porzio Is E/7, 80143 Napoli.</div>
                                    </div>
                                    <div className="col-12 text-end">
                                        <a href="javascript:;" className="sendBtn text-decoration-none bg-white rounded-pill d-inline-flex text-dark align-items-center justify-content-center">send</a>
                                    </div>
                                </form>
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
 export default Contact