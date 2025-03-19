import {React, useState, useEffect} from "react";
import Header from "../components/Header";
import Photos from "../components/Photos";
import './main.scss'

const Main = ({setCurrentVideo, photoOpacity, headerStyle, isMusicPlaying, start, isStarted, playMusic, setPage}) => {
    useEffect(() => {
        if (!isMusicPlaying && isStarted) {
            playMusic(false)
        }
        
    }, [])
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }

    return (
        <div 
            className="container"
            style={bgStyle}
            onClick={start}
        >

            <Header 
                startAnimation={start}
                headerStyle={headerStyle}
            />
            <Photos
                setPage={setPage}
                isStarted={isStarted}
                setCurrentVideo={setCurrentVideo}
                photoOpacity={photoOpacity}
                playMusic={playMusic}
            />           

        </div>
    )
}

export default Main;