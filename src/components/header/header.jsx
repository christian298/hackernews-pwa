import React from 'react';
import { css } from 'emotion';

const headerStyle = css`
    height: 90px;
    width: 100%;
    padding: 5px;
    background: #ff6d01;
    position: sticky;
    top: 0;
    z-index: 10;
`;

const logoStyle = css`
    height: 80px;
    display: block;
`;

const Header = () => {
    return (
        <div className={headerStyle}>
            <img src="../../../icons/hn-192.png" alt="" className={logoStyle} />
        </div>
    );
};

export default Header;
