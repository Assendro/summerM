import React from 'react';
import Video from './Video';
import './videos.scss'

const Videos = () => {
    return (
        <div className="videos-container">
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/videos/example2.mp4`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/videos/example2.mp4`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/videos/example2.mp4`}
            />
            <Video 
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/videos/example2.mp4`}
            />

        </div>
    )
}

export default Videos