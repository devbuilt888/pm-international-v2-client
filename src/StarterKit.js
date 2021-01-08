import React from 'react';
import starterkit from './images/starterKit.PNG';
import { useTranslation } from 'react-i18next';

const StarterKit = (props) => {
    const { t, i18n } = useTranslation('common');

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
                                <img className="starterkit ui image" alt="bolivia flag" src={starterkit} />
                            </div>
                            <div className="descriptionProduct">
                                <h5>Starter Kit - Demo bag</h5>
                                <p>{t("startK.kit")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};

export default StarterKit;
