import React from 'react';
import './Screen1.css';

export type Screen1Props = {
    title: string;
    description: string;
}

const Screen1: React.FC<Screen1Props> = ({ title, description }) => {
    return (
        <div className="screen1">
            <div className='main-container'>
                <h1 className='title-notification'>{title}</h1>
                <p className='descripition-notification'>{description}</p>
            </div>
        </div>
    );
}

export default Screen1;
