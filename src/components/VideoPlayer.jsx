import {React, useState, useEffect, useRef } from "react";
import './videoPlayer.scss'

const VideoPlayer = ({src}) => {
    const videoRef = useRef(null);

    return (
        <div>   
            <iframe ref={videoRef} className='videoPlayer' src={src} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" autoPlay frameBorder="0"></iframe>  
        </div>
    )
}

export default VideoPlayer;