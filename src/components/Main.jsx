import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import BackgroundMusic from "./BackgroundMusic";
import './main.scss'

const Main = () => {
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }
    return (
        <div 
            className="container"
            style={bgStyle}
        >
            <BackgroundMusic />
            <Header />
            <Videos />           

        </div>
    )
}

export default Main;