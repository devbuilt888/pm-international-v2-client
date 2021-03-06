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
    const [packName, setPackName] = useState('managerPack');
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

    let boliviaSign = (packName === "managerPack") ? 728 : 187;
    let colombiaSign = (packName === "managerPack") ? 778 : 194.05;
    let costaricaSign = (packName === "managerPack") ? 768 : 191;
    let ecuadorSign = (packName === "managerPack") ? 424 : 191.80;

    let ecuadorEa = (packName === "managerPack") ? 414.40 : 156.80;
    let boliviaEa = (packName === "managerPack") ? 679 : 152;
    // let boliviaEa = (packName === "managerPack") ? 679 : 0.1;
    let colombiaEa = (packName === "managerPack") ? 716 : 159.05;
    let costaricaEa = (packName === "managerPack") ? 700 : 156;


    const renderContent = () => {

        if (country === '') {
            return (
                //  show loader on certain state events
                // <Loader />
                <div>
                    {/* content of this props ='Para empezar haz click en tu pais:' */}
                    <LogoSpan messageTop={t('msgTop.title')} formDisplay={false} />
                    <CountryFlags setCountry={setCountry} />
                    <Footer />
                </div>
            )
        }
        else if (form === '') {
            return (
                <div>
                    {/* <LogoSpan messageTop={'Ahora selecciona una opcion:'} /> */}
                    <LogoSpan messageTop={t('msgTop.option')} formDisplay={false} />
                    <CountryFlags setCountry={setCountry} />
                    <OrderOptions setForm={setForm} />
                    <Footer />
                </div>
            )
        }
        // else if (form === 'shop') {
        //     if (country === 'bolivia') {
        //         return <div>
        //             {/* messsageTop= Envio Automatico: Bolivia */}
        //             <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} />
        //             <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$124.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
        //             <AutoShip inputPayment={boliviaEa} country={country} />
        //             <Footer />
        //         </div>

        //     } else if (country === 'colombia') {
        //         return <div>
        //             {/* messsageTop= Envio Automatico: Bolivia */}
        //             <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} />
        //             <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$124.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
        //             <AutoShip inputPayment={boliviaEa} country={country} />
        //             <Footer />
        //         </div>

        //     } else if (country === 'ecuador') {
        //         return <div>
        //             {/* messsageTop= Envio Automatico: Bolivia */}
        //             <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} />
        //             <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$124.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
        //             <AutoShip inputPayment={boliviaEa} country={country} />
        //             <Footer />
        //         </div>

        //     } else {
        //         return <div>
        //             {/* messsageTop= Envio Automatico: Bolivia */}
        //             <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} />
        //             <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$124.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
        //             <AutoShip inputPayment={boliviaEa} country={country} />
        //             <Footer />
        //         </div>
        //     }
        // }
        else if (form === 'autoship') {
            if (country === 'bolivia') {
                console.log(boliviaEa);
                return (
                    <div>
                        {/* messsageTop= Envio Automatico: Bolivia */}
                        <LogoSpan messageTop={t('msgTop.auto.autoB')} flag={'bolivia flag'} formDisplay={true} formDownload={"eaBolivia"}/>
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$651 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$124.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
                        <AutoShip inputPayment={boliviaEa} country={country} />
                        <Footer />
                    </div>
                )
            } else if (country === 'colombia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoCo')} flag={'co flag'} formDisplay={true} formDownload={"eaColombia"}/>
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$688 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$131.05USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
                        <AutoShip inputPayment={colombiaEa} country={country} />
                        <Footer />

                    </div>)
            } else if (country === 'ecuador') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoE')} flag={'ecuador flag'} formDisplay={true} formDownload={"eaEcuador"}/>
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 3x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$386.40 USD'} quantityTag={'x3'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$128.80USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
                        <AutoShip inputPayment={ecuadorEa} country={country} />
                        <Footer />

                    </div>
                )
            } else {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.auto.autoCr')} flag={'cr flag'} formDisplay={true} formDownload={"eaCostarica"} />
                        <Package packageType={t('pack.titleAs')} packageName={"Fitline Optimal set EA* 6x (Basics, Restorate citrus & Activize Oxyplus)"} price={'$672 USD'} quantityTag={'x6'} package2Name={'TP EA 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$128.00USD'} quantity2Tag={'x1'} isAutoship={true} selectPackage={setPackName} />
                        <AutoShip inputPayment={costaricaEa} country={country} />
                        <Footer />

                    </div>
                )
            }
        }
        else if (form === 'signup') {
            if (country === 'bolivia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regB')} flag={'bolivia flag'} formDisplay={true} formDownload={"rgBolivia"}/>
                        <StarterKit kitEcuador={false} />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$700USD'} quantityTag={'x5+1'} package2Name={'TP start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$159.00USD'} quantity2Tag={'x1'} selectPackage={setPackName} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} country={country} inputPayment={boliviaSign} />
                        <Footer />
                    </div>
                )
            } else if (country === 'colombia') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regCo')} flag={'co flag'} formDisplay={true} formDownload={"rgColombia"}/>
                        <StarterKit kitEcuador={false} />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$750USD'} quantityTag={'x5+1'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$166.05USD'} quantity2Tag={'x1'} selectPackage={setPackName} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedulaNIT')} country={country} inputPayment={colombiaSign} />
                        <Footer />
                    </div>
                )
            } else if (country === 'ecuador') {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regE')} flag={'ecuador flag'} formDisplay={true} formDownload={"rgEcuador"}/>
                        <StarterKit kitEcuador={true} />
                        <Package packageType={t('pack.titleReg')} packageName={'Pedido de prueba B.A.R. 3x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$396USD'} quantityTag={'x3'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$163.80USD'} quantity2Tag={'x1'} selectPackage={setPackName} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} country={country} inputPayment={ecuadorSign} />
                        <Footer />
                    </div>
                )
            } else {
                return (
                    <div>
                        <LogoSpan messageTop={t('msgTop.register.regCr')} flag={'cr flag'} formDisplay={true} formDownload={"rgCostarica"}/>
                        <StarterKit kitEcuador={false} />
                        <Package packageType={t('pack.titleReg')} packageName={'Quickstart B.A.R. 6x (Basics, Restorate citrus & Activize Oxyplus)'} price={'$740USD'} quantityTag={'x5+1'} package2Name={'TP Start 1x (Basics, Restorate citrus & Activize Oxyplus)'} price2={'$163.00USD'} quantity2Tag={'x1'} selectPackage={setPackName} isAutoship={false} />
                        <SignupForm cedula={t('govId.cedula')} country={country} inputPayment={costaricaSign} />
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
    const [country, setCountry] = useState("");
    const [amount, setAmount] = useState("")
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
            setCountry(response.data.country);
            setAmount(response.data.amount);
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
                    <input type="hidden" name="amount" value={amount} />
                    <input type="hidden" name="country" value={country} />
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