import React from 'react';
import './Switch.css'

type SwitchType = {
    included: boolean
}

export const Switch = ({included}: SwitchType) => {
    return (
        <div className="switch-wrapper">
            { included ? <SwitchOn/> : <SwitchOff/> }
        </div>
    );
};

const SwitchOn:React.FC = () => {
    return (
        <div className="switch-wrapper">
            <div className="on">on</div>
            <div className="wrapper">off</div>
            <div className="rectangle on"></div>
        </div>
    )
}

const SwitchOff:React.FC = () => {
    return (
        <div className="switch-wrapper">
            <div className="wrapper">on</div>
            <div className="off">off</div>
            <div className="rectangle off"></div>
        </div>
    )
}