import {React, useState} from "react";
import Header from "./Header";
import Videos from "./Videos";
import BackgroundMusic from "./BackgroundMusic";
import './main.scss'

const Main = () => {
    const [videoOpacity, setVideoOpacity] = useState({
        opacity: 0
    })
    const [headerStyle, setHeaderStyle] = useState({
        top: "-100%",
        opacity: 1
    })
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }

    const startAnimation = () => {
        setVideoOpacity({
            opacity: 1
        })
        setHeaderStyle({
            top: "50%",
            opacity: 0
        })
    }

    return (
        <div 
            className="container"
            style={bgStyle}
        >
            <BackgroundMusic 
                startAnimation={startAnimation}
            />

            <Header 
                headerStyle={headerStyle}
            />
            <Videos
                videoOpacity={videoOpacity}
            />           

        </div>
    )
}

export default Main;