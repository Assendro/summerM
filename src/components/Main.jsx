import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import './main.scss'

const Main = () => {
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`
    }
    return (
        <div 
            className="container"
            style={bgStyle}
        >
            <Header />
            <Videos />           

        </div>
    )
}

export default Main;