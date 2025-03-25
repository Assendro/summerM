import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './photo.scss'


const Photo = ({ videoId, thumbnailPhotoArray, text, setCurrentVideo, RomanNumeral, delay, setPage, setText}) => {

        const [placeholderOpacity, setplaceholderOpacity] = useState([
          1,
          0,
          0,
          0
        ]); 
        const [placeholderCount, setPlaceholderCount] = useState(1); 
        
        useEffect(() => {
            setplaceholderOpacity((prev) => prev)
        }, [placeholderCount])

    
        useEffect(() => {
            const photoCount = 4;

            const interval = setInterval(() => {
              setTimeout(() => {
                setplaceholderOpacity([0, 0, 0, 0])
              
              setTimeout(() => {
                  setPlaceholderCount((prevCount) => {
                    let emptyArray = [0, 0, 0, 0]
                    let tmpPlaceholderCount = (prevCount % photoCount) + 1
                    emptyArray[tmpPlaceholderCount - 1] = 1
                    setplaceholderOpacity(emptyArray)
                    return tmpPlaceholderCount
                  }
                    
                  );
                  

                }, 1000);
              }, delay);
              

              }, 10000);   
            
            
            return () => {
              clearInterval(interval);
            }
            }, []);

    const handleClick = () => {
      setCurrentVideo(videoId)
      setPage('video')
      setText(text)
    };

    return (
      <div
        className="photo-container" 
      >
        <div className="photo-text__top">{`ЧАСТЬ ${RomanNumeral}`}</div>
          <div 
              className='photo'
          >
            <div className="photo-border">
              <img src={`${process.env.PUBLIC_URL}/img/border.png`} alt="" />
            </div>
            <div className="placeholder-container">
              <img
                style={{
                  opacity: placeholderOpacity[0]
                }}
                className='placeholder'
                src={thumbnailPhotoArray[0]}
                onClick={handleClick} 
              />
              <img
                style={{
                  opacity: placeholderOpacity[1]
                }}
                className='placeholder'
                src={thumbnailPhotoArray[1]}
                onClick={handleClick} 
              />
              <img
                style={{
                  opacity: placeholderOpacity[2]
                }}
                className='placeholder'
                src={thumbnailPhotoArray[2]}
                onClick={handleClick} 
              />
              <img
                style={{
                  opacity: placeholderOpacity[3]
                }}
                className='placeholder'
                src={thumbnailPhotoArray[3]}
                onClick={handleClick} 
              />
            </div>

  
        </div>
        <span className='photo-text'>{text} </span>
      </div>
    )
}

export default Photo