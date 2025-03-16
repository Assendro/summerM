import {React, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import Videos from "../components/Photos";
import './video.scss'
import VideoPlayer from "../components/VideoPlayer";

const Video = ({src, playMusic, text}) => {
    const videoId = 'WxLyT1nehAo'
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }


 

    return (
        <div 
            className="container"
            style={bgStyle}
        >   
            
            <div className="video-container2">
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