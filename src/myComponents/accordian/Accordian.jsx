import React,  {useState,useEffect } from 'react'
import './style.css'
import acc1 from './../../Assets/images/acc3.jpg'
import acc2 from './../../Assets/images/acc4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HorizontalScroll from "./HorizontalScroll";

const Accordian = () => {
    // useEffect(() => {
    //     AOS.init();
    // }, [])
    const [first , setFirst] = useState(true)
    const [second , setSecond] = useState(false)
    const [third , setThird] = useState(false)

    const handleFirst = ()=> {
        setFirst(true)
        setSecond(false)
        setThird(false)
    }
    const handleSecond = ()=> {
        setFirst(false)
        setSecond(true)
        setThird(false)
    }
    const handleThird = ()=> {
        setFirst(false)
        setSecond(false)
        setThird(true)
    }

  return (
    // <div className="memorableSection  my-5 py-5 overflow-hidden">
    //     <div className="container-fluid innerfluid pb-5">
    //         <div className="container-lg">
    //             <div className="row">
    //                 <div className="col-lg-auto col-12 text-white">
    //                     {/* <div className="servicesText fs-4 mb-4">dining</div>  */}
    //                     <div className="countHeading experiences text-uppercase d-flex flex-column  w-100 align-itemsend mt-n5"><span className="d-flex justify-contentend text-theme1" data-aos="fade-up"  data-aos-duration="1000">memorable</span> 
    //                     <div className='d-inline-flex'>
    //                     <p className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">e</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">x</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">p</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1100">e</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">r</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1300">i</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1400">e</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">n</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1600">c</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1700">e</p>
    //                     <p className="" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1800">s</p>
    //                     </div>
    //                     {/* experiences */}
    //                     </div>
    //                 </div>
    //                 <div className="col-12 mt-5 pt-lg-5">
    //                     <div className="row contentSide">
    //                         <div className="col-lg-5 order-lg-1 order-2">
    //                             <div className="accordions h-100" data-aos="fade-up" data-aos-duration="1500">
    //                                 <div className={`accordionItem ${first ? 'active' : ''}`}>
    //                                     <div onClick={handleFirst} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
    //                                     {first && (
    //                                     <div className="accordionbody py-4">
    //                                         <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
    //                                         <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
    //                                         <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
    //                                     </div>
    //                                     )}
    //                                 </div>
    //                                 <div className={`accordionItem ${second ? 'active' : ''}`}>
    //                                     <div onClick={handleSecond} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
    //                                     {second && (
    //                                     <div className="accordionbody py-4">
    //                                         <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
    //                                         <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
    //                                         <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
    //                                     </div>
    //                                     )}
    //                                 </div>
    //                                 <div className={`accordionItem ${third ? 'active' : ''}`}>
    //                                     <div onClick={handleThird} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
    //                                     {third && (
    //                                     <div className="accordionbody py-4">
    //                                         <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
    //                                         <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
    //                                         <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
    //                                     </div>
    //                                     )}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-7 order-lg-2  order-1">
    //                             <div className="accordionsImg h-100">
    //                                 <img 
    //                             src={first ? 'assets/img/accordionImg.jpg' : second ? acc1 : acc2} 
    //                             className={`w-100 h-100 fixImg`} alt=""/>
    //                                 <img src="assets/img/accordionImg.jpg" className={`w-100 h-100 ${first ? 'active' : ''}`} alt=""/>
    //                                 <img src={acc1} className={`w-100 h-100 ${second ? 'active' : ''}`} alt=""/>
    //                                 <img src={acc2} className={`w-100 h-100 ${third ? 'active' : ''}`} alt=""/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="memorableSection  my-5 py-5 overflow-hidden" data-scroll-section>
    <div className="container-fluid innerfluid pb-5">
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-auto col-12 text-white">
                    {/* <div className="servicesText fs-4 mb-4">dining</div>  */}
                    <div className="countHeading experiences text-uppercase d-flex flex-column  w-100 align-itemsend mt-n5"><span className="d-flex justify-contentend text-theme1" data-aos="fade-up"  data-aos-duration="1000">memorable</span> 
                    <div className='d-inline-flex'>
                    <p className="">e</p>
                    <p className="">x</p>
                    <p className="">p</p>
                    <p className="">e</p>
                    <p className="">r</p>
                    <p className="">i</p>
                    <p className="">e</p>
                    <p className="">n</p>
                    <p className="">c</p>
                    <p className="">e</p>
                    <p className="">s</p>
                    </div>
                    {/* experiences */}
                    </div>
                </div>
                <div className="col-12 mt-5 pt-lg-5">
                    <div className="row contentSide">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <div className="accordions h-100">
                                <div className={`accordionItem ${first ? 'active' : ''}`}>
                                    <div onClick={handleFirst} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
                                    {first && (
                                    <div className="accordionbody py-4">
                                        <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
                                        <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
                                        <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
                                    </div>
                                    )}
                                </div>
                                <div className={`accordionItem ${second ? 'active' : ''}`}>
                                    <div onClick={handleSecond} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
                                    {second && (
                                    <div className="accordionbody py-4">
                                        <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
                                        <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
                                        <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
                                    </div>
                                    )}
                                </div>
                                <div className={`accordionItem ${third ? 'active' : ''}`}>
                                    <div onClick={handleThird} className="text-decoration-none accordionButton fw-medium text-white py-3 d-flex align-items-center justify-content-between">Chef on Board <span className="d-inline-flex rounded-circle p-2"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></div>
                                    {third && (
                                    <div className="accordionbody py-4">
                                        <div className="accordionTitle text-dark opacity-50 fs-4">amalfi flavors, at sea level</div>
                                        <div className="textcontent text-white my-lg-5 my-4">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</div>
                                        <div className="morebutton"><a href="javascript:;" className="text-decoration-none  d-inline-flex dnone align-items-center gap-2 conceptBtn borderdBtn borderwhiteBtn py-lg-2 py-1 px-3 rounded-pill">more details <span className="d-inline-flex"><img src="assets/img/arrow.svg" className="w-100" alt="arrow"/></span></a></div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-2  order-1">
                            <div className="accordionsImg h-100">
                                <img 
                            src={first ? 'assets/img/accordionImg.jpg' : second ? acc1 : acc2} 
                            className={`w-100 h-100 fixImg`} alt=""/>
                                <img src="assets/img/accordionImg.jpg" className={`w-100 h-100 ${first ? 'active' : ''}`} alt=""/>
                                <img src={acc1} className={`w-100 h-100 ${second ? 'active' : ''}`} alt=""/>
                                <img src={acc2} className={`w-100 h-100 ${third ? 'active' : ''}`} alt=""/>
                            </div>
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