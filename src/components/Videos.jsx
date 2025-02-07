import React from 'react';
import Video from './Video';
import './videos.scss'

const Videos = () => {
    return (
        <div className="videos-container">
            <Video 
                videoUrl='/videos/example1.mp4'
                thumbnailVideoUrl='/videos/example2.mp4'
            />
            <Video 
                videoUrl='/videos/example1.mp4'
                thumbnailVideoUrl='/videos/example2.mp4'
            />
            <Video 
                videoUrl='/videos/example1.mp4'
                thumbnailVideoUrl='/videos/example2.mp4'
            />
            <Video 
                videoUrl='/videos/example1.mp4'
                thumbnailVideoUrl='/videos/example2.mp4'
            />

        </div>
    )
}

export default Videos