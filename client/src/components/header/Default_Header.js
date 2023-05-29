import React from 'react';
import './default_header.scss';

import Button1 from '../../components/button/Default_Button';
import Scroll_2 from "../items/Scroll_2";

const DefaultHeader = (props) => {
    return (
        <div>
            <header className="header">
                <div className="headercontent">
                        <h1>{props.text}</h1>
                        <p>{props.text2}</p>
                    <div className="header-button">
                        <Button1 text="Button1" />
                        <Button1 text="Button2" />
                    </div>
                    <Scroll_2 />
                </div>
            </header>
        </div>
    );
};

export default DefaultHeader;