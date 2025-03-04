import {React, useState, useEffect} from 'react';
import Video from './Video';
import './videos.scss'

const Videos = ({videoOpacity, toggleMusic}) => {
    const [placeholderCount1, setPlaceholderCount1 ] = useState(1)
    const [placeholderCount2, setPlaceholderCount2 ] = useState(1)
    const [placeholderCount3, setPlaceholderCount3 ] = useState(1)
    const [placeholderCount4, setPlaceholderCount4 ] = useState(1)
    const [placeholderOpacity1, setplaceholderOpacity1] = useState(1); 
    const [placeholderOpacity2, setplaceholderOpacity2] = useState(1); 
    const [placeholderOpacity3, setplaceholderOpacity3] = useState(1); 
    const [placeholderOpacity4, setplaceholderOpacity4] = useState(1); 

    useEffect(() => {
        const photoCount = 4;
        const interval1 = setInterval(() => {
            setplaceholderOpacity1(0)
            
            setTimeout(() => {
                setPlaceholderCount1((prevCount) => (prevCount % photoCount) + 1);
              }, 1000);
            setTimeout(() => {
                setplaceholderOpacity1(1)
              }, 1100);
            }, 10000);

        const interval2 = setInterval(() => {
            setTimeout(() => {
                setplaceholderOpacity2(0)
              }, 5000);

            setTimeout(() => {
                setPlaceholderCount2((prevCount) => (prevCount % photoCount) + 1);
              }, 6000);

            setTimeout(() => {
                setplaceholderOpacity2(1)
              }, 6100);
            }, 10000);

        const interval3 = setInterval(() => {
            setTimeout(() => {
                setplaceholderOpacity3(0)
              }, 5000);

            setTimeout(() => {
                setPlaceholderCount3((prevCount) => (prevCount % photoCount) + 1);
              }, 6000);

            setTimeout(() => {
                setplaceholderOpacity3(1)
              }, 6100);
            }, 10000);

        const interval4 = setInterval(() => {
            setplaceholderOpacity4(0)

            setTimeout(() => {
                setPlaceholderCount4((prevCount) => (prevCount % photoCount) + 1);
              }, 1000);

            setTimeout(() => {
                setplaceholderOpacity4(1)
              }, 1100);
            }, 10000);

        
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        }
        }, []);

    return (
        <div className="videos-container">

            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/part1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/morning/${placeholderCount1}.jpg`}
                placeholderOpacity={placeholderOpacity1}
                text={
                    <>
                        Утро в лагере
                        <br />
                        зарядка, работа
                    </>
                }
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/part2.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/lunch/${placeholderCount2}.jpg`}
                placeholderOpacity={placeholderOpacity2}
                text={  
                    <>
                        Обед, отдых,
                        <br />
                        море, поездки
                    </>
                }
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/part3.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/life/${placeholderCount3}.jpg`}
                placeholderOpacity={placeholderOpacity3}
                text={'Лагерная жизнь'}
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/teachers/${placeholderCount4}.jpg`}
                placeholderOpacity={placeholderOpacity4}
                text={'Наши педагоги'}
                toggleMusic={toggleMusic}
            />

        </div>
    )
}

export default Videos