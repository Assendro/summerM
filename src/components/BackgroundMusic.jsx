import React, { useState, useRef } from 'react';
import './BackgroundMusic.scss'

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const MusicUrl = `${process.env.PUBLIC_URL}/music/backgroundMusic.mp3`

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
            <button onClick={toggleMusic} className='background-music-btn'>
                {isPlaying ? 'Пауза' : 'Включить музыку'}
            </button>

        </div>

    );
};

export default BackgroundMusic;