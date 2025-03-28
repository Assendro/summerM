import {React, useState, useRef, useEffect} from "react";
import Photos from "../components/Photos";
import './main.scss'
import Music from "../components/Music";

const Main = ({setCurrentVideo, setPage, setText}) => {
    const [audio, setAudio] = useState(`${process.env.PUBLIC_URL}/music/backgroundMusic.mp3`)
    const audioRef = useRef(null);

    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }

    return (
        <div 
            className="container"
            style={bgStyle}
        >
            <audio ref={audioRef} src={audio}></audio>
            <Music 
                setAudio={setAudio}
                audioRef={audioRef}
            />
            <Photos
                setPage={setPage}
                setCurrentVideo={setCurrentVideo}
                setText={setText}
            />           

        </div>
    )
}

export default Main;