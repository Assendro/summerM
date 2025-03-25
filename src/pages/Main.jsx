import {React, useState, useEffect} from "react";
import Photos from "../components/Photos";
import './main.scss'

const Main = ({setCurrentVideo, setPage, setText}) => {
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    }

    return (
        <div 
            className="container"
            style={bgStyle}
        >
            <Photos
                setPage={setPage}
                setCurrentVideo={setCurrentVideo}
                setText={setText}
            />           

        </div>
    )
}

export default Main;