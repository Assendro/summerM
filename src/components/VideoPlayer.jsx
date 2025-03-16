import {React, useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './videoPlayer.scss'

const VideoPlayer = ({src, playMusic}) => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    

    const findButton = () => {
        console.log(123)
        const btn = document.getElementsByClassName('videoplayer_btn_vk_video')
        console.log(`111${btn}`)
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
        if (videoElement) {
            videoElement.addEventListener('loadeddata', findButton);
        }

        return () => {

            if (videoElement) {
                videoElement.addEventListener('ended', handleEnded);
            }
        };
    }, []);


    return (
        <div>   
            <iframe width={'1000px'} height={'1000px'} ref={videoRef} className='videoPlayer' src={src} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" autoPlay frameBorder="0"></iframe>  
        </div>
    )
}

export default VideoPlayer;