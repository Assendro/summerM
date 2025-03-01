import React from 'react';
import './header.scss'

const Header = ({headerStyle}) => {
    return (
        <div 
            className="header-container"
            style={headerStyle}
        >
            Краснодарский край  <br />
            Темрюкский район <br />
            Винсовхоз "ПРОГРЕСС" <br />
            ЛТО "МОСКВА" <br />
            1985-1991 гг. 
        </div>
    )
}

export default Header;