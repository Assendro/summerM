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
            Винсовхоз "Прогресс" <br />
            ЛТО "Москва" <br />
            1985-1990 гг. 
        </div>
    )
}

export default Header;