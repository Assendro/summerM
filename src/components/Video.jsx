import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.scss'


const Video = ({ videoUrl, thumbnailVideoUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoStyle = {
      margin: 'auto'
    }



    return (
      <div className="video-container">
          <div 
              className='video'
          >
          {!isPlaying ? (
            // Миниатюра с предпросмотром (отдельное видео)
            <ReactPlayer
              url={thumbnailVideoUrl}
              playing={true} // Миниатюра будет воспроизводиться автоматически
              loop={true} // Зацикливание миниатюры
              muted={true} // Без звука
              width="400px"
              height='auto'
              style={videoStyle}
              margin='auto'
              onClick={() => setIsPlaying(true)} // Начать воспроизведение основного видео
            />
          ) : (
            // Основное видео
            <ReactPlayer
              style={videoStyle}
              width="400px"
              height='auto'
              url={videoUrl}
              playing={true}
              controls={true}
            />
          )}
        </div>
      </div>
    )
}

export default Video