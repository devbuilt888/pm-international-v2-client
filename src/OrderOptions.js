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

    const sendFormUp = (form) => {
        props.setForm(form);
    }
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
            </div>
        </div>
    )
}

export default OrderOptions;