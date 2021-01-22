import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// "countryOptions":{
//     "optionsTitle":"",
//     "optionAs": "",
//     "optionReg": ""
// }


// class OrderOptions extends React.Component {
const OrderOptions = (props) => {


    const { t, i18n } = useTranslation('common');

    // state = {form: ''};
    const [form, setForm] = useState('');

    const setSignUp = () => {
        setForm('signup');
        sendFormUp('signup');
    }
    const setAutoship = () => {
        setForm('autoship' );
        sendFormUp('autoship');
    }

    const setShop = () => {
        setForm('shop');
        sendFormUp('shop')
    }

    const sendFormUp = (form) => {
        props.setForm(form);
    }

    // make shop be handled by app js and return a shop form, along with logic for price for authorize net, also logic for app js return other components for shop with products
    //Add pdf to be downloaded in all pages
    return (
        <div className="ui grid orderOptions backgroundStyle">
            <div className="greyBox option sixteen wide column">
                <h4 className="text borderLabel">{t("countryOptions.optionsTitle")}</h4>
                <div className="optionButton borderSolid" onClick={setAutoship}>
                {t("countryOptions.optionAs")}
                </div>
                <div className="optionButton borderSolid" onClick={setSignUp}>
                    {t("countryOptions.optionReg")}
                </div>
                {/* <div className="optionButton borderSolid" onClick={setShop}>
                    {t("countryOptions.optionReg")}
                </div> */}
            </div>
        </div>
    )
}

export default OrderOptions;