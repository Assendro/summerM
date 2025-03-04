import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './video.scss'


const Video = ({ videoUrl, thumbnailVideoUrl, videoOpacity, text, placeholderOpacity, toggleMusic}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    const handlePlay = () => {
      setIsPlaying(true);
      toggleMusic(false)
    };

    const handleFullscreen = () => {
      // Переход в полноэкранный режим после начала воспроизведения
      const playerElement = playerRef.current.getInternalPlayer(); // Получаем внутренний плеер
      if (playerElement && playerElement.requestFullscreen) {
          playerElement.requestFullscreen();
      } else if (playerElement && playerElement.webkitRequestFullscreen) { // Для Safari
          playerElement.webkitRequestFullscreen();
      } else if (playerElement && playerElement.msRequestFullscreen) { // Для IE/Edge
          playerElement.msRequestFullscreen();
      }
    };

    const handleEnd = () => {
      if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {
              console.error("Ошибка при выходе из полноэкранного режима:", err);
          });
      }
      setIsPlaying(false); // Сбрасываем состояние воспроизведения
      toggleMusic(true)
    }


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
              onClick={handlePlay} // Начать воспроизведение основного видео
            />
          ) : (
            // Основное видео
            <ReactPlayer
              ref={playerRef} 
              className='react-player'
              width="100%"
              height='100%'
              url={videoUrl}
              playing={true}
              controls={true}
              onPlay={handleFullscreen}
              onEnded={handleEnd}
            />
          )}
        </div>
        <span className='video-text'>{text} </span>
      </div>
    )
}

export default Video