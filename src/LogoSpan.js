import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LogoSpan = (props) => {
    const { t, i18n } = useTranslation('common');
    // let [formDisplay, setFormDisplay] = useState(false);
    const [formUrl, setFormUrl] = useState('');
    const [formRequested, setFormRequested] = useState(false);
    // setUpForm();

    useEffect(() => {
        setUpForm();
    });

    const changeForm = () =>{
        setFormRequested(!formRequested);
    }

    
    const setUpForm = () => {
        if (props.formDownload) {

            if (props.formDownload === 'eaEcuador') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5E89Hycz5CQBOmMx?e=X6LnDC")
            } else if (props.formDownload === 'eaColombia') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5FE0EoNQ8D72x2II?e=pxcHuh");
            } else if (props.formDownload === 'eaCostarica') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5FDZTKYDuN8BVS8w?e=NO4Fb7");
            } else if (props.formDownload === 'eaBolivia') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5FIZZpV03E4UvQtL?e=HhaGnR");
            } else if (props.formDownload === 'rgEcuador') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5E89Hycz5CQBOmMx?e=E9KRcr");
            } else if (props.formDownload === 'rgBolivia') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5Fb7UcNZDh4OubvQ?e=J1OJ2k");
            } else if (props.formDownload === 'rgCostarica') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5FXvhtnTol_j7XQ_?e=8kPB8s");
            } else if (props.formDownload === 'rgColombia') {
                setFormUrl("https://1drv.ms/b/s!AgWaYTfHecEu5FXvhtnTol_j7XQ_");
            } else {
                console.log(props.formDownload)
            }
        }
    };

    return (
        <div className="ui grid appBar">
            <div className="main three wide column">
                <svg className="ui logo">
                    <path className="blue" d="M46.116 37.704c-.12 12.431-10.935 18.578-18.484 18.217-9.863-.467-19.741-6.162-22.263-17.315l-5.334-.005c.61 16.846 14.712 26.253 27.596 26.396 19.191.213 30.593-14.514 32.115-27.294.178-1.49.25-2.936.25-4.353h-14.445c.397 1.59.577 3.093.565 4.354z" />
                    <path className="silver" d="M14.712 23.503l.19-.708c1.517-.146 2.814-.357 3.889-.633-.262.736-.542 1.697-.845 2.885l-1.162 4.426 1.445.098c.67.028 1.395-.138 2.177-.51.8-.362 1.502-1.014 2.12-1.938.627-.921.945-1.918.945-2.99 0-1.064-.387-1.903-1.145-2.521-.755-.625-1.917-.931-3.469-.931-1.78 0-3.519.444-5.224 1.343-1.702.881-3.024 2.011-3.954 3.399-.922 1.378-1.377 2.739-1.377 4.082 0 .66.123 1.24.36 1.732.24.487.667.964 1.29 1.436.51.377.765.743.765 1.1 0 .231-.085.429-.253.582-.165.163-.367.236-.597.236-.617 0-1.21-.424-1.787-1.273-.575-.853-.86-1.928-.86-3.228 0-2.39.907-4.564 2.732-6.525 2.379-2.583 5.576-3.878 9.595-3.878 1.53 0 2.777.201 3.752.6.982.399 1.714.946 2.192 1.639.49.695.74 1.446.74 2.254 0 1.027-.342 2.046-1.035 3.04-.682.989-1.69 1.785-3.032 2.395-1.325.61-2.804.914-4.434.914-.255 0-.642-.013-1.18-.048l-1.237 4.9c-.207.831-.445 1.649-.707 2.455.817.201 1.527.304 2.134.304.762 0 1.587-.148 2.465-.439l-.19.878c-.812.219-1.51.334-2.074.334-.537 0-1.335-.06-2.382-.181-.837-.103-1.515-.153-2.04-.153-1.012 0-2.054.12-3.122.362l.192-.834c1.085-.178 1.827-.436 2.227-.773.563-.472 1.02-1.421 1.377-2.852l2.367-9.437c.105-.439.157-.753.157-.932 0-.168-.067-.311-.2-.439-.14-.141-.3-.206-.487-.208l-.318.037z" />
                    <path className="blue" d="M26.915 51.562l-1.257-16.95c-.273 2.854-.775 5.523-1.505 8.003-.732 2.465-1.565 4.381-2.49 5.731-.935 1.346-1.892 2.292-2.862 2.839-.975.542-1.932.816-2.884.816-.575 0-1.022-.118-1.335-.364-.3-.226-.452-.512-.452-.848 0-.286.107-.527.328-.738.227-.211.517-.314.867-.314.25 0 .607.058 1.08.173.427.115.782.168 1.067.168.487 0 1-.181 1.535-.547.808-.547 1.6-1.524 2.384-2.932.795-1.419 1.502-3.384 2.12-5.91.628-2.531 1.02-4.996 1.177-7.403-2.377 0-4.307.592-5.789 1.777-1.185.946-1.775 2.001-1.775 3.168 0 .515.282 1.135.847 1.858.302.392.457.708.457.949 0 .269-.093.495-.267.678-.172.178-.372.266-.612.266-.41 0-.77-.231-1.082-.693-.427-.623-.645-1.356-.645-2.207 0-1.198.397-2.337 1.19-3.434.807-1.102 1.915-1.938 3.327-2.505 1.422-.575 3.087-.869 4.989-.881 1.027 0 1.85-.098 2.465-.284l-.05 1.529.05.648.925 11.97c2.519-4.418 4.984-8.059 7.389-10.92 1.705-2.023 3.189-3.394 4.454-4.107-.722 1.996-1.497 4.624-2.319 7.893l-1.915 7.562c-.105.422-.245 1.034-.425 1.842l-.375 1.685c.795.188 1.52.284 2.177.284.537 0 1.105-.06 1.715-.188l-.205.914c-.532.098-.95.145-1.24.145-.427 0-1.047-.048-1.852-.145-.66-.08-1.245-.128-1.755-.128-.547 0-1.162.105-1.852.319.575-1.511 1.175-3.545 1.804-6.098l1.207-4.82c.51-2.081.958-3.507 1.332-4.288-.837.959-2.127 2.714-3.874 5.265-1.4 2.059-2.97 4.664-4.704 7.815l-1.365 2.407z" />
                    <path className="silver" d="M27.494 9.243c-1.207 0-8.206 1.211-13.914 4.487-5.391 3.093-13.66 11.407-13.579 24.03.003.314.02.628.033.941h5.339c-.075-.316-.157-.62-.217-.941-1.572-8.676 1.27-16.546 7.856-22.067 4.157-3.482 9.628-5.685 14.724-6.448l-.242-.002zM28.082.5l-.462.003-.005 18.698c11.293.03 16.377 7.845 17.939 14.199l14.446-.018c-.01-9.113-3.444-16.622-7.891-21.72-6.908-7.913-16.856-11.162-24.027-11.162z" />
                </svg>
            </div>
            <div className="ten wide column">
                <div className="translateBtns">
                    <button onClick={() => i18n.changeLanguage('es')}>Español</button>
                    <button onClick={() => i18n.changeLanguage('en')}>English</button>
                </div>
            </div>
            <div className="topMessage sixteen wide column">
                <div className="ui grid">
                    {/* <div className="one wide column marginBtn iconReload"> */}
                    {/* </div> */}
                    <div className="three wide column marginBtn">
                        <a href="">
                            <i id="iconReload" className=" icon arrow alternate circle left outline"></i>
                        </a>
                        <a href="">
                            <button className="ui button pmButton">
                                PM-International</button>
                        </a>
                    </div>
                    <div className="five wide column marginMsgTop">
                        <h5>{props.messageTop}</h5><i className={props.flag}></i>


                    </div>
                    <div className={props.formDisplay ? "four wide column marginMsgTop" : "disappearSubmit"}>
                        <h4>{t("msgTop.formDownloadMessage")} </h4>
                        <a href={formUrl} target="_blank" onClick={changeForm}>
                            <button className="ui button">{t("msgTop.formDownloadButton")}</button>
                        </a>
                    </div>
                </div>
                <div className={formRequested ? "whiteSpace sixteen wide column" : "disappearSubmit"}>
                <div className="ui blue segment">
                    <div className="ui green segment">
                        <p className="successText"><i className="icon envelope open"></i>{t("msgTop.formReqSuccess")}</p>
                    </div>
                </div>
            </div>
                {/* this in the future will be props dependent */}
            </div>
        </div>

    )
}

export default LogoSpan;