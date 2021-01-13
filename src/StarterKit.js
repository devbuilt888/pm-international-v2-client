import React from 'react';
import starterkit from './images/starterKit.PNG';
import ecuadorKit from './images/Activize.jpg';
import { useTranslation } from 'react-i18next';
import { useState} from 'react';
import { useEffect } from 'react';


const StarterKit = (props) => {
    const { t, i18n } = useTranslation('common');
    let [kitEcuador, setKitEcuador] = useState(false);

    useEffect(() => {
    setKitEcuador(props.kitEcuador);
    }, []);
    return (
        <div className="ui grid">
            <div className="greyBox option sixteen wide column">
                {/* to be moved into package component */}

                <div className="ui grid">
                    <div className="seven wide column productBox">
                        <div className=" borderSolid">
                            <i className="check circle icon checkMark"></i>
                            <h5 className="redText">{t("startK.includes")}</h5>
                            <div className=" borderSolid">
                                <img className="starterkit ui image" alt="bolivia flag" src={kitEcuador ? ecuadorKit : starterkit} />
                            </div>
                            <div className="descriptionProduct">
                                <h5>{kitEcuador ?  "Demo Activize Oxyplus" : "Starter Kit - Demo bag"}</h5>
                                <p>{kitEcuador ? t("startK.ecuadorKit") : t("startK.kit")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};

export default StarterKit;
