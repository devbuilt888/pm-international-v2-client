import React, { useState } from 'react';
import bolivia from './images/bolivia-flag.png';
import colombia from './images/colombia-flag.png';
import ecuador from './images/ecuador-flag.png';
import costarica from './images/costarica-flag.png';

// class to functional
// class CountryFlags extends React.Component {
const CountryFlags = (props) => {

    const [flagSelected, setFlagSelected] = useState('');

    const setBolivia = () => {
        setFlagSelected('bolivia')
        setCountry('bolivia');
        giveBorderImg('.bolivia');
    }
    const setColombia = () => {
        setFlagSelected('colombia')
        setCountry('colombia');
        giveBorderImg('.colombia');
    }
    const setCostarica = () => {
        setFlagSelected('costarica')
        setCountry('costarica');
        giveBorderImg('.costarica');
    }
    const setEcuador = () => {
        setFlagSelected('ecuador')
        setCountry('ecuador');
        giveBorderImg('.ecuador');

    }
    const setCountry = (country) => {
        props.setCountry(country)
    }
    const giveBorderImg = (flagClass) => {
        var alreadySelected = document.querySelector('.borderImage');
        if (alreadySelected) {
            alreadySelected.classList.remove("borderImage");
        }
        var element = document.querySelector(flagClass);
        element.classList.add("borderImage");
    }
    return (
        <div className="ui grid flagsBody">
            <div className="four wide column labelImg" onClick={setBolivia}>
                <img className="ui small image bolivia" alt="bolivia flag" src={bolivia} />
                <div className="floatLabel">
                    Bolivia
                    </div>
            </div>
            <div className="four wide column labelImg" onClick={setColombia}>
                <img className="ui small image colombia" alt="colombia flag" src={colombia} />
                <div className="floatLabel">
                    Colombia
                    </div>

            </div>
            <div className="four wide column labelImg" onClick={setCostarica}>
                <img className="ui small image costarica" alt="costa rica flag" src={costarica} />
                <div className="floatLabel">
                    Costa Rica
                    </div>

            </div>
            <div className="four wide column labelImg" onClick={setEcuador}>
                <img className="ui small image ecuador" alt="ecuador flag" src={ecuador} />
                <div className="floatLabel">
                    Ecuador
                    </div>
            </div>

            {/* Computer view */}

            {/* <div className="computer only three wide column labelImg" onClick={setBolivia}>
                    <img className="ui small image bolivia" alt="bolivia flag" src={bolivia} />
                    <div className="floatLabel">
                        Bolivia
                    </div>
                </div>
                <div className="computer only three wide column labelImg" onClick={this.setColombia}>
                    <img className="ui small image colombia" src={colombia} alt="colombia flag"/>
                    <div className="floatLabel">
                        Colombia
                    </div>
                </div>
                <div className="computer only three wide column labelImg" onClick={this.setCostarica}>
                    <img className="ui small image costarica" src={costarica} alt="costarica flag"/>
                    <div className="floatLabel">
                        Costa Rica
                    </div>
                </div>
                <div className="computer only three wide column labelImg" onClick={this.setEcuador}>
                    <img className="ui small image ecuador" src={ecuador} alt="costarica flag" />
                    <div className="floatLabel">
                        Ecuador
                    </div>
                </div> */}



            {/* <div className="seven wide tablet only column labelImg" onClick={this.setBolivia}>
                    <img className="ui small image bolivia" src={bolivia} alt="bolivia flag" />
                    <div className="floatLabel">
                        Bolivia
                    </div>
                </div>
                <div className="seven wide tablet only column labelImg" onClick={this.setColombia}>
                    <img className="ui small image colombia" src={colombia} alt="colombia flag"/>
                    <div className="floatLabel">
                        Colombia
                    </div>
                </div>
                <div className="seven wide tablet only column labelImg" onClick={this.setCostarica}>
                    <img className="ui small image costarica" src={costarica} alt="costarica flag"/>
                    <div className="floatLabel">
                        Costa Rica
                    </div>
                </div>
                <div className="seven wide tablet only column labelImg" onClick={this.setEcuador}>
                    <img className="ui small image ecuador" src={ecuador} alt="ecuador flag"/>
                    <div className="floatLabel">
                        Ecuador
                    </div>
                </div> */}
        </div>
    )

}

export default CountryFlags;