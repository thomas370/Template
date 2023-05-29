import React from 'react';
import './default_scroll.scss';
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
                <div className="circle-content">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Default_scroll;