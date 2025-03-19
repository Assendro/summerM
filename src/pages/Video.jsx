import {React, useState, useEffect, useRef } from "react";
import './video.scss'
import VideoPlayer from "../components/VideoPlayer";
import BackButton from "../components/BackButton";

const Video = ({src, playMusic, text, setPage}) => {
    const videoId = 'WxLyT1nehAo'
    const videoRef = useRef(null);

    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }


 

    return (
        <div 
            className="container"
            style={bgStyle}
        >   
            
            <div className="video-container2">
                <BackButton
                    setPage={setPage}
                />
                <span className="video-text__top">{text} </span>
                <div className='video'>

                    <VideoPlayer 
                        playMusic={playMusic}
                        ref={videoRef}
                        src={src}
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Video;