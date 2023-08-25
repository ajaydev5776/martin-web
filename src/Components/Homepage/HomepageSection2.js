import React, { useEffect} from "react";
import './../style.css';
import AmericanExpress from '../../Assets/american_express.png';
import Serandipians from '../../Assets/serandipians.png';
import TheLeadingHotel from '../../Assets/the-leading-hotel.png';
import EthosImg from '../../Assets/ethos-image.jpg';
import Virtuoso from '../../Assets/virtuoso.png';
import EthosPic from '../../Assets/ethosPic.jpg';
import MembersAwardWinner from '../../Assets/Member-Awards-winner.png';
import RuinartAssamblage from '../../Assets/ruinart-assamblage.jpg';
import Top10HotelItaly from '../../Assets/Top-10-Hotel-Italy.png';
import Forbesverified from '../../Assets/forbes-verified.png';
import ForbesReport from '../../Assets/forbes-report.png';
import Designrush from '../../Assets/designrush-com.png';
import PrIntro from '../../Assets/prIntro-balcony.jpg';
import BalconyBig from '../../Assets/balcony-big.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import HorizontalScroll from "./HorizontalScroll";


const HomepageSection2 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    // const scrollRef = useRef();
    // const handleWheel = (e) => {
    //     scrollRef.current.scrollTop += -10;
    // }

    return (
        <>
            <div className="intro-text-container">
                <div className="intro-text">
                    <p><strong>Tastemakers of Understated Chic Luxury</strong>
                        <br />
                        <br />
                        Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.
                        <br />
                        <br />
                        Our 37-room hotel serves as a sanctuary, bearing a fresh, white-washed aesthetic that accentuates every space, from the azure sea and sky outside to the contemporary artworks on display inside.
                        <br />
                        <br />
                        We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.

                    </p>
                </div>
            </div>

            {/* four footer image */}
            <div className="logo-container">
                <img src={AmericanExpress} alt="logo" />
                <img src={Serandipians} alt="logo" />
                <img src={TheLeadingHotel} alt="logo" />
                <img src={Virtuoso} alt="logo" />

            </div>
            <div className="ethos-main-container">
                <div className="ethos-container">
                    <div>
                        <img src={EthosImg} alt='a corner of room' style={{ width: '60%', marginTop: '-4rem' }} />
                    </div>
                    <div className="ethos-main-text">
                        <p className="ethos-text" data-aos="fade-up" data-aos-delay="200">e</p>
                        <p className="ethos-text" data-aos="fade-up" data-aos-delay="300">t</p>
                        <p className="ethos-text" data-aos="fade-up" data-aos-delay="400">h</p>
                        <p className="ethos-text" data-aos="fade-up" data-aos-delay="500">o</p>
                        <p className="ethos-text" data-aos="fade-up" data-aos-delay="600">s</p>
                    </div>
                </div>
                <div>
                    <p data-aos='fade-up' className="ethos-intro-text">Understated chic is our design ethos and subtle details are our raison d’être.</p>
                </div>
                <div className="ethos-2nd-container">
                    <img src={EthosPic} alt="a room corner" style={{ width: '50%', marginBottom: '-4rem' }} />
                    <p data-aos='fade-up' data-aos-delay='200' className="ethos-2nd-text">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
                </div>
            </div>
            <div className="ethos-logo-container">
                <img src={MembersAwardWinner} alt="logo" className="ethos-logo" />
                <img src={RuinartAssamblage} alt="logo" className="ethos-logo" />
                <img src={ForbesReport} alt="logo" className="ethos-logo" />
                <img src={Top10HotelItaly} alt="logo" className="ethos-logo" />
                <img src={Forbesverified} alt="logo" className="ethos-logo" />
                <img src={Designrush} alt="logo" className="ethos-logo" />
            </div>
            <div>
                <p className="ethos-after-logo-text">Clean lines and lashings of white underscore the rich tones of nature’s palette.
                    <br />
                    <br />

                    An airy refuge, our boutique 37-room hotel is a place where guests can rediscover the forgotten rhythms of long, drawn-out days and easy, lingering evenings.
                </p>
            </div>
            <div>
                <p className="ethos-after-logo-text">suites</p>
                <div className="suits-1st-container">
                    <div>
                        <h2 className="suits-1st-heading">PRIVATE</h2>
                        <h2 className="suits-2nd-heading">RETREATS</h2>
                    </div>
                    <img src={PrIntro} alt="balcony" className="suits-1st-logo" />
                </div>
            </div>
            <div className="suits-2nd-container">
                <img src={BalconyBig} alt="balcony of room" className="suits-balcony-image" />
            </div>
            <div className="horizontal-scrolling" >
                <div>
                    <p className="horizontal-main-small-heading">guest services</p>
                </div>
                <div>
                    <p className="horizontal-main-middle-heading">THE EXTRAS</p>
                    <p className="horizontal-main-big-heading">THAT COUNT</p>
                </div>
                <HorizontalScroll>
                    <div className="item"><img src={BalconyBig} alt="balcony" /></div>
                    <div className="item"><img src={BalconyBig} alt="balcony" /></div>
                    <div className="item"><img src={BalconyBig} alt="balcony" /></div>
                    <div className="item"><img src={BalconyBig} alt="balcony" /></div>
                </HorizontalScroll>
            </div>
        </>
    )
}

export default HomepageSection2;