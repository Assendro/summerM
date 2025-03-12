import {React, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import Videos from "../components/Photos";
import './video.scss'

const Video = ({src, playMusic, text}) => {
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }


    useEffect(() => {
       
        const videoElement = videoRef.current;

        const handleEnded = () => {
            setTimeout(() => {
                playMusic(true)
            }, 1000);
            navigate(`/summerM`) // Включить музыку, когда видео заканчивается
        };

        if (videoElement) {
            videoElement.addEventListener('ended', handleEnded);
        }

        return () => {

            if (videoElement) {
                videoElement.addEventListener('ended', handleEnded);
            }
        };
    }, []);
    

    return (
        <div 
            className="container"
            style={bgStyle}
        >   
            
            <div className="video-container2">
                <span className="video-text__top">{text} </span>
                <div className='video'>

                    <video 
                        ref={videoRef}
                        src={src}
                        autoPlay
                        controls
                    />
                </div>
            </div>
        </div>
    )
}

export default Video;