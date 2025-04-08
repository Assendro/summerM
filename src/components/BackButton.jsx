import React from 'react';
import './backButton.scss'

const BackButton = ({setPage}) => {
    const handleOnClick = () => {
        setPage('main')
    }
    return (
        <button
            className='backButton'
            onClick={handleOnClick}
        >
            НАЗАД 
        </button>
    )
}

export default BackButton;