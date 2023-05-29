import React from 'react';
import './scroll_2.scss';
const Default_scroll = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="scroll" onClick={scrollToContent}>
                <div className="arrow-content">
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    );
};

export default Default_scroll;