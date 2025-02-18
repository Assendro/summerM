import React, { useState, useRef } from 'react';
import './backgroundMusic.scss'

const BackgroundMusic = ({startAnimation}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef(null);

    const MusicUrl = `${process.env.PUBLIC_URL}/music/backgroundMusic.mp3`
    const handleClick = () => {
        toggleMusic()

        if (!isStarted) {
            startAnimation()
            setIsStarted(!isStarted)
        }
    }

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="">
            <audio ref={audioRef} loop>
                <source src={MusicUrl} type="audio/mpeg" />
            </audio>
            <img
                onClick={handleClick}
                className='background-music-btn'
                src={isPlaying ? `${process.env.PUBLIC_URL}/img/Speaker_Icon.png` : `${process.env.PUBLIC_URL}/img/Mute_Icon.png`}
            />

        </div>

    );
};

export default BackgroundMusic;