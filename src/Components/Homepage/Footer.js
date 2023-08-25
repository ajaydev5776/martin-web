import React from "react";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';



const Footer = () => {
    return (
        <>
            <div className="footer-main-container">
                <div style={{textAlign:'start'}}>
                <h1 className="footer-company-name">Casa Angelina</h1>
                <p className="footer-address">Via Capriglione, 147<br/>
                    84010 Praiano<br/>
                    Amalfi Coast, SA<br/>
                    ITALY
                </p>
                <p className="footer-address">ph +39 089 8131333</p>
                <p className="footer-address">fax +39 089 874266</p>
                </div>
                <div className='footer-registration'>
                    <p>© Casa Angelina 2023 | all rights reserved</p>
                    <div className="footer-social-logo-container">
                        <BiLogoFacebook className="footer-social-logo"/>
                        <AiOutlineInstagram className="footer-social-logo"/>
                        <BsTwitter className="footer-social-logo"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;