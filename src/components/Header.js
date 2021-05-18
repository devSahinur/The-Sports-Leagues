import React from 'react';
import '../style/Header.css';

const Header = ({logo}) => {
    return (
        <div className='Header'>
            { logo ? <img src={logo} alt="" /> : <h1>The Sport Leagues</h1>}
        </div>
    );
};

export default Header;