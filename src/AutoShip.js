import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import SignupForm from "./SignupForm";
import { createOrder, getToken } from './services/apiService';


const AutoShip = (props) => {
    const { t, i18n } = useTranslation('common');
    const [formSubmitted, setFormSubmitted] = useState("false");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [tpNumber, setTpNumber] = useState("");
    const [token, setToken] = useState("");

    // const [orderId, setOrderId] = useState("");
    // const [serverState, setServerState] = useState({
    //     submitting: false,
    //     status: null
    // });
    // const handleServerResponse = (ok, msg, form) => {
    //     setServerState({
    //         submitting: false,
    //         status: { ok, msg }
    //     });
    //     if (ok) {
    //         form.reset();
    //     }
    // };

    let ammount = props.inputPayment;
    const rand = function () {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    const orderId = rand();

    const toggleFormAppear = () => {
        setFormSubmitted(!formSubmitted);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        //here I can use getToken after a form submit, which is an axios call to the api endpoint for get token
        // setOrderId(rand());
        // getToken(ammount, rand())
        getToken(ammount, orderId)
            .then(response => {
                setToken(response.data.token);
                toggleFormAppear();
            })
            .catch(error => {
                console.error(error);
            });

        const form = { firstName, lastName, email, phone, street, zipCode, city, orderId, tpNumber };
        createOrder(form)
    }

    return (
        <div className="ui grid presetComponent">
            <div className="greyBox option sixteen wide column">
                <h4 className="text borderLabel">{t("automaticShip.title")}</h4>
                <form className={formSubmitted ? "ui form" : " disappearSubmit"} onSubmit={handleOnSubmit}>
                    <div className="three fields">
                        <div className="five wide field">
                            <label>{t("signUpForm.name")}</label>
                            <input type="text" name="shipping[name]" placeholder={t("signUpForm.name")} required value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="nine wide field">
                            <label>{t("signUpForm.lastName")}</label>
                            <input type="text" name="shipping[lastName]" placeholder={t("signUpForm.lastName")} required value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>{t("signUpForm.address")}</label>
                            <input type="text" name="shipping[address]" placeholder={t("signUpForm.address")} required value={street} onChange={e => setStreet(e.target.value)} />

                        </div>
                        <div className="field">
                            <label>{t("signUpForm.city")}</label>
                            <input type="text" name="shipping[city]" placeholder={t("signUpForm.city")} required value={city} onChange={e => setCity(e.target.value)} />
                        </div>
                        <div className="three wide field">
                            <label>{t("signUpForm.zipcode")}</label>
                            <input type="text" name="shipping[zipcode]" placeholder={t("signUpForm.zipcode")} required value={zipCode} onChange={e => setZipCode(e.target.value)} />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>{t("signUpForm.phone")}</label>
                            <input type="number" name="shipping[phone]" placeholder={t("signUpForm.phone")} required value={phone} onChange={e => setPhone(e.target.value)} />

                        </div>
                        <div className="field">
                            <label>{t("signUpForm.email")}</label>
                            <input type="email" name="shipping[email]" placeholder={t("signUpForm.email")} required value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="field borderBlue">
                            <label>{t("automaticShip.teampartnerNumber")}</label>
                            <input type="number" name="shipping[sponsorNumber]" placeholder={t("automaticShip.teampartnerNumber")} required value={tpNumber} onChange={e => setTpNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="sixteen wide field">
                            <input type="radio" id="sponsor" name="sponsor" value="agreeToSponsor" required />
                            <label htmlFor="sponsor">{t("automaticShip.confirmAuto")}</label>
                        </div>
                    </div>
                    <button type="submit" className=" ui button blueBtn">{t('signUpForm.button')}</button>
                </form>
                <div className={formSubmitted ? "disappearSubmit" : "appearSubmit"}>

                    <form sname="PrePage" id="formAuthorizeNetTestPage" name="formAuthorizeNetTestPage" method="post" action="https://accept.authorize.net/payment/payment">
                        <p className="successMessage">Your form was successfully submitted!</p>
                        <h2>Now advance to payment by clicking the button below.</h2>
                        <br></br>
                        <input type="hidden" name="redirectForm" name="token" value={token} /> <button type="submit" className="ui button blueBtn">{t('signUpForm.pay')}</button>

                        {/* src="//testcontent.authorize.net/images/buy-now-blue.gif"  */}
                    </form>
                </div>
            </div>
        </div>
    )
};


export default AutoShip;