import React from 'react';
import './style.css';

const Loader = () => {

    return (
        <div className="loaderStyle">
            <div className="ui active dimmer">
                <div className="ui text loader">Procesando</div>
            </div>
            <p></p>
        </div>
    )
}

export default Loader;