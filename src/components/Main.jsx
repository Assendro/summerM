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
        opacity: 1
    })
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    
 
    const startAnimation = () => {
        if (!isStarted) {
            setVideoOpacity({
                opacity: 1
            })
            setHeaderStyle({
                opacity: 0
            })
            setIsMusicPlaying(true)
            setIsStarted(true)
        }        
    }
    const toggleMusic = (e) => {

        setIsMusicPlaying(e)
    }

    return (
        <div 
            className="container"
            style={bgStyle}
            onClick={startAnimation}
        >
            <BackgroundMusic 
                isPlaying={isMusicPlaying}
            />

            <Header 
                startAnimation={startAnimation}
                headerStyle={headerStyle}
            />
            <Videos
                toggleMusic={toggleMusic}
                videoOpacity={videoOpacity}
            />           

        </div>
    )
}

export default Main;