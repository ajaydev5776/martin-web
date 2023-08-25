import React from "react";
import './../style.css';
import GormetIntroPic from '../../Assets/gourmetIntropic.jpg';
import GormetBigImage1 from '../../Assets/gourmet-big-image-1.jpg';
import GormetBigImage2 from '../../Assets/Gourmet-big-image-2.jpg';
import GormetBigImage3 from '../../Assets/Gourmet-big-image-3.jpg';
import GormetBigImage4 from '../../Assets/Gourmet-big-image-4.jpg';

const HomepageSection3 = () => {
    return (
        <>
            <div className="Homepage-section-3">
                <div className="homepage-gourmet-left-div">
                    <div className="Homepage-fourmet-heading-container">
                        <p className="Homepage-gourmet-heading-1">restaurants and bars</p>
                        <p className="Homepage-gourmet-heading-2">GOURMET</p>
                        <p className="Homepage-gourmet-heading-3">THE EXPERIENCE</p>
                    </div>
                    <div>
                        <img src={GormetBigImage1} alt="sweet" className="gourmet-big-image-1"/>
                        <p className="homepage-gourmet-bigimage1-description-1">Un Piano Nel Cielo, A Fine Dining Restaurant</p>
                        <p className="homepage-gourmet-bigimage1-description-2">Campania-inspired cuisine paired with spectacular sea views</p>
                    </div>
                    <div className="gourmet-big-image-container-2">
                        <div>
                            <img src={GormetBigImage2} alt="glass" className="gourmet-big-image-2" />
                            <p className="homepage-gourmet-bigimage1-description-1">Seascape Casual Dining</p>
                            <p className="homepage-gourmet-bigimage1-description-2">RELAXED ALL DAY DINING</p>
                        </div>
                        <div>
                            <img src={GormetBigImage3} alt="glass" className="gourmet-big-image-3" />
                            <p className="homepage-gourmet-bigimage1-description-1">Seascape Cocktail Bar</p>
                            <p className="homepage-gourmet-bigimage1-description-2">DELICIOUS COCKTAILS & STUNNING VIEWS</p>
                        </div>
                    </div>
                    <div>
                        <img src={GormetBigImage4} alt="sweet" className="gourmet-big-image-1" />
                        <p className="homepage-gourmet-bigimage1-description-1">Wine Cellar</p>
                        <p className="homepage-gourmet-bigimage1-description-2">AN AWARD-WINING WINE SELECTION</p>
                    </div>
                    <div className="gourmet-big-image-container-2">
                        <div>
                            <img src={GormetBigImage2} alt="glass" className="gourmet-big-image-2" />
                            <p className="homepage-gourmet-bigimage1-description-1">Breakfast</p>
                            <p className="homepage-gourmet-bigimage1-description-2">MEDITERRANEAN MORNINGS START WITH A FULL-SPREAD BREAKFAST</p>
                        </div>
                        <div>
                            <img src={GormetBigImage3} alt="glass" className="gourmet-big-image-3" />
                            <p className="homepage-gourmet-bigimage1-description-1">Rooftop Terrace</p>
                            <p className="homepage-gourmet-bigimage1-description-2">PRIVATE DINNERS AND PARTIES</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={GormetIntroPic} alt="glass" className="gourmet-Intro-pic" />
                    <div>
                        <h2>the stoporrthe</h2>
                        <p>Amalfi-style gourmet dinner.
                            Each dish on the menu is inspired by the flavors and ingredients of Campania.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageSection3