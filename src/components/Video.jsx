import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.scss'


const Video = ({ videoUrl, thumbnailVideoUrl, videoOpacity, text, placeholderOpacity}) => {
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
              style={{
                opacity: placeholderOpacity
              }}
              src={thumbnailVideoUrl}
              className='placeholder'
              onClick={() => setIsPlaying(true)} // Начать воспроизведение основного видео
            />
          ) : (
            // Основное видео
            <ReactPlayer
              className='react-player'
              width="100%"
              height='100%'
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