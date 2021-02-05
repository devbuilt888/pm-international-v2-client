import React, { useState } from "react";
import './style.css';

const Footer = () => {

    const [contact, setContact] = useState(false);
    // const [impressum, setImpressum] = useState("");
    // const [copyright, setCopyright] = useState("");
    // const [copyright, setCopyright] = useState("");

    const conditionalRender = () => {
        if (contact) {
            return <div id="contactTab" className="contactTab">
                <h3>PM-International USA</h3>
                <p>7245 16th St East
        Sarasota, FL 34243 / USA</p>
               <h4> Email: pmi-fpo-americas@pm-international.com</h4>
            </div>
        } else {
            return <div></div>
        }
    }
    const toggleContact = () => {
        if (contact) {
            setContact(false);
        } else {
            setContact(true);
        }
    }

    return <div>
        <div className="ui grid blueFooter">
            <div className=" one wide column">

            </div>
            <div className=" four wide column">
                <p>	&copy; Copyright 2021 Pm-International </p>
            </div>

            <div className=" three wide column">
                {/* <a href="#" onClick={setContact}>

            </a> */}
                <a onClick={toggleContact}>
                    <p>Contact us</p>
                </a>
            </div>

            <div className=" three wide column">
                <a href="https://1drv.ms/w/s!AgWaYTfHecEu5ElKhgvmeVDOp_Sr?e=xG8K9f" target="_blank">

                    <p>Cookies</p>
                </a>
            </div>

            <div className="  three wide column">
                <a href="https://1drv.ms/w/s!AgWaYTfHecEu5EVEvgsr3bj59FtW?e=liummk" target="_blank">
                    <p>Privacy Policy</p>
                </a>
            </div>
            <div className=" two wide column">
                <a href="https://1drv.ms/w/s!AgWaYTfHecEu5EeqHQPCA75HCqSH?e=mpuPID" target="_blank">
                    <p>Impressum</p>
                </a>
            </div>
            <div>
                {conditionalRender()}
            </div>

        </div>

<div className="blank">
</div>
    </div>
}

export default Footer;