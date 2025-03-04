import React, { useState, useRef } from 'react';
import './backgroundMusic.scss'

const BackgroundMusic = ({isPlaying}) => {
    const audioRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false)

    const MusicUrl = `${process.env.PUBLIC_URL}/music/backgroundMusic.mp3`

    if (isPlaying && !isStarted ) {
        audioRef.current.play();
        setIsStarted(true)
    } else if (isStarted && !isPlaying) {
        audioRef.current.pause();
        setIsStarted(false)
    }

    return (
        <div className="">
            <audio ref={audioRef} loop>
                <source src={MusicUrl} type="audio/mpeg" />
            </audio>
        </div>

    );
};

export default BackgroundMusic;