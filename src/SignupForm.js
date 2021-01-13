import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { getUser, createUser, getToken } from './services/apiService';


const SignupForm = (props) => {
    const { t, i18n } = useTranslation('common');
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [formSubmitted, setFormSubmitted] = useState("false");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [govId, setGovId] = useState("");
    const [dob, setDob] = useState("");
    const [sponsorName, setSponsorName] = useState("");
    const [sponsorTP, setSponsorTP] = useState("");
    // const [orderId, setOrderId] = useState("");
    const [token, setToken] = useState("");

    let ammount = props.inputPayment;


    //handle user input and send as props up, use on form submit
    const rand = function () {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    const orderId = rand();
    // const handleServerResponse = (ok, msg, form) => {
    //     setServerState({
    //         submitting: false,
    //         status: { ok, msg }
    //     });
    //     // if (ok) {
    //     //     form.reset();
    //     // }
    // };

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

        const form = { firstName, lastName, email, phone, street, zipCode, city, govId, dob, sponsorName, sponsorTP, orderId};
        createUser(form)
        // .then(getUser(orderId));

        // console.log(form);
        // setToken (getToken());
        // formspree api call with e.target of form
        // const formSpree = e.target;
        // setServerState({ submitting: true });
        // axios({
        //     method: "post",
        //     url: "https://formspree.io/myybzdqy",
        //     data: new FormData(formSpree)
        // })
        //     .then(r => {
        //         toggleFormAppear();
        //         handleServerResponse(true, "Thanks!", formSpree);
        //     })
        //     .catch(r => {
        //         handleServerResponse(false, r.response.data.error, form);
        //     });
    };

    return (
        <div className="ui grid presetComponent">
            <div className="greyBox option sixteen wide column">
                <h4 className="text borderLabel">{t("signUpForm.title")}</h4>
                {/* original event */}
                {/* onSubmit={handleOnSubmit} */}
                <form className={formSubmitted ? "ui form" : " disappearSubmit"} id="formSignup" onSubmit={handleOnSubmit}>
                    <h4 className="ui dividing header">{t("signUpForm.fillInfo")}</h4>
                    <div className="field">
                        <div className="three fields">
                            <div className="three wide field">
                                <div className="ui grid">
                                    <div className="two wide column">
                                        <input type="radio" id="mr" name="title" value="Sr" />
                                        <label htmlFor="mr">{t("signUpForm.typeA")}</label>
                                    </div>
                                    <div className="three wide column">
                                        <input type="radio" id="mrs" name="title" value="Sra" />
                                        <label htmlFor="mr">{t("signUpForm.typeB")}</label>
                                    </div>

                                    <div className="three wide column">
                                        <input type="radio" id="other" name="title" value="Empresa" />
                                        <label htmlFor="mr">{t("signUpForm.typeC")}</label>
                                    </div>
                                </div>

                            </div>

                            <div className="field">
                                <label>{t("signUpForm.name")}</label>
                                <input type="text" name="shipping[first-name]" placeholder={t("signUpForm.name")} required value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="field">
                                <label>{t("signUpForm.lastName")}</label>
                                <input type="text" name="shipping[last-name]" placeholder={t("signUpForm.lastName")} value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="seven wide field">
                            <label>{t("signUpForm.email")}</label>
                            <input type="email" name="shipping[email]" placeholder={t("signUpForm.email")} value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="seven wide field">
                            <label>{t("signUpForm.phone")}</label>
                            <input type="number" name="shipping[phone]" placeholder={t("signUpForm.phone")} value={phone} onChange={e => setPhone(e.target.value)} required />

                        </div>

                    </div>
                    <div className="two fields">
                        <div className="nine wide field">
                            <label>{t("signUpForm.address")}</label>
                            <input type="text" name="shipping[address]" placeholder={t("signUpForm.address")} value={street} onChange={e => setStreet(e.target.value)} required />
                        </div>
                        <div className="three wide field">
                            <label>{t("signUpForm.zipcode")}</label>
                            <input type="text" name="shipping[zipcode]" placeholder={t("signUpForm.zipcode")} value={zipCode} onChange={e => setZipCode(e.target.value)} required />

                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four wide field">
                            <label>{t("signUpForm.city")}</label>
                            <input type="text" name="shipping[city]" placeholder={t("signUpForm.city")} required value={city} onChange={e => setCity(e.target.value)} />
                        </div>
                        <div className="four wide field">
                            <label>{props.cedula}</label>
                            <input type="text" name="shipping[govID]" placeholder={props.cedula} required value={govId} onChange={e => setGovId(e.target.value)} />

                        </div>
                        <div className="four wide field">
                            <label>{t("signUpForm.dob")}</label>
                            <input type="date" name="shipping[birthday]" placeholder={t("signUpForm.dob")} required value={dob} onChange={e => setDob(e.target.value)} />

                        </div>
                    </div>
                    <div className="fields">
                        <div className="sixteen wide field">
                            <input type="radio" id="policy" name="policy" value="agreeToPolicy" required />
                            <label htmlFor="policy">{t("signUpForm.agreeTerms")} <a href={t("signUpForm.linkRef")} target="_blank">{t("signUpForm.textLink")}</a></label>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four wide field">
                            <label>{t("signUpForm.nameSponsor")}</label>
                            <input type="text" name="shipping[sponsorName]" placeholder={t("signUpForm.nameSponsor")} required value={sponsorName} onChange={e => setSponsorName(e.target.value)} />
                        </div>
                        <div className="four wide field">
                            <label>{t("signUpForm.numberSponsor")}</label>
                            <input type="number" name="shipping[sponsorNumber]" placeholder={t("signUpForm.numberSponsor")} required value={sponsorTP} onChange={e => setSponsorTP(e.target.value)} />
                        </div>
                    </div>

                    <div className="fields">
                        <div className="sixteen wide field">
                            <input type="radio" id="sponsor" name="sponsor" value="agreeToSponsor" required />
                            <label htmlFor="policy">{t("signUpForm.agreeReg")} </label>
                        </div>
                    </div>
                    {/* <input type="submit" value="enviar" /> */}
                    {/* display e */}
                    <button type="submit" className=" ui button blueBtn">{t('signUpForm.button')}</button>
                </form>
                <div className={formSubmitted ? "disappearSubmit" : "formSentMsg"}>

                    <form sname="PrePage" id="formAuthorizeNetTestPage" name="formAuthorizeNetTestPage" method="post" action="https://accept.authorize.net/payment/payment">
                        <p className="successMessage">Your form was successfully submitted!</p>
                        <h2>Now advance to payment by clicking the button below</h2>
                        <br></br>
                        <input type="hidden" name="redirectForm" name="token" value={token} /> <button type="submit" className="ui button blueBtn">{t('signUpForm.pay')}</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default SignupForm;