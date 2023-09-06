import React from 'react';
import './Screen2.css';
import leftArrow from '../assets/left-arrow.png';
import clubeLogo from '../assets/clubeLogo.png';


export type Screen2Props = {
    barText?: string,
    logo?: string;
    pageTitle?: string;
    notificationTitle?: string;
    notificationDescription?: string;
    code?: string;
    discountRules?: string;
    buttonText?: string;
    buttonLink?: string;
}

const Screen2: React.FC<Screen2Props> = (props) => {

    return (

        <div className="screen2">
            <div className='top-bar'>
                <img src={leftArrow} alt='seta' className='arrow-left' />
                <div className='bar-text'>{props.barText ? props.barText : "Notificações"}</div>
            </div>
            <div className='content-container'>

                <img
                    src={props.logo ? props.logo : clubeLogo}
                    className='logo-img'
                    alt="Logo"
                />

                <h1 className='page-title'>{props.pageTitle}</h1>
                {props.code ? <h3 className='code-title'>CÓDIGO</h3> : ""}
                {props.code ? <div className='code-container'>
                    <p className='code-text'>{props.code}</p>
                </div>
                    : ""
                }
                <p className='notification-description'>{props.notificationDescription}</p>
                {props.buttonLink ? <a href={props.buttonLink} target="_blank" rel="noopener noreferrer">
                    <button className='button-link'>{props.buttonText}</button>
                </a> : ""
                }
                {props.discountRules ? <p className='rules-text'>{props.discountRules}</p> : ""}
            </div>
        </div>
    );
}

export default Screen2;