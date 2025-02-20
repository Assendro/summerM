import React from 'react';
import Video from './Video';
import './videos.scss'

const Videos = ({videoOpacity}) => {
    return (
        <div className="videos-container">

            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/LTO-1-1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder1.jpg`}
                text={
                    <>
                        Утро в лагере
                        <br />
                        зарядка, работа
                    </>
                }
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder2.jpg`}
                text={'Обед, отдых, море'}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder3.jpg`}
                text={'Поездки, жизнь лагеря'}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholder4.jpg`}
                text={'Наши педагоги'}
            />

        </div>
    )
}

export default Videos