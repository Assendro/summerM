import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.scss'

const Video = ({ videoUrl, thumbnailVideoUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);


    return (
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
            width="640px"
            height='360px'
            onClick={() => setIsPlaying(true)} // Начать воспроизведение основного видео
          />
        ) : (
          // Основное видео
          <ReactPlayer
            width="640px"
            height='360px'
            url={videoUrl}
            playing={true}
            controls={true}
          />
        )}
      </div>
    )
}

export default Video