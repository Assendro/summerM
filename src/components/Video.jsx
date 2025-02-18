import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.scss'


const Video = ({ videoUrl, thumbnailVideoUrl, videoOpacity, text }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div
        className="video-container" 
        style={videoOpacity}
      >
          <div 
              className='video'
              
          >
            <div 
                className="video-border"
            >
              <img src={`${process.env.PUBLIC_URL}/img/border.png`} alt="" />
            </div>
          {!isPlaying ? (
            // Миниатюра с предпросмотром (отдельное видео)
            <img
              
              src={thumbnailVideoUrl}
              className='placeholder'
              onClick={() => setIsPlaying(true)} // Начать воспроизведение основного видео
            />
          ) : (
            // Основное видео
            <ReactPlayer
              width="400px"
              height='auto'
              url={videoUrl}
              playing={true}
              controls={true}
            />
          )}
        </div>
        <span className='video-text'>{text} </span>
      </div>
    )
}

export default Video