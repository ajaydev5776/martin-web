import React from "react";
import { HiArrowRight } from 'react-icons/hi';
// import{BsFillArrowRightCircleFill} from 'react-icons/bs';
import MemorableImage1 from './../../Assets/memorableSection-1.jpg';
import MemorableImage2 from './../../Assets/memorableSection-2.jpg';
import MemorableImage3 from './../../Assets/memorableSection-3.jpg';
import MemorableImage4 from './../../Assets/MemorableSection-4.jpg';


const HomepageSection4 = () => {
    return (
        <div className="homepage-section-4-container">
            <div className="memorable-heading-container">
                <p className="memorable-heading-1">MEMORABLE</p>
                <p className="memorable-heading-2">EXPERIENCES</p>
            </div>
            <div>
                <div>
                    <details style={{ cursor: 'pointer', marginBottom: '20px' }}>
                        <summary className="memorable-list-opener" >
                            Chef on Board
                            <span className="memorable-list-icon">
                                <HiArrowRight size={'20px'} color="#000" style={{ marginTop: '5px' }} />
                            </span>
                        </summary>
                        <div className="memorable-details-container">
                            <div style={{textAlign:'start'}}>
                                <p className="memorable-detail-1st-para">amalfi flavors, at sea level</p>
                                <p className="memorable-detail-2nd-para">This is an enjoyable and delicious experience, full of taste and adventure (from 18:30 to 21:00). An unusual way to enjoy the authentic Neapolitan cuisine.</p>
                                <button className="memorable-detail-button">more details<HiArrowRight className="button-arrow"/></button>
                            </div>
                            <img src={MemorableImage1} alt="dining" className="memorable-image-1"/>
                        </div>
                    </details>
                    <details style={{ cursor: 'pointer', marginBottom: '20px' }}>
                        <summary className="memorable-list-opener">
                            Fine Driving on the Amalfi Coast
                            <span className="memorable-list-icon" >
                                <HiArrowRight size={'20px'} color="#000" style={{ marginTop: '5px' }} />
                            </span>
                        </summary>
                        <div className="memorable-details-container">
                            <div style={{textAlign:'start'}}>
                                <p className="memorable-detail-1st-para">a dose of retro magic</p>
                                <p className="memorable-detail-2nd-para">Few places in Italy exemplify la dolce vita quite like the Amalfi Coast...</p>
                                <button className="memorable-detail-button">more details<HiArrowRight className="button-arrow"/></button>
                            </div>
                            <img src={MemorableImage2} alt="dining"  className="memorable-image-2"/>
                        </div>
                    </details>
                    <details style={{ cursor: 'pointer', marginBottom: '20px' }}>
                        <summary className="memorable-list-opener">
                            Romance Retreat
                            <span className="memorable-list-icon">
                                <HiArrowRight size={'20px'} color="#000" style={{ marginTop: '5px' }} />
                            </span>
                        </summary>
                        <div className="memorable-details-container">
                            <div style={{textAlign:'start'}}>
                                <p className="memorable-detail-1st-para">a starry-eyed weekend stay</p>
                                <p className="memorable-detail-2nd-para">With our dreamy cliff-side setting and pared-back, sophisticated style, Casa Angelina is the ultimate romantic getaway for loved-up couples.</p>
                                <button className="memorable-detail-button">more details<HiArrowRight className="button-arrow"/></button>
                            </div>
                            <img src={MemorableImage3} alt="dining" className="memorable-image-3" />
                        </div>
                    </details>
                    <details style={{ cursor: 'pointer', marginBottom: '20px' }}>
                        <summary className="memorable-list-opener">
                            Body & Soul
                            <span className="memorable-list-icon">
                                <HiArrowRight size={'20px'} color="#000" style={{ marginTop: '5px' }} />
                            </span>
                        </summary>
                        <div className="memorable-details-container" >
                            <div style={{textAlign:'start'}}>
                                <p className="memorable-detail-1st-para">getting back to your best self</p>
                                <p className="memorable-detail-2nd-para">Decompress with this three-night wellness package, which is all about making you feel fit, healthy and stress-free.</p>
                                <button className="memorable-detail-button">more details<HiArrowRight className="button-arrow"/></button>
                            </div>
                            <img src={MemorableImage4} alt="dining" className="memorable-image-4" />
                        </div>

                    </details>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default HomepageSection4