import React from 'react';
import Video from './Video';
import './videos.scss'

const Videos = () => {
    return (
        <div className="videos-container">
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder1.jpg`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder2.jpg`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder3.jpg`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder4.jpg`}
            />

        </div>
    )
}

export default Videos