import React from 'react';
import './default_footer.scss';
const DefaultFooter = () => {
    const year = new Date().getFullYear();

    return (
        <div>
            <footer>{`Copyright © Thomas BORTOLATO Code ${year}`}</footer>;
        </div>
    );
};

export default DefaultFooter;