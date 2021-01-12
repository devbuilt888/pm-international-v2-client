import React, { useState } from 'react';
// import Loader from './Loader';
import LogoSpan from './LogoSpan';
import CountryFlags from './CountryFlags';
import OrderOptions from './OrderOptions';
import Package from './Package';
import SignupForm from './SignupForm';
import AutoShip from './AutoShip';
import StarterKit from './StarterKit';
import Footer from './Footer';
import axios from 'axios';
import { getUser } from './services/apiService';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
// import useRedirectToHttps from './useRedirectToHttps';



//make this state into hooks and class into functional component
// class App extends React.Component {
const App = () => {
    const [country, setCountry] = useState('');
    const [form, setForm] = useState('');
    const [pack, setPack] = useState('');
    const [packName, setPackName] = useState('');
    const [price, setPrice] = useState('');
    const { t, i18n } = useTranslation('common');


    // this was previously the state for this class comp
    // state = { country: '', package: '', form: '', pack: '', packName: '', price: '' };

    // setCountry = (countrySet) => {
    //     this.setState({ country: countrySet });
    //     console.log(countrySet);
    // }
    // setForm = (form) => {
    //     this.setState({ form: form });
    //     console.log(form);
    // }

    // const signupBolivia = () => {
    //     return (
    //         <React.Fragment >
    //             <input type="hidden" name="LinkId" value="bee658cb-adfa-454e-a4aa-8d211270d257" />
    //             <input type="image" src="//testcontent.authorize.net/images/buy-now-gold.gif" />
    //         </React.Fragment>
    //     )
    // }

    const boliviaSign = (packName === "managerPack") ? "8be2279b-798b-4f9b-8d83-9bfe2bb67192" : "ab84d345-c8e0-4876-b486-3bc95c5e7644";
    const colombiaSign = (packName === "managerPack") ? "55cb47b2-4a28-4f84-8e1a-fa2b6128963e" : "37daf370-a46b-4029-8412-628c877bde3e";
    const costaricaSign = (packName === "managerPack") ? "cd606a8d-4b32-4e04-9844-cfd7ed386e63" : "ab2ca069-a546-42ee-987c-a69c71b224c4";
    const ecuadorSign = (packName === "managerPack") ? "6a188dc8-24b5-4fd5-bcca-ebbd8a04f899" : "a5755eac-52cc-4b9b-8d5c-0228545ced9f";

    const ecuadorEa = "e045dc57-0698-4600-9596-090bab48585e";
    const boliviaEa = "b5dfaba4-3d78-4285-a204-df4a0367708f";
    const colombiaEa = "eb60ca2e-90bc-400f-94d9-a55c9eb5d013";
    const costaricaEa = "b62727b1-7eda-48f9-9260-8180e5da6a29";


    const renderContent = () => {

        if (country === '') {
            return (
                //  show loader on certain state events
                // <Loader />
                <div>
                    {/* content of this props ='Para empezar haz click en tu pais:' */}
                    <LogoSpan messageTop={t('msgTop.title')} />
                    <CountryFlags setCountry={setCountry} />
                    <Footer />
                </div>
            )
        }
        else if (form === '') {
            return (
                <div>
                    {/* <LogoSpan messageTop={'Ahora selecciona una opcion:'} /> */}
                    <LogoSpan messageTop={t('msgTop.option')} />
                    <CountryFlags setCountry={setCountry} />
                    <OrderOptions setForm={setForm} />
                    <Footer />
                </div>
            )
        }
        else if (form === 'autoship') {
            if (country === 'bolivia') {
                return (
                    <div>
                        {/* messsageTop= Envio Automatico: Bolivia */}
                        <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} />
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} isAutoship={true} selectPackage={setPack} />
                        <AutoShip inputPayment={boliviaEa} />
                        <Footer />
                    </div>
                )
            } else if (country === 'colombia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoCo')} flag={'co flag'} />
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$688 USD'} quantityTag={'x6'} isAutoship={true} selectPackage={setPack} />
                        <AutoShip inputPayment={colombiaEa} />
                        <Footer />

                    </div>)
            } else if (country === 'ecuador') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoE')} flag={'ecuador flag'} />
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$386 USD'} quantityTag={'x3'} isAutoship={true} selectPackage={setPack} />
                        <AutoShip inputPayment={ecuadorEa} />
                        <Footer />

                    </div>
                )
            } else {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoCr')} flag={'cr flag'} />
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$672 USD'} quantityTag={'x6'} isAutoship={true} selectPackage={setPack} />
                        <AutoShip inputPayment={costaricaEa} />
                        <Footer />

                    </div>
                )
            }
        }
        else if (form === 'signup') {
            if (country === 'bolivia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regB')} flag={'bolivia flag'} />
                        <StarterKit />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$700USD'} quantityTag={'x5+1'} package2Name={'TP start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$159.00USD'} quantity2Tag={'x1'} selectPackage={setPack} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} inputPayment={boliviaSign} />
                        <Footer />
                    </div>
                )
            } else if (country === 'colombia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regCo')} flag={'co flag'} />
                        <StarterKit />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$750USD'} quantityTag={'x5+1'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$166.05USD'} quantity2Tag={'x1'} selectPackage={setPack} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedulaNIT')} inputPayment={colombiaSign} />
                        <Footer />
                    </div>
                )
            } else if (country === 'ecuador') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regE')} flag={'ecuador flag'} />
                        <StarterKit />
                        <Package packageType={t('pack.titleReg')} packageName={'Pedido de prueba B.A.R. 3x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$396USD'} quantityTag={'x3'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$163.80USD'} quantity2Tag={'x1'} selectPackage={setPack} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} inputPayment={ecuadorSign} />
                        <Footer />
                    </div>
                )
            } else {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regCr')} flag={'cr flag'} />
                        <StarterKit />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$740USD'} quantityTag={'x5+1'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$163.00USD'} quantity2Tag={'x1'} selectPackage={setPack} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} inputPayment={costaricaSign} />
                        <Footer />
                    </div>
                )
            }
        }
    }
    return (
        <div className="ui container mainDiv">
            <Router>
                <Switch>
                    <Route exact path="/">
                        {renderContent()}
                    </Route>
                    <Route path="/category/:id" >
                        <LogoSpan messageTop={t('msgTop.register.success')} />
                        <Child />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    let { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [govId, setGovId] = useState("");
    const [dob, setDob] = useState("");
    const [sponsorTP, setSponsorTP] = useState("");
    const [sponsorName, setSponsorName] = useState("");
    const [orderId, setOrderId] = useState("");
    const [tpNumber, setTpNumber] = useState("");



    useEffect(() => {
        getUser(id).then(response => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setStreet(response.data.street);
            setZipCode(response.data.zipCode);
            setCity(response.data.city);
            setGovId(response.data.govId);
            setDob(response.data.dob);
            setSponsorTP(response.data.sponsorTP);
            setSponsorName(response.data.sponsorName);
            setOrderId(response.data.orderId);
            setTpNumber(response.data.tpNumber);
        }).then(() => {
            triggerSubmit();
        });

    }, []);

    const triggerSubmit = () => {
        const goButton = document.getElementById("go");
        goButton.click();
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        // formspree api call with e.target of form
        const formSpree = e.target;
        // setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/myybzdqy",
            data: new FormData(formSpree)
        })
            .then(r => {
                // toggleFormAppear();
                // handleServerResponse(true, "Thanks!", formSpree);
            })
            .catch(r => {
                // handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <div className="ui grid presetComponent">
            <div className="greyBox option sixteen wide column">
                <p className="successMessage">Your order #{orderId} was successfully processed!</p>
                <h3>You will receive an email shortly with your order's information, and you may now close this page.</h3>
                <br></br>
                <form className="ui form" id="formSpree" onSubmit={handleOnSubmit}>
                    <input type="hidden" name="first-name" value={firstName} />
                    <input type="hidden" name="last-name" value={lastName} />
                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="phone" value={phone} />
                    <input type="hidden" name="address" value={street} />
                    <input type="hidden" name="zipcode" value={zipCode} />
                    <input type="hidden" name="city" value={city} />
                    <input type="hidden" name="govID" value={govId} />
                    <input type="hidden" name="birthday" value={dob} />
                    <input type="hidden" name="sponsorNumber" value={sponsorTP} />
                    <input type="hidden" name="sponsorName" value={sponsorName} />
                    <input type="hidden" name="orderId" value={orderId} />
                    <input type="hidden" name="tpNumber" value={tpNumber} />
                    <button type="submit hidden" id="go" className=" ui button hiddenBtn"></button>
                </form>
            </div>
        </div>
    );
}
export default App;